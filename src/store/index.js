import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth'

// initial handshake , follow up by 'main.js / new Vue'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
  }
});