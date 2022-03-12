<template>
<div class="cover">
  <div class="cover1">
<h1 class="pl-4" style="text-align:start;">Categories</h1>
<p  class="pl-4" style="text-align:start;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laborum cum ab dolor accusantium unde ea earum laudantium ipsam quidem.</p>
    <splide :options="options">
    <splide-slide v-for="cat in sort" :key="cat.homepageID">
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
export default {
  name: 'slider2',
  data() {
      return {
        categories:[
        
        ],
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
          url: process.env.VUE_APP_API_ENDPOINT+'HomeAPI/GetHomePageDetails?strFilter=Groups',
          headers: {'content-type':'application/json'}
        }).then((response) => {
        this.categories=response.data;
        console.log(this.categories);
          for(var i=0;i<this.categories.length;i++){
                var select={
                  itemname:this.categories[i].itemname,
                  homepageID:this.categories[i].homepageID,
                  itemID:this.categories[i].itemID,
                  itemimage:process.env.VUE_APP_API_ENDPOINT+this.categories[i].itemimage,
                  imagealttext:this.categories[i].imagealttext
                }
                this.sort.push(select);
          }
      });
    },
    redirect(event){
      debugger
     //this.$router.push({path:'/productlisting/', query:{id:event,name:'strGroup'}});
     var array1=[{a:event,b:'strGroup'}]
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