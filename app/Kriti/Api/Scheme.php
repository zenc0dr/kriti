<?php

namespace App\Kriti\Api;

class Scheme
{
    # Получить схему для карты
    # http://kriti.mog/kriti.api.Scheme:getScheme?scheme_code=calculator
    public function getScheme(): ?string
    {
        $scheme = kriti()->scheme()->getSaturatedScheme(
            request('scheme_code')
        );
        return kriti()->response(
            [
                'scheme' => $scheme,
                'success' => boolval($scheme)
            ]
        );
    }

    # Сохранить схему
    # http://kriti.mog/kriti.api.Scheme:setScheme
    public function setScheme(): ?string
    {
        kriti()->scheme()->setScheme(
            request('scheme_code'),
            request('scheme_data'),
        );
        return kriti()->response();
    }

    # Сохранить схему
    # http://kriti.mog/kriti.api.Scheme:removeScheme?scheme_code=second_scheme
    public function removeScheme()
    {
        kriti()->scheme()->removeScheme(
            request('scheme_code')
        );
        return kriti()->response();
    }

    # Удалить нод из схемы
    # http://kriti.mog/kriti.api.Scheme:removeNode
    public function removeNode()
    {
        //kriti()->saveRequest('remove_node');
        kriti()->loadRequest('remove_node');
        $node_uuid = request('node_uuid');
        $scheme_code = request('scheme_code');
        kriti()->scheme()->removeNode(
            $node_uuid,
            $scheme_code
        );
    }

    # Получить список схем
    # http://kriti.mog/kriti.api.Scheme:getSchemesList
    public function getSchemesList()
    {
        return kriti()->response([
            'schemes_list' => kriti()->scheme()->getSchemesList()
        ]);
    }

    # Очистить все ссылки на схеме
    # http://kriti.mog/kriti.api.Scheme:clearLinks
    public function clearLinks()
    {
        kriti()->scheme()->clearLinks(
            request('scheme')
        );
    }

    # Получить модули схемы (для меню)
    # http://kriti.mog/kriti.api.Scheme:getSchemeModules
    public function getSchemeModules()
    {
        dd('ok');
    }
}
