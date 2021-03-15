<template>
  <section class="site-section">
		<div class="container">
			<div class="row mb-5">
				<div class="col-md-12">
					<div class="section-heading text-center">
						<h2>Client <strong>Testimonial</strong></h2>
					</div>
				</div>
			</div>
			<div class="row">

				<div v-for="(clientTestimonial, index) in clientTestimonials" :key="index" class="col-md-6">

					<div class="block-47 d-flex mb-5">
						<div class="block-47-image">
							<img :src="clientTestimonial.clientProfile" :alt="clientTestimonial.clientName" class="img-fluid">
						</div>
						<blockquote class="block-47-quote">
							<p>&ldquo;{{ clientTestimonial.clientReview }}&rdquo;</p>
							<cite class="block-47-quote-author">&mdash; <a href="#">{{ clientTestimonial.clientName }}</a></cite>
						</blockquote>
					</div>

				</div>

			</div>
		</div>
	</section>
</template>

<script>
export default {
    name: "ClientSection",
	data() {
		return {
			clientTestimonials: [
				{ 
					clientName: "Asad Ali", 
					clientProfile: "/static/images/person_1.jpg", 
					clientReview: "U hired Danish to design the concept for my firm’s logo and stationary. Danish was great to work with and is very willing to put in the extra effort to get things just right. I highly recommend him.”" 
				},
				{ 
					clientName: "Babar Ali", 
					clientProfile: "/static/images/person_2.jpg", 
					clientReview: "I worked with Danish on designing a logo for my new hair salon. He did an incredible job in a short time and at a great price. He was easy to work with, had great ideas and a good listener. I highly recommend him to anyone looking for a graphic designer.”" 
				},
				{ 
					clientName: "Muhammad Ali Shahzad", 
					clientProfile: "/static/images/person_3.jpg", 
					clientReview: "Incredibly happy with the work we had done with DesignBuddy. We will absolutely use these services again and will recommend to anyone looking to get a logo made at a very reasonable price. Great work through and through.”" 
				},
				{ 
					clientName: "Atta Fareed", 
					clientProfile: "/static/images/person_4.jpg", 
					clientReview: "Danish did an amazing job creating the perfect logo for our company. He was great at both communicating as well as listening to our particular needs and vision. I will use him again for any future graphic design work.”" 
				}
			]
		}
	}
}
</script>