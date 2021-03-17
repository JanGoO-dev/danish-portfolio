import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import Tiles from "../views/dashboard/Tiles.vue";
import Profile from "../views/dashboard/Profile.vue";
import Portfolio from "../views/dashboard/Portfolio.vue";
import Resume from "../views/dashboard/Resume.vue";
import About from "../views/dashboard/About.vue";
import Services from "../views/dashboard/Services.vue";
import Contact from "../views/dashboard/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      reload: true,
    },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "",
        name: "Tiles",
        component: Tiles
      },
      {
        path: "profile",
        name: "Profile",
        component: Profile
      },
      {
        path: "portfolio",
        name: "Portfolio",
        component: Portfolio
      },
      {
        path: "resume",
        name: "Resume",
        component: Resume
      },
      {
        path: "about",
        name: "About",
        component: About
      },
      {
        path: "services",
        name: "Services",
        component: Services
      },
      {
        path: "contact",
        name: "Contact",
        component: Contact
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
