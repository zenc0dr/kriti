<?php

namespace App\Kriti\Api;

class Node
{
    public function getData(): ?string
    {
        return kriti()->response([
            'data' => kriti()->node()->getNodeData(
                request('uuid'),
                request('method')
            )
        ]);
    }
}
