<template>
<div class="cover">
  <div class="cover1">
  <div style="margin:10px;">
    <div class="blog" >
        <h1>Blogs</h1>
    </div>

<div class="content">
    <splide :options="options">
    <splide-slide v-for="blog in sort" :key="blog.homepageID" style="height:340px;">
      <div class="sliderdata " style="height:280px;" >
          <div class="slider">
          <div class="imagewrapper">
        <img  class="image" :src="blog.itemimage" :alt="blog.imagealttext">
          </div>
          <div class="contentwrapper" style="padding-top:.5rem">
            
              <p>{{blog.itemprofile}}</p>
            </div>
              <a href="#" >read more <i class="fas fa-chevron-right readmoreIcon"></i></a>
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
import axios from 'axios';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
export default {
  name: 'slider5',
  data() {
      return {
        blogs:[],
        sort:[],
        options: {
          rewind : true,
          gap    : '4rem',
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
       load(){ 
      axios({ 
          method: 'get',
          url: process.env.VUE_APP_API_ENDPOINT+'HomeAPI/GetHomePageDetails?strFilter=Blogs',
          headers: {'content-type':'application/json'}
        }).then((response) => {
        this.blogs=response.data;
          for(var i=0;i<this.blogs.length;i++){
                var select={
                  imagealttext:this.blogs[i].imagealttext,
                  homepageID:this.blogs[i].homepageID,
                  itemimage:process.env.VUE_APP_API_ENDPOINT+this.blogs[i].itemimage,
                  imagealttext:this.blogs[i].imagealttext,
                  itemprofile:this.blogs[i].itemprofile,
                }
                this.sort.push(select);
          }
      });
    },
   
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
  margin:20px 0px;
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

.sliderdata{
   
  width: 100%;
  height: 278px;
  position: relative;
  top:10px;
  border-radius: 10px;
  box-shadow: 0px 0px 9px 0px rgb(0 0 0 / 24%);
  padding:5px;

}
.slider{
  width:96%;
  height:96%;
  margin:auto auto;
  position:relative;

}
img{
    
    width:100%;
    
    border-radius: 10px 10px 0px 0px;
    height: 150px;
    object-fit: cover;
}
.contentwrapper{
  position:relative;
}
.slider a{
  position:absolute;
  bottom:10px;
  right:10px;
  text-decoration: none;
  color:#000;
}
.slider a:hover{
  color:orange;
}


  

</style>