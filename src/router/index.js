//component根路径是pages
//Routes根路径是项目
module.exports = [
    {
      path: '/404',
      component: '../layouts/NotFound',
    },
    {
      path: '/',
      component: '../layouts/BasicLayout',
      Routes : ['./src/router/Init'],
      routes: [
        {
          path: '/',
          name: 'home',
          icon: 'home',
          component: './index',
          title : 'home'
        },
        {
            path: '/login',
            name: 'login',
            icon: 'user',
            component: './login',
            Routes : ['./src/router/CheckLogout'],
            title : 'login',
        }
      ]
    },
  ];
