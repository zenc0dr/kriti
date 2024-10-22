<?php

namespace App\Kriti\Api;

class Node
{
    # Получить данные метода нода (ключ method отсутствует)
    # http://kriti.mog/kriti.api.Node:getData
    public function getData(): ?string
    {
        return kriti()->response([
            'data' => kriti()->node(request('uuid'))->callNodeMethod(
                request('method')
            )
        ]);
    }

    # Записать данные метода нода
    # http://kriti.mog/kriti.api.Node:setData
    public function setData()
    {
        kriti()->node(request('uuid'))->callNodeMethod(
            request('method'),
            request('values')
        );
    }

    # Создать uuid
    public function createUUID(): string
    {
        return kriti()->response([
            'uuid' => kriti()->createUUID()
        ]);
    }

    # Клонировать нод
    # http://kriti.mog/kriti.api.Node:cloneNode
    public function cloneNode(): ?string
    {
        return kriti()->response([
            'node' => kriti()->node()->cloneNode(
                request('node')
            )
        ]);
    }

    # Создать нод
    # http://kriti.mog/kriti.api.Node:createNode
    public function createNode()
    {
        kriti()->node()->createNode(
            request('node_code'),
            request('method_code'),
            request('version'),
            request('scheme_code')
        );
        return kriti()->response();
    }

    # Удалить нод из хранилища нодов
    # http://kriti.mog/kriti.api.Node:removeNode
    public function removeNode(): ?string
    {
        $node = request('node');
        kriti()->node()->removeNode($node['uuid']);
        return kriti()->response();
    }

    # http://kriti.mog/kriti.api.Node:makeLink
    public function makeLink()
    {
        kriti()->node()->makeLink(
            request('link'),
            request('scheme_code')
        );
    }
}
