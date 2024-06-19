import * as _ from 'lodash'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/SwiperHome.vue'
import H5Layout from '../views/H5/H5Layout.vue'
import store from '@/store/index'
import { useLoginStore } from '@/store/login'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/h5',
    name: 'h5home',
    component: H5Layout
  },
  {
    path: '/code',
    name: 'code',
    component: () => import(/* webpackChunkName: "code" */ '../views/CodeView.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import(/* webpackChunkName: "news" */ '../views/NewsView.vue')
  },
  {
    path: '/news/:id',
    name: 'newsContext',
    component: () => import(/* webpackChunkName: "newsContext" */ '../views/NewsContext.vue')
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    component: () => import(/* webpackChunkName: "contactUs" */ '../views/ContactUs.vue')
  },
  {
    path: '/concept',
    name: 'concept',
    component: () => import(/* webpackChunkName: "concept" */ '../views/ConceptView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/forget',
    name: 'forget',
    component: () => import(/* webpackChunkName: "forgetpsw" */ '../views/ForgetPsw.vue')
  },
  {
    path: '/agreement',
    name: 'agreement',
    component: () => import(/* webpackChunkName: "agreement" */ '../views/Agreement.vue')
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import(/* webpackChunkName: "privacy" */ '../views/Privacy.vue')
  },
  {
    path: '/business',
    name: 'business',
    component: () => import(/* webpackChunkName: "business" */ '../views/Business.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(() => {
  const useLogin = useLoginStore(store)
  const userInfo = useLogin.userInfo
  const token = useLogin.token
  if (!token || _.isEmpty(userInfo)) {
    useLogin.getUserInfo().then((res) => {
      if (res.data.code == '200') {
        useLogin.userInfo = { ...res.data.data }
        localStorage.setItem('userInfo', JSON.stringify(res.data.data))
      }
    })
  }
})

export default router
