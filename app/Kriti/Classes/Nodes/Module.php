<?php

namespace App\Kriti\Classes\Nodes;

use JetBrains\PhpStorm\ArrayShape;

class Module
{
    public string $uuid; // Для некоторых методов uuid не нужен, но они не статические

    public function __construct(string $uuid = null) {
        $this->uuid = $uuid;
    }

    # Обязательная функция которая наполняет нод метаданными для карты
    public static function saturateStatic(array $node): array
    {
        $data_path = kriti()->schemes_path('data/' . $node['uuid']);

        $node['static']['icon'] = 'bi bi-box';
        # Добавляем стили
        $node['static']['style'] = kriti()->files()->arrayFromFile("$data_path/style.json");
        //$settings = kriti()->files()->arrayFromFile("$data_path/settings.json");
        return $node;
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

    # Сформировать контекстное меню модуля
    public function context(): array
    {
        return [
            [
                'text' => 'Создать сцепку',
                'icon' => 'bi bi-link',
                'code' => 'createLink'
            ],
            [
                'text' => 'Настройки модуля',
                'icon' => 'bi bi-sliders',
                'code' => 'openNodeSettings'
            ],
            [
                'text' => 'Клонировать модуль',
                'icon' => 'bi bi-copy',
                'code' => 'cloneModule'
            ],
            [
                'text' => 'На передний план',
                'icon' => 'bi bi-chevron-double-up',
                'code' => 'moveNodeFullUp'
            ],
            [
                'text' => 'На уровень вверх',
                'icon' => 'bi bi-chevron-up',
                'code' => 'moveNodeUp'
            ],
            [
                'text' => 'На уровень вниз',
                'icon' => 'bi bi-chevron-down',
                'code' => 'moveNodeDown'
            ],
            [
                'text' => 'На задний план',
                'icon' => 'bi bi-chevron-double-down',
                'code' => 'moveNodeFullDown'
            ],
        ];
    }

    # Трансформировать из простого массива в сложный (Для стилей)
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

    # Трансформировать из сложного массива в простой (Для стилей)
    private function nodeStyleTransformTo(array $array): array
    {
        $output = [];
        foreach ($array as $item) {
            $output[$item['key']] = $item['value'];
        }
        return $output;
    }

    # Получить стили нода модуля
    #[ArrayShape(['scheme' => "array[]", 'values' => "array[]"])]
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

        $node_style = kriti()->node($this->uuid)->getDataBatch('style');
        return [
            'scheme' => $scheme,
            'values' => [
                'node_style' => $this->nodeStyleTransformFrom($node_style)
            ]
        ];
    }

    # Сохранить стили нода модуля
    public function setStyle(array $data): void
    {
        //dd($this->node, $data);
        $this->node['style'] = $this->nodeStyleTransformTo($data['node_style']);
        kriti()->node()->saveNode(
            $this->scheme_name,
            $this->node
        );
    }

    /**
     * Получить настройки модуля
     * @return array
     */
    #[ArrayShape(['scheme' => "array[]", 'values' => "array"])]
    public function getSettings(): array
    {
        $node_settings = kriti()->node($this->uuid)->getDataBatch('settings');

        $scheme = [
            [
                'type' => 'tabs',
                'scheme' => [
                    [
                        'label' => 'Основные настройки',
                        'scheme' => [
                            [
                                'label' => 'Название модуля',
                                'type' => 'string',
                                'size' => 'full',
                                'field' => 'name'
                            ],
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
                        'label' => 'События',
                        'scheme' => [
                            [
                                'label' => 'События',
                                'field' => 'events',
                                'type' => 'repeater',
                                'size' => 'full',
                                'empty_object' => [
                                    'event_name' => null,
                                    'event_code' => null,
                                    'event_type' => null
                                ],
                                'scheme' => [
                                    [
                                        'label' => 'Название события',
                                        'field' => 'event_name',
                                        'type' => 'string',
                                        'size' => 'full',
                                    ],
                                    [
                                        'label' => 'Код события',
                                        'field' => 'event_code',
                                        'type' => 'string',
                                        'size' => 'half',
                                    ],
                                    [
                                        'label' => 'Тип данных события',
                                        'field' => 'event_type',
                                        'type' => 'string',
                                        'size' => 'half',
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
            'values' => $node_settings
        ];
    }

    # Сохранить настройка нода
    public function setSettings($data): void
    {
        $uuid = $this->node['uuid'];
        kriti()->files()->arrayToFile(
            $data,
            kriti()->schemesPath("settings/$uuid.json")
        );
    }
}
