<?php

namespace App\Kriti\Api;

class Debug
{
    # http://kriti.mog/kriti.api.Debug:test
    public function test()
    {
        //kriti()->module('Zen.Calculator');
        dd(
            kriti()->node()->getNodeData('067ddc29-8596-4a82-b816-8359b4f9b633', 'style')
        );
    }
}
