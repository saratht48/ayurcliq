<template>
  <div class="topband pb-lg-2 pb-md-2 pb-4">
	<div class="col-12">
		<div class="row">
			<div class="col-lg-6 col-md-4 pt-2">
				<div class="row">
					<div class="col-lg-4 py-lg-0 py-md-0 py-2">
            
						<h1 class="heading text-center">AyurCliQ{{this.$store.state.contactid}}</h1>
					</div>
					<div class="col-lg-8 py-lg-0 py-md-0 py-2">
						<div class="input-group">
						  <input type="text" class="form-control" placeholder="Search">
						  <div class="input-group-append">
						    <button class="btn btn-success" type="submit">
						    	<i class="fas fa-search"></i>
						    </button>
						  </div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-6 col-md-8">
				<div class="row">
					<div class="col-lg-8 col-md-8 col-7  text-lg-center text-md-center text-left">
						<p class="topText">Free Doctor Consultation{{this.$store.state.loginusername}}{{this.$store.state.loginotp}}</p>
					</div>
					<div class="col-lg-4 col-md-4 col-5 relatives">
						<a href="/about" class="relatives">
							<span @click="cartpage"  class="round">{{this.$store.state.counter}}</span>
							<i @click="cartpage"  class="fas fa-shopping-cart cart"></i>
						</a>
						<button v-if="this.$store.state.seenone" @click="login"    class="btn btn-light btn-sm mx-4">login</button>
						<button v-if="this.$store.state.seentwo" @click="logout"  class="btn btn-light btn-sm mx-4">log out</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'TopBand',
  data(){
	  return{
          listing:[],
		  sort:[],
		  quantity:'',
		  medicinecartid:'',
		  
	  }
  },
  props: {
    msg: String
  },
  methods:{
	  cartpage(){
          this.$router.push({path:'/cartpage'});
	  },
	  logout(){
         this.$store.commit('setseenone',true);
		 this.$store.commit('setseentwo',false);
		 this.$store.commit('setcontactid','');
		 this.$store.commit('setusername','');
		 this.$store.commit('setloginotp','');
		 this.$store.commit('setloginusername','');
		 this.$router.push({path:'/'});




	  },
	  login(){
        this.$router.push({path:'/Login'});

	  },
	  load(){
      
      axios({
       
          method: 'get',
          url: process.env.VUE_APP_API_ENDPOINT+'cartpage/GetCartidandquantity?StrSessionid=1',
          headers: {'content-type':'application/json'}
        }).then((response) => {
        this.listing=response.data;
		console.log('listing');
        console.log(this.listing);
          for(var i=0;i<this.listing.length;i++){
                var select={
                  quantity:this.listing[i].quantity,
                  medicinecartid:this.listing[i].medicinecartid,
                }
                this.sort.push(select);
          }
		  this.quantity=this.sort[0]['quantity'];
		  this.medicinecartid=this.sort[0]['medicinecartid'];
		  this.$store.commit('setcartid',this.medicinecartid)
		  this.$store.commit('addtocounter',this.quantity)
        
      });
    },
  },
   beforeMount(){
    this.load()
      
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.relatives{
		position: relative;
	}
	.round{
		position: absolute;
		width: 30px;
		height: 30px;
		background-color: brown;
		color: #fff;
		text-align: center;
		line-height: 30px;
		font-size: 14px;
		z-index: 1000;
		border-radius: 50%;
		top: -15px;
		right: 0px;
		}
</style>
