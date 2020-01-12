import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth'
import images from "@/store/modules/images";

// initial handshake , follow up by 'main.js / new Vue'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    images,
  }
});