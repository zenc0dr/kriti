<?php

namespace App\Kriti\Api;

class Node
{
    public function getData(): ?string
    {
        return kriti()->response([
            'data' => kriti()->node()->callNodeMethod(
                request('uuid'),
                request('method'),
            )
        ]);
    }

    public function setData()
    {
        kriti()->node()->callNodeMethod(
            request('uuid'),
            request('method'),
            request('values')
        );
    }
}
