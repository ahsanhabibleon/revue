import Vue from "vue";
import Vuex from "vuex";
import Home from "@/views/Home/store";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    Home
  }
});
