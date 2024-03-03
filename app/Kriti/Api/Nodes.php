<?php

namespace App\Kriti\Api;

class Nodes
{
    # http://kriti.mog/kriti.api.Nodes:getNodes
    public function getNodes(): ?string
    {
        return kriti()->response([
            'nodes' => [
                [
                    'type' => 'Module',
                    'point' => [
                        'x' => 150,
                        'y' => -300
                    ],
                    'style' => [
                        'height' => 100,
                        'width' => 300,
                        'background-color' => '#50ff15'
                    ]
                ]
            ]
        ]);
    }
}
