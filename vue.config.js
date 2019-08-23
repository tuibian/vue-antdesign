const path = require("path");
// const CompressionPlugin = require("compression-webpack-plugin");
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
            '/poc': {
                target: process.env.VUE_APP_BASE_URL
            }
        }
    },
    assetsDir: 'assets',
    runtimeCompiler: true,
    configureWebpack: () => {
        // if (process.env.NODE_ENV === 'production') {
        //     return {
        //         plugins: [
        //             new CompressionPlugin({
        //                 test: /\.js$|\.html$|.\css/, //匹配文件名
        //                 threshold: 10240,//对超过10k的数据压缩
        //                 deleteOriginalAssets: false //不删除源文件
        //             })
        //         ]
        //     }
        // }
    },
    chainWebpack: config => {
        // 移除 prefetch 插件
        config.plugins.delete('prefetch');
        // 移除 preload 插件
        config.plugins.delete('preload');
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
