<?php

namespace App\Kriti;

use App\Kriti\Classes\Module;
use App\Kriti\Traits\SingletonTrait;

/*
 * Особенность этого класса в том что он является точкой вхождения в внутренний интерфейс kriti
 * каждый метод этого класса должен возвращать новый экземпляр одного из базовых классов kriti
 */

class Kriti
{
    use SingletonTrait;

    # Класс управления модулями kriri
    public function module(): Module
    {
        return new Module();
    }
}
