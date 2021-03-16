<template>
  <section class="site-section" id="section-portfolio">
    <div class="container">
      <div class="row">
        <div class="section-heading text-center col-md-12">
          <h2>Featured <strong>Portfolio</strong></h2>
        </div>
      </div>

      <div class="filters">
        <ul>
          <li class="active" data-filter="*">All</li>
          <li
            class="text-capitalize"
            v-for="(filterClass, index) in projectsData.dataFilterClasses"
            :key="index"
            :data-filter="'.' + filterClass"
          >
            {{ filterClass }}
          </li>
        </ul>
      </div>

      <div class="filters-content">
        <div class="row">
          <div
            v-for="(project, index) in projectsData.featuredProjects"
            :key="index"
            class="single-portfolio mb-3 col-lg-4 col-md-6 col-sm-12 all position-relative portfolio-card"
            :class="project.tagClass"
            @mouseover="detectHover(index)"
            @mouseleave="hoverIndex = -1"
          >
            <div class="relative">
              <div class="thumb">
                <div class="overlay overlay-bg"></div>
                <img
                  class="image img-fluid"
                  :class="{ 'decolorize push': index == hoverIndex }"
                  :src="project.porjectImage"
                  alt=""
                />
              </div>
            </div>
            <div class="p-inner ribben p-3" :class="{ 'animate-ribben': index == hoverIndex }">
              <span>
                <h4 class="text-white">{{ project.projectTitle }}</h4>
                <div class="cat text-capitalize text-white">{{ project.tagClass }}</div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      hoverIndex: -1
    }
  },
  computed: {
    projectsData() {
      return this.$store.getters.get_projects;
    }
  },
  methods: {
    detectHover(index) {
      this.hoverIndex = index;
    }
  }
};
</script>

<style scoped>
.position-relative {
  position: relative;
  cursor: pointer;
}

.ribben {
  position: absolute;
  top: 16px;
  left: 32px;
  right: 32px;
  bottom: 32px;
  background: #33333380;
  backdrop-filter: blur(2px);
  opacity: 0;
  transition: ease-in-out 0.6s;
  display: grid;
  place-items: center;
}

.position-relative:hover .ribben {
  opacity: 1;
}

.decolorize {
  filter: grayscale(1);
}

.push {
  transform: scale(0.9);
}
</style>
