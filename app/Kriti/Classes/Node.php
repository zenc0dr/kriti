<?php

namespace App\Kriti\Classes;

use App\Kriti\Classes\Nodes\Module;

class Node
{
    public string $uuid;

    public function __construct(string $uuid = null)
    {
        if (!$uuid) {
            $uuid = kriti()->createUUID();
        }
        $this->uuid = $uuid;
    }


    # Добавить статику нода для карты
    public function attachStatic(array &$node)
    {
        $node_type = $node['type'];
        $node = call_user_func_array(
            'App\Kriti\Classes\Nodes\\' . $node_type . '::saturateStatic',
            [$node]
        );
    }

    # Получить пакет данных нода
    public function getDataBatch(string $batch_code): ?array
    {
        return kriti()->files()->arrayFromFile(
            kriti()->schemes_path("data/$this->uuid/$batch_code.json")
        );
    }

    # Сохранить пакет данных нода todo: no test
    public function setDataBatch(string $batch_code, array $data)
    {
        kriti()->files()->arrayToFile(
            $data,
            kriti()->schemes_path("data/$this->uuid/$batch_code.json")
        );
    }

    # Получить данные с нода из файлов нода через слой нода todo: no test
    # Если uuid = null то придут данные по умолчанию и для заполнения
    public function callNodeMethod(
        string $method,
        mixed $input_data = null
    ) {
        $node_settings = $this->getDataBatch('settings');
        $node_type = $node_settings['type'];
        return app()
            ->make("App\Kriti\Classes\Nodes\\$node_type", ['uuid' => $this->uuid]
            )->{$method}($input_data);
    }

    /*
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

        //dd($scheme_name, $uuid, $method, $input_data);

        $node = $this->getNodeByUUID($scheme_name, $uuid);
        $node_type = $node['type'];
        return app()
            ->make("App\Kriti\Classes\Nodes\\$node_type", ['node' => $node, 'scheme_name' => $scheme_name]
            )->{$method}($input_data);
    }
    */
}
