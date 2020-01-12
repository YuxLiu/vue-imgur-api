import api from '@/api/imgur'
import qs from 'qs'
const state = {
  token: null,
};

const getters = {
  isLoggedIn: (state) => !!state.token
};

const actions = {
  login: () => {
    api.login();
  },
  logout: ({commit}) => {
    // vuex: use store.commit to commit (mutation, payload)
    commit('setToken', {token: null});
  },
  finalizeLogin: ({commit}, hash) => {
    const query = qs.parse(hash.replace('#', ''));
    commit('setToken', query.access_token);
  }
};
const mutations = {
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