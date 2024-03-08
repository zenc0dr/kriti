<?php

namespace App\Kriti\Api;

class Nodes
{
    private string $nodes_path;

    public function __construct()
    {
        $this->nodes_path = base_path('app/Kriti/store/nodes.json');
    }

    # http://kriti.mog/kriti.api.Nodes:getNodes
    public function getNodes(): ?string
    {
        return kriti()->response(
            [
                'nodes' => kriti()->arrayFromFile($this->nodes_path)
            ]
        );
//        return kriti()->response([
//            'nodes' => [
//                [
//                    'type' => 'Module',
//                    'point' => [
//                        'x' => 150,
//                        'y' => 300
//                    ],
//                    'style' => [
//                        'height' => 100,
//                        'width' => 300,
//                        'background-color' => '#50ff15'
//                    ]
//                ]
//            ]
//        ]);
    }

    public function setNodes()
    {
        kriti()->arrayToFile(
            request('nodes'),
            $this->nodes_path,
        );
    }
}
