<template>
  <div class="container ml-0 width-full">
    <span class="display-4">About Section</span>
    <p class="ml-1 w-75">The following form is responsible for MODIFING your about section data (e.g., you can add paragraphs to your about section). You can also update your professional profile link and your Resume PDF link here.</p>
    <form class="card p-5 mt-5 border-0 shadow-lg">
      <div class="form-row">
        <div class="form-group col-md-12">
          <label for="line-before-name">Your Professional Profile Link</label>
          <input type="text" class="form-control bg-transparent" id="line-before-name" placeholder="Past the link to your professional profile ..">
        </div>
        <div class="form-group col-md-12">
          <label for="name">Your Resume PDF Link</label>
          <input type="text" class="form-control bg-transparent" id="name" placeholder="Past link to the PDF file of your Resume ..">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-12">
          <label for="line-before-experiences">Your About</label>
          <textarea v-for="(para, index) in sectionData.about_paragraphs" :key="index" rows="4" class="form-control bg-transparent mb-3" :placeholder="para"></textarea>
        </div>
      </div>
      <div class="card w-25 my-3">
        <img class="img-fluid" src="/static/images/image_1.jpg">
      </div>
      <div class="form-row ml-1">
        <div class="col-md-12"><strong class="font-weight-bold">Your Image</strong> <br> <small>NOTE: This image will display on the left side of about section of your portfolio website.</small></div>
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
  name: "About",
  computed: {
    sectionData() {
      return this.$store.getters.get_about_section_obj;
    }
  }
}
</script>