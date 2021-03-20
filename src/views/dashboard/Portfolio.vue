<template>
  <div class="container ml-0 width-full">
    <span class="display-4">Portfolio Section</span>
    <p class="ml-1 w-75">The following form is responsible for ADDING, REMOVING, UPDATING and VIEWING your projects that are being displayed inside portfolio sectiono of you portfolio website.</p>
    <form class="card p-5 mt-5 border-0 shadow-lg">
      <h3 class="text-dark">Currently Displyed Projects</h3>
      <div class="form-row my-3">
        <img v-for="(project, index) in sectionData.projects" :key="index" :src="project.project_image" class="col-md-2">
      </div>
      <h3 class="text-dark mt-5 border-bottom pb-3 mb-4">Project Settings</h3>
      <div id="accordion">
        <div class="card border-0 mb-2">
          <div @click="collapsedOne = !collapsedOne" class="card-header border-0 bg-dark" style="cursor: pointer;" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <h5 class="mb-0">
              <button @click.prevent="collapsedOne = !collapsedOne" class="btn btn-link text-white" data-toggle="collapse" data-target="#collapseOne" :aria-expanded="!collapsedOne" aria-controls="collapseOne">
                Add a New Project
              </button>
              <span v-if="!collapsedOne" class="icon-circle-down float-right mt-2"></span>
              <span v-else class="icon-circle-up float-right mt-2"></span>
            </h5>
          </div>

          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body">
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
              <div class="form-row">
                <div class="col-md-4">
                  <img src="/static/images/img_placeholder_400x400.jpg" width="200">
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
            </div>
          </div>
        </div>
        <div class="card border-0 mb-2">
          <div @click="collapsedTwo = !collapsedTwo" class="card-header border-0 bg-dark" style="cursor: pointer;" id="headingOne" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
            <h5 class="mb-0">
              <button @click.prevent="collapsedTwo = !collapsedTwo" class="btn btn-link text-white" :data-toggle="collapsedTwo" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                Update an Existing Project
              </button>
              <span v-if="collapsedTwo" class="icon-circle-down float-right mt-2"></span>
              <span v-else class="icon-circle-up float-right mt-2"></span>
            </h5>
          </div>
          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
            <div class="card-body">
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
            </div>
          </div>
        </div>
        <div class="card border-0">
          <div @click="collapseThree = !collapsedThree" class="card-header border-0 bg-dark" style="cursor: pointer;" id="headingOne" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
            <h5 class="mb-0">
              <button @click.prevent="collapsedThree = !collapsedThree" class="btn btn-link text-white" :data-toggle="collapsedThree" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                Delete an Existing Project
              </button>
              <span v-if="collapsedThree" class="icon-circle-down float-right mt-2"></span>
              <span v-else class="icon-circle-up float-right mt-2"></span>
            </h5>
          </div>
          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
            <div class="card-body">
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
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      collapsedOne: true,
      collapsedTwo: true,
      collapsedThree: true
    }
  },
  computed: {
    sectionData() {
      return this.$store.getters.get_portfolio_section_obj;
    }
  }
}
</script>