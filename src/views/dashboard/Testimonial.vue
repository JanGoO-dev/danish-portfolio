<template>
  <div class="container ml-0 width-full">
    <span class="display-4">Testimonial Section</span>
    <p class="ml-1">The following form is responsible for ADDING, MODIFING, REMOVING and VIEWING the reviews displayed in the Testimonial Section of your portfolio website.</p>
    <form class="card p-5 mt-5 border-0 shadow-lg">
      <div class="form-row">
        <div class="form-group col-md-5">
          <label for="line-before-name">Name of the Client</label>
          <input type="text" class="form-control bg-transparent" id="line-before-name" placeholder="Enter the client name here ..">
        </div>
        <div class="form-group col-md-4">
          <label for="name">Client Profile Link</label>
          <input type="text" class="form-control bg-transparent" id="name" placeholder="Enter client profile link here ..">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-8">
          <label for="line-before-experiences">Client Review</label>
          <textarea rows="4" class="form-control bg-transparent" placeholder="Enter client review here .."></textarea>
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
  computed: {
    sectionData() {
      return this.$store.getters.get_hero_Section_obj;
    }
  }
}
</script>