import Vue from "vue";
import App from '@/App';
import store from '@/store';
import VueRouter from "vue-router";
import AuthHandler from "@/components/AuthHandler";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {path: '/oauth2/callback', component: AuthHandler}
  ]
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
