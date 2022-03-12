<template>
<div style="background-color:#EFEDEA;">
	<div class="articledetailHolder" >
		<div class="col-12">
			<div class="row">
				<div class="col-md-8">
					<div class="boxShadow detailBox mb-lg-4 mb-md-4 mb-3 pb-3">
						<div class="col-12">
							<div class="pt-3">
								<h2>{{sort[0]['blogname']}}</h2>
							</div>
							<div class="row">
								<div class="col-md-7 py-3">
									<div class="articledetailImg">
										<img :src="sort[0]['blogimage']" :alt="sort[0]['blogalt']">
									</div>
								</div>
								<div class="col-md-5 PackageDetailData py-4">
									<h3 class="m-0">Parkinsons Package</h3>
									<p style="font-size:18px" class="mb-2">20 September 2021</p>
									<p>
										In biology, immunity is the capability of multicellular organisms to resist harmful microorganisms. Immunity involves both specific and nonspecific components. 
									</p>
								</div>
							</div>
							<div>
								<p>
									{{sort[0]['blogarticle']}}
								</p>
								
							</div>
						</div>	
					</div>
					<div class="boxShadow detailBox sampleProducts mb-lg-5 mb-md-4 mb-3">
						<div class="col-12">
							<div class="row">
								<div class="col-md-5 py-3">
									<div class="articledetailDRImg">
										<img :src="sort[0]['imagepath']"  :alt="sort[0]['imagealttext']">
									</div>
								</div>
								<div class="col-md-7 PackageDetailData py-4">
									<p style="font-size:20px" class="mb-1">Written by</p>
									<h3 class="m-0">{{sort[0]['name']}}</h3>
									<p style="font-size:18px" class="mb-3">
										{{sort[0]['designation']}}
									</p>
								</div>
							</div>
						</div>
						<p class="px-3 pt-1 pb-3">
							 {{sort[0]['bio']}}
						</p>
					</div>
				</div>
				<div class="col-md-4">

					<div class="boxShadow detailBox sampleProducts mb-lg-4 mb-md-4 mb-3">
						<div class="col-12">
							<div class="row">
								<div class="col-3 pt-2">
									<div class="dotimg">
										<img src="images/drIcon.png">
									</div>
								</div>
								<div class="col-5">
									<p style="font-size: 14px;font-weight: 600;padding-top:28px;">
										Free Online 
										Consultation
									</p>
								</div>
								<div class="col-4 px-0 text-right" style="padding-top:35px;">
									<button class="btn btn-primary btn-small dotimgBTN">Consult Now <i class="fas fa-video pl-1"></i> </button>
								</div>
							</div>
						</div>	
					</div>

					<div class="boxShadow detailBox sampleProducts mb-lg-4 mb-md-4 mb-3">
						<div class="col-12">
							<div class="row">
								<div class="col-3 pt-2">
									<div class="dotimg">
										<img src="images/TreatmentPlan.jpg">
									</div>
								</div>
								<div class="col-5">
									<p style="font-size: 14px;font-weight: 600;padding-top:28px;">
										Get Free 
										Treatment Plans
									</p>
								</div>
								<div class="col-4 px-0  text-right" style="padding-top:35px;">
									<button class="btn btn-primary btn-small dotimgBTN">Get Plan Now <i class="fas fa-file-alt pl-1"></i> </button>
								</div>
							</div>
						</div>	
					</div>

					<div class="boxShadow detailBox sampleProducts mb-lg-4 mb-md-4 mb-3">
					 		<h4 class="p-3 textColorBlack">Popular Products</h4>
							<div id="PopularProducts">	
                                    <splide :options="options">
                                   <splide-slide   v-for="(brand,index) in sort1" :key="index">
                                       <div class="productCard">
											<div class="productIMG">
												<img :src="brand.itemimage" :alt="brand.imagealttext"/>
											</div>
											<h6 class="px-3 pt-3 pb-0 text-center">
												{{brand.itemname}}
											</h6>
										</div>
                                
                                      </splide-slide>
                                      </splide>
										
										
										
										
						 		
						 	</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
    
</template>
<script>
import axios from 'axios';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
export default{
    name:'blogdetails',
    data(){
        return{
        sort:[],
        listing:[],
		sort1:[],
		listing5:[],
         options: {
        rewind : true,
          gap    :'0rem',
          perPage: 2,
          breakpoints: {
            1024: {
              perPage: 3,
             
            },
            767: {
              perPage: 2,
          
            },
            640: {
              perPage: 1,
        
            },
          },
        },
            


      }

    },
    methods:{
		load(){
      
      axios({
       
          method: 'get',
          url: process.env.VUE_APP_API_ENDPOINT+'Blog/GetBlogDetails?StrBlogid=2',
          headers: {'content-type':'application/json'}
        }).then((response) => {
        this.listing=response.data;
        console.log(this.listing);
          for(var i=0;i<this.listing.length;i++){
                var select={
					bio:this.listing[i].bio,
					blogalt:this.listing[i].blogalt,
					blogarticle:this.listing[i].blogarticle,
					blogimage:this.listing[i].blogimage,
					blogname:this.listing[i].blogname,
					designation:this.listing[i].designation,
					imagealttext:this.listing[i].imagealttext,
					imagepath:this.listing[i].imagepath,
					name:this.listing[i].name
                  
                }
                this.sort.push(select);
          }
        
      });
    },
	load1(){
      
      axios({
       
          method: 'get',
          url: process.env.VUE_APP_API_ENDPOINT+'HomeAPI/GetHomePageDetails?strFilter=Popular Products',
          headers: {'content-type':'application/json'}
        }).then((response) => {
        this.listing5=response.data;
		console.log('55555555');
        console.log(this.listing5);
		debugger
          for(var j=0;j<this.listing5.length;j++){
                var select11={
					itemimage:this.listing5[j].itemimage,
                    itemname:this.listing5[j].itemname,
					imagealttext:this.listing5[j].imagealttext    
                }
                this.sort1.push(select11);
          }
		  console.log('sarath');
		  console.log(this.sort1)
        
      });
    },

    },
	 beforeMount(){
    this.load(),
	this.load1()
      
	},
    components:{
	Splide,
    SplideSlide,

    }
}
</script>
<style scoped>

</style>
