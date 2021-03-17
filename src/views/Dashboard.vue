
<template>
  <div class="d-flex bg-light text-dark" :class="{ 'toggled': navCollapse }" id="wrapper">

    <!-- Sidebar -->
    <div class="bg-light border-right pt-1 pb-3" id="sidebar-wrapper">
        <img class="img-fluid pt-4 pb-4 px-5 mb-5" width="250" src="/static/images/danish-logo.png">
      <!-- <div class="sidebar-heading text-dark">Heading</div> -->
      <div class="list-group">
        <span v-for="(link, index) in navLinks" :key="index" class="mb-2 px-3">
          <router-link
            @mouseover="activateNavHover(index)" 
            @mouseleave="deactivateNavHover(index)" 
            :class="{ 
              'shadow-lg bg-info text-white': link.hover, 
              'bg-light': !link.hover,
              'bg-dark text-white': index == clickedIndex | $route.path == link.href
              }" 
              :to="link.href" 
              class="border-0 list-group-item list-group-item-action py-3"
              @click="detectClick(index)"
          >
            <i :class="link.icon" class="dash-icon mr-3"></i>{{ link.title }}
          </router-link>
        </span>
      </div>
    </div>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">

      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom d-flex justify-content-between">
          
        <button @click="toggleNav" class="btn btn-info btn-lg ml-5" id="menu-toggle" style="width: 200px; height: 60px;">
            <i class="icon-layers2 mr-3 align-center"></i>
            <span class="align-center">
                <span v-if="navCollapse">Expand</span>
                <span v-else>Collapse</span>
            </span>
        </button>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mt-2 mt-lg-0 py-2 ml-auto mr-5 pl-5">
            <li class="nav-item border-right mt-1">
              <router-link class="nav-link font-weight-bold" to="/dashboard/profile" role="button">
                <span>
                    <span><img width="43" class="rounded-circle mr-3" src="/static/images/avatar.png"></span>
                    <span>Danish Fareed</span>
                </span>
              </router-link>
            </li>
            <li class="nav-item mt-2">
              <a class="nav-link" href="#" role="button">
                <span class="h6">
                    <span>Log Out</span>
                    <span class="icon-log-out ml-3"></span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="container-fluid bg-light p-5 grid">
        <router-view />
      </div>
    </div>
    <!-- /#page-content-wrapper -->

  </div>
</template>

<script>
export default {
    data() {
        return {
            navCollapse: false,
            clickedIndex: -99,
            navLinks: [
                { href: "/dashboard", title: "Dashboard", icon: "icon-grid2", hover: false },
                { href: "/dashboard/profile", title: "Profile", icon: "icon-profile-male", hover: false },
                { href: "/dashboard/portfolio", title: "Portfolio", icon: "icon-book-open", hover: false },
                { href: "/dashboard/resume", title: "Resume", icon: "icon-clipboard3", hover: false },
                { href: "/dashboard/about", title: "About", icon: "icon-wine", hover: false },
                { href: "/dashboard/services", title: "Services", icon: "icon-toolbox", hover: false },
                { href: "/dashboard/contact", title: "Contact", icon: "icon-chat2", hover: false }
            ]
        }
    },
    methods: {
        activateNavHover(index) {
            this.navLinks[index].hover = true;
        },
        deactivateNavHover(index) {
            this.navLinks[index].hover = false;
        },
        toggleNav() {
            if (this.navCollapse) {
                this.navCollapse = false;
            } else {
                this.navCollapse = true;
            }
        },
        detectClick(index) {
          this.clickedIndex = index;
        }
    }
}
</script>

<style>
i.dash-icon {
    position: relative;
    font-size: 1.6em;
    bottom: -0.165em;
}

.grid {
    height: calc(100vh - 10%);
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 2em;
}

.grid div.grid-item {
    grid-column: span 2;
}

#alertBox {
    grid-column: span 6;
}

/* .grid div.grid-item:nth-child(1) {
    grid-column: 1 / span 2;
    grid-row: 1 / span 1;
}

.grid div.grid-item:nth-child(2) {
    grid-column: 3 / span 1;
    grid-row: 1 / span 2;
}

.grid div.grid-item:nth-child(3) {
    grid-column: 4 / span 2;
    grid-row: 1 / span 2;
} */

.cursor-pointer {
    cursor: pointer;
}

#wrapper {
    overflow-x: hidden;
}

#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin .25s ease-out;
  -moz-transition: margin .25s ease-out;
  -o-transition: margin .25s ease-out;
  transition: margin .25s ease-out;
}

#sidebar-wrapper .sidebar-heading {
  padding: 1.250rem 1.25rem;
  font-size: 1.9rem;
}

#sidebar-wrapper .list-group {
  width: 15rem;
}

#page-content-wrapper {
  min-width: 100vw;
}

#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
}

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -15rem;
  }
}

@media (max-width: 1250px) {
    .grid div.grid-item {
        grid-column: span 3;
    }
}

@media (max-width: 1000px) {
    .grid div.grid-item {
        grid-column: span 6;
    }
}
</style>