<?php

namespace App\Kriti;

use App\Kriti\Traits\SingletonTrait;
use App\Kriti\Classes\Node;

/*
 * Особенность этого класса в том что он является точкой вхождения в внутренний интерфейс kriti
 * каждый метод этого класса должен возвращать новый экземпляр одного из базовых классов kriti
 */

class Kriti
{
    use SingletonTrait;

    # Класс управления нодами
    public function node(): Node
    {
        return new Node();
    }

    #### Хелперы ####
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

    # Проверить путь файла и создать дериктории если надо
    public function chekDir(string $dir_path): string
    {
        $dirname = dirname($dir_path);
        if (!file_exists($dirname)) {
            mkdir($dirname, 0777, true);
        }
        return $dir_path;
    }

    # Сохранить массив в файл (json)
    public function arrayToFile(array $array, string $file_path): bool
    {
        $this->chekDir($file_path);
        file_put_contents(
            $file_path,
            $this->toJson($array, true)
        );
        if (file_exists($file_path)) {
            return true;
        }
        return false;
    }

    # Прочитать массив из файла
    public function arrayFromFile(string $file_path): array
    {
        if (!file_exists($file_path)) {
            return [];
        }
        return $this->fromJson(file_get_contents($file_path));
    }

    # Генерировать uuid
    public function createUUID(): string
    {
        return \Str::uuid()->toString();
    }
}
