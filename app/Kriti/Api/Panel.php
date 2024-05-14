<?php

namespace App\Kriti\Api;

class Panel
{
    # http://kriti.mog/kriti.api.Panel:getItems
    public function getItems()
    {
        return kriti()->response([
            'items' => kriti()->scheme()->getSchemesList()
        ]);
    }
}
