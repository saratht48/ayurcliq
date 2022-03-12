<template>
<div class="cover">
  <div class="cover1">
<splide :options="options">
    <splide-slide v-for="combo in sort" :key="combo.homepageID">
      <div class="sliderdata ">
        <img @click="redirect(combo.itemID)" class="image" :src="combo.itemimage" :alt="combo.imagealttext">
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
  name: 'slidercombo',
  data() {
      return {
        combos:[],
        sort:[],
        options: {
          rewind : true,
          gap    : '4rem',
          perPage: 3,
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
       redirect(event){
         //this.$router.push('/combopackdetails/'+event);
         
         this.$store.commit('seturl',event)
         this.$router.push({path:'/combopackdetails'});

       },
       load(){
      
      axios({
       
          method: 'get',
          url: process.env.VUE_APP_API_ENDPOINT+'HomeAPI/GetHomePageDetails?strFilter=Combo Packs',
          headers: {'content-type':'application/json'}
        }).then((response) => {
        this.combos=response.data;
          for(var i=0;i<this.combos.length;i++){
                var select={
                  imagealttext:this.combos[i].imagealttext,
                  homepageID:this.combos[i].homepageID,
                  itemID:this.combos[i].itemID,
                  itemimage:process.env.VUE_APP_API_ENDPOINT+this.combos[i].itemimage,
                  imagealttext:this.combos[i].imagealttext
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
  }
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
    left: 17px;
}
</style>