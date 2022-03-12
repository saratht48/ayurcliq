<template>
<div class="cover">
  <div class="cover1">
<h1 class="pl-4">Types</h1>
<p class="pl-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laborum cum ab dolor accusantium unde ea earum laudantium ipsam quidem.</p>
    <splide :options="options">
    <splide-slide v-for="type in sort" :key="type.homepageID">
      <div class="sliderdata " >
      <img  class="image" :src="type.itemimage" :alt="type.imagealttext" @click="redirect(type.itemID)">
      <h1 class="head">{{type.itemname}}</h1>
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
  name: 'slidertypes',
  data() {
      return {
        types:[],
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
      };
    },
     methods:{
       load(){
      
      axios({
       
          method: 'get',
          url: process.env.VUE_APP_API_ENDPOINT+'HomeAPI/GetHomePageDetails?strFilter=Types',
          headers: {'content-type':'application/json'}
        }).then((response) => {
        this.types=response.data;
          for(var i=0;i<this.types.length;i++){
                var select={
                  imagealttext:this.types[i].imagealttext,
                  itemname:this.types[i].itemname,
                  itemID:this.types[i].itemID,
                  homepageID:this.types[i].homepageID,
                  itemimage:process.env.VUE_APP_API_ENDPOINT+this.types[i].itemimage,
                  imagealttext:this.types[i].imagealttext
                }
                this.sort.push(select);
          }
      });
    },
    redirect(event){
     //this.$router.push({path:'/productlisting/', query:{id:event,name:'strType'}});
     var array1=[{a:event,b:'strType'}]
     this.$store.commit('updateurl',array1)
     this.$router.push({path:'/productlisting/'});
   }
  },
  beforeMount(){
    this.load()
      
	},
  props: {
    msg: String
  },
  components: {
    Splide,
    SplideSlide,
  },
}
</script>
<style scoped>
.cover{
  margin:25px 0px;
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

.sliderdata{
   
  width:90%;
  height:auto;
  margin:0px auto;
}
img{

 width:90%;
 height:auto;
 margin:0px auto;
 position: relative;
 left: 15px;
}
    
.head{
   text-align: center;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
} 
</style>