<?php

namespace App\Kriti\Api;

class Store
{
    # http://kriti.mog/kriti.api.Store:getLocalNodes
    public function getLocalNodes()
    {
        return kriti()->response([
            'nodes' => kriti()->store()->getLocalNodes()
        ]);
    }
}
