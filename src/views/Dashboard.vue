
<template>
  <div class="d-flex bg-light text-dark" :class="{ 'toggled': navCollapse }" id="wrapper">

    <!-- Sidebar -->
    <div class="bg-light border-right pt-1 pb-3" id="sidebar-wrapper">
        <img class="img-fluid pt-4 pb-4 px-5 mb-5" width="250" src="/static/images/danish-logo.png">
      <!-- <div class="sidebar-heading text-dark">Heading</div> -->
      <div class="list-group">
        <span v-for="(link, index) in navLinks" :key="index" class="mb-2 px-3">
            <a @mouseover="activateNavHover(index)" @mouseleave="deactivateNavHover(index)" :class="{ 'shadow-lg': link.hover, 'bg-light': !link.hover, 'bg-info': link.hover, 'text-white': link.hover }" :href="link.href" class="border-0 list-group-item list-group-item-action py-3"><i :class="link.icon" class="mr-3"></i>{{ link.title }}</a>
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
              <a class="nav-link font-weight-bold" href="#" role="button">
                <span>
                    <span><img width="43" class="rounded-circle mr-3" src="/static/images/avatar.png"></span>
                    <span>Danish Fareed</span>
                </span>
              </a>
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
        <div id="alertBox" class="alert alert-success alert-dismissible fade show pt-4" role="alert">
            <strong>Welcome Back!</strong> <span class="text-dark font-weight-bold">Danish Fareed</span> to your Dashboard. <br> Here you can configure what you want to display on you Portfolio website.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div v-for="(tile, index) in cardTiles" :key="index" @mouseover="activateTileHover(index)" @mouseleave="deactivateTileHover(index)" class="card grid-item cursor-pointer w-100 h-100" :class="{ 'shadow-lg': tile.hover, 'bg-light': !tile.hover, 'bg-white': tile.hover }">
            <div class="card-body">
                <h5 class="card-title text-info font-weight-bold">{{ tile.title }}</h5>
                <p class="card-text">{{ tile.description }}</p>
                <span v-for="(badge, index) in tile.feilds" :key="index" class="badge badge-info mr-2">{{ badge.title }}</span>
            </div>
        </div>
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
            navLinks: [
                { href: "#", title: "Dashboard", icon: "icon-grid2", hover: false },
                { href: "#", title: "Profile", icon: "icon-profile-male", hover: false },
                { href: "#", title: "Portfolio", icon: "icon-book-open", hover: false },
                { href: "#", title: "Resume", icon: "icon-clipboard3", hover: false },
                { href: "#", title: "About", icon: "icon-wine", hover: false },
                { href: "#", title: "Services", icon: "icon-toolbox", hover: false },
                { href: "#", title: "Contact", icon: "icon-chat2", hover: false }
            ],
            cardTiles: [
                { href: "#", title: "Dashboard", description: "This will display all tiles available to you for customizing your portfolio's each seperate section.", feilds: [{ title: "Profile" }, { title: "Portfolio" }, { title: "Resume" }], hover: false },
                { href: "#", title: "Profile", description: "You can change your personal data in this page.", feilds: [{ title: "Name" }, { title: "Image URL" }, { title: "Experties" }], hover: false },
                { href: "#", title: "Portfolio", description: "You can ADD, VIEW, CHANGE and REMOVE your projects displayed in the portfolio section of your website.", feilds: [{ title: "Projects" }, { title: "Project Image" }, { title: "Project Type" }, { title: "Project Name" }, { title: "Project PDF Link" }], hover: false },
                { href: "#", title: "Resume", description: "You can change your Resume PNG file displayed on your website.", feilds: [{ title: "Resume PNG" }, { title: "Resume PDF Link" }], hover: false },
                { href: "#", title: "About", description: "You can change your About and display image of yourself displayed in about section.", feilds: [{ title: "Profile Picture" }, { title: "Resume PDF Link" }, { title: "Hire Me Link" }, { title: "About You Paragraph" }], hover: false },
                { href: "#", title: "Services", description: "You can ADD, VIEW, CHANGE and DELETE a service. Despite this, you can also ADD or REMOVE tools you are expert.", feilds: [{ title: "Services List" }, { title: "Tools List" }], hover: false },
                { href: "#", title: "Contact", description: "You can change your contact information displayed on your website.", feilds: [{ title: "Email Address" }, { title: "Phone Number" }, { title: "Physical Address OR Location" }], hover: false },
                { href: "#", title: "Your Resume/CV", description: "By clicking on this card you will be prompted to your Resume/CV PDF file opened inside and embaded pdf viewer provided by Google Drive in a new tab of your browser, where you can view changes made inside this admin dashboard.", feilds: [], hover: false },
                { href: "#", title: "Your Portfolio Website", description: "By clicking on this card you will be prompted to your Portfolio Website in a new tab of your browser, where you can view changes made inside this admin dashboard.", feilds: [], hover: false }
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
        activateTileHover(index) {
            this.cardTiles[index].hover = true;
        },
        deactivateTileHover(index) {
            this.cardTiles[index].hover = false;
        },
        toggleNav() {
            if (this.navCollapse) {
                this.navCollapse = false;
            } else {
                this.navCollapse = true;
            }
        }
    }
}
</script>

<style scoped>
i {
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