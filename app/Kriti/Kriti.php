<?php

namespace App\Kriti;

use App\Kriti\Traits\SingletonTrait;
use App\Kriti\Classes\Module;

/*
 * Особенность этого класса в том что он является точкой вхождения в внутренний интерфейс kriti
 * каждый метод этого класса должен возвращать новый экземпляр одного из базовых классов kriti
 */

class Kriti
{
    use SingletonTrait;

    # Класс управления модулями kriti
    public function module(): Module
    {
        return new Module();
    }

    #### Хелперы ####
    public function response(string|array $response): ?string
    {
        if (is_string($response)) {
            return $response;
        }
        return $this->toJson($response);
    }

    public function toJson($arr, $pretty_print = false, $no_slashes = false): ?string
    {
        if (!$arr) {
            return null;
        }
        if (!is_array($arr)) {
            return null;
        }

        $options = JSON_UNESCAPED_UNICODE;
        if ($pretty_print) {
            $options |= JSON_PRETTY_PRINT;
        }
        if ($no_slashes) {
            $options |= JSON_UNESCAPED_SLASHES;
        }

        return json_encode($arr, $options);
    }
}
