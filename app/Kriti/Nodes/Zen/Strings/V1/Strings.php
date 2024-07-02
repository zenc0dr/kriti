<?php

namespace App\Kriti\Nodes\Zen\Strings\V1;

class Strings
{
    public function replace(string $search, string $replace, string $subject): string
    {
        return str_replace($search, $replace, $subject);
    }
}
