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
        kriti()->node(request('uuid'))->callNodeMethod(
            request('method'),
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
