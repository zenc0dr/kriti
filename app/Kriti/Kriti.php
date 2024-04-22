<?php

namespace App\Kriti;

use App\Kriti\Traits\SingletonTrait;
use App\Kriti\Classes\Node;
use App\Kriti\Classes\Scheme;
use App\Kriti\Classes\Services\Files;
use App\Kriti\Classes\Context;

/*
 * Особенность этого класса в том что он является точкой вхождения в внутренний интерфейс kriti
 * каждый метод этого класса должен возвращать новый экземпляр одного из базовых классов kriti
 */

class Kriti
{
    use SingletonTrait;

    # Класс управления нодами
    public function node(string $uuid = null): Node
    {
        return new Node($uuid);
    }

    # Класс управления схемами
    public function scheme(): Scheme
    {
        return new Scheme();
    }

    public function files(): Files
    {
        return Files::getInstance();
    }

    public function context(): Context
    {
        return Context::getInstance();
    }

    ### Хелперы

    ## Пути
    public function schemes_path(string $path = null): string
    {
        $schemes_path = 'app/Kriti/schemes';
        if ($path) {
            return base_path("$schemes_path/$path");
        }
        return base_path($schemes_path);
    }

    # Обработка ответа
    public function response(string|array $response): ?string
    {
        if (is_string($response)) {
            return $response;
        }
        return $this->toJson($response);
    }

    # Из массива в JSON
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

    # Из JSON в массив
    public function fromJson($string, $assoc = true): array|object|null
    {
        if (empty($string)) {
            return null;
        }
        return json_decode($string, $assoc);
    }

    # Генерировать uuid
    public function createUUID(): string
    {
        return \Str::uuid()->toString();
    }

}
