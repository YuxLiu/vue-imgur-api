import Vue from "vue";
import App from '@/App';
import store from '@/store';
import VueRouter from "vue-router";
import AuthHandler from "@/components/AuthHandler";
import ImageList from "@/components/ImageList";
import UploadForm from "@/components/UploadForm";

Vue.use(VueRouter);

export const router = new VueRouter({
  /* switch mode from hash-router to browser-router */
  mode: 'history',
  routes: [
    {path: '/oauth2/callback', component: AuthHandler},
    {path: '/', component: ImageList},
    {path: '/upload', component: UploadForm}
  ]
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
