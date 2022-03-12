<template>
    <splide :options="options">
    <splide-slide v-for="(brand,index) in brands" :key="index" >
      <div class="sliderdata">
          <img :src="brand" alt="">
      </div>
    </splide-slide>
    
  </splide>
</template>
<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
export default {
  name: 'slider',
  data() {
      return {
        brands:['assets/b1.png',
        'assets/b2.png',
        'assets/b3.png',
        'assets/b4.png',
        'assets/b5.png'

        ],
        options: {
          rewind : true,
          gap    : '1rem',
          perPage: 2,
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
  height: 250px;
  
}

</style>
