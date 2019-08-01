module.exports = {
    api_base_url : 'https://www.gamenanum.net/',
    source_base_url : 'https://www.gamenanum.net/',
    AxiosWithCredentials : true,
    project : {
        history : 'browser',//路由模式
        base : '/business',//网站部署的路径
        publicPath : '/business/',//指定 webpack 的 publicPath，指向静态资源文件所在的路径。
        hash : false,// 是否启用文件后缀
        theme : { // Theme for antd: https://ant.design/docs/react/customize-theme-cn
            'primary-color': '#66ccff'
        },
        loadingComponent : './components/Loading',//还没加载完时候的loading组件
        defaultTitle : 'pro-test'
    }
}