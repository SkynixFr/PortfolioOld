import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

const vp = new VuexPersist({
  key: "store",
  storage: window.localStorage
});

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [vp.plugin],
  state: {
    theme: false
  },
  mutations: {
    updateTheme(state, data) {
      state.theme = data;
    }
  },
  actions: {},
  modules: {}
});
