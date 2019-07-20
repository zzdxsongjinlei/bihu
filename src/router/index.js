//路由页面
import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index.vue'
import living from '../pages/living.vue'
import register from '../pages/register.vue'
import login from '../pages/login.vue'
import downloadApp from '../pages/downloadApp.vue'
import userDetail from '../pages/userDetail.vue'
import search from '../pages/search.vue'
import articleDetail from '../pages/articleDetail.vue'
import shortContentDetail from '../pages/shortContentDetail.vue'
import category from '../pages/index/category.vue'
import article from '../pages/index/article.vue'
import attention from '../pages/index/attention.vue'
import boarddetail from '../pages/boarddetail.vue'
import recommeddetail from '../components/common/RecommedDetail.vue'
Vue.use(Router)

const router= new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/article',
      name: 'article',
      component: article
    },
    {
      path:'/boarddetail/:id',
      name:'boarddetail',
      component:boarddetail
    },
    {
      path: '/attention',
      name: 'attention',
      component: attention
    },
    {
      path: '/category/:id',
      name: 'category',
      component: category
    },
     {
      path: '/living',
      name: 'living',
      component: living
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/downloadApp',
      name: 'downloadApp',
      component: downloadApp
    },
    {
      path: '/userdetail/:id',
      name: 'userDetail',
      component: userDetail
    },
    {
      path: '/articledetail/:id',
      name: 'articleDetail',
      component: articleDetail
    },
     {
      path: '/shortcontentdetail/:id',
      name: 'shortcontentdetail',
      component: shortContentDetail
    },
    {
      path: '/search',
      name: 'search',
      component: search

    }
  ]
})
// router.beforeEach(function(to,from,next){
//   console.log('即将进入：',to.query);
//   console.log('即将离开：',from);
//   next();
// })
export default router
















