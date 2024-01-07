const mix = require('laravel-mix')

mix.setPublicPath('../../public/kriti')
mix.setResourceRoot('/kriti/');
mix.sass('resources/scss/kriti.scss', 'css')
mix.js('resources/js/kriti.js', 'js').vue()

mix.copyDirectory('resources/images', '../../public/kriti/images')

if (mix.inProduction()) {
    mix.webpackConfig({
        output: {
            filename: '[name].js',
            chunkFilename: 'js/[name].app.js',
            publicPath: '/kriti/'
        }
    })
    mix.version();
} else {
    mix.webpackConfig({
        output: {
            filename: '[name].js',
            chunkFilename: 'js/[name].app.js',
            publicPath: '/kriti/'
        },
        devtool: 'inline-source-map'
    })
}
