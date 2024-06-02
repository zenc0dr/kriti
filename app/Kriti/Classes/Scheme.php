<?php

namespace App\Kriti\Classes;

class Scheme
{
    # Получить схему без статических данных
    public function getScheme(string $scheme_code): ?array
    {
        $scheme = kriti()->files()->arrayFromFile(
            kriti()->schemes_path("$scheme_code.scheme.json")
        );
        if (!$scheme) {
            return null;
        }
        return $scheme;
    }

    # Получить схему с статическими данными определяемые типом нода
    # для вывода на карту
    public function getSaturatedScheme(string $scheme_code): ?array
    {
        $scheme = $this->getScheme($scheme_code);
        if (!$scheme) {
            return null;
        }
        if (isset($scheme['nodes'])) {
            foreach ($scheme['nodes'] as &$node) {
                kriti()->node()->attachStatic($node);
            }
        }
        return $scheme;
    }

    # Сохранить схему
    public function setScheme(string $scheme_code, array $scheme_data)
    {
        if (!isset($scheme_data['nodes'])) {
            $scheme_data['nodes'] = [];
        }

        kriti()->files()->arrayToFile(
            $scheme_data,
            kriti()->schemes_path("$scheme_code.scheme.json")
        );
    }

    # Удалить схему
    public function removeScheme(string $scheme_code)
    {
        unlink(kriti()->schemes_path("$scheme_code.scheme.json"));
    }

    public function removeNode(string $node_uuid, string $scheme_code)
    {
        $scheme = $this->getScheme($scheme_code);
        foreach ($scheme['nodes'] as &$node) {
            if ($node['uuid'] === $node_uuid) {
                unset($node);
            } else {
                foreach ($node['links'] as $link_uuid => &$link) {
                    if ($link_uuid === $node_uuid) {
                        unset($link);
                    }
                }
            }
        }
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

    # Очистить схему от сцепок
    public function clearLinks(string $scheme_code)
    {
        $scheme = $this->getScheme($scheme_code);
        foreach ($scheme['nodes'] as &$node) {
            unset($node['links']);
        }

        $this->setScheme($scheme_code, $scheme);
    }
}
