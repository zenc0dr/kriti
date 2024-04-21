<?php

namespace App\Kriti\Classes;

class Scheme
{
    # Получить схему без статических данных
    public function getScheme(string $scheme_code): ?array
    {
        return kriti()->files()->arrayFromFile(
            kriti()->schemes_path("$scheme_code.scheme.json")
        );
    }

    # Получить схему с статическими данными определяемые типом нода
    # для вывода на карту
    public function getSaturatedScheme(string $scheme_code): ?array
    {
        $scheme = $this->getScheme($scheme_code);
        foreach ($scheme['nodes'] as &$node) {
            kriti()->node()->attachStatic($node);
        }
        return $scheme;
    }

    # Сохранить ноды todo: Не протестировано
    public function setScheme(string $scheme_code, array $scheme_data)
    {
        kriti()->files()->arrayToFile(
            $scheme_data,
            kriti()->schemes_path("$scheme_code.scheme.json")
        );
    }

    # Получить список схем
    public function getSchemesList(): array
    {
        $files = kriti()->files()->filesList(kriti()->schemes_path());
        $output = [];
        foreach ($files as $file) {
            preg_match('/(.*)\.scheme\.json$/', $file['name'], $m);
            if (isset($m[1])) {
                $scheme_code = $m[1];
                $scheme = $this->getScheme($scheme_code);
                $output[] = [
                    'code' => $scheme_code,
                    'name' => $scheme['name'],
                    'description' => $scheme['description'],
                    'nodes_count' => count($scheme['nodes'])
                ];
            }
        }
        return $output;
    }

    /*
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
    */
}
