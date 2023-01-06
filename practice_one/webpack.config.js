// 引入一个包
const path = require("path");
// 引入html插件（npm i -D html-webpack-plugin）
const HTMLWebpackPlugin = require("html-webpack-plugin");
// 引入webpack服务器插件，实现部署热重载 （npm i -D webpack-dev-server）
// 引入clean插件，每次部署打包前清空dist目录（npm i -D clean-webpack-plugin）
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// 引入babel,解决兼容性问题(npm i -D @babel/core @babel/preset-env babel-loader core-js)(core-js js文件的运行环境，旧版本能够运行新版本的js文件)

// webpack配置信息
module.exports = {
    mode: "development",
    // 指定入口文件
    entry: "./src/ts/index.ts",
    //指定打包文件所在目录
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "snake.js",
        environment: {
            arrowFunction: false, //打包后不存在箭头函数
            const:false //打包后不存在const
        }
    },
    // 指定打包模块
    module: {
        // 加载规则
        rules: [


            {
                test: /\.ts$/, //规则生效的文件
                use: [
                    {
                        // 配置babel
                        loader: "babel-loader",
                        options: {
                            // 设置预定环境
                            presets: [
                                [
                                    // 指定环境的插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的目标浏览器
                                        targets: {
                                            chrome: "88",
                                            ie: "11"
                                        },

                                        // core.js的版本
                                        "corejs": "3",
                                        "useBuiltIns": "usage" //按需加载
                                    },
                                ],
                            ],
                        },
                    },
                    "ts-loader",
                ],
                exclude: /node-modules/,
            },

            {
                test: /\.scss$/,  //scss文件的处理
                use: [
                    "style-loader", 
                    "css-loader", 
                    //引入postcss
                    {
                        loader:"postcss-loader",
                        options:{
                            postcssOptions:{

                                plugins:[
                                     [
                                        "postcss-preset-env",
                                        {
                                            browers:'last 2 versions'  //适用于大多数情况
                                        }
                                     ]
                                ]
                            }
                        }
                    },
                    "sass-loader"
                ]
            },

        ],
    },

    // 配置HTML插件,自动生成html并引入相关文件
    plugins: [
        new CleanWebpackPlugin(), //清空dist，文件保证最新
        new HTMLWebpackPlugin({
            template: "./src/index.html", //模板html           
        }),
    ],

    // 允许一下文件类型可作为模块导入
    resolve: {
        extensions: [".ts", ".js"],
    },
};
