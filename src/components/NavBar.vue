<template>
  <div class="dabba invisible"></div>
  <nav
    class="navbar navbar-expand-lg site-navbar navbar-light bg-light"
    id="pb-navbar"
  >
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample09"
        aria-controls="navbarsExample09"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse justify-content-md-center"
        id="navbarsExample09"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#section-home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#section-portfolio">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#section-resume">Resume</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#section-about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#section-client">Testimonial</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#section-service">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#section-contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');

.dabba {
  position: fixed;
  top: 1.2rem;
  left: 4%;
  width: 10%;
  height: 30%;
  background: #FFCC01;
  z-index: 999;
  font-family: 'Roboto', sans-serif;
}

.dabba::before,
.dabba::after {
  text-transform: uppercase;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.75em;
}

.dabba::before {
  content: 'Danish';
  bottom: -10px;
  color: Black;
}

.dabba::after {
  content: 'Fareed';
  bottom: -66px;
  color: white;
}

li:hover a {
  transform: scale(1.2);
  color: #FFCC01 !important;
}

@media (max-width: 1300px) {
  .dabba {
    display: none;
  }
}

@media (max-width: 1790px) {
  .dabba::before,
  .dabba::after {
    font-size: 2.5em;
  }
}

@media (max-width: 1640px) {
  .dabba::before,
  .dabba::after {
    font-size: 2.2em;
  }
  .dabba::before {
    bottom: -4px;
  }
  .dabba::after {
    bottom: -56px;
  }
}

@media (max-width: 1430px) {
  .dabba::before,
  .dabba::after {
    font-size: 1.8em;
  }
  .dabba::before {
    bottom: -4px;
  }
  .dabba::after {
    bottom: -46px;
  }
}
</style>
