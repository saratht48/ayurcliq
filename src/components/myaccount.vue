<template>
<div class="col-12 filterWrapper">
	<div style="width:95%;margin:0 auto;">
		<div class="row">
			<div class="col-md-3 my-md-5 mt-3">
				<div class="boxShadow" id="demo">
					<ul class="dashboardMenu">
						<li>
							<a href="#">
								<i style="line-height: 1.5;" class="fas fa-user pr-2 dMenuIS"></i> My Account
							</a>
						</li>
						<li>
							<a href="#">
								<i style="line-height: 1.5;" class="fas fa-cart-plus pr-2 dMenuIS"></i> My Orders 
							</a>
						</li>
						<li>
							<a href="#">
								<i style="line-height: 1.5;" class="fas fa-map-marker-alt pr-2 dMenuIS"></i> My Addresse
							</a>
						</li>
						
						
						<li>
							<a href="#">
								<i style="line-height: 1.5;" class="fas fa-file-alt pr-2 dMenuIS"></i> My Prescriptions
							</a>
						</li>
						
						<li>
							<a href="#">
								<i style="line-height: 1.5;" class="fas fa-power-off pr-2 dMenuIS"></i> Sign out
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="col-md-9 mt-md-5 mb-md-5 mt-0 mb-4">
				<div class="dashbordGraphWrapper boxShadow">
					<div class="row">
						
						<div class="col-md-6 px-4 pb-2">
							<div class="namePartTxt ">
								<input @change="realname" type="text" class="form-control" style="height:50px" name="" :value="a">
							</div>
						</div>
					</div>

					<div class="row mt-2">
						<div class="col-md-6 px-4 pb-2">
							<input @change="phonenumber"  type="text" class="form-control" placeholder="Phone" style="height:50px" name="" :value="username" >
						</div>
						<div class="col-md-6 px-4">
							<input @change="emailadress" type="text" class="form-control" placeholder="Email" style="height:50px" name="" :value="c" >
						</div>
					</div>


					<div class="row mt-2">
						<div class="col-12 px-4">
							<div class="deliveryAddress mb-0" style="width:100%;border-radius:4px; border:1px #d9d4d4 solid">
									<div class="col-12 py-3">
											<div class="homeAndEditBTNBase">
												<span style="font-size:12px;font-weight:800;">Default Address</span>
												<span style="font-size:12px;font-weight:800;" class="deliveryAddressEdit"><a @click="changed" href="#">Change</a></span>
											</div>
											<h6>{{name}}</h6>
											<h6>{{phone}}</h6>
											<p>
												{{fulladress}}
											</p>
										</div>
							</div>
						</div>
					</div>

					<div class="p-3">
							<h6 v-if="seenone" style="font-size:12px;font-weight:800;"><a href="#">Forgot password</a></h6>
					</div>

					<div v-if="seenone" class="row mt-0">
						<div class="col-md-6 px-4 pb-2">
							<input type="text" class="form-control" placeholder="New Password" style="height:50px" name="">
						</div>
						<div class="col-md-6 px-4">
							<input type="text" class="form-control" placeholder="Confirm Password" style="height:50px" name="">
						</div>
					</div>
					<button  @click="addadress" v-if="seenten">add new adress</button>


					<div class="row my-4">
						<div class="col-12 px-4 text-center">
							<button  @click="save" class="btn btn-primary px-5">Save</button>
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
    name:'myaccount',
    data(){
    return{
		seenone:false,
		listing:[],
		listing1:[],
		username:'',
		sort:[],
		sort1:[],
		a:'',
		b:'',
		c:'',
		d:'',
		e:'',
		f:'',
		name:'',
		phone:'',
		fulladress:'',
		seenten:false,
		
		
		
    }
    },
	methods:{
		addadress(){
      //this.$store.commit('setcontactid',this.contactid);
      this.$router.push({path:'/addnewadress'});
		},
		changed(){
             this.$store.commit('updateurl3',this.f)
             this.$router.push({path:'/myadress'});
		},
		save(){

			if(this.c===''||this.username===''||this.a===''){
		       alert('fill both mobile number and email adress');
			}else{
		  var data2={
          Contactid:this.f,
		  Contactname:this.a,
		  Phone:this.b,
		  Email:this.c
        }
      axios({        
          method: 'post',
          url: process.env.VUE_APP_API_ENDPOINT+'Contactaddress/InsertMycontactPage',          
           data:JSON.stringify(data2),
          headers: {'content-type':'application/json'}
        }).then((response) => {
			console.log(response);
       
        
      });
			}

		},
		emailadress(event){
			var emailad=event.target.value;
			console.log('email');
			console.log(emailad);
			this.c=emailad;

		},
		phonenumber(event){
			var phoneno=event.target.value;
			console.log('phone');
			console.log(phoneno);
			this.b=phoneno;
		},
		realname(event){
                 var rnames=event.target.value;
				 console.log('rname');
				 console.log(rnames);
				 this.a=rnames;
		},
		load(){
			this.username=this.$store.state.username;

			axios({
       
          method: 'get',
          url: process.env.VUE_APP_API_ENDPOINT+'Contactaddress/GetMycontactDetails?StrPhone='+this.username,
          headers: {'content-type':'application/json'}
        }).then((response) => {
        this.listing=response.data;
        console.log(this.listing);
		if(this.listing.length===0){
			this.seenten=true;
			this.a=''
			this.b=this.username;
			this.c=''
			this.d=''
			this.e=''
			this.f=''
		}else{
             for(var i=0;i<this.listing.length;i++){
                var select={
                   contactid:this.listing[i]['contactid'],
                   contactname:this.listing[i]['contactname'],
                    email:this.listing[i]['email'],
                    phone:this.listing[i]['phone'],
                    imagealt:this.listing[i]['imagealt'],
                    imagepath:this.listing[i]['imagepath'], 
                }
                this.sort.push(select);
          }
		  this.a=this.sort[0]['contactname'];
		  this.b=this.sort[0]['phone'];
		  this.c=this.sort[0]['email'];
		  this.d=this.sort[0]['imagepath'];
		  this.e=this.sort[0]['imagealt'];
		  this.f=this.sort[0]['contactid'];
           axios({
       
          method: 'get',
          url: process.env.VUE_APP_API_ENDPOINT+'Contactaddress/GetMyaddress?strContactid='+this.f,
          headers: {'content-type':'application/json'}
        }).then((response) => {
        this.listing1=response.data;
		console.log('listing1')
        console.log(this.listing1);
		if(this.listing1.length===0){
			this.seenten=true;
		}else{
          for(var i=0;i<this.listing1.length;i++){
			  if(this.listing1[i]['defaultaddress']==="1"){
                var select10={
				  address1:this.listing1[i].address1,
                  address2:this.listing1[i].address2,
                  addressid:this.listing1[i].addressid,
                  alternatephone:this.listing1[i].alternatephone,
                  city:this.listing1[i].city,
                  contactID:this.listing1[i].contactID,
                  contactName:this.listing1[i].contactName,
                  defaultaddress:this.listing1[i].defaultaddress,
                  landmark:this.listing1[i].landmark,
                  phone:this.listing1[i].phone,
                  pincode:this.listing1[i].pincode,
                  state:this.listing1[i].state,
                  str:this.listing1[i].address1+','+this.listing1[i].address2+','+this.listing1[i].state+','+this.listing1[i].city+','+this.listing1[i].landmark+','+this.listing1[i].pincode,
                }
                this.sort1.push(select10);
				console.log('sort1');
				console.log(this.sort1);
				this.name=this.sort1[0]['contactName'];
				this.phone=this.sort1[0]['phone'];
				this.fulladress=this.sort1[0]['str']
			  }
          }
		}
      });
		}
      });
		
		}
	},
	beforeMount(){
    this.load()
      
	}
}
</script>
<style  scoped>
*{
    font-family: ClearSans-Regular;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
}
.filterWrapper {
    background-color: #EFEDEA;
    min-height: 100vh;
}
a {
    
    color: #9a7652;
}
ul {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
.boxShadow {
    box-shadow: 0px 0px 9px 0px rgb(0 0 0 / 24%);
    
}
.dMenuIS {
    font-size: 18px;
}
.dashbordGraphWrapper {
    min-height: 300px;
    background-color: #fff;
    border-radius: 10px;
    padding: 15px;
}
.dashboardMenu {
    list-style-type: none;
    border-radius: 10px;
    padding-left: 0px;
}
.homeAndEditBTNBase {
    position: absolute;
    top: 5px;
    right: 15px;
    width: 100%;
    text-align: right;
    padding: 5px 0px;
}
.btn-primary {
    color: #fff;
    background-color: #9a7652 !important;
    border-color: #9a7652 !important;
}
#demo{
	font-family: ClearSans-Regular;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight:bold;
    line-height: 1.5;
    color: #212529;
    text-align: left;
	position: relative;
    top: -14px;

}
.dashboardMenu a {
    color: black;
    font-weight:bold;
    font-size: 13px;
    display: inline-block;
    width: 100%;
	text-decoration: none;
	line-height: 1.5;
}
a {
    text-decoration: none;
    color: #9a7652;
}


</style>
