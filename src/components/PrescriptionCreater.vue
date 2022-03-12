<template>
  <div class="col-12 filterWrapper">
	<div style="width:95%;margin:0 auto;">
		<div class="row">
			<div class="col-md-3 my-md-5 mt-3">
				<div class="boxShadow" id="demo">
					<ul class="dashboardMenu text-left">
						<li> <a href="#"><i class="far fa-chart-bar pr-2 dMenuIS"></i> Dashboard</a></li>
						<li> <a href="#"><i class="fas fa-file-alt pr-2 dMenuIS"></i> Generate Prescription</a></li>
						<li> <a href="#"><i class="fas fa-user pr-2 dMenuIS"></i> My Patient</a></li>
						<li> <a href="#"><i class="fas fa-power-off pr-2 dMenuIS"></i> Sign out</a></li>
					</ul>
				</div>
			</div>
			<div class="col-md-9 mt-md-5 mb-md-5 mt-0 mb-4">
				<div class="dashbordGraphWrapper boxShadow">
					<h2 class="p-2 text-left">Prescription Generator</h2>
					
					

					<div class="row">
						<div class="col-md-6 col-12 mb-3">
							<input type="text" class="form-control" placeholder="Mobile" name="">
						</div>
						<div class="col-md-6 col-12 mb-3">
							<input type="text" class="form-control" placeholder="E-mail" name="">
						</div>
					</div> 

					<div class="row">
						<div class="col-md-6 col-12 mb-3">
							<input type="text" class="form-control" placeholder="Patient Name" name="">
						</div>
						<div class="col-md-2 col-4 mb-3">
							<input type="text" class="form-control" placeholder="Age" name="">
						</div>
						<div class="col-md-4 col-8 mb-3">
							<input type="text" class="form-control" placeholder="Location" name="">
						</div>
					</div>
					
					<div class="row">
						<div class="col-md-6 col-12 mb-3">
							<input  class="form-control" placeholder="Consultation Date" type="text" onfocus="(this.type='date')" name="">
						</div>
						<div class="col-md-6 col-12 mb-3">
							<input  class="form-control" placeholder="Next Review Date" type="text" onfocus="(this.type='date')" name="">
						</div>
					</div>

					<div class="row">
						<div class="col-md-3 col-12 text-left mb-3">
							<input type="radio" @change="check"  id="Generate" checked name="radio" v-model="option"  value="1">
  							<label for="html">Generate Prescription</label>
						</div>
						<div class="col-md-3 col-12 text-left mb-3">
							<input type="radio" @change="check" id="Upload" name="radio" v-model="option" value="2">
  							<label for="html">Upload Prescription</label>
						</div>
						
					</div>

					<div v-if="seenone" class="row">
						<div class="col-12 mb-3">
							<div class="boxShadow detailBox sampleProducts mb-lg-4 mb-md-4 mb-3">
						<div class="col-12">
							<div class="row">
								<div class="col-2 iconfontsPupload text-left pt-md-2 pt-3">
									<i class="fas fa-file-signature"></i>
								</div>
								<div class="col-5 pt-3 pl-0 pl-md-3">
									<h4 class="textColorBlack pt-md-2 text-left pr-4">
										Upload 
										Prescription
									</h4>
								</div>
								<div class="col-5 px-0 text-right" style="padding-top:30px;">
									<input type="file" id="upload" @change="uploadFile" ref="file" hidden/>
									<label  class="btn btn-primary btn-block" for="upload" style="border-radius: 4px 0px 0px 4px;">
										Upload 
									</label>
								</div>
							</div>
						</div>	
					</div>
						</div>
						<div class="col-lg-2 col-6 mb-3">
								<div class="displayBox">
									<div class="crosBTN">X</div>
									<div class="displayBoxin">
											<img src="images/prescription.jpg"/>
									</div>
								</div>
						</div>
						<div class="col-lg-2 col-6 mb-3">
							<div class="displayBox">
								  <div class="crosBTN">X</div>
									<div class="displayBoxin">
										<img src="images/prescription.jpg"/>
									</div>
								</div>
						</div>
						<div class="col-lg-2 col-6 mb-3">
							<div class="displayBox">
									<div class="crosBTN">X</div>
									<div class="displayBoxin">
										<img src="images/prescription.jpg"/>
									</div>
								</div>
						</div>
						<div class="col-12 mt-4">
							<div class="col-sm-3 float-right text-right p-0">
								<button class="btn btn-primary" @click="submitFile" disabled>Submit</button>
							</div>
						</div>
					</div>

					<h2 v-if="seentwo" class="p-2 text-left">Medicines</h2>
					<div v-if="seentwo" class="row">
						<div class="col-md-4 col-12 mb-2 text-left">
							<label class="text-left mb-0"> Brand Name </label>
							<select class="form-control" v-model="medicinebrand">
								<option>Brand 1</option>
								<option>Brand 2</option>
								<option>Brand 3</option>
								<option>Brand 4</option>
							</select>
						</div>
						<div class="col-md-8 col-12 mb-2 text-left">
							<label class="text-left mb-0">Products</label>
							<div class="input-group">
						  		<input type="text" v-model="medicine" class="form-control" id="searchtext" style="width:100%" placeholder="Search">
								<div class="input-group-append" style="position:absolute;right: 0px !important;z-index: 1000;">
								  <button class="btn btn-success" type="button" id="searchtextBTN" style="right:0px;top:0px">
								  	<i class="fas fa-search"></i>
								  </button>
								</div>
							</div>
						</div>
					</div>
					<div v-if="seentwo" class="row">
						<div class="col-md-6 col-12 mb-2 text-left">
							<label class="text-left mb-0">Usage</label>
							<select class="form-control" v-model="usage">
								<option>Usage1</option>
								<option>Usage2</option>
								<option>Usage3</option>
								<option>Usage4</option>
							</select>
						</div>
						<div class="col-md-6 col-12 mb-2 text-left">
							<label class="text-left mb-0">Quantity</label>
							<input type="text" v-model="qty" class="form-control" placeholder="Quantity" name="">
						</div>
					</div>

					<div v-if="seentwo" class="row">
						<div class="col-12 mb-2 text-left">
							<label class="text-left mb-0">Remarks</label>
							<input type="text" v-model="remark" class="form-control" placeholder="Remarks" name="">
						</div>
					</div>

					<div v-if="seentwo" class="row">
						<div class="col-12">
						<div class="col-sm-3 float-right text-right p-0">
							<button class="btn btn-primary" @click="addmedicine">Add Medicine</button>
						</div>
						</div>
					</div>	

					
										
					<div v-if="seentwo" class="table-responsive mt-4">
				  	<table id="dtBasicExample" class="table table-bordered" cellspacing="0" style="width:1200px">
			        <thead>
			          <tr>
			            <th class="th-sm bg-primary text-left">Medicine Name</th>
			            <th class="th-sm bg-primary text-left">Usage</th>
			            <th class="th-sm bg-primary text-left">Quantity</th>
			            <th class="th-sm bg-primary text-left" style="width:500px">Remarks</th>
						<th class="th-sm bg-primary text-left" style="width:100px">Remove</th>
			          </tr>
			        </thead>
			        <tbody>
						<tr v-for="item in prescription" :key="item.id">
							<td class="text-left">{{item.medName}}</td>
							<td class="text-left">{{item.usage}}</td>
							<td class="text-right">{{item.qty}}</td>
							<td class="text-left">{{item.remark}}</td>
							<td class="text-center" @click="deleteRow" style="cursor:pointer"><i class="far fa-trash-alt text-danger"></i></td>
					    </tr>
			        </tbody>
			      	</table>
			    	</div>
					<div v-if="seentwo" class="row">
						<div class="col-12 mt-4">
						<div class="col-sm-3 float-right text-right p-0">
							<button class="btn btn-primary" :disabled='isDisabled' @click="generate">Generate Prescription</button>
						</div>
						</div>
					</div>
        		</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>

export default{
  name: 'PrescriptionCreater',
  data(){
	  return{
		  isDisabled:true,
		  seenone: false,
		  seentwo: true,
		  option:null,
		  images: null,
		  medicinebrand:null,
		  medicine:null,
		  usage:null,
		  qty:null,
		  remark:null,
		  prescription:[]
	  }
  },
  props: {
    msg: String
  },
  components: {
    
  },
  methods:{
	  check(){
		 if(this.option==2){
			this.seenone=true;
			this.seentwo=false;
		 }
		 else{
			 this.seenone=false;
			this.seentwo=true;
		 }
	},
	uploadFile() {
        this.Images = this.$refs.file.files[0];
    },
	submitFile() {
        const formData = new FormData();
        formData.append('file', this.Images);
        const headers = { 'Content-Type': 'multipart/form-data' };
        axios.post('https://httpbin.org/post', formData, { headers }).then((res) => {
          res.data.files; // binary representation of the file
          res.status; // HTTP status
        });
    },
	addmedicine(){
		var medset={
			medBrand:this.medicinebrand,
			medName:this.medicine,
			usage:this.usage,
			qty:this.qty,
			remark:this.remark
		};
		this.prescription.push(medset);
		this.isDisabled=false;
	},
	enable(){
		if(this.prescription.length>0){
			this.isDisabled=false;
		}
	},
	generate(){
		console.log(this.prescription)
	},
	deleteRow(index){    
        this.prescription.splice(index,1);             
    }, 
	beforeMount(){
       this.enable()
	},

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-primary{
	background-color: #99764f !important;
    color: #fff;
    font-size: 14px;
}
.btn-primary {
    color: #fff;
    background-color: #9a7652 !important;
    border-color: #9a7652 !important;
}
</style>
