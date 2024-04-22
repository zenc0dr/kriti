<?php

namespace App\Kriti\Api;
use App\Kriti\Nodes\Zen\Calculator\V1\Calculator;

class Debug
{
    # http://kriti.mog/kriti.api.Debug:test
    public function test()
    {
        $node = new Node();
        $node->setData();
    }

    # Получить схему по коду схемы
    # http://kriti.mog/kriti.api.Debug:getSchemeTest
    public function getSchemeTest()
    {
        dd(
            kriti()->scheme()->getScheme('calculator')
        );
    }

    # Получить схему с метаданными для вывода на карту
    # http://kriti.mog/kriti.api.Debug:getSaturatedSchemeTest
    public function getSaturatedSchemeTest()
    {
        dd(
            kriti()->scheme()->getSaturatedScheme('calculator')
        );
    }

    # Получить список схем
    # http://kriti.mog/kriti.api.Debug:getSchemesListTest
    public function getSchemesListTest()
    {
        dd(
            kriti()->scheme()->getSchemesList()
        );
    }

    # Получить пакет данных нода
    # http://kriti.mog/kriti.api.Debug:getDataBatchTest
    public function getDataBatchTest()
    {
        $uuid = '067ddc29-8596-4a82-b816-8359b4f9b633';
        dd(
            kriti()->node($uuid)->getDataBatch('settings'),
            kriti()->node($uuid)->getDataBatch('style')
        );
    }

    # Вызвать метод нода
    # http://kriti.mog/kriti.api.Debug:callNodeMethodTest
    public function callNodeMethodTest()
    {
        $uuid = '067ddc29-8596-4a82-b816-8359b4f9b633';
        dd(
            //kriti()->node($uuid)->callNodeMethod('getMenu'),
            kriti()->node($uuid)->callNodeMethod('getStyle'),
            //kriti()->node($uuid)->callNodeMethod('getSettings'),
        );
    }
}
