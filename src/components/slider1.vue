<template>
<div class="cover p-3">
  <div class="cover1">
    <h1 class="py-3" style="text-align:start;">Popular Brands</h1>
    <p style="text-align:start;" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
    <splide :options="options">
    <splide-slide   v-for="brand in sort" :key="brand.itemID">
      <div class="sliderdata " >
        <img  class="image" :src="brand.itemimage" :alt="brand.imagealttext"  @click="redirect(brand.itemID)">
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
export default {
  name: 'slider1',
  data() {
      return {
        Itemimage:null,
        brands:[],
        sort:[],
        options: {
          rewind : true,
          gap    :'0rem',
          perPage: 8,
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
  components: {
    Splide,
    SplideSlide,

    
  },
  methods:{
    load(){
      
      axios({
       
          method: 'get',
          url: process.env.VUE_APP_API_ENDPOINT+'HomeAPI/GetHomePageDetails?strFilter=Brands',
          headers: {'content-type':'application/json'}
        }).then((response) => {
        this.brands=response.data;
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
   redirect(event){
     //this.$router.push({path:'/productlisting/', query:{id:event,name:'strBrand'}});
     var array1=[{a:event,b:'strBrand'}]
     this.$store.commit('updateurl',array1)
     //this.$router.push({path:'/productlisting/', query:{id:this.$store.state.url1,name:this.$store.state.name1}});
     this.$router.push({path:'/productlisting/'});

   }
  },
  beforeMount(){
    this.load()
      
	}
  
 
}

</script>
<style scoped>
.cover{
  margin-bottom: 20px 0px;
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
  height:auto;
  width:90%;
  margin:0px auto;
}

img{
  position:relative;
  left:16px;
  width:90%;
  height:auto;
  margin:0px auto;
}


  

</style>