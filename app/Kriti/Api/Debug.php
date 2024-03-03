<?php

namespace App\Kriti\Api;

class Debug
{
    # http://kriti.mog/kriti.api.Debug:test
    public function test()
    {
        kriti()->module('Zen.Calculator');
    }
}
