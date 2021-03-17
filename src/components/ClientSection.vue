<template>
  <section class="site-section" id="section-client">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-12">
          <div class="section-heading text-center">
            <h2>Client <strong>Testimonial</strong></h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(clientTestimonial, index) in clientSectionData.client_reviews"
          :key="index"
          class="col-md-6"
        >
          <div class="block-47 d-flex mb-5">
            <div class="block-47-image">
              <img
                :src="clientTestimonial.client_picture"
                :alt="clientTestimonial.client_name"
                class="img-fluid"
              />
            </div>
            <blockquote class="block-47-quote">
              <p>&ldquo;{{ clientTestimonial.client_review }}&rdquo;</p>
              <cite class="block-47-quote-author"
                >&mdash;
                <a :href="clientSectionData.client_profile_link">{{ clientTestimonial.client_name }}</a></cite
              >
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ClientSection",
  computed: {
    clientSectionData() {
      return this.$store.getters.get_client_testimonial_section_obj;
    }
  }
};
</script>
