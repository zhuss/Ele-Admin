import Vue from 'vue'
import Router from 'vue-router'

import login from '@/components/login/Login'
import home from '@/components/home/Home'
import videoList from '@/components/video/List'
import topicList from '@/components/topic/List'

Vue.use(Router)
export default new Router({
  routes: [{
    name: 'login',
    path: '/login',
    component: login
  }, {
    path: '',
    component: home,
    children: [{
      name: 'home',
      path: '',
      component: videoList
    }, {
      name: 'video',
      path: '/video',
      component: videoList
    }, {
      name: 'topic',
      path: '/topic',
      component: topicList
    }]
  }]
})
