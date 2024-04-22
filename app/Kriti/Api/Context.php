<?php

namespace App\Kriti\Api;

class Context
{
    # http://kriti.mog/kriti.api.Context:getContextItems
    public function getContextItems()
    {
        return kriti()->response(
            [
                'items' => kriti()->context()->getContext(
                    request('type'),
                    request('uuid')
                )
            ]
        );
    }
}
