<template>

<div style="background-color:#EFEDEA;min-height: 100vh;padding-top: 50px;">
	<div class="PackageDetailsBase">
		<div class="boxShadow cartdetails  mb-lg-5 mb-md-4 mb-3">
			<div class="col-12 p-lg-0">
				<div class="row">
					<div class="col-md-6 py-3">
						<div class="PackageDetailImg">
							<img class="img-fluid" :src="sort[0]['imagepath']"  :alt="sort[0]['imagealttext']">
						</div>
					</div>
					<div class="col-md-6 PackageDetailData py-4">
						<h3>{{sort[0]['name']}}</h3>
						<ul>
							<li>
								{{sort[0]['profile1']}}
							</li>
							<li>
								3 Video consultation  3 months medicines delivered at home
							</li>
							<li>
								Remote care package
							</li>
						</ul>
						<h3 class="packageCostColor">@ <i class="fas fa-rupee-sign"></i>{{sort[0]['discountedprice']}}</h3>
						<div class="text-right p-0 mt-lg-5 mt-md-3">
							<span @click="booknow"   class="btn btn-primary px-5" style="border-radius:4px 0px 0px 4px">Book Now</span>
						</div>
					</div>
				</div>
                <div v-if="seenone"  class="row px-3">
                    <div class="col-md-4 mb-3">
                  <input
                    type="text"
                    class="form-control txtboxshadow"
                    placeholder="NAME"
                    name="" 
                    v-model="name"   
                  />
                </div>
                <div class="col-md-3 mb-3">
                  <input
                    type="text"
                    class="form-control txtboxshadow"
                    placeholder="E-MAIL"
                    name=""
                    v-model="email"
                   
                    
                  />
                </div>
                <div class="col-md-3 mb-3">
                  <input
                    type="text"
                    class="form-control txtboxshadow"
                    placeholder="MOBILE NUMBER"
                    name=""
                    v-model="mobile"
                   
                    
                  />
                </div>
                 <div class="col-md-2 mb-3">
                <button @click="submit" class="btn btn-primary ">SUBMIT</button>
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
						<div class="PackageDetailImgBottom">
							<img class="img-fluid" :src="sort[0]['imagepath2']" :alt="sort[0]['imagealttext2']">
						</div>	
				</div>	
			</div>			
		</div>
	</div>
</div>
    
</template>
<script>
import axios from 'axios';
export default{
    name:'packagedetails',
    data(){
        return{
            urldata:'',
            listing:[],
            sort:[],
            email:'',
            mobile:'',
            name:'',
            seenone:false,

        }

    },
    methods:{
        booknow(){
            this.seenone=true;
        },
        submit(){
            if(this.name===''||this.mobile===''||this.email===''){
                alert('fill all the details');
            }
         var data1={
             Contactname:this.name,
             Phone:this.mobile,
             Email:this.email,
             Packageid:this.urldata,

            
        }

      
      debugger
      axios({        
          method: 'post',
          url: process.env.VUE_APP_API_ENDPOINT+'Contactaddress/InsertContact',          
          data:JSON.stringify(data1),
          headers: {'content-type':'application/json'}
        }).then((response) => {
            console.log('sarath')
          console.log(response.data);
        
      });

        },
        firstone(){
          this.urldata =this.$store.state.url2;
          console.log(this.urldata);
          
      },
        load(){
      
      axios({
       
          method: 'get',
          url: process.env.VUE_APP_API_ENDPOINT+'PackageDetail/GetPackages?StrPackageID='+this.urldata,
          headers: {'content-type':'application/json'}
        }).then((response) => {
        this.listing=response.data;
        console.log(this.listing);
            for(var i=0;i<this.listing.length;i++){
                var select={
                 article:this.listing[i].article,
                 discountedprice:this.listing[i].discountedprice,
                 imagealttext:this.listing[i].imagealttext,
                 imagepath:process.env.VUE_APP_API_ENDPOINT+this.listing[i].imagepath,
                 name:this.listing[i].name, 
                 profile1:this.listing[i].profile1,
                 imagepath2:process.env.VUE_APP_API_ENDPOINT+this.listing[i].imagepath2,
                 imagealttext2:this.listing[i].imagealttext2,
                 profile2:this.listing[i].profile2,
                 packageID:this.listing[i].packageID

                }
                this.sort.push(select);
          }
        
      });
    },


    },
    beforeMount(){
    this.firstone(),
    this.load()
      
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
