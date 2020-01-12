import Vue from "vue";
import App from '@/App';
import store from '@/store';
import VueRouter from "vue-router";
import AuthHandler from "@/components/AuthHandler";

Vue.use(VueRouter);

export const router = new VueRouter({
  /* switch mode from hash-router to browser-router */
  mode: 'history',
  routes: [
    {path: '/oauth2/callback', component: AuthHandler}
  ]
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
