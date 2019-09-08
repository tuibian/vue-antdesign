const path = require("path");
module.exports = {
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },
    devServer: {
        proxy: { // 开发API代理设置，可配置多个
            [process.env.VUE_APP_BASE_API]: {
                target: process.env.VUE_APP_BASE_URL
            }
        }
    },
    assetsDir: 'assets',
    runtimeCompiler: true,
    chainWebpack: config => {
        // 移除 prefetch 插件
        config.plugins.delete('prefetch');
        // 移除 preload 插件
        config.plugins.delete('preload');
        // 图片压缩
        // const imagesRule = config.module.rule('images');
        // imagesRule
        //     .use('image-webpack-loader')
        //     .loader('image-webpack-loader')
        //     .options({
        //         bypassOnDebug: true
        //     })
        //     .end()
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                //这个是加上自己的路径，
                //注意：试过不能使用别名路径
                path.resolve(__dirname, "./src/assets/less/main.less")
            ]
        },
        i18n: {
            locale: 'zh',
            fallbackLocale: 'zh',
            localeDir: 'locales',
            enableInSFC: true
        }
    },
    productionSourceMap: false
};
