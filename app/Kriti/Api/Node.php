<?php

namespace App\Kriti\Api;

class Node
{
    # Получить данные метода нода (ключ method отсутствует)
    public function getData(): ?string
    {
        return kriti()->response([
            'data' => kriti()->node()->callNodeMethod(
                request('uuid'),
                request('method'),
            )
        ]);
    }

    # Записать данные метода нода
    public function setData()
    {
        kriti()->node()->callNodeMethod(
            request('uuid'),
            request('method'),
            request('values')
        );
    }
}
