<template>
<div class="cover">
<h1>Categories</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laborum cum ab dolor accusantium unde ea earum laudantium ipsam quidem.</p>
    <splide :options="options">
    <splide-slide v-for="product in popularproducts" :key="product">
      <div class="sliderdata" >
        <img  class="image" :src="product" alt="">
        
      </div>
      </splide-slide>

      
    
  </splide>
</div>
</template>
<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
export default {
  name: 'slider3',
  data() {
      return {
        popularproducts :['assets/type1.jpg',
        'assets/type2.jpg',
        'assets/pp3.png',
        'assets/pp4.png',
        'assets/pp5.png',
        'assets/type2.jpg',
        'assets/pp3.png',
        'assets/pp4.png',
        'assets/pp5.png'

        ],
        options: {
          rewind : true,
          gap    : '2rem',
          perPage: 6,
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
}

</script>
<style scoped>

.sliderdata{
   
  width: 100%;
  height: 278px;
  
  
}
img{
    
    width:100%;
    height: 100%;
}

  

</style>