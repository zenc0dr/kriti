<?php

namespace App\Kriti\Classes;

use App\Kriti\Traits\SingletonTrait;

class Context
{
    use SingletonTrait;

    # Получить контекст элемента
    public function getContext(string $scheme_name, string $element_type, string $uuid): array
    {
        if ($element_type === 'node') {
            return kriti()->node()->callNodeMethod(
                $scheme_name,
                $uuid,
                'context'
            );
        }
        return [];
    }
}
