<?php

namespace App\Kriti\Api;

class Workspace
{
    public function bootstrap()
    {
        return kriti()->response([
            'success' => true
        ]);
    }
}
