var Vue = require('vue');
var VueRouter = require('vue-router');
var App = require('./App.vue');
import KeenUI from 'keen-ui';
import VueProgressBar from 'vue-progressbar';
import VueResource from 'vue-resource';
 
Vue.use(VueResource);

Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '2px'
})

Vue.use(KeenUI);

Vue.use(VueRouter);

const RouterViewContainer = {
  template: '<div> <slot></slot> </div>'
}
const routes = [
  { path: '/', component: App,
    children: [{
      path: ':id',
      component: RouterViewContainer
    }]
  }
]


const router = new VueRouter({
  mode: 'history',
  routes
});

const app = new Vue({
  router
}).$mount('#app');
