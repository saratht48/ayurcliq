<template>
<div style="background-color:#EFEDEA;min-height: 100vh;padding-top: 50px;">
	<div class="PackageDetailsBase">
		<div class="boxShadow cartdetails  mb-lg-5 mb-md-4 mb-3">
			<div class="col-12 p-lg-0">
				<div class="row">
					<div class="col-md-6 py-3">
						<div class="PackageDetailImg">
							<img class="img-fluid" :src="sort[0]['imagepath']" :alt="sort[0]['imagealttext']">
						</div>
					</div>
					<div class="col-md-6 PackageDetailData py-4">
						<h3>{{sort[0]['combopackname']}}</h3>
						<ul>
							<li>
								{{sort[0]['description']}}
							</li>
							
						</ul>
						<h3 class="packageCostColor">@ <i class="fas fa-rupee-sign"></i>hhhhhjhjhjhjjjjjjjj</h3>
						<div class="text-right p-0 mt-lg-5 mt-md-3">
							<span class="btn btn-primary px-5" style="border-radius:4px 0px 0px 4px">Book Now</span>
						</div>
					</div>
				</div>

				<div class="col-12">
						<h3>Parkinsons Package Details</h3>
				</div>	
				<div class="col-12">
						<p>
							Parkinson's disease (or PD) is a neurodegenerative disorder. It affects the movements of your body. People above 50 years are more at risk. It usually starts with a slight tremor in your hand. After that, you will soon feel stiffness and slowing of movements.
						</p>
						<p>
							Ayurveda refers to PD as "Kampa Vata". <br>

							While there is no complete cure, Ayurvedic treatment for Parkinson's disease can be highly effective.
						</p>	
				</div>	
				<div class="col-12">
						<table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>MEDICINE NAME</th>
                      <th>BRAND NAME</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                   <tbody>
                    <tr v-for="(tab, index) in sort1" :key="index">
                      <td>{{ tab.fullName}}</td>
                      <td>{{ tab.brandName}}</td>
                      <td class="text-right">{{ tab.quantity }}</td>
                    </tr>
                  </tbody>
                 
                </table>
				</div>	
			</div>			
		</div>
	</div>
</div>

    
</template>
<script>
import axios from 'axios';
export default{
    name:'combopackdetails',
    data(){
        return{
            urldata:'',
            listing:[],
            sort:[],
            listing1:[],
            sort1:[],

        }
    },
    methods:{
        firstone(){
          this.urldata =this.$store.state.url2;
          console.log(this.urldata);
    },
      load(){
      
      axios({
       
          method: 'get',
          url: process.env.VUE_APP_API_ENDPOINT+'CombopackDetail/GetCombopackdetails?StrCombopackid='+this.urldata,
          headers: {'content-type':'application/json'}
        }).then((response) => {
        this.listing=response.data;
        console.log('sarath');
        console.log(this.listing);
          for(var i=0;i<this.listing.length;i++){
                var select={
                  combopackname:this.listing[i].combopackname,
                  description:this.listing[i].description,
                  imagealttext:this.listing[i].imagealttext,
                  imagepath:this.listing[i].imagepath,
                  medicinesizeid:this.listing[i].medicinesizeid,
                  quantity:this.listing[i].quantity
                }
                  this.sort.push(select);
          }
      });
    },
     load1(){
      
      axios({
       
          method: 'get',
          url: process.env.VUE_APP_API_ENDPOINT+'CombopackDetail/GetTabledetails?strMeedicinesizeid=1',
          headers: {'content-type':'application/json'}
        }).then((response) => {
        this.listing1=response.data;
        console.log('pppppppp');
        console.log(this.listing1);
          for(var k=0;k<this.listing1.length;k++){
                var select1={
                  fullName:this.listing1[k].fullName, 
                  brandName:this.listing1[k].brandName,
                  quantity:this.listing1[k].quantity
                }
                  this.sort1.push(select1);
          }
      });
    },
},
beforeMount(){
    this.firstone(),
    this.load(),
    this.load1()
      
	},
}
</script>
<style scoped>
*{
    box-sizing: border-box;
    font-family: ClearSans-Regular;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
}
.PackageDetailsBase {
    width: 90%;
    margin: 0 auto;
}
.cartdetails {
    width: 100%;
    border-radius: 10px;
    background-color: #fff;
    min-height: 100px;
    padding-bottom: 20px;
}
.boxShadow {
    box-shadow: 0px 0px 9px 0px rgb(0 0 0 / 24%);
    
}
.PackageDetailImg {
    width: 95%;
    margin: 0 auto;
    border-radius: 10px;
}
.PackageDetailImg img {
    border-radius: 10px;
}
.img-fluid {
    max-width: 100%;
    height: auto;
}
img {
    vertical-align: middle;
    border-style: none;
}
.PackageDetailImgBottom {
    width: 100%;
    border-radius: 10px;
    height: 250px;
}
.PackageDetailImgBottom img {
    border-radius: 10px;
    width: 100%;
    height: 250px;
    object-fit: cover;
}
.img-fluid {
    max-width: 100%;
}
.btn-primary {
    color: #fff;
    background-color: #9a7652 !important;
    border-color: #9a7652 !important;
}

</style>
