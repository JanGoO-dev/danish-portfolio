<template>
  <div class="container ml-0 width-full">
    <span class="display-4">Profile Section</span>
    <p class="ml-1">The following form is responsible for modifing the data display in the hero section of your portfolio website.</p>
    <form class="card p-5 mt-5 border-0 shadow-lg">
      <div class="form-row">
        <div class="form-group col-md-5">
          <label for="line-before-name">Line Before Name</label>
          <input type="text" class="form-control bg-transparent" id="line-before-name" :placeholder="sectionData.line_before_name">
        </div>
        <div class="form-group col-md-4">
          <label for="name">Your Name</label>
          <input type="text" class="form-control bg-transparent" id="name" :placeholder="sectionData.owner_name">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="line-before-experiences">Line Before Experiences</label>
          <input type="text" class="form-control bg-transparent" id="name" :placeholder="sectionData.owner_name">
        </div>
        <div class="form-group col-md-12">
          <label for="name">Your Experiences</label>
          <div class="d-flex flex-row flex-wrap justify-content-start">
            <input 
              v-for="(experience, index) in sectionData.owner_experties" 
              :key="index" 
              type="text" 
              class="form-control bg-transparent mr-1 mb-1 w-auto" 
              id="line-before-experiences" 
              :placeholder="experience">
              <button class="btn btn-info text-center px-3 py-1 ml-4 rounded my-2">
                Add <span v-show="!isMobile">a new Experience</span>
                <span class="icon-plus font-weight-bold p-0"></span>
              </button>
              <button class="btn btn-info text-center px-3 py-1 ml-4 rounded my-2">
                Remove <span v-show="!isMobile">an Experience</span>
                <span class="icon-minus font-weight-bold p-0"></span>
              </button>
          </div>
        </div>
      </div>
      <div class="card w-25 my-3">
        <img class="img-fluid" src="/static/images/image_1.jpg">
      </div>
      <div class="form-row ml-1">
        <div class="col-md-12"><strong class="font-weight-bold">Your Image</strong> <br> <small>NOTE: This image will display in the background of Hero Section of your portfolio website.</small></div>
        <div class="form-group custom-file col-md-4 mb-4">
          <input type="file" class="custom-file-input ml-0" id="customFileLang" lang="es">
          <label class="custom-file-label" for="customFileLang" style="overflow: hidden;">Choose an image from you PC</label>
        </div>
      </div>
      <div class="form-row">
        <button type="submit" class="btn btn-info btn-lg py-3 w-auto ml-auto"><i class="icon-checkmark px-3"></i> Save Changes</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      isMobile: false
    }
  },
  computed: {
    sectionData() {
      return this.$store.getters.get_hero_Section_obj;
    }
  },
  mounted() {
    if (window.innerWidth < 500) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth < 500) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }
}
</script>

<style>
.width-full {
  grid-column: span 6;
}

.form-control::-webkit-input-placeholder {
  color: gray;
}
</style>