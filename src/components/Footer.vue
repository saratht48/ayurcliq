<template>
  <div class="col-12 footer">
	<div class="row">
		<div class="col-12 pb-3">
			<h1 class="heading">AyurCliQ</h1>
		</div>
		<div class="col-lg-3 col-md-6">
			<ul>
				<li>
					<a href="#">About Us</a>
				</li>
				<li>
					<a href="#">Contact Us</a>
				</li>	
			</ul>
		</div>
		<div class="col-lg-3 col-md-6">
			<ul>
				<li>
					<a href="#">Privacy Policy</a>
				</li>
				<li>
					<a href="#">Terms & Conditions</a>
				</li>	
			</ul>
		</div>
		<div class="col-lg-3 col-md-6">
			<ul>
				<li>
					<a href="#">Buy Medicines</a>
				</li>
				<li>
					<a href="#">Free Doctor Consultation</a>
				</li>
				<li>
					<a href="#">Upload Prescription</a>
				</li>
				<li>
					<a href="#">Get Treatment Plan</a>
				</li>
				<li>
					<a href="#">Login</a>
				</li>
			</ul>
		</div>
		<div class="col-lg-3 col-md-6">
			<div class="socialIconsBase">
				<a href="#"><i class="fab fa-facebook-f socialIcons"></i></a>
				<a href="#"><i class="fab fa-twitter socialIcons"></i></a>
				<a href="#"><i class="fab fa-youtube socialIcons"></i></a>
				<a href="#"><i class="fab fa-instagram socialIcons"></i></a>
			</div>
		</div>
		<div class="col-12 p-3" >
			<div class="footersplit">
				<div class="row">
					<div class="col-lg-4 col-md-4 pt-4">
						<h4>Reliability</h4>
						<p class="text-white">Lorem ipsum Lorem ipsum Lorem ipsum</p>
					</div>
					<div class="col-lg-4 col-md-4 pt-4">
						<h4>Security</h4>
						<p class="text-white">Lorem ipsum Lorem ipsum Lorem ipsum</p>
					</div>
					<div class="col-lg-4 col-md-4 pt-4">
						<h4>Delivery</h4>
						<p class="text-white">Lorem ipsum Lorem ipsum Lorem ipsum</p>
					</div>
				</div>		
			</div>
		</div>
	</div>		
</div>
<div class="p-2 text-center">
	<img class="img-fluid" src="images/FooterIMG/Payment.png"/>
</div>
<div class="col-12 footer text-center">
	<div style="width:70%;margin: 0 auto;color: #fff;font-size: 18px; padding-top: 10px;">
		© 2021 AyurCliq . All rights reserved.<br> In compliance with Drugs and Cosmetics Act, 1940 and Drugs and Cosmetics Rules, 1945, we don't process requests for Schedule X and other habit forming drugs.
	</div>
</div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
  text-align: left;
}
</style>
