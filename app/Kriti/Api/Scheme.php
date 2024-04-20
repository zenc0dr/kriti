<?php

namespace App\Kriti\Api;

class Scheme
{
    # http://kriti.mog/kriti.api.Scheme:getScheme
    public function getScheme(): ?string
    {
        return kriti()->response(
            [
                'scheme' => kriti()->scheme()->getScheme(
                    request('scheme_name')
                )
            ]
        );
    }

    # http://kriti.mog/kriti.api.Scheme:setScheme
    public function setScheme(): ?string
    {
        kriti()->scheme()->setScheme(
            request('scheme_name'),
            request('scheme_data'),
        );
        return kriti()->response([
            'success' => true
        ]);
    }

    # http://kriti.mog/kriti.api.Scheme:getSchemesList
    public function getSchemesList()
    {
        return kriti()->response([
            'schemes' => kriti()->scheme()->getSchemesList()
        ]);
    }
}
