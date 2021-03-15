<template>
  <section class="site-section pb-5 mb-5"  id="section-service">
		<div class="container">

			<div class="row mb-4">
				<div class="col-md-12">
					<div class="section-heading text-center">
						<h2>My <strong>Services</strong></h2>
					</div>
				</div>
			</div>
			<div class="row">

				<div class="col-md-4 col-lg-3 text-center mb-4">
					<div class="site-service-item site-animate" data-animate-effect="fadeIn">
						<span class="icon">
							<span class="icon-tools2"></span>
						</span>
						<h3>Logo Design</h3>
					</div>
				</div>
				<div class="col-md-4 col-lg-3 text-center mb-4">
					<div class="site-service-item site-animate" data-animate-effect="fadeIn">
						<span class="icon">
							<span class="icon-pencil3"></span>
						</span>
						<h3>Illustration</h3>
					</div>
				</div>
				<div class="col-md-4 col-lg-3 text-center mb-4">
					<div class="site-service-item site-animate" data-animate-effect="fadeIn">
						<span class="icon">
							<span class="icon-browser2"></span>
						</span>
						<h3>UI/UX Design</h3>
					</div>
				</div>
				<div class="col-md-4 col-lg-3 text-center mb-4">
					<div class="site-service-item site-animate" data-animate-effect="fadeIn">
						<span class="icon">
							<span class="icon-picture"></span>
						</span>
						<h3>Photo Editting</h3>
					</div>
				</div>
				<div class="col-md-4 col-lg-3 text-center mb-4">
					<div class="site-service-item site-animate" data-animate-effect="fadeIn">
						<span class="icon">
							<span class="icon-pictures"></span>
						</span>
						<h3>Photo Retouching</h3>
					</div>
				</div>
				<div class="col-md-4 col-lg-3 text-center mb-4">
					<div class="site-service-item site-animate" data-animate-effect="fadeIn">
						<span class="icon">
							<span class="icon-paintbrush"></span>
						</span>
						<h3>Poster/Banner Design</h3>
					</div>
				</div>
				<div class="col-md-4 col-lg-3 text-center mb-4">
					<div class="site-service-item site-animate" data-animate-effect="fadeIn">
						<span class="icon">
							<span class="icon-gift2"></span>
						</span>
						<h3>Business Card Design</h3>
					</div>
				</div>
				<div class="col-md-4 col-lg-3 text-center mb-4">
					<div class="site-service-item site-animate" data-animate-effect="fadeIn">
						<span class="icon">
							<span class="icon-expand"></span>
						</span>
						<h3>Image Tracing</h3>
					</div>
				</div>

				

			</div>

			<div class="row mb-4">
				<div class="col-md-12">
					<div class="section-heading text-center">
						<h2><strong>Tools</strong> I use</h2>
					</div>
				</div>
			</div>
			<div class="card mb-5" style="background-color: #333">
				<div class="d-flex flex-wrap justify-content-center">

					<div v-for="(icon, index) in adobeIcons" :key="index" class="text-center my-4">
						<div class="site-animate" data-animate-effect="fadeIn">
							<img class="mx-2" :src="icon.image" width="60">
						</div>
					</div>

				</div>
			</div>

		</div>
	</section>
</template>

<script>
export default {
    name: "ServicesSection",
	data() {
		return {
			adobeIcons: [
				{ image: "/static/images/icons/AfterEffects-512.png" },
				{ image: "/static/images/icons/Animate-512.png" },
				{ image: "/static/images/icons/Illustrator-512.png" },
				{ image: "/static/images/icons/InDesign-512.png" },
				{ image: "/static/images/icons/Lightroom-512.png" },
				{ image: "/static/images/icons/Photoshop-512.png" },
				{ image: "/static/images/icons/Premiere-512.png" },
				{ image: "/static/images/icons/XD-512.png" }
			]
		}
	}
}
</script>