<?php

namespace App\Kriti\Api;

class Debug
{
    # /kriti/Debug:test
    public function test()
    {
        kriti()->node()->get('Zen.Calculator');
    }
}
