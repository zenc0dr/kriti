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
        $node['static']['style'] = kriti()->files()->arrayFromFile("$data_path/style.json");
        $node['static']['settings'] = kriti()->files()->arrayFromFile("$data_path/settings.json");

        # Удаление описания, слишком большое для карты
        foreach ($node['static']['settings']['inputs'] as &$input) {
            unset($input['var_desc']);
        }

        # Удаление описания вывода
        if (isset($node['static']['settings']['output']['var_desc'])) {
            unset($node['static']['settings']['output']['var_desc']);
        }

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

    private function cssRepeaterScheme(string $title, string $field_name): array
    {
        return [
            'label' => $title,
            'field' => $field_name,
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
        ];
    }

    # Получить стили нода модуля
    #[ArrayShape(['scheme' => "array[]", 'values' => "array[]"])]
    public function getStyle(): array
    {
        $scheme = [
            [
                'type' => 'tabs',
                'scheme' => [
                    [
                        'label' => 'Базовый блок',
                        'scheme' => [$this->cssRepeaterScheme('Базовый блок', 'module')],
                    ],
                    [
                        'label' => 'Заголовок нода',
                        'scheme' => [$this->cssRepeaterScheme('Заголовок нода','module_title')],
                    ],
                ]
            ]
        ];

        $values = kriti()->node($this->uuid)->getDataBatch('style');
        $values['module'] = $this->nodeStyleTransformFrom($values['module']);
        $values['module_title'] = $this->nodeStyleTransformFrom($values['module_title']);

        return [
            'scheme' => $scheme,
            'values' => $values
        ];
    }

    # Сохранить стили нода модуля
    public function setStyle(array $data): void
    {
        $data['module'] = $this->nodeStyleTransformTo($data['module']);
        $data['module_title'] = $this->nodeStyleTransformTo($data['module_title']);
        kriti()->node($this->uuid)->setDataBatch('style', $data);
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
        kriti()->node()->setDataBatch('settings', $data);
    }
}
