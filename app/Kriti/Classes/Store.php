<?php

namespace App\Kriti\Classes;

use App\Kriti\Traits\SingletonTrait;

class Store
{
    use SingletonTrait;

    private string $store_path;

    public function __construct()
    {
        $this->store_path = base_path('app/Kriti/Nodes');
    }

    /**
     * Получить список кодовых баз и нодов в них, сканируя папку указанную в $this->store_path
     * @return array
     */
    public function getLocalNodes(): array
    {
        $files = kriti()->files()->filesList($this->store_path, true);
        $output = [];
        foreach ($files as $file) {
            if ($file['name'] === 'manifest.json') {
                $manifest_path = $file['path'];
                $codebase = $this->handleManifest($manifest_path);
                $output[$codebase['namespace']]['info'] = $codebase;
            }
            if ($file['name'] === 'settings.json') {
                $settings_path = $file['path'];
                $node = $this->handleSettings($settings_path);
                $output[$node['namespace']]['nodes'][$node['method']] = [
                    'version' => $node['version'],
                    'name' => $node['name'],
                    'icon' => $node['icon']
                ];
            }
        }
        return $output;
    }

    /**
     * Обработка манифестов
     * @param string $path
     * @return array
     */
    private function handleManifest(string $path): array
    {
        $manifest = kriti()->files()->arrayFromFile($path);
        $path = str_replace($this->store_path, '', $path);
        $path = explode('/', $path);
        return [
            'namespace' => join('.', [$path[1], $path[2]]),
            'author' => $manifest['author'],
            'name' => $manifest['name'],
            'icon' => $manifest['icon'],
            'desc' => $manifest['description']
        ];
    }

    /**
     * Обработка настроек
     * @param string $path
     * @return array
     */
    private function handleSettings(string $path)
    {
        $settings = kriti()->files()->arrayFromFile($path);
        $path = str_replace($this->store_path, '', $path);
        $path = explode('/', $path);

        return [
            'namespace' => join('.', [$path[1], $path[2]]),
            'version' => $path[3],
            'method' => $path[5],
            'name' => $settings['name'],
            'icon' => $settings['icon']
        ];
    }
}
