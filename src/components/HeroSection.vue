<template>
  <section class="site-hero" :style="{ backgroundImage: 'url(' + image + ')' }" id="section-home" data-stellar-background-ratio="0.5">
		
		<div class="container">
			<div class="row intro-text align-items-center justify-content-center">
				<div class="col-md-10 text-center pt-5">

					<h1 class="site-heading site-animate">Hello, I'm <strong class="d-block">{{ name }}</strong></h1>
					<strong class="d-block text-white text-uppercase letter-spacing">{{ tagLine }}</strong>

				</div>
			</div>
		</div>

	</section>
</template>

<script>
export default {
    name: "HeroSection",
	props: ['image', 'name', 'tagLine']
}
</script>