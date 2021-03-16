<template>
  <section
    class="site-hero"
    :style="{ backgroundImage: 'url(' + image + ')' }"
    id="section-home"
    data-stellar-background-ratio="0.5"
  >
    <div class="container-fluid">
      <div class="row intro-text align-items-center justify-content-center">
        <div class="col-md-10 text-center pt-5">
          <h1 class="site-heading site-animate">
            <!-- Hello, I'm  -->
            <!-- <strong class="d-block">
							{{ name }}
						</strong> -->
            <span class="d-block text-white text-uppercase letter-spacing">
              <div class="h3">{{ tagLine }} </div>
              <strong class="text-light display-4 name">{{ name }}</strong>
            </span>
          </h1>
          <div class="container">
            <h1>
              I have experience in
              <span class="typed-text"
                ><strong class="text-warning">{{ typeValue }}</strong></span
              >
              <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { setTimeout } from "timers";

export default {
  name: "HeroSection",
  props: ["image", "name", "tagLine"],
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      typeArray: ["UI/UX Design", "Photo Editing", "Business Card Design", "Video Editing", "Image Tracing"],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    }
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  }
};
</script>

<style scoped>
.h3 {
  position: relative;
  bottom: -16px;
  font-weight: lighter;
}

h1 {
  font-size: 2em;
}

.name {
  letter-spacing: 40%;
}

.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: #ffcc01;
  animation: cursorBlink 1s infinite;
}
.typing {
  animation: none;
}
@keyframes cursorBlink {
  49% {
    background-color: #ffcc01;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>
