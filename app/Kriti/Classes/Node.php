<?php

namespace App\Kriti\Classes;

use App\Kriti\Classes\Nodes\Module;

class Node
{
    # Получить чистый нод с карты по uuid
    public function getNodeByUUID(string $scheme_name, string $uuid): ?array
    {
        $scheme = kriti()->scheme()->getScheme($scheme_name);
        $nodes = $scheme['nodes'];
        foreach ($nodes as $node) {
            if ($node['uuid'] === $uuid) {
                return $node;
            }
        }
        return null;
    }

    # Сохранить изменившийся нод
    public function saveNode(string $scheme_name, array $node)
    {
        $scheme = kriti()->scheme()->getScheme($scheme_name);
        foreach ($scheme['nodes'] as &$original_node) {
            if ($original_node['uuid'] === $node['uuid']) {
                $original_node = $node;
                break;
            }
        }
        kriti()->scheme()->setScheme($scheme_name, $scheme);
    }

    # Получить данные с нода из файлов нода через слой нода
    # Если uuid = null то придут данные по умолчанию и для заполнения
    public function callNodeMethod(
        string $scheme_name,
        string $uuid,
        string $method,
        mixed $input_data = null
    ) {
        $node = $this->getNodeByUUID($scheme_name, $uuid);
        $node_type = $node['type'];
        return app()
            ->make("App\Kriti\Classes\Nodes\\$node_type", ['node' => $node,]
            )->{$method}($input_data);
    }
}
