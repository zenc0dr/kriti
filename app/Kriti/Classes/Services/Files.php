<?php

namespace App\Kriti\Classes\Services;

use App\Kriti\Traits\SingletonTrait;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\File;

class Files
{
    use SingletonTrait;

    # Проверить путь файла и создать директории если надо
    public function chekDir(string $dir_path): string
    {
        $dirname = dirname($dir_path);
        if (!file_exists($dirname)) {
            mkdir($dirname, 0777, true);
        }
        return $dir_path;
    }

    # Удалить папку рекурсивно
    public function removeDir($folder_path)
    {
        if (File::isDirectory($folder_path)) {
            File::deleteDirectory($folder_path);
        }
    }

    public function filesList(string $dir_path, bool $recursive = false): Collection
    {
        $files = $recursive ? File::allFiles($dir_path) : File::files($dir_path);
        $output = [];
        foreach ($files as $file) {
            $output[] = [
                'name' => $file->getFilename(),
                'extension' => $file->getExtension(),
                'path' => $file->getRealPath(),
                'size' => $file->getSize()
            ];
        }
        return collect($output);
    }

    # Сохранить массив в файл (json)
    public function arrayToFile(array $array, string $file_path): bool
    {
        $this->chekDir($file_path);
        file_put_contents(
            $file_path,
            kriti()->toJson($array, true)
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
        return kriti()->fromJson(file_get_contents($file_path));
    }
}
