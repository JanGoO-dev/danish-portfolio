<template>
  <div class="container ml-0 width-full">
    <span class="display-4">Portfolio Section</span>
    <p class="ml-1 w-75">The following form is responsible for ADDING, REMOVING, UPDATING and VIEWING your projects that are being displayed inside portfolio sectiono of you portfolio website.</p>
    <form class="card p-5 mt-5 border-0 shadow-lg">
      <h3 class="text-dark">Currently Displyed Projects</h3>
      <div class="form-row my-3">
        <img v-for="(project, index) in sectionData.projects" :key="index" :src="project.project_image" class="col-md-2">
      </div>
      <h3 class="text-dark mt-5 border-bottom pb-3 mb-4">Add a new project</h3>
      <div class="form-row">
        <div class="form-group col-md-5">
          <label for="line-before-name">Project Title</label>
          <input type="text" class="form-control bg-transparent" id="line-before-name" placeholder="Enter Project Title Here ..">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="line-before-experiences">Select Project Type</label>
          <div v-for="(proj, index) in sectionData.projects" :key="index" class="form-check ml-3">
            <input class="form-check-input" name="radio" type="radio" :id="proj.project_type">
            <label class="form-check-label text-capitalize" :for="proj.project_type">
              {{ proj.project_type }}
            </label>
          </div>
        </div>
      </div>
      <div class="form-row ml-1">
        <div class="col-md-12"><strong class="font-weight-bold">Project Image</strong> <br> <small>NOTE: This image will be used as a display image for the project in Proftolio Section.</small></div>
        <div class="form-group custom-file col-md-4 mb-4">
          <input type="file" class="custom-file-input ml-0" id="customFileLang" lang="es">
          <label class="custom-file-label" for="customFileLang">Seleccionar Archivo</label>
        </div>
      </div>
      <div class="form-row">
        <button type="submit" class="btn btn-info btn-lg py-3 ml-auto"><i class="icon-plus2 pl-3"></i> Add Project</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  computed: {
    sectionData() {
      return this.$store.getters.get_portfolio_section_obj;
    }
  }
}
</script>