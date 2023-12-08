<?php

namespace App\Kriti;

use App\Kriti\Traits\SingletonTrait;

class Kriti
{
    use SingletonTrait;

    public function run()
    {
        dd('Ты вызвал меня!');
    }

}
