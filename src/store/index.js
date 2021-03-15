import { createStore } from "vuex";
import staticData from "../assets/static/data.json";

export default createStore({
  state: {
    data: staticData
  },
  getters: {
    get_hero_section_name(state) {
      return state.data.personalDetails.name;
    },
    get_hero_Section_tagLine(state) {
      return state.data.personalDetails.tagLine;
    },
    get_projects(state) {
      return state.data.projectsDetails;
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
