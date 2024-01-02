<?php

namespace App\Kriti;

use App\Kriti\Classes\Node;
use App\Kriti\Traits\SingletonTrait;

class Kriti
{
    use SingletonTrait;

    public function node(): Node
    {
        return new Node();
    }

}
