<template>
  <section class="site-section pb-5 mb-5" id="section-service">
    <div class="container">
      <div class="row mb-4">
        <div class="col-md-12">
          <div class="section-heading text-center">
            <h2>My <strong>Services</strong></h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-lg-3 text-center mb-4">
          <div
            class="site-service-item site-animate"
            data-animate-effect="fadeIn"
          >
            <span class="icon">
              <span class="icon-tools2"></span>
            </span>
            <h3>Logo Design</h3>
          </div>
        </div>
        <div class="col-md-4 col-lg-3 text-center mb-4">
          <div
            class="site-service-item site-animate"
            data-animate-effect="fadeIn"
          >
            <span class="icon">
              <span class="icon-pencil3"></span>
            </span>
            <h3>Illustration</h3>
          </div>
        </div>
        <div class="col-md-4 col-lg-3 text-center mb-4">
          <div
            class="site-service-item site-animate"
            data-animate-effect="fadeIn"
          >
            <span class="icon">
              <span class="icon-browser2"></span>
            </span>
            <h3>UI/UX Design</h3>
          </div>
        </div>
        <div class="col-md-4 col-lg-3 text-center mb-4">
          <div
            class="site-service-item site-animate"
            data-animate-effect="fadeIn"
          >
            <span class="icon">
              <span class="icon-picture"></span>
            </span>
            <h3>Photo Editting</h3>
          </div>
        </div>
        <div class="col-md-4 col-lg-3 text-center mb-4">
          <div
            class="site-service-item site-animate"
            data-animate-effect="fadeIn"
          >
            <span class="icon">
              <span class="icon-pictures"></span>
            </span>
            <h3>Photo Retouching</h3>
          </div>
        </div>
        <div class="col-md-4 col-lg-3 text-center mb-4">
          <div
            class="site-service-item site-animate"
            data-animate-effect="fadeIn"
          >
            <span class="icon">
              <span class="icon-paintbrush"></span>
            </span>
            <h3>Poster/Banner Design</h3>
          </div>
        </div>
        <div class="col-md-4 col-lg-3 text-center mb-4">
          <div
            class="site-service-item site-animate"
            data-animate-effect="fadeIn"
          >
            <span class="icon">
              <span class="icon-gift2"></span>
            </span>
            <h3>Business Card Design</h3>
          </div>
        </div>
        <div class="col-md-4 col-lg-3 text-center mb-4">
          <div
            class="site-service-item site-animate"
            data-animate-effect="fadeIn"
          >
            <span class="icon">
              <span class="icon-expand"></span>
            </span>
            <h3>Image Tracing</h3>
          </div>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-md-12">
          <div class="section-heading text-center">
            <h2><strong>Tools</strong> I use</h2>
          </div>
        </div>
      </div>
      <div 
        class="card mb-5" 
        style="background-color: #333"
      >
        <div 
          class="d-flex flex-wrap justify-content-center"
          @mouseover="enter"
          @mouseleave="leave"
        >
          <div
            v-for="(icon, index) in adobeIcons"
            :key="index"
            class="text-center my-4"
          >
            <div 
              class="site-animate" 
              data-animate-effect="fadeIn"
              @mouseover="detectHover(index)"
              @mouseleave="detectHover(index)"
            >
              <img 
                class="mx-2" 
                :src="icon.image" width="60" 
                :class="{ 'scale-image': index == hoverIndex & mouseAvailable, 'scale-image-left': index == hoverIndex - 1 & mouseAvailable, 'scale-image-right': index == hoverIndex + 1 & mouseAvailable, 'scale-image-left-left': index == hoverIndex - 2 & mouseAvailable, 'scale-image-right-right': index == hoverIndex + 2 & mouseAvailable }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServicesSection",
  data() {
    return {
      hoverIndex: -99,
      mouseAvailable: false,
      adobeIcons: [
        { image: "/static/images/icons/Illustrator-512.png" },
        { image: "/static/images/icons/Photoshop-512.png" },
        { image: "/static/images/icons/Lightroom-512.png" },
        { image: "/static/images/icons/luminar-ai.png" },
        { image: "/static/images/icons/XD-512.png" },
        { image: "/static/images/icons/InDesign-512.png" },
        { image: "/static/images/icons/Premiere-512.png" },
        { image: "/static/images/icons/AfterEffects-512.png" },
        { image: "/static/images/icons/Animate-512.png" }
      ]
    };
  },
  methods: {
    detectHover(index) {
      if (this.mouseAvailable) {
        this.hoverIndex = index;
      } else {
        this.hoverIndex = -99;
      }
    },
    enter() {
      this.mouseAvailable = true;
    },
    leave() {
      this.mouseAvailable = false;
    }
  }
};
</script>

<style scoped>

.scale-image {
  transform: scale(1.4);
  transition: ease-in-out 0.1s;
  margin: 0 16px !important;
}

.scale-image-left, .scale-image-right {
  transform: scale(1.2);
  transition: ease-in-out 0.07s;
  margin: 0 12px !important;
}

.scale-image-left-left, .scale-image-right-right {
  transform: scale(1.1);
  transition: ease-in-out 0.05s;
  margin: 0 8px !important;
}
</style>
