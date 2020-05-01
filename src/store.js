import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    introAnimationRun: false
  },
  mutations: {
    animHasRun(state) {
      state.introAnimationRun = true;
    }
  },
  actions: {}
});
