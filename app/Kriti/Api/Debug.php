<?php

namespace App\Kriti\Api;

class Debug
{
    # http://kriti.mog/kriti.api.Debug:test
    public function test()
    {
        dd(
            kriti()->context()->getContext(
                'calculator',
                'node',
                '067ddc29-8596-4a82-b816-8359b4f9b633'
            )
        );
    }
}
