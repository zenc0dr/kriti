<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <title>Pro.Kriti</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="{{ mix('css/kriti.css', 'kriti') }}">
    <link rel="icon" type="image/svg" href="/kriti/images/icons/kriti-icon.svg">
    <script src="{{ mix('js/kriti.js', 'kriti') }}" defer></script>
</head>
<body>
<div id="kriti-app"></div>
</body>
</html>
