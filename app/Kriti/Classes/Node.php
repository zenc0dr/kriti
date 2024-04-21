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
}
