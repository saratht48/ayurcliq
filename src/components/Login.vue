<template>
 <div style="height:50px"></div>
<div class="loginboxWrapper">
 
  <div class="row">
        			<div class="col-md-4">
        					<div class="leftpart">
        							<h3 class="p-4" >Register</h3>
        					</div>
        			</div>
        			<div class="col-md-8 p-0">
        				<div v-if="seentwo" class="OTPbase text-center py-5">
        						<p class="mb-0">Please enter the OTP sent to</p>
        						<p class="mb-3">{{this.form.username}} <span><a href="#">Change</a></span></p>
        						<div class="numberwrapper mb-4">
        								<div class="numberFrame">
        									<div class="numberPatch">
        										<input type="text" class="form-control numberFrameinput" name="" v-model="a">
        									</div>
        								</div>
        								<div class="numberFrame">
        									<div class="numberPatch">
        										<input type="text" class="form-control numberFrameinput" name="" v-model="b">
        									</div>
        								</div>
        								<div class="numberFrame">
        									<div class="numberPatch">
        										<input type="text" class="form-control numberFrameinput" name="" v-model="c">
        									</div>
        								</div>
        								<div class="numberFrame">
        									<div class="numberPatch">
        										<input type="text" class="form-control numberFrameinput" name="" v-model="d">
        									</div>
        								</div>
        								<div class="numberFrame">
        									<div class="numberPatch">
        										<input type="text" class="form-control numberFrameinput" name="" v-model="e">
        									</div>
        								</div>
        								<div class="clearfix"></div>
        						</div>
        						<div class="text-center">
        								<button @click="verify" class="btn btn-primary">Verify</button>
        						</div>
        						<p class="mt-2" style="font-size:14px">
        							Not recived your Code ? <span><a href="#">Resend Code</a></span>
        						</p>
        				</div>
						<div  v-if="seenone" class="Loginbase pt-5">
        						<ul class="m-0 p-0">
									<li v-for="(item,index) in error" :key="index">
									{{item}} is invalid
									</li>
									<li class="mb-3">
										<input type="text" style="height:50px" class="form-control"
											placeholder="Enter Email / Mobile Number" name="" v-model="form.username">
									</li>

									<li v-if="seenthree" class="mb-3">
										<input type="text" style="height:50px" class="form-control"
										placeholder="Enter Password" name="" v-model="form.password">
									</li>

									<li v-if="seenthree" class="text-center">
											By continuing, you agree to AyurCliQ's 
											<span><a href="#"> Terms of Use </a> </span>and
											<span><a href="#"> Privacy Policy.</a></span>
									</li>

									<li class="mt-4">
										<div class="col-12 text-center">
											<button v-if="seenthree"  @click="submited" class="btn btn-primary btn-block">Login</button>
											<button  @click="requestotp" class="btn btn-primary btn-block">SEND OTP</button> 
										</div>
									</li>
								</ul>
        				</div>
        			</div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Login',
  data(){
	  return{
		  form:{
				username:'',
				password:'',
		  },
		  error:[],
		  seenone:true,
		  seentwo:false,
		  seenthree:false,
		  a:'',
		  b:'',
		  c:'',
		  d:'',
		  e:'',
		  combined:'',
		  listing:[],
		  listing1:[],
		  list:'',

	  }
  },
  props: {
    msg: String
  },
  methods:{
	  verify(){
		  
           this.combined=this.a+this.b+this.c+this.d+this.e;
		   console.log(this.combined)
		   console.log(this.form.username);
		   var users=this.form.username;
		    axios({
       
          method: 'get',
          url: process.env.VUE_APP_API_ENDPOINT+'userotp/VerifyOtp?StrOtp='+this.combined+'&StrPhone='+users,
          headers: {'content-type':'application/json'}
        }).then((response) => {
        this.listing=response.data;
		console.log('sarath');
        console.log(this.listing);
		if(this.listing[0]['success']==="0"){
			alert("otp is invalid")
		}else{
		  //this.list=response.data[0]['username'];
		  var contactid=this.listing[0]['contactid'];
		  console.log('vijy');
		  console.log(contactid);
		  this.$store.commit('setcontactid',this.listing[0]['contactid']);
		  this.$store.commit('setusername',this.form.username);
		 this.$store.commit('setseenone',false);
		 this.$store.commit('setseentwo',true);
		  this.$router.push({path:'/myaccount'});
		}
         /*for(var i=0;i<this.brands.length;i++){
                var select={
                  imagealttext:this.brands[i].imagealttext,
                  itemname:this.brands[i].itemname,
                  itemID:this.brands[i].itemID,
                  itemimage:process.env.VUE_APP_API_ENDPOINT+this.brands[i].itemimage
                }
                this.sort.push(select);
          }*/
        
      });
	  },
	  requestotp(){
		  if(this.form.username===''){
			  alert('type a mobile number');
		  }else{
          this.seenone=false;
		  this.seentwo=true;
		  }
	  },
	  submited(){
		  console.log('sssssss');
		  this.error=[];
		   for(var item in this.form){
			   if(this.form[item]===''|| this.form[item].length===0){
				   this.error.push(item)
			   }
			}
			if(this.error.length===0){
			   console.log('jjjjjjjjj');
			    var data1={
				   Username:this.form.username,
				   Password:this.form.password
			   }
		 axios({        
          method: 'post',
          url: process.env.VUE_APP_API_ENDPOINT+'Users/ValidateLogin',          
          data:JSON.stringify(data1),
          headers: {'content-type':'application/json'}
        }).then((response) => {
          console.log('pppppppppp');
          console.log(response.data);
		  if(response.data[0]['userID']===null){
			  alert('invalid username or password')
		  }else{
		  this.list=response.data[0]['username'];
		  this.$store.commit('setusername',this.list);
		  this.$router.push({path:'/myaccount'});
		  }
		  
		  
         
      });
			}
		}
  	}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginboxWrapper{
    width:800px;
    min-height:300px;
    margin:0px auto;
    background-color:#fff;
}
.leftpart {
    height: 400px;
    background-color: #0e0b0b;
    border-radius: 4px 0px 0px 4px;
    background-image: url(../../public/images/ModalLeftBG.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}
.OTPbase {
    height: 300px;
    font-size: 20px;
    
  }
.Loginbase {
    width: 70%;
   margin: 0 auto;
  
}
.numberwrapper {
    width: 70%;
    margin: 0 auto;
    text-align: left;
}
.numberFrame {
    display: block;
    width: 20%;
    float: left;
    text-align: center;
}
.numberPatch {
    display: block;
    width: 75%;
    background-color: #fff;
    border-bottom: 1px black solid;
    margin: 0 auto;
}
.btn-primary {
    color: #fff;
    background-color: #9a7652 !important;
    border-color: #9a7652 !important;
}
@media only screen and (max-width: 768px) {
  .loginboxWrapper{width:100%;}
}
</style>
