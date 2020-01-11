import api from '@/api/imgur'

const state = {
  token: null,
};

const getters = {
  isLoggedIn: (state) => !!state.token,
};

const actions = {
  login: () => {
    api.login();
  },
  logout: ({commit}) => {
    // vuex: use store.commit to commit (mutation, payload)
    commit('setToken', {token: null});
  },
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