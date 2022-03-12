<template>
  <div class="articledetailHolder" >
		<div class="col-12">
			<div class="row">
				<div class="col-12 sampleProducts">
						<h4 class="textColorBlack pb-4 text-left">
							Upload Prescription Choose Your Action
						</h4>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="boxShadow detailBox sampleProducts mb-lg-4 mb-md-4 mb-3">
						<div class="col-12">
							<div class="row">
								<div class="col-2 iconfontsPupload pt-md-0 pt-3">
									<i class="fas fa-file-signature"></i>
								</div>
								<div class="col-5 pt-3 pl-0 pl-md-3">
									<h4 class="textColorBlack pr-4">
										Upload 
										Prescription
									</h4>
								</div>
								<div class="col-5 px-0 text-right" style="padding-top:30px;">
									<button class="btn btn-primary btn-block" style="border-radius: 4px 0px 0px 4px;">
										Upload 
									</button>
								</div>
							</div>
						</div>	
					</div>
				</div>
				<div class="col-md-6">
					<div class="boxShadow detailBox sampleProducts mb-lg-4 mb-md-4 mb-3 py-lg-5">
						<div class="medicinePrescription">
							<div><img class="img-fluid" src="images/MedicineImg.jpg"></div>
							<h4 class="textColorBlack"><i class="fas fa-exclamation-circle"></i> Not : Prescription Should Contain</h4>
							<ul class="mt-3 Prescriptionlist">
								<li>
									Doctor Name And Signature
								</li>
								<li>
									Patient Name
								</li>
								<li>
									Date of Prescription
								</li>
								<li>
									Dont Crop out any part of the image
								</li>
								<li>
									Avoid blurred image
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'PrescriptionUpload',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
