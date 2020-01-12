import api from '@/api/imgur'
import qs from 'qs'

const state = {
  token: window.localStorage.getItem('imgur_token'),
};

const getters = {
  isLoggedIn: (state) => !!state.token
};

const actions = {
  login: () => {
    api.login();
  },
  logout: ({commit}) => {
    /* ES2015:argument destructuring
    *  (context) => {
    *     context.commit();
    *  }
    * */
    // (mutation_key, payload)
    commit('setToken', null);
    window.localStorage.removeItem('imgur_token');
  },
  finalizeLogin: ({commit}, hash) => {
    const query = qs.parse(hash.replace('#', ''));
    commit('setToken', query.access_token);
    window.localStorage.setItem('imgur_token', query.access_token);
  }
};
const mutations = {
  // (state, payload)
  setToken: (state, token) => {
    state.token = token;
  },
};

export default {
  state,
  getters,
  actions,
  mutations
}