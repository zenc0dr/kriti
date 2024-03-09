<?php

namespace App\Kriti\Classes;

class Node
{
    private string $nodes_path;

    public function __construct()
    {
        $this->nodes_path = base_path('app/Kriti/store/');
    }

    # http://kriti.mog/kriti.api.Nodes:getNodes
    public function getNodes(): ?array
    {
        return kriti()->arrayFromFile($this->nodes_path . 'nodes.json');
    }

    public function setNodes(array $nodes)
    {
        kriti()->arrayToFile(
            $nodes,
            $this->nodes_path . 'nodes.json',
        );
    }

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

    public function getNodeData(string $uuid, string $chapter) {

        $node = $this->getNodeByUUID($uuid);

        $chapter_data = kriti()->arrayFromFile(
            $this->nodes_path . 'nodes_data/' . "{$uuid}_$chapter.json"
        );

    }

    public function setNodeData(string $uuid, string $chapter)
    {

    }
}
