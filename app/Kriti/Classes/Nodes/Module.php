<?php

namespace App\Kriti\Classes\Nodes;

class Module
{
    private ?array $node;

    public function __construct(array $node) {
        $this->node = $node;
    }

    # Сформировать меню модуля
    public function getMenu(): array
    {
        return [
            [
                'title' => 'Стиль',
                'method' => 'style'
            ],
            [
                'title' => 'Настройки',
                'method' => 'settings',
            ],
            [
                'title' => 'Документация',
                'method' => 'doc',
            ],
            [
                'title' => 'Отладка',
                'method' => 'debug',
            ],
        ];
    }

    # Трансформировать из простого массива в сложный
    private function nodeStyleTransformFrom(array $array): array
    {
        $output = [];
        foreach ($array as $key => $value) {
            $output[] = [
                'key' => $key,
                'value' => $value
            ];
        }
        return $output;
    }

    # Трансформировать из сложного массива в простой
    private function nodeStyleTransformTo(array $array): array
    {
        $output = [];
        foreach ($array as $item) {
            $output[$item['key']] = $item['value'];
        }
        return $output;
    }

    # Получить стили нода модуля
    public function getStyle(): array
    {
        $scheme = [
            [
                'label' => 'Стиль нода',
                'field' => 'node_style',
                'type' => 'repeater',
                'size' => 'full',
                'empty_object' => [
                    'key' => '',
                    'value' => ''
                ],
                'scheme' => [
                    [
                        'label' => 'Правило CSS',
                        'field' => 'key',
                        'type' => 'string',
                        'size' => 'half',
                    ],
                    [
                        'label' => 'Значение',
                        'field' => 'value',
                        'type' => 'string',
                        'size' => 'half',
                    ],
                ]
            ]
        ];
        $node_style = isset($this->node['uuid'])
            ? $this->node['style']
            : [
                'height' => '100px',
                'width' => '300px',
                'background-color' => '#50ff15',
                'border-radius' => '5px',
            ];

        return [
            'scheme' => $scheme,
            'values' => [
                'node_style' => $this->nodeStyleTransformFrom($node_style)
            ]
        ];
    }

    # Сохранить стили нода модуля
    public function setStyle(array $data)
    {
        $this->node['style'] = $this->nodeStyleTransformTo($data['node_style']);
        kriti()->node()->saveNode(
            $this->node
        );
    }

    public function getSettings()
    {
        $inputs = $this->node['inputs'] ?? [];
        $output = $this->node['output'] ?? [];
        $call = $this->node['call'] ?? '';
        $events = $this->node['events'] ?? '';

        $scheme = [
            [
                'type' => 'tabs',
                'scheme' => [
                    [
                        'label' => 'Вызов',
                        'scheme' => [
                            [
                                'label' => 'Адрес вызова',
                                'type' => 'string',
                                'size' => 'full',
                                'field' => 'call'
                            ]
                        ]
                    ],
                    [
                        'label' => 'Ввод',
                        'scheme' => [
                            [
                                'label' => 'Набор переменных',
                                'field' => 'inputs',
                                'type' => 'repeater',
                                'size' => 'full',
                                'empty_object' => [
                                    'var_key' => null,
                                    'var_title' => null,
                                    'var_desc' => null,
                                    'var_type' => null,
                                    'var_require' => true,
                                    'var_default' => null
                                ],
                                'scheme' => [
                                    [
                                        'label' => 'Ключ переменной',
                                        'field' => 'var_key',
                                        'type' => 'string',
                                        'size' => 'half',
                                    ],
                                    [
                                        'label' => 'Название переменной',
                                        'field' => 'var_title',
                                        'type' => 'string',
                                        'size' => 'half',
                                    ],
                                    [
                                        'label' => 'Описание переменной',
                                        'field' => 'var_desc',
                                        'type' => 'textEditor',
                                        'size' => 'full',
                                    ],
                                    [
                                        'label' => 'Тип переменной',
                                        'field' => 'var_type',
                                        'type' => 'string',
                                        'size' => 'full',
                                    ],
                                    [
                                        'label' => 'Обязательна для ввода',
                                        'field' => 'var_require',
                                        'type' => 'switcher',
                                        'size' => 'full',
                                    ],
                                    [
                                        'label' => 'Значение по умолчанию (можно json)',
                                        'field' => 'var_default',
                                        'type' => 'textarea',
                                        'size' => 'full',
                                    ],
                                ]
                            ]
                        ]
                    ],
                    [
                        'label' => 'Вывод',
                        'scheme' => [
                            [
                                'type' => 'section',
                                'field' => 'output',
                                'size' => 'full',
                                'scheme' => [
                                    [
                                        'label' => 'Описание вывода',
                                        'field' => 'var_desc',
                                        'type' => 'textEditor',
                                        'size' => 'full',
                                    ],
                                    [
                                        'label' => 'Тип переменной',
                                        'field' => 'var_type',
                                        'type' => 'string',
                                        'size' => 'full',
                                    ],
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ];

        return [
            'scheme' => $scheme,
            'values' => [
                'call' => '',
                'inputs' => [],
                'output' => [
                    'var_desc' => '',
                    'var_type' => ''
                ],
                'events' => []
            ]
        ];
    }

    public function setSettings($data)
    {
        kriti()->arrayToFile($data, storage_path('settings.json'));
    }




    //        $layer_data = kriti()->arrayFromFile(
//            $this->nodes_path . "nodes_data/$uuid/$layer_code.json"
//        );
}
