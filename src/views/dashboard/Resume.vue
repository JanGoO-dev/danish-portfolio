<template>
  <div class="container ml-0 width-full">
    <span class="display-4">Resume Section</span>
    <p class="ml-1 w-75">The following form is responsible for CHANGING resume display Resume SVG and its GOOGLE DRIVE PDF embaded.</p>
    <form class="card p-5 mt-5 border-0 shadow-lg">
      <h3 class="text-dark text-center">Currently Displyed Resume</h3>
      <div class="form-row my-3 mx-auto w-100">
        <img :src="sectionData.resume_svg" class="w-50 mx-auto card shadow">
      </div>
      <div class="form-row">
        <div class="form-group col-md-5">
          <label for="line-before-name">Resume PDF Link</label>
          <input type="text" class="form-control bg-transparent" id="line-before-name" placeholder="Enter Project PDF Link Here ..">
        </div>
      </div>
      <div class="form-row ml-1">
        <div class="col-md-12"><strong class="font-weight-bold">Resume SVG</strong> <br> <small>NOTE: This image will be used as a display image for the project in Proftolio Section.</small></div>
        <div class="form-group custom-file col-md-4 mb-4">
          <input type="file" class="custom-file-input ml-0" id="customFileLang" lang="es">
          <label class="custom-file-label" for="customFileLang">
            Choose Resume SVG
          </label>
        </div>
      </div>
      <div class="form-row">
        <button type="submit" class="btn btn-info btn-lg py-3 ml-auto"><i class="icon-checkmark pl-3"></i> Update Resume</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Resume",
  computed: {
    sectionData() {
      return this.$store.getters.get_resume_section_obj;
    }
  }
}
</script>