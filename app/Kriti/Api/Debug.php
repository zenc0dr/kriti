<?php

namespace App\Kriti\Api;

class Debug
{
    # /kriti/api/Debug:test
    public function test()
    {
        kriti()->node()->get('Zen.Calculator');
    }
}
