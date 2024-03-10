<?php

namespace App\Kriti\Api;

class Nodes
{
    # http://kriti.mog/kriti.api.Nodes:getNodes
    public function getNodes(): ?string
    {
        return kriti()->response(
            [
                'nodes' => kriti()->node()->getNodes()
            ]
        );
    }

    public function setNodes(): ?string
    {
        kriti()->node()->setNodes(request('nodes'));
        return kriti()->response([
            'success' => true
        ]);
    }
}
