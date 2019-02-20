import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    redirect: 'index'
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('./views/index.vue'),
    meta: {
      title: '/home'
    },
    children: [{
      path: '/home',
      name: 'home',
      meta: {
        title: '首页'
      },
      component: () => import('./views/home/home.vue')
    },
    {
      path: '/user',
      name: 'user',
      meta: {
        title: '用户信息'
      },
      component: () => import('./views/user/user.vue')
    },
    {
      path: '/listMessge',
      name: 'listMessge',
      meta: {
        title: '信息列表'
      },
      component: () => import('./views/listMessge/listMessge.vue')
    }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./views/login/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('./views/register/reginster.vue')
  }
  ]
})

// 路由守卫,判断本地是否存token
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.eleToken ? 'true' : false
  if (to.path === '/login' || to.path === '/register') {
    next()
  } else {
    isLogin ? next() : next('/login')
  }
})
export default router
