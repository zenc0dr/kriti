<?php

namespace App\Kriti\Api;

class Colors
{
    public string $colors_path;

    public function __construct()
    {
        $this->colors_path = base_path('app/Kriti/resources/scss/kriti.palette.scss');
    }


    # http://kriti.mog/kriti.api.Colors:loadColors
    public function loadColors()
    {
        $colors_data = file_get_contents($this->colors_path);
        $colors_data = explode(PHP_EOL, $colors_data);
        $colors = [];
        foreach ($colors_data as $item) {
            if (!$item) {
                continue;
            }
            $item = explode(': ', $item);
            $name = $item[0];
            $code = $item[1];
            $code = str_replace(';', '', $code);
            $colors[] = [
                'name' => $name,
                'code' => $code,
            ];
        }

        return kriti()->response([
            'success' => true,
            'colors' => $colors
        ]);
    }

    # http://kriti.mog/kriti.api.Colors:saveColors
    public function saveColors()
    {
        $colors = request('colors');
        $output = [];
        foreach ($colors as $color) {
            $output[] = "{$color['name']}: {$color['code']};";
        }
        $output = join(PHP_EOL, $output);
        $output .= PHP_EOL;

        file_put_contents($this->colors_path, $output);
        return kriti()->response([
            'success' => true,
            'colors' => $colors
        ]);
    }
}
