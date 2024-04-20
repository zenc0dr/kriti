<?php

namespace App\Kriti\Api;

class Node
{
    # Получить данные метода нода (ключ method отсутствует)
    public function getData(): ?string
    {
        return kriti()->response([
            'data' => kriti()->node()->callNodeMethod(
                request('scheme_name'),
                request('uuid'),
                request('method')
            )
        ]);
    }

    # Записать данные метода нода
    public function setData()
    {
//        kriti()->files()->arrayToFile(
//            request()->all(),
//            storage_path('save_node.json')
//        );

        kriti()->node()->callNodeMethod(
            request('scheme_name'),
            request('uuid'),
            request('method'),
            request('values')
        );
    }

    # Создать uuid
    public function createUUID(): string
    {
        return kriti()->response([
            'uuid' => kriti()->createUUID()
        ]);
    }
}
