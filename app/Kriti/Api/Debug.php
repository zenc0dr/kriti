<?php

namespace App\Kriti\Api;

class Debug
{
    # /kriti/Debug:test
    public function test()
    {
        kriti()->run();
    }
}
