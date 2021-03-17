import { createStore } from "vuex";
import websiteData from "../assets/static/data.json";

export default createStore({
  state: {
    data: websiteData
  },
  getters: {
    get_hero_Section_obj(state) {
      return state.data.heroSection;
    },
    get_portfolio_section_obj(state) {
      return state.data.portfolioSection;
    },
    get_resume_section_obj(state) {
      return state.data.resumeSection;
    },
    get_about_section_obj(state) {
      return state.data.aboutSection;
    },
    get_client_testimonial_section_obj(state) {
      return state.data.clientTestimonial;
    },
    get_services_section_obj(state) {
      return state.data.serviceSection;
    },
    get_contact_section_obj(state) {
      return state.data.contactSection;
    },
    get_footer_section_obj(state) {
      return state.data.footerSection;
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
