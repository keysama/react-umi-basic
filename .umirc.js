
// ref: https://umijs.org/config/
import routes from '../src/router';
import conifg from '../src/config';

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
    }],
  ],
  routes: routes,
  history : conifg.project.history,
  base : conifg.project.base,
  publicPath : conifg.project.publicPath,
  hash : conifg.project.hash,
  theme: conifg.project.theme
}
