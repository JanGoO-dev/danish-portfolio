<template>
  
  <nav-bar />
  <hero-section image="/static/images/image_1.jpg" :name="name" :tagLine="tagLine" />
  <portfolio-section />
  <resume-section />
  <about-section />
  <client-section />
  <services-section />
  <contact-section />
  <footer-section />

</template>

<script>

import AboutSection from "./components/AboutSection.vue";
import ClientSection from "./components/ClientSection.vue";
import ContactSection from "./components/ContactSection.vue";
import HeroSection from "./components/HeroSection.vue";
import NavBar from "./components/NavBar.vue";
import PortfolioSection from './components/PortfolioSection.vue';
import ResumeSection from "./components/ResumeSection.vue";
import ServicesSection from "./components/ServicesSection.vue";
import FooterSection from "./components/FooterSection.vue";

export default {
  name: "App",
  components: {
    NavBar,
    HeroSection,
    PortfolioSection,
    ResumeSection,
    AboutSection,
    ClientSection,
    ServicesSection,
    ContactSection,
    FooterSection
  },
  computed: {
    name() {
      return this.$store.getters.get_hero_section_name;
    },
    tagLine() {
      return this.$store.getters.get_hero_Section_tagLine;
    }
  }
};
</script>
