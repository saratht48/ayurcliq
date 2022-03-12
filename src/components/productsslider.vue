<template>
<div class="cover">
  <div class="cover1">
<h1 class="pl-4 spec" style="text-align:start;">popular products</h1>
    <splide :options="options">
    <splide-slide v-for="cat in sort" :key="cat.itemID">
      <div class="sliderdata " >
        <img  class="image" :src="cat.itemimage" :alt="cat.imagealttext" @click="redirect(cat.itemID)">
        <h1 class="head">{{cat.itemname}}</h1> 
      </div>
      </splide-slide>   
  </splide>
</div>
</div>
    
</template>
<script>
import axios from 'axios';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
export default{
    name:'productsslider',
    data(){
        return{
            brands:[],
            sort:[],
            options: {
          rewind : true,
          gap    : '2rem',
          perPage: 7,
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
    components: {
    Splide,
    SplideSlide,
  },
    methods:{
      redirect(event){
           this.$store.commit('updateurl',event);
           this.$router.push({path:'/productlisting/'});
      },
    load(){
      
      axios({
       
          method: 'get',
          url: process.env.VUE_APP_API_ENDPOINT+'HomeAPI/GetHomePageDetails?strFilter=Popular Products',
          headers: {'content-type':'application/json'}
        }).then((response) => {
        this.brands=response.data;
        console.log('popularproducts');
        console.log(this.brands);
          for(var i=0;i<this.brands.length;i++){
                var select={
                  imagealttext:this.brands[i].imagealttext,
                  itemname:this.brands[i].itemname,
                  itemID:this.brands[i].itemID,
                  itemimage:process.env.VUE_APP_API_ENDPOINT+this.brands[i].itemimage
                }
                  this.sort.push(select);
          }
      });
    },
    },
    beforeMount(){
    this.load()
	},
}
</script>
<style scoped>
*{
   box-sizing: border-box;

}
.spec{
  font-family: 'ClearSans-Regular';
  font-size: 25px;
  font-weight: 100;
  text-align: left;
  color: #212529;
  margin-bottom: 0.5rem;
  line-height: 1.2;
  box-sizing: border-box;
}
.cover{
  margin:25px 0px;
}

.cover1{
  width:98%;
  margin:0px auto;
}
p{
        font-size: 14px;
        color: #919191;
}
h1{
font-family: 'ClearSans-Regular';
    font-size: 25px;
    font-weight: 100;
}
.sliderdata{
   
  width:90%;
  height:auto;
  margin:0px auto;
  
  
}
img{
    
    width:100%;
    
}
.head{
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
}

</style>
