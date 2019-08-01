
// ref: https://umijs.org/config/
import routes from './src/router';
import config from './src/config';

export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'business',
      dll: false,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
      dynamicImport : {
        webpackChunkName : true,
        loadingComponent : config.project.loadingComponent
      },
      title: config.project.defaultTitle
    }],
  ],
  routes: routes,
  history : config.project.history,
  base : config.project.base,
  publicPath : config.project.publicPath,
  hash : config.project.hash,
  theme: config.project.theme
}
