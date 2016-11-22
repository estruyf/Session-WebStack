const path = require('path');

module.exports = {
    entry: ["./webpack/dist/app.tsx"],
    output: {
        path: path.join(__dirname, "webpack/src"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ["", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.scss$/,
                loaders: [ 'style', 'css', 'sass' ]
            }
        ]
    },
    devServer: {
        contentBase: "./webpack"
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'socket.io-client': 'io'
    }
};