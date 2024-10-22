<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\View;


Route::match(['get', 'post'], '/kriti.api.{class}:{method}', function ($class, $method) {
    return app("App\Kriti\Api\\$class")->{$method}();
});


Route::get('/kriti.{method?}.{opt?}', function () {
    return View::file(base_path('app/Kriti/resources/views/kriti.blade.php'));
});

