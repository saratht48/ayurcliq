<template>
<div class="cover">
    <splide :options="options">
    <splide-slide v-for="prod in sort" :key="prod.itemID">
      <div class="sliderdata" >
        <img  class="image" :src="prod.itemimage" :alt="prod.imagealttext">
        
      </div>
      </splide-slide>
  </splide>
</div>
</template>
<script>
import {mapState} from 'vuex'
//import {mapMutations} from 'vuex'
import axios from 'axios';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
export default {
  name: 'slider0',
  data() {
    debugger
      return {
        products:[],
        sort:[],
        options: {
          rewind :true,
          gap    :'2rem',
          perPage: 1,
        },
      };
    },
    computed:{
      ...mapState(["counter"])

    },
  props: {
    msg: String
  },
  methods:{
    //...mapMutations(["mut"]),
    plusing(){
      this.$store.commit('mut', 10)
    },
    load(){
      debugger
      axios({
      
          method: 'get',
          url: process.env.VUE_APP_API_ENDPOINT+'HomeAPI/GetHomePageDetails?strFilter=Main Banner',
          headers: {'content-type':'application/json'}
        }).then((response) => {
        this.products=response.data;
        console.log(this.products);
          for(var i=0;i<this.products.length;i++){
                var select={
                  imagealttext:this.products[i].imagealttext,
                  itemname:this.products[i].itemname,
                  itemID:this.products[i].itemID,
                  itemimage:process.env.VUE_APP_API_ENDPOINT+this.products[i].itemimage
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
  },
}

</script>
<style scoped>
.container{
    margin-top: 100px;
}
.sliderdata{
   
  width:100%;
  height: 350px;
 
  
  
}
img{
    
    width:100%;
    height: 100%;
    
}
</style>