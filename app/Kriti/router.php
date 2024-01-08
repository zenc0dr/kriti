<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\View;

Route::get('/kriti/{slug?}/{id?}', function () {
    return View::file(base_path('app/Kriti/resources/views/kriti.blade.php'));
});

Route::match(['get', 'post'], '/kriti.api.{class}:{method}', function ($class, $method) {
    return app("App\Kriti\Api\\$class")->{$method}();
});
