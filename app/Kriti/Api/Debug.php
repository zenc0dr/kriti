<?php

namespace App\Kriti\Api;

class Debug
{
    # http://kriti.mog/kriti.api.Debug:test
    public function test()
    {
        dd(
            kriti()->scheme()->getSaturatedScheme('calculator')
        );
    }
}
