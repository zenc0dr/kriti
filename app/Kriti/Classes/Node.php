<?php

namespace App\Kriti\Classes;

use App\Kriti\Classes\Nodes\Module;

class Node
{
    private string $nodes_path;

    public function __construct()
    {
        $this->nodes_path = base_path('app/Kriti/States/');
    }

    # Получить ноды
    public function getNodes(): ?array
    {
        return kriti()->arrayFromFile($this->nodes_path . 'nodes.json');
    }

    # Сохранить ноды
    public function setNodes(array $nodes)
    {
        kriti()->arrayToFile(
            $nodes,
            $this->nodes_path . 'nodes.json',
        );
    }

    # Получить чистый нод с карты по uuid
    public function getNodeByUUID(string $uuid): ?array
    {
        $nodes = $this->getNodes();
        foreach ($nodes as $node) {
            if ($node['uuid'] === $uuid) {
                return $node;
            }
        }
        return null;
    }

    # Получить данные с нода из файлов нода через слой нода
    # Если uuid = null то придут данные по умолчанию и для заполнения
    public function getNodeData(
        string $uuid,
        string $method,
        mixed $input_data = null
    ) {

        $node = $this->getNodeByUUID($uuid);
        $node_type = $node['type'];

        return app()
            ->make("App\Kriti\Classes\Nodes\\$node_type",
                [
                    'node' => $node,
                    'uuid' => $uuid,
                ]
            )->{$method}($input_data);
    }

    public function setNodeData(string $uuid, string $chapter)
    {

    }
}
