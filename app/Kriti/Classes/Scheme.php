<?php

namespace App\Kriti\Classes;

class Scheme
{
    private string $schemes_path;

    public function __construct()
    {
        $this->schemes_path = base_path('app/Kriti/schemes');
    }

    # Получить ноды
    public function getScheme(string $scheme_name): ?array
    {
        return kriti()->files()->arrayFromFile("$this->schemes_path/$scheme_name.scheme.json");
    }

    # Сохранить ноды
    public function setScheme(string $scheme_name, array $scheme_data)
    {
        kriti()->files()->arrayToFile(
            $scheme_data,
            "$this->schemes_path/$scheme_name.scheme.json",
        );
    }

    # Получить список схем
    public function getSchemesList()
    {
        $files = kriti()->files()->filesList(kriti()->schemesPath());
        $names = [];
        foreach ($files as $file) {
            preg_match('/(.*)\.scheme\.json$/', $file['name'], $m);
            if (isset($m[1])) {
                $names[] = $m[1];
            }
        }
        return $names;
    }
}
