<?php

namespace App\Kriti\Classes;

use App\Kriti\Traits\SingletonTrait;

class Context
{
    use SingletonTrait;

    # Получить контекст элемента
    public function getContext(string $type, string $uuid): array
    {
        if ($type === 'node') {
            return kriti()->node($uuid)->callNodeMethod(
                'context'
            );
        }
        return [];
    }
}
