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

    # Получить схему где для нодов насыщается static
    public function getSaturatedScheme(string $scheme_name): ?array
    {
        $scheme = $this->getScheme($scheme_name);
        foreach ($scheme['nodes'] as &$node) {
            $this->attachParam($node, 'style');
            $this->attachParam($node, 'settings');
        }
        return $scheme;
    }

    # Прицепляет к ноде статические данные
    private function attachParam(array &$node, string $param_name)
    {
        $node['static'][$param_name] = kriti()->files()->arrayFromFile(
            kriti()->schemesPath(
                "data/{$node['uuid']}/$param_name.json"
            )
        );
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
