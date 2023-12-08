<?php

if (!function_exists('kriti')) {
    function kriti(): \App\Kriti\Kriti
    {
        return \App\Kriti\Kriti::getInstance();
    }
}
