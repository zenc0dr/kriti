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

    }

    public function setSettings()
    {

    }




    //        $layer_data = kriti()->arrayFromFile(
//            $this->nodes_path . "nodes_data/$uuid/$layer_code.json"
//        );
}
