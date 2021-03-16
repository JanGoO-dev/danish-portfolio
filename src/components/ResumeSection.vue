<template>
  <section class="site-section " id="section-resume">
    <div class="container">
      <div class="row">
        <div class="col-md-12 mb-5">
          <div class="section-heading text-center">
            <h2>My <strong>Resume</strong></h2>
          </div>
        </div>
        <div class="col-md-12">
          <a
            href="https://drive.google.com/file/d/1xeTN_UEUKNuM46tSql7ZjZsaSeQJ5jnx/preview"
            target="_blank"
          >
            <img
              @mouseover="hover = true"
              @mouseleave="hover = false"
              :class="{ 'animate-in': hover, 'animate-out': !hover }"
              src="/static/images/resume.svg"
              alt="Danish Fareed Resume SVG"
              draggable="false"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ResumeSection",
  data() {
    return {
      hover: true
    }
  }
};
</script>

<style>
img.animate-in {
  box-shadow: 80px 80px 0px -18px #222, 80px 80px 0px 1px #ffcc01;
  animation: fadeIn 1s forwards;
}

@keyframes fadeIn {
  0% {
    box-shadow: 0px 0px 0px -18px #222, 0px 0px 0px 1px #ffcc0100;
  }
  100% {
    box-shadow: 80px 80px 0px -18px #222, 80px 80px 0px 1px #ffcc01;
  }
}

img.animate-out {
  box-shadow: 80px 80px 0px -18px #222, 80px 80px 0px 1px #ffcc01;
  animation: fadeOut 1s forwards;
}

@keyframes fadeOut {
  0% {
    box-shadow: 80px 80px 0px -18px #222, 80px 80px 0px 1px #ffcc01;
  }
  100% {
    box-shadow: 0px 0px 0px -18px #222, 0px 0px 0px 1px #ffcc0100;
  }
}
</style>
