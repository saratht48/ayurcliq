<template>

    <div  v-for="ad in sort" :key="ad.homepageID" class="add my-1 text-center p-2">
        <img :src="ad.itemimage"  class="img-fluid" alt="">
    </div>
   
</template>
<script>
import axios from 'axios';
export default{
   name:'ad',
   data(){
     return{
         images:[],
         sort:[],
     }  
   },
   methods:{
       load(){
      
      axios({
       
          method: 'get',
          url: process.env.VUE_APP_API_ENDPOINT+'HomeAPI/GetHomePageDetails?strFilter=Sub Banner',
          headers: {'content-type':'application/json'}
        }).then((response) => {
        this.images=response.data;
          for(var i=0;i<this.images.length;i++){
                var select={
                  homepageID:this.images[i].homepageID,
                  itemimage:process.env.VUE_APP_API_ENDPOINT+this.images[i].itemimage,
                  
                }
                this.sort.push(select);
          }
      });
    },
  },
  beforeMount(){
    this.load()
      
	},

}
</script>
<style scoped>
</style>

