var Vue = require('vue');
var VueRouter = require('vue-router');
var HomePage = require('./components/Home.Page.vue');

Vue.use(VueRouter);

const RouterViewContainer = {
  template: `
    <div>
      <slot></slot>
    </div>
  `
}
const routes = [
  { path: '/', component: HomePage,
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
