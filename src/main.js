// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueResource from 'vue-resource';

Vue.use(VueResource);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import User from './components/User';
import HelloWorld from './components/HelloWorld';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes:[
    {
      path:'/',
      component: User
    },
    {
      path:'/test',
      component: HelloWorld
    }
  ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  components: {App}

}).$mount('#app')
