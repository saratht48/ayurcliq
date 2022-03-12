<template>
<div class="col-12 filterWrapper">
	<div style="width:95%;margin:0 auto;">
		<div class="row">
			<div class="col-md-3 my-md-5 mt-3">
				<div class="boxShadow" id="demo">
					<ul class="dashboardMenu">
						<li>
							<a href="#">
								<i class="fas fa-user pr-2 dMenuIS"></i> My Account
							</a>
						</li>
						<li>
							<a href="#">
								<i class="fas fa-cart-plus pr-2 dMenuIS"></i> My Orders 
							</a>
						</li>
						<li>
							<a href="#">
								<i class="fas fa-map-marker-alt pr-2 dMenuIS"></i> My Addresse
							</a>
						</li>
						<li>
							<a href="#">
								<i class="fas fa-heart pr-2 dMenuIS"></i> Wishlis
							</a>
						</li>
						<li>
							<a href="#">
								<i class="far fa-bell pr-2 dMenuIS"></i> Medicine Reminde
							</a>
						</li>
						<li>
							<a href="#">
								<i class="fas fa-file-alt pr-2 dMenuIS"></i> My Prescriptions
							</a>
						</li>
						<li>
							<a href="#">
								<i class="far fa-question-circle pr-2 dMenuIS"></i> Help
							</a>
						</li>
						<li>
							<a href="#">
								<i class="fas fa-power-off pr-2 dMenuIS"></i> Sign out
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="col-md-9 mt-md-5 mb-md-5 mt-0 mb-4">
				<div class="dashbordGraphWrapper boxShadow">
					
					<h2 class="p-2">My Addresse</h2>
					
					<div class="deliveryAddressBase">
					
					<div v-for="(adr,index) in adress" :key="index"  class="deliveryAddress boxShadow mb-3" style="width:100%">
						<div class="col-12">
							<div class="row">
								<label class="col-md-11 col-10 py-3" >
								<div class="col-12 py-3">
									<div class="homeAndEditBTNBase">
										<span class="addressHomeBTN">Home</span>
										<span @click="editform(adr.contactName,adr.phone,adr.pincode,adr.address1,adr.city,adr.state,adr.landmark,adr.alternatephone,adr.addressid)" class="deliveryAddressEdit2"><i class="far fa-edit tp"></i></span>
										<span @click="deleteadress(adr.addressid)" class="deliveryAddressDelete"><i class="far fa-trash-alt ts"></i></span>
										<span class="Setasdefault">Set as default</span>
										
				
									</div>
									<h6>{{adr.contactName}}</h6>
									<h6>{{adr.phone}}</h6>
									<p>
										{{adr.mainstr}}
									</p>
								</div>

								</label>
							<input 
                             type="radio"
                             id="checkbox-1-1"
                             name="select"
                             :value="index" 
                             :checked="adr.defaultaddress==='1'"
                             @change="changes(adr.addressid,adr.contactID)"/>
							</div>
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
import axios from 'axios';
export default{
    name:'myadress',
    data(){
		return{
           listing:[],
		   adress:[],
		   url:[],
		   obj:{
                contactName:'',
				phone:'',
				pincode:'',
				address1:'',
				city:'',
				state:'',
				landmark:'',
				alternatephone:'',
				addressid:''


		   }
		}
		

    },
    methods:{
		deleteadress(event){
		var data5={
			Addressid:event
        }
      debugger
      axios({        
          method: 'post',
          url: process.env.VUE_APP_API_ENDPOINT+'Contactaddress/DeleteAddress',          
          data:JSON.stringify(data5),
          headers: {'content-type':'application/json'}
        }).then((response) => {
			console.log(response.data);
			this.load();
      });
             
		},
		changes(event1,event2){
		var data3={
			ContactID:event2,
			Addressid:event1,
			Defaultaddress:"1"
        
        }
      debugger
      axios({        
          method: 'post',
          url: process.env.VUE_APP_API_ENDPOINT+'Contactaddress/UpdateDefaultAddress',          
          data:JSON.stringify(data3),
          headers: {'content-type':'application/json'}
        }).then((response) => {
			console.log(response.data);
      });

		},
		editform(event1,event2,event3,event4,event5,event6,event7,event8,event9){

			    this.obj.contactName=event1,
				this.obj.phone=event2,
				this.obj.pincode=event3,
				this.obj.address1=event4,
				this.obj.city=event5,
				this.obj.state=event6,
				this.obj.landmark=event7,
				this.obj.alternatephone=event8,
				this.obj.addressid=event9
				this.$store.commit('setobj',this.obj);
				this.$router.push({path:'/editadress'});

		},
         load(){
			this.url=this.$store.state.url3;
			console.log('contacy');
			console.log(this.url);
      
      axios({
       
          method: 'get',
          url: process.env.VUE_APP_API_ENDPOINT+'Contactaddress/GetMyaddress?strContactid='+this.url,
          headers: {'content-type':'application/json'}
        }).then((response) => {
        this.listing=response.data;
		console.log('pin');
        console.log(this.listing);
          for(var i=0;i<this.listing.length;i++){
                var select={
                   address1:this.listing[i].address1,
                   address2:this.listing[i].address2,
                   addressid:this.listing[i].addressid,
                   alternatephone:this.listing[i].alternatephone,
                   city:this.listing[i].city,
                   contactID:this.listing[i].contactID,
                   contactName:this.listing[i].contactName, 
                   defaultaddress:this.listing[i].defaultaddress,
                   landmark:this.listing[i].landmark,
                   phone:this.listing[i].phone,
				   pincode:this.listing[i].pincode,
                   state:this.listing[i].state,
				   mainstr:this.listing[i].address1+','+this.listing[i].address2+','+this.listing[i].state+','+this.listing[i].city+','+this.listing[i].landmark+','+this.listing[i].pincode,
                }
                this.adress.push(select);
          }
        
      });
    },

    },
	beforeMount(){
    this.load()
      
	}
}

</script>
<style  scoped>
*{
    font-family: ClearSans-Regular;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
}
.boxShadow {
    box-shadow: 0px 0px 9px 0px rgb(0 0 0 / 24%); 
}
.dashboardMenu {
    list-style-type: none;
    border-radius: 10px;
}
.dMenuIS {
    font-size: 18px;
}
.filterWrapper {
    background-color: #EFEDEA;
    min-height: 100vh;
}
.dashbordGraphWrapper {
    min-height: 300px;
    background-color: #fff;
    border-radius: 10px;
    padding: 15px;
}
.addressHomeBTN {
    display: inline-block;
    padding: 0px 15px;
    background-color: lightgray;
    cursor: pointer;
    color: #000;
    font-size: 12px;
    border-radius: 5px;
    line-height: unset;
    padding-bottom: 1px;
    position: relative;
    left: 750px;

}
.deliveryAddress {
    margin: 0 auto;
    border-radius: 5px;
}
.tp{
     position:absolute;
	 right:5%;
    
}
.ts{
    position:absolute;
	right:7%;
    

}
.homeAndEditBTNBase{
	position:relative;
}
.Setasdefault{
    position: relative;
    left: 790px;
}

   


</style>
