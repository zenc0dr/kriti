<?php

namespace App\Kriti\Api;

class Store
{
    # http://kriti.mog/kriti.api.Store:getSchemes
    public function getSchemes(): string
    {
        return kriti()->response([
            'items' => kriti()->scheme()->getSchemesList()
        ]);
    }
}
