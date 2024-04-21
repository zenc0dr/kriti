<?php

namespace App\Kriti\Api;

class Scheme
{
    # Получить схему для карты
    # http://kriti.mog/kriti.api.Scheme:getScheme?scheme_code=calculator
    public function getScheme(): ?string
    {
        return kriti()->response(
            [
                'scheme' => kriti()->scheme()->getSaturatedScheme(
                    request('scheme_code')
                )
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
        return kriti()->response([
            'success' => true
        ]);
    }

    # Получить список схем
    # http://kriti.mog/kriti.api.Scheme:getSchemesList
    public function getSchemesList()
    {
        return kriti()->response([
            'schemes_list' => kriti()->scheme()->getSchemesList()
        ]);
    }
}
