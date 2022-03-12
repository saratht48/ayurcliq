<template>
  
    
    <div class="row" @click="fun">
      <div class="col-md-5 text-center">
        <img
          class="img-fluid detailImage"
          :src="details.imagepath"
        />
      </div>
      <div class="col-md-7 pt-lg-5">
        <h2 class="px-3 pt-3 pb-0">{{details.fullName}}</h2>
        <ul class="px-3 pt-3 mb-0">
          <li class="textColorBlack mb-2">
            MRP <span class="MRP"><i class="fas fa-rupee-sign"></i> {{details.metric[activeIndex]['price']}}</span>
          </li>
          <li class="tag mb-3">
            <div class="text-left p-0">
              <i class="fas fa-rupee-sign"></i> <span>{{details.metric[activeIndex]['dis']}}</span>
            </div>
          </li>
          <li class="textColorBlack mb-3">
            <span v-for="(met,index) in details.metric" :key="index"  class="metricLI" :class="{ 'selection': activeIndex === index}" @click="setActive(index)" >
           {{met.gram}}</span>
            
          </li>
          <li class="textColorBlack Quantity">
            <span class="pr-lg-3">Quantity</span>
            <i @click="substract" class="far fa-minus-square" id="minus" ></i>
            <span class="px-2" id="qty">{{count}}</span>
            <i @click="add"  class="far fa-plus-square" id="plus"></i>
          </li>
        </ul>
        <div class="text-right p-0 mb-md-0 mb-3">
          <span class="AddPlus">Add to Cart</span>
        </div>
      </div>
    </div>
  
</template>
<script>
import axios from 'axios';
export default {
  name: "detailspart1",
  data() {
    return{
      activeIndex:0,
      count:0
    }
  },
  methods:{
    fun(){
      console.log(this.details.fullName)
      console.log(this.details.imagepath)
    },
    setActive(index) { 
      this.activeIndex = index;
     // this.gram=this.metric[index]['gram'];
      if(this.count!=0){
        this.count=0;
      } 
    },
    add() {
      this.count++;
      var data={
          Medicinesizeid:this.details.metric[this.activeIndex]['medicinesizeid'],         
          Medicineid:this.details.medicineID,
          Plusminus:"+",
          
        }
         axios({        
          method: 'post',
          url: process.env.VUE_APP_API_ENDPOINT+'ProductListingAPI/InsertMedicinePlusMinusDetails',          
          data:JSON.stringify(data),
          headers: {'content-type':'application/json'}
        }).then((response) => {
        console.log(response.data);
      });
    },
    
    substract() {
      if (this.count!=0) {
      this.count--;

      }
    var data2={
          Medicinesizeid:this.details.metric[this.activeIndex]['medicinesizeid'],         
          Medicineid:this.details.medicineID,
          Plusminus:"-",
          
        }

      
      debugger
      axios({        
          method: 'post',
          url: process.env.VUE_APP_API_ENDPOINT+'ProductListingAPI/InsertMedicinePlusMinusDetails',          
          data:JSON.stringify(data2),
          headers: {'content-type':'application/json'}
        }).then((response) => {
        console.log(response.data);
      });
    },

  },
  props:{
    details:{
      fullName:String,
      
      imagepath:String,
      metric:[],
      
    }
  }
};
</script>
<style scoped>
* {
  font-family: ClearSans-Regular;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
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
.metricLI{
  display: inline-block;
  color: #000;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 100;
  cursor: pointer;
  margin-left: 5px;
}
.selection{
  color: #b7936c;
}
</style>
