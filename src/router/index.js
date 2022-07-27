import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/layout'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home'),
      },
      {
        path: 'find',
        name: 'find',
        component: () => import('@/views/find'),
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('@/views/news'),
      },
      {
        path: 'my',
        name: 'my',
        component: () => import('@/views/my'),
      },
    ],
  },
  {
    path: '/city',
    name: 'city',
    component: () => import('@/views/home/city'),
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('@/views/home/map'),
  },
  {
    path: '/homedetail',
    name: 'homedetail',
    component: () => import('@/views/home/homedetail'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/my/login'),
  },
  {
    path: '/mycollection',
    name: 'mycollection',
    component: () => import('@/views/my/mycollection'),
  },
  {
    path: '/myrent',
    name: 'myrent',
    component: () => import('@/views/my/myrent'),
  },
  {
    path: '/puthome',
    name: 'puthome',
    component: () => import('@/views/my/puthome'),
  },
  {
    path: '/rentsearch',
    name: 'rentsearch',
    component: () => import('@/views/my/rentsearch'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/my/register/index.vue'),
  },
]

const router = new VueRouter({ routes })
router.beforeEach((to, from, next) => {
  if (store.state.user) {
    next()
  } else if (to.path == '/mycollection' || to.path == '/myrant') {
    alert('请先登录')
    next({ path: '/login' })
  } else {
    next()
  }
})
// 防止跳转报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch((err) => err)
}

export default router
