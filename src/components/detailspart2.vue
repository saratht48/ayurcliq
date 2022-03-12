<template>
  <div>
    <splide :options="options">
      <splide-slide v-for="detail in details" :key="detail">
        <div class="sliderdata">
          <img class="image" :src="detail.imagepath" />
          <h1 >{{ detail.imagealttext}}</h1>
        </div>
      </splide-slide>
    </splide>
  </div>
</template>
<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
export default {
  name: "detailspart2",
  data() {
    return {
      options: {
        rewind: true,
        gap: "0rem",
        perPage: 2,
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
    details:[],
  },
  components: {
    Splide,
    SplideSlide,
  },
};
</script>
<style scoped>
*{
    font-family: ClearSans-Regular;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
}
h1{
    text-align: center;
}
.detailImage {
    max-width: 100%;
    object-fit: contain;
    border-radius: 20px;
    margin: 20px 0px;
}
img {
    vertical-align: middle;
    border-style: none;
    width: 100%;
    height: 150px;
    object-fit: contain;
    margin: 0 auto;
}
.img-fluid {
    height: auto;
}
.tag {
    font-size: 22px;
    font-weight: 600;
}
.detailBox .textColorBlack {
    font-size: 18px;
}
.textColorBlack {
    color: #000;
}
</style>
