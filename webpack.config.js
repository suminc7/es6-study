

module.exports = {
    entry: "./src/app.js",
    output: {
        path: __dirname + '/public/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    watch: true,
    devServer: {
        inline: true,
        port: 8080,
        contentBase: __dirname + '/public/'
    }
};

