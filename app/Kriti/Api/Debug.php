<?php

namespace App\Kriti\Api;

class Debug
{
    # /kriti/Debug:test test mobile
    public function test()
    {
        kriti()->node()->get('Zen.Calculator');
    }
}
