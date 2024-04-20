<?php

namespace App\Kriti\Api;

class Context
{
    # http://kriti.mog/kriti.api.Context:getContextItems
    public function getContextItems()
    {
        return kriti()->response(
            kriti()->context()->getContext(
                request('scheme_name'),
                request('type'),
                request('uuid')
            )
        );
    }
}
