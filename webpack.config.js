const path = require('path');

module.exports = {
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'app.js'
    },
    entry: {
        main: path.resolve(__dirname,'src','client','main.js')
    },
    devServer : {
        contentBase : path.resolve(__dirname,'dist'),
        historyApiFallback : true,
        port :5000
    },
    mode : 'development'
}