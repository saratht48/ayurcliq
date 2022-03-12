<template>
    
</template>
<script>
import Box from './cart.vue'
export default {
  name: 'Dummy',
  props: {
    msg: String
  },
  data(){
    return{
      collection:[
        {
          name:'Choorna 1',
          price:1000,
          metric:[{qty:50,price:100,dis:5},{qty:100,price:200,dis:10},{qty:150,price:250,dis:15}],
          url:'images/productIMGS/choorna1.jpg'
        },
        {
          name:'Choorna 2',
          price:2000,
          metric:[{qty:50,price:100,dis:5},{qty:100,price:200,dis:10},{qty:150,price:250,dis:15}],
          url:'images/productIMGS/choorna1.jpg'
        },
        {
          name:'Choorna 3',
          price:3000,
          metric:[{qty:50,price:100,dis:5},{qty:100,price:200,dis:10},{qty:150,price:250,dis:15}],
          url:'images/productIMGS/choorna1.jpg'
        },
        {
          name:'Choorna 4',
          price:1500,
          metric:[{qty:50,price:100,dis:5},{qty:100,price:200,dis:10},{qty:150,price:250,dis:15}],
          url:'images/productIMGS/choorna1.jpg'
        }
      ],
    }
  },
  
  components:{
    Box
  }
}
</script>
