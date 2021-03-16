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
        <div class="row grid">
          <div
            v-for="(project, index) in projectsData.featuredProjects"
            :key="index"
            class="single-portfolio col-sm-4 all"
            :class="project.tagClass"
          >
            <div class="relative">
              <div class="thumb">
                <div class="overlay overlay-bg"></div>
                <img
                  class="image img-fluid"
                  :src="project.porjectImage"
                  alt=""
                />
              </div>
            </div>
            <div class="p-inner">
              <h4>{{ project.projectTitle }}</h4>
              <div class="cat text-capitalize">{{ project.tagClass }}</div>
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
  computed: {
    projectsData() {
      return this.$store.getters.get_projects;
    }
  }
};
</script>
