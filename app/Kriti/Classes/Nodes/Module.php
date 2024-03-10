<?php

namespace App\Kriti\Classes\Nodes;

class Module
{
    private ?array $node;

    public function __construct(array $node) {
        $this->node = $node;
    }

    public function style()
    {
        if (isset($this->node['uuid'])) {
            return $this->node['style'];
        } else {
            return [
                'height' => '100px',
                'width' => '300px',
                'background-color' => '#50ff15',
                'border-radius' => '5px',
            ];
        }
    }

    public function menu(): array
    {
        return [
            [
                'title' => 'Стиль',
                'method' => 'style'
            ],
            [
                'title' => 'Настройки',
                'method' => 'props',
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


    //        $layer_data = kriti()->arrayFromFile(
//            $this->nodes_path . "nodes_data/$uuid/$layer_code.json"
//        );
}
