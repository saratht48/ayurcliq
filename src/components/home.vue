<template>
 <div class="cover">
     
    <slider0/>
    <slider1/>
    <slider2/>
    <upload/>
    <sliderviewed/>
    <sliderpackages/>
    <consult/>
    <slidertypes/>
    <plans/>
    <productsslider/>
    <slidercombo/>
    <ad/>
    <sliderblog/>
    
 </div>
</template>
<script>
import slider0 from './slider0.vue';
import slider1 from './slider1.vue';
import slider2 from  './slider2.vue';
import sliderviewed from './sliderviewed.vue';
import sliderpackages from './sliderpackages.vue';
import slidertypes from './slidertypes.vue';
import slidercombo from './slidercombo.vue';
import sliderblog from './sliderblog.vue';
import upload from './upload.vue';
import plans from './plans.vue';
import consult from './consult.vue';
import ad from './ad.vue';
import productsslider from './productsslider.vue'
export default{
    name:'home',
components:{
    slider0,
    slider1,
    slider2,
    sliderviewed,
    sliderpackages,
    slidertypes,
    slidercombo,
    sliderblog,
    upload,
    plans,
    consult,
    ad,
    productsslider,
}
}
</script>
<style scoped>
*{
    font-family: ClearSans-Regular;
    text-align: left;
    background-color: #fff;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
}

</style>
