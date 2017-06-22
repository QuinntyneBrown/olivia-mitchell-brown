const path = require('path');

module.exports = {
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '@quinntynebrown/router': path.resolve('../router/dist/index.js'),
            '@quinntynebrown/custom-elements': path.resolve('../custom-elements/dist/index.js'),
            '@quinntynebrown/models': path.resolve('../models/dist/index.js'),
            '@quinntynebrown/utilities': path.resolve('../utilities/dist/index.js')
        }        
    },
    entry: './src/app/app.component.ts',
    output: {
        path: path.join(process.cwd(), 'dist'),
        publicPath: 'dist/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.scss$/, exclude: /node_modules/, loaders: ['raw-loader', 'sass-loader'] },
            { test: /\.(jpg|jpeg|gif|png)$/, loader: 'file-loader?name=img/[path][name].[ext]' },
            { test: /\.(eof|woff|woff2|svg)$/, loader: 'file-loader?name=img/[path][name].[ext]' },
            { test: /\.css$/, loader: 'raw-loader' },
            { test: /\.html$/, loaders: ['html-loader'] },
            { test: /\.ts$/, loaders: ['awesome-typescript-loader'], exclude: /node_modules/ }
        ]
    },
    watchOptions: {
        aggregateTimeout: 5000
    }    
};