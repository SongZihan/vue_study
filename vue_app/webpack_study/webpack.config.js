// 引入绝对路径的方法
const path = require('path');
// 热模块更新
const webpack = require('webpack');
// console.log(path.resolve())
// console.log(path.join(__dirname,'./dist'))
// output中的path必须是绝对路径
const config = {
    entry: './src/index.js',
    output: {
        filename: "bundle.js",
        path: path.join(__dirname,'./dist')
    },
    devServer: {
        contentBase:'./dist',
        hot:true
    }
    ,
    module: {
        rules: [{
            test:/\.css$/,
            use: ['style-loader','css-loader']
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;