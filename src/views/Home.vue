<template>
  <div @click="scrollToTop" class="scroll-up-card d-none"></div>
  <nav-bar />
  <hero-section />
  <portfolio-section />
  <resume-section />
  <about-section />
  <client-section />
  <services-section />
  <contact-section />
  <footer-section />
</template>

<script>
import AboutSection from "../components/AboutSection.vue";
import ClientSection from "../components/ClientSection.vue";
import ContactSection from "../components/ContactSection.vue";
import HeroSection from "../components/HeroSection.vue";
import NavBar from "../components/NavBar.vue";
import PortfolioSection from '../components/PortfolioSection.vue';
import ResumeSection from "../components/ResumeSection.vue";
import ServicesSection from "../components/ServicesSection.vue";
import FooterSection from "../components/FooterSection.vue";
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
  methods: {
    scrollToTop() {
      window.scroll(0, 0);
    }
  }
};
</script>

<style scoped>

.scroll-up-card {
  position: fixed;
  right: 20px;
  bottom: -40px;
  background: #FFCC01;
  width: 100px;
  height: 120px;
  z-index: 99;
  cursor: pointer;
  transition: ease-in-out 0.6s;
}

.scroll-up-card::before {
  content: '^ \ scroll \ top';
  color: black;
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  top: 10px;
  line-height: 16px;
  font-weight: bold;
  left: 50%;
  transform: translateX(-50%);
}

.scroll-up-card:hover {
  bottom: 0;
}

</style>
