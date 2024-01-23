const mix = require('laravel-mix')
const webpack = require('webpack')

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
        devtool: 'inline-source-map',
        plugins:[
            new webpack.DefinePlugin({
                __VUE_OPTIONS_API__: JSON.stringify(true),
                __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
                __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false)
            })
        ]
    })
}
