//component根路径是pages
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
            path: '/login/',
            name: 'login',
            icon: 'home',
            component: './index',
            Routes : ['./src/router/CheckLogout'],
        }
      ]
    },
  ];
