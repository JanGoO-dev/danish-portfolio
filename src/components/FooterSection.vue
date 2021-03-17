<template>
  <footer class="site-footer">
    <div class="container">
      <div class="row mb-5">
        <p class="col-12 text-center">
          <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
          Copyright &copy; All rights reserved | This website is made with
          <i class="icon-heart text-danger fa-beat" aria-hidden="true"></i> by
          <a href="#" target="_blank" class="text-warning">Asad Ali</a>
          <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
        </p>
      </div>

      <div class="row mb-5">
        <div class="col-md-12 text-center">
          <p>
            <a @mouseover="hover = true" @mouseleave="hover = false" v-for="(socialMedia, index) in footerSectionData.social_medias" :key="index" :href="socialMedia.profile_link" class="social-item social-media-icon" :class="{ 'shadow-lg': hover }">
              <span :class="socialMedia.icon"></span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
  data() {
    return {
      hover: false
    }
  },
  computed: {
    footerSectionData() {
      return this.$store.getters.get_footer_section_obj;
    }
  }
};
</script>

<style>
.social-media-icon:hover {
  color: black;
  background: white;
  transform: scale(1.2);
}


.fa-beat {
  margin: 0 10px;
  animation: fa-beat 2s ease infinite;
}

@keyframes fa-beat {
  0% {
    font-size: 1.3rem;
  }
  5% {
    font-size: 1.6rem;
  }
  20% {
    font-size: 1.3rem;
  }
  30% {
    font-size: 1.3rem;
  }
  35% {
    font-size: 1.6rem;
  }
  50% {
    font-size: 1.3rem;
  }
  55% {
    font-size: 1.6rem;
  }
  70% {
    font-size: 1.3rem;
  }
}
</style>
