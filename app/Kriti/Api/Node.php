<?php

namespace App\Kriti\Api;

class Node
{
    # Получить данные метода нода (ключ method отсутствует)
    public function getData(): ?string
    {
        return kriti()->response([
            'data' => kriti()->node(request('uuid'))->callNodeMethod(
                request('method')
            )
        ]);
    }

    # Записать данные метода нода
    public function setData()
    {
//        kriti()->files()->arrayToFile([
//            'uuid' => request('uuid'),
//            'method' => request('method'),
//            'values' => request('values')
//        ], storage_path('setData.json'));

//        $data = kriti()->files()->arrayFromFile(storage_path('setData.json'));
//        kriti()->node($data['uuid'])->callNodeMethod(
//            $data['method'],
//            $data['values']
//        );



        kriti()->node(request('uuid'))->callNodeMethod(
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
