module.exports = {
    devServer: {
        host: 'localhost',
        port: 5500,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8888',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    },
    productionSourceMap: false,
    chainWebpack: (config) => {
        config.plugins.delete('prefetch');
    },
}