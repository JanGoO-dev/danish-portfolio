<template>
  <section class="site-section mt-5" id="section-about">
    <div class="container">
      <div class="row mb-5 align-items-center">
        <div class="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
          <img
            :src="aboutSectionData.about_owner_image"
            alt="Image placeholder"
            class="img-fluid"
          />
        </div>
        <div class="col-lg-5 pl-lg-5">
          <div class="section-heading">
            <h2>About <strong>Me</strong></h2>
          </div>
          <p 
            class="text-justify"
            v-for="(paragraph, index) in aboutSectionData.about_paragraphs" 
            :key="index" 
            :class="{ 
              'lead': index != aboutSectionData.about_paragraphs.length - 1,
              'mb-5': index == aboutSectionData.about_paragraphs.length - 1
              }">
            {{ paragraph }}
          </p>

          <p>
            <a
              :href="aboutSectionData.professional_profile_link"
              target="_blank"
              class="btn btn-warning text-white px-4 py-2 btn-sm smoothscroll"
              >Hire Me</a
            >
            <a
              :href="aboutSectionData.owner_resume_pdf_link"
              target="_blank"
              class="btn btn-secondary px-4 py-2 btn-sm ml-3"
              >Download Resume</a
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
  computed: {
    aboutSectionData() {
      return this.$store.getters.get_about_section_obj;
    }
  }
};
</script>
