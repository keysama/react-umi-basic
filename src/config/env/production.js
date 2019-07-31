export default {
    api_base_url : 'https://www.gamenanum.net/',
    source_base_url : 'https://www.gamenanum.net/',
    AxiosWithCredentials : true,
    project : {
        history : 'browser',//路由模式
        base : '/',//网站部署的路径
        publicPath : '/',//指定 webpack 的 publicPath，指向静态资源文件所在的路径。
        hash : false,// 是否启用文件后缀
        theme : { // Theme for antd: https://ant.design/docs/react/customize-theme-cn
            'primary-color': '#66ccff'
        }
    }
}