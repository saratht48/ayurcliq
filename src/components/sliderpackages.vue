<template>
  <div class="cover">
    <div class="cover1">
    <div style="margin: 10px">
      <div class="content">
      
        <splide :options="options">
          <splide-slide v-for="pack in sort" :key="pack.homepageID" style="height:340px;">
            <div class="sliderdata " >
            <div class="imagewrapper">
                <img class="image" :src="pack.itemimage" :alt="pack.imagealttext"/>
              </div>
              <div class="contentwrapper" style="padding-top: 0.5rem">
                <h1>{{ pack.imagealttext }}</h1>
                <p>{{ pack.itemprofile }}</p>
                <div class="col-12 p-0">
                  <div class="row">
                    <div class="col-6">
                    <p class="price mb-2"><span class="pr-1"><i class="fas fa-rupee-sign"></i></span>{{ pack.itemprice}}</p>
                    </div>
                    <div class="col-6">
                      <button @click="booknow(pack.itemID)" class="btn btn-primary btn-block mb-2 btn-sm" href="#">Book Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </splide-slide>
        </splide>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
debugger
import axios from 'axios';
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
export default {
  name: "sliderpackages",
  data() {
    return {
      packages:[],
      sort:[],
      options: {
        rewind: true,
        gap: "1rem",
        perPage: 5,
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
    };
  },
  methods:{
    booknow(event){
     this.$store.commit('seturl',event)
     this.$router.push({path:'/packagedetails'});
      //this.$router.push('/packagedetails/'+event);
    },
        load(){
      
      axios({ 
          method: 'get',
          url: process.env.VUE_APP_API_ENDPOINT+'HomeAPI/GetHomePageDetails?strFilter=Packages',
          headers: {'content-type':'application/json'}
        }).then((response) => {
        this.packages=response.data;
        console.log(this.packages);
          for(var i=0;i<this.packages.length;i++){
                var select={
                  homepageID:this.packages[i].homepageID,
                  itemimage:process.env.VUE_APP_API_ENDPOINT+this.packages[i].itemimage,
                  imagealttext:this.packages[i].imagealttext,
                  itemID:this.packages[i].itemID,
                  itemprofile:this.packages[i].itemprofile,
                  itemprice:this.packages[i].itemprice
                }
                this.sort.push(select);
          }
        console.log(this.sort);
      });
    },
  },
  beforeMount(){
    this.load()
      
      },
  props: {
    msg: String,
  },
  components: {
    Splide,
    SplideSlide,
  },
};
</script>
<style scoped>

.cover{
  margin:45px 0px;
}
.cover1{
  width:98%;
  margin:0px auto;
}
h1{
font-family: 'ClearSans-Regular';
    font-size: 25px;
    font-weight: 100;
}
p{
        font-size: 14px;
        color: #919191;
}
.price{
  position: relative;
  left: 10px;
  color: #212529;
}

.sliderdata {
  width:90%;
  height: auto;
  position: relative;
  top:10px;
  border-radius: 10px;
  box-shadow: 0px 0px 9px 0px rgb(0 0 0 / 24%);
  padding:10px;
  margin:0px auto;
}
img {
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  height: 150px;
  object-fit: cover;
}
.contentwrapper {
  position: relative;
}
.sliderdata a {
  position: absolute;
  top:76px;
  right: 10px;
  text-decoration: none;
  color: #fff;
}
.btns{
  color: #fff;
    background-color: #9a7652;
    border-color: #9a7652;
    padding:1px 30px;
    border-radius: 3px;
}
.btn-primary {
    color: #fff;
    background-color: #9a7652 !important;
    border-color: #9a7652 !important;
}
.btn-primary:hover {
    color: #fff;
    background-color: #e19a53 !important;
    border-color: #9a7652 !important;
}


</style>