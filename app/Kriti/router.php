<?php

use Illuminate\Support\Facades\Route;

Route::match(['get', 'post'], '/kriti/{class}:{method}', function ($class, $method) {
    return app("App\Kriti\Api\\$class")->{$method}();
});
