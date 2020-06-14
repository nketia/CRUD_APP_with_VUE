import Vue from 'vue'
import App from './App.vue'
import pageRouting from 'vue-router'
import { BootstrapVue, } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import View_Delete from './components/ViewDeleteResource.vue'
import Home from './components/UploadResources.vue'


Vue.use(BootstrapVue);
Vue.use(pageRouting);

Vue.config.productionTip = false;

const routes = [
  {path: '/view_delete', component:View_Delete},
  {path: '/', component:Home},
];

const router = new pageRouting({
  routes,
  mode:'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
