<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <title>Kriti</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="{{ mix('css/kriti.css', 'kriti') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="/playground/images/icons/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/playground/images/icons/favicon-32x32.png">
    <script src="{{ mix('js/kriti.js', 'kriti') }}" defer></script>
</head>
<body>
<div id="app"></div>
</body>
</html>
