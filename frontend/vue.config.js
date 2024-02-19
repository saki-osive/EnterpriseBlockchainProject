module.exports = {
    transpileDependencies: ['vuetify'],
}
module.exports = {
    devServer: {
        port: 8081,
        proxy: 'http://192.168.0.140:8080'
    }
}