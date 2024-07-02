<?php

namespace App\Kriti\Classes;

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

    # Клонировать модуль
    public function cloneNode(array $node): array
    {
        $old_uuid = $node['uuid'];
        $new_uuid = kriti()->createUUID();
        $node['uuid'] = $new_uuid;
        unset($node['links']);

        $data_batches = kriti()->files()->filesList(kriti()->schemes_path("data/$old_uuid"));
        foreach ($data_batches as $data_batch) {
            $batch_code = \Str::beforeLast($data_batch['name'], '.json');
            $batch = kriti()->node($old_uuid)->getDataBatch($batch_code);
            kriti()->node($new_uuid)->setDataBatch($batch_code, $batch);
        }
        return $node;
    }

    # Создать модуль
    public function createNode(
        string $node_code,
        string $method_code,
        string $version,
        string $scheme_code
    ) {
        $method_files_dir_path = kriti()->store()->getLocalNodeMethodFilesDirPath($node_code, $method_code, $version);
        $uuid = kriti()->createUUID();

        $node_data_path = kriti()->schemes_path("data/$uuid");
        kriti()->files()->copyFiles($method_files_dir_path, $node_data_path);
        $scheme = kriti()->scheme()->getScheme($scheme_code);
        if (isset($scheme['nodes'])) {
            $scheme['nodes'] = [];
        }
        $scheme['nodes'][] = [
            'uuid' => $uuid,
            'type' => 'Module',
            'point' => [
                'x' => 500,
                'y' => 200
            ]
        ];
        kriti()->scheme()->setScheme($scheme_code, $scheme);
    }

    # Удалить нод из хранилища нодов
    public function removeNode(string $uuid = null): bool
    {
        if (!$uuid) {
            $uuid = $this->uuid;
        }
        if (!$uuid) {
            throw new \Exception('Не указан uuid');
        }
        $node_path = kriti()->schemes_path("data/$uuid");
        if (!file_exists($node_path)) {
            return false;
        }

        kriti()->files()->removeDir($node_path);
        if (file_exists($node_path)) {
            return false;
        }

        #TODO(zenc0rd): Чекнуть все схемы и удалить этот нод оттуда

        return true;
    }


    # создать или удалить сцепку
    public function makeLink(array $link, string $scheme_code)
    {
        $link_start = explode(':', $link[0]);
        $link_end = explode(':', $link[1]);

        $uuid_a = $link_start[0];
        $io_a = $link_start[1];
        $var_a = $link_start[2] ?? null;

        $uuid_b = $link_end[0];
        $io_b = $link_end[1];
        $var_b = $link_end[2] ?? null;

        if ($uuid_a === $uuid_b) {
            return;
        }

        if ($var_a) {
            $io_a .= ":$var_a";
        }

        if ($var_b) {
            $io_b .= ":$var_b";
        }

        $link = "$io_a@$io_b";

        $scheme = kriti()->scheme()->getScheme($scheme_code);

        foreach ($scheme['nodes'] as &$node) {
            if ($node['uuid'] === $uuid_a) {
                if (!isset($node['links'][$uuid_b])) {
                    $node['links'][$uuid_b] = [$link];
                } else {
                    if (!in_array($link, $node['links'][$uuid_b])) {
                        $node['links'][$uuid_b][] = $link;
                    } else {
                        $key = array_search($link, $node['links'][$uuid_b]);
                        if ($key !== false) {
                            unset($node['links'][$uuid_b][$key]);
                            if (!count($node['links'][$uuid_b])) {
                                unset($node['links'][$uuid_b]);
                                if (!count($node['links'])) {
                                    unset($node['links']);
                                }
                            }
                        }
                    }
                }
                break;
            }
        }

        kriti()->scheme()->setScheme($scheme_code, $scheme);
    }
}
