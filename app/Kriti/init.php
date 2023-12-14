<?php

use Illuminate\Support\Facades\Route;

# Main kriti helper
if (!function_exists('kriti')) {
    function kriti(): \App\Kriti\Kriti
    {
        return \App\Kriti\Kriti::getInstance();
    }
}

//Route::match(['get', 'post'], '/kriti/tests/{class}:{method}', function ($class, $method) {
//    $class = str_replace('.', '\\', $class);
//    return app("App\Http\Classes\Tests\\$class")->{$method}();
//});


//Route::view('/kriti/{slug?}/{id?}', 'playground');
//Route::match(['get', 'post'], '/kriti/{class}:{method}', function ($class, $method) {
//    return app("App\Http\Kriti\Api\\$class")->{$method}();
//});
//Route::post('/play-api/auth', [\App\Http\Classes\PlayApp\PlayAuth::class, 'auth']);
