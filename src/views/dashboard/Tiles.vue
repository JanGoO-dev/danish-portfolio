<template>
    <div id="alertBox" class="alert alert-success alert-dismissible fade show pt-4" role="alert">
        <strong>Welcome Back!</strong> <span class="text-dark font-weight-bold">Danish Fareed</span> to your Dashboard. <br> Here you can configure what you want to display on you Portfolio website.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div 
        v-for="(tile, index) in cardTiles" 
        :key="index" 
        @mouseover="activateTileHover(index)" 
        @mouseleave="deactivateTileHover(index)" 
        @click="executeHREF(tile.href)"
        class="card grid-item cursor-pointer w-100 h-100" 
        :class="{ 'shadow-lg': tile.hover, 'bg-light': !tile.hover, 'bg-white': tile.hover }"
    >
        <div class="card-body">
            <h5 class="card-title text-info font-weight-bold">{{ tile.title }}</h5>
            <p class="card-text">{{ tile.description }}</p>
            <span v-for="(badge, index) in tile.feilds" :key="index" class="badge badge-info mr-2">{{ badge.title }}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cardTiles: [
                { href: "/dashboard", title: "Dashboard", description: "This will display all tiles available to you for customizing your portfolio's each seperate section.", feilds: [{ title: "Profile" }, { title: "Portfolio" }, { title: "Resume" }], hover: false },
                { href: "/dashboard/profile", title: "Profile", description: "You can change your personal data in this page.", feilds: [{ title: "Name" }, { title: "Image URL" }, { title: "Experties" }], hover: false },
                { href: "/dashboard/portfolio", title: "Portfolio", description: "You can ADD, VIEW, CHANGE and REMOVE your projects displayed in the portfolio section of your website.", feilds: [{ title: "Projects" }, { title: "Project Image" }, { title: "Project Type" }, { title: "Project Name" }, { title: "Project PDF Link" }], hover: false },
                { href: "/dashboard/resume", title: "Resume", description: "You can change your Resume PNG file displayed on your website.", feilds: [{ title: "Resume PNG" }, { title: "Resume PDF Link" }], hover: false },
                { href: "/dashboard/about", title: "About", description: "You can change your About and display image of yourself displayed in about section.", feilds: [{ title: "Profile Picture" }, { title: "Resume PDF Link" }, { title: "Hire Me Link" }, { title: "About You Paragraph" }], hover: false },
                { href: "/dashboard/services", title: "Services", description: "You can ADD, VIEW, CHANGE and DELETE a service. Despite this, you can also ADD or REMOVE tools you are expert.", feilds: [{ title: "Services List" }, { title: "Tools List" }], hover: false },
                { href: "/dashboard/contact", title: "Contact", description: "You can change your contact information displayed on your website.", feilds: [{ title: "Email Address" }, { title: "Phone Number" }, { title: "Physical Address OR Location" }], hover: false },
                { href: "", title: "Your Resume/CV", description: "By clicking on this card you will be prompted to your Resume/CV PDF file opened inside and embaded pdf viewer provided by Google Drive in a new tab of your browser, where you can view changes made inside this admin dashboard.", feilds: [], hover: false },
                { href: "/", title: "Your Portfolio Website", description: "By clicking on this card you will be prompted to your Portfolio Website in a new tab of your browser, where you can view changes made inside this admin dashboard.", feilds: [], hover: false }
            ]
        }
    },
    mounted() {
        if (this.cardTiles[7].href == "") {
            this.cardTiles[7].href = this.$store.getters.get_resume_section_obj.resume_pdf_link;
        }
    },
    methods: {
        activateTileHover(index) {
            this.cardTiles[index].hover = true;
        },
        deactivateTileHover(index) {
            this.cardTiles[index].hover = false;
        },
        executeHREF(href) {
            if (this.cardTiles[7].href == href) {
                window.open(href);
            } else if (href == "/") {
                window.open(href);
            } else if (href == "/dashboard") {
                window.location.reload();
            } else {
                this.$router.push(href);
            }
        }
    }
}
</script>