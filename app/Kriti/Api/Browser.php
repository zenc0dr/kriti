<?php

namespace App\Kriti\Api;

class Browser
{
    # http://kriti.mog/kriti.api.Browser:getLocalNodes
    public function getLocalNodes()
    {
        return kriti()->response([
            'nodes' => kriti()->store()->getLocalNodes()
        ]);
    }
}
