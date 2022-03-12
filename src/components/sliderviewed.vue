<template>
   <div class="cover">
   <div class="cover1">
     <div class="viewed boxshadow p-3">
   <h1  style="text-align:start">Recently Viewed</h1>
  <splide :options="options">
    <splide-slide v-for="view in viewed" :key="view.homepageID">
      <div class="sliderdata p-1 " >
        <img  class="image" :src="view.itemimage" :alt="view.imagealttext">
        <h1 class="head">{{view.imagealttext}}</h1>
      </div>
    </splide-slide>
  </splide>
     </div>
</div>
   </div>


</template>
<script>
import axios from 'axios';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
export default {
  name: 'sliderviewed',
  data() {
      return {
        viewed:[],
        sort:[],
        options: {
          rewind : true,
          gap    : '2rem',
          perPage: 6,
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
  props: {
    msg: String
  },
  methods:{
    load(){
      
      axios({
       
          method: 'get',
          url: process.env.VUE_APP_API_ENDPOINT+'HomeAPI/GetHomePageDetails?strFilter=Groups',
          headers: {'content-type':'application/json'}
        }).then((response) => {
        this.viewed=response.data;
          for(var i=0;i<this.viewed.length;i++){
                var select={
                  homepageID:this.viewed[i].homepageID,
                  itemimage:process.env.VUE_APP_API_ENDPOINT+this.viewed[i].itemimage,
                  imagealttext:this.viewed[i].imagealttext
                }
                this.sort.push(select);
          }
        
      });
    },
  },
   beforeMount(){
    this.load()
      
	},
   components: {
    Splide,
    SplideSlide,
  }
}

</script>
<style scoped>
 .cover{
   margin:55px 0px;
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

.viewed {
    width: 90%;
    min-height: 150px;
    margin: 0 auto;
    border-radius: 10px;
    
}
.boxshadow{
  box-shadow: 0px 0px 9px 0px rgb(0 0 0 / 24%);
}
.head{
   text-align: center;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
}


.sliderdata{
   
  width:90%;
  height:auto;
  margin:0px auto;
  
  
}
img{
    
    width:100%;
  
}

  

</style>