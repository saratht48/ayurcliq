<template>
  <div class="col-12 filterWrapper">
	<div style="width:95%;margin:0 auto;">
		<div class="row">
			<div class="col-md-3 my-md-5 mt-3">
				<div class="boxShadow" id="demo">
					<ul class="dashboardMenu text-left">
						<li> <a href="#"><i class="far fa-chart-bar pr-2 dMenuIS"></i>Dashboard</a></li>
						<li> <a href="#"><i class="fas fa-file-alt pr-2 dMenuIS"></i> Generate Prescription</a></li>
						<li> <a href="#"><i class="fas fa-user pr-2 dMenuIS"></i> My Patient</a></li>
						<li> <a href="#"><i class="fas fa-power-off pr-2 dMenuIS"></i> Sign out</a></li>
					</ul>
				</div>
			</div>
			<div class="col-md-9 mt-md-5 mb-md-5 mt-0 mb-4">
				<div class="dashbordGraphWrapper boxShadow">
					<h2 class="p-2 text-left" @click="dataset">My Patients</h2>
					<div>
						 <table id="exbasic" class="table table-striped table-bordered" cellspacing="0" width="100%">
					      <thead>
					        <tr>
					          <th class="bg-primary">Patient Name</th>
					          <th class="bg-primary">Age</th>
					          <th class="bg-primary">City</th>
					          <th class="bg-primary">Total Orders</th>
					          <th class="bg-primary">Total Value</th>
					          <th class="bg-primary">Last Review</th>
					          <th class="bg-primary">Next Review</th>
					        </tr>
					      </thead>
					      <tbody>
					          <tr v-for="item in List" :key="item.id">
					            <td>{{item.id}}</td>
					            <td>{{item.title}}</td>
					            <td>Palakkad</td>
					            <td>{{item.price}}</td>
					            <td>{{item.rating.count}}</td>
					            <td>20-Jan-2021</td>
					            <td>20-Jan-2021</td>
					          </tr>
					        </tbody>
					    </table>     
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: 'MyPatients',
  props: {
    msg: String
  },
  data(){
	  return{
		List: []
	  }
  },
  methods:{
	  dataset(){
		  axios.get("https://fakestoreapi.com/products")
      		.then(response => {
         	this.List = [...response.data].slice(0, 10)
		});
	}
	},
	beforeMount(){
       this.dataset()
	},
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-primary{
	background-color: #99764f !important;
    color: #fff;
    font-size: 14px;
}
</style>
