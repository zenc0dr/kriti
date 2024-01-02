<?php

namespace App\Http\Kriti\Zen\Calculator;

use Exception;

class Calculate
{
    public function run(float|int $a, float|int $b, string $o): float|int
    {
        switch ($o) {
            case '+':
                return $a + $b;
            case '-':
                return $a - $b;
            case '*':
                return $a * $b;
            case '/':
                if ($b === 0) {
                    throw new Exception("Деление на ноль");
                }
                return $a / $b;
            default:
                throw new Exception("Неверный оператор");
        }
    }
}
