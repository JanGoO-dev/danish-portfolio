<template>
  <section class="site-section" id="section-contact">
    <div class="container">
      <div class="row">
        <div class="col-md-12 mb-5">
          <div class="section-heading text-center">
            <h2>Get <strong>In Touch</strong></h2>
          </div>
        </div>

        <div class="col-md-7 mb-5 mb-md-0">
          <form action="" class="site-form">
            <h3 class="mb-5">Get In Touch</h3>
            <div class="form-group">
              <input
                type="text"
                class="form-control px-3 py-4"
                placeholder="Your Name"
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control px-3 py-4"
                placeholder="Your Email"
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control px-3 py-4"
                placeholder="Your Phone"
              />
            </div>
            <div class="form-group mb-5">
              <textarea
                class="form-control px-3 py-3"
                cols="30"
                rows="6"
                placeholder="Write a Message"
              ></textarea>
            </div>
            <div class="form-group">
              <input
                type="submit"
                class="btn btn-warning text-white  px-4 py-3"
                value="Send Message"
              />
            </div>
          </form>
        </div>
        <div class="col-md-5 pl-md-5">
          <h3 class="mb-5">My Contact Details</h3>
          <ul class="site-contact-details">
            <li>
              <span class="text-uppercase text-warning">Email</span>
              <div v-for="(email, index) in contactSectionData.contact_emails" :key="index">{{ email }} <br></div>
            </li>
            <li>
              <span class="text-uppercase text-warning">Fax</span>
              <div v-for="(phone, index) in contactSectionData.contact_numbers" :key="index">{{ phone }} <br></div>
            </li>
            <li>
              <span class="text-uppercase text-warning">Address</span>
              {{ contactSectionData.address.street_number }} <br />
              {{ contactSectionData.address.city }} <br />
              {{ contactSectionData.address.province }}, {{ contactSectionData.address.country }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactSection",
  computed: {
    contactSectionData() {
      return this.$store.getters.get_contact_section_obj;
    }
  }
};
</script>
