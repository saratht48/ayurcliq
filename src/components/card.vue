<template>
  <div class="col-xl-3 col-lg-4 col-6 mb-md-4 mb-0 px-lg-3 px-xl-3 px-0" >
    <div class="productCard boxShadow">
      <div class="productIMG">
        <img :src="details.imagepath" :alt="details.imagealttext" @click="redirect(details.medicineID)"/>
      </div>
      <h6 class="px-3 pt-3 pb-0">{{details.fullname}}</h6>
      <ul class="p-3 m-0">
        <li class="textColorGray pb-3 Grms">
          <span v-for="(met,index) in details.metric" :key="index"  class="metricLI" :class="{ 'selection': activeIndex === index}" @click="setActive(index)" >
           {{met.gram}}
            </span>
        </li>
        <li class="textColorGray">
          MRP
          <span class="MRP">
            <i class="fas fa-rupee-sign"></i>
            <span >{{details.metric[activeIndex]['price']}}</span>    
          </span>
        </li>
        <li class="col-12">
          <div class="row">
            <div class="col-6 text-left p-0">
              <i class="fas fa-rupee-sign"></i>
              <span>{{details.metric[activeIndex]['dis']}}</span>
            </div>
            <div
              class="col-6 text-right p-0 QuantityWrapper"
              style="position: relative"
            >
              <span v-if="condition===1"   class="AddPlus" @click="fun()">
                Add
                <i class="fas fa-plus-circle"></i>
              </span>
              <div v-if="condition===2"  class="textColorBlack Quantity qartqty">
                <i
                  @click="substract"
                  class="far fa-minus-square minus"
                  id=""
                ></i>
                <span class="px-2 qty" id="">{{ count }}</span>
                <i @click="add" class="far fa-plus-square plus" id=""></i>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'card',
  data() {
    return {
      count: 0,
      activeIndex:0,
      gram:null,
      countcart:0,
      condition:1,
      obj:0,
    };
  },
   props: {
    details:{
        fullname:String,
        saleprice:Number,
        imagepath:String,
        metric:[],
        discountedprice:Number,
        imagealttext:String,
    }
  },
  methods: {
    fun(){
      if(this.condition===1){
        this.condition=2;
      }
      this.count++;
       var data1={
          Medicinesizeid:this.details.metric[this.activeIndex]['medicinesizeid'],         
          Medicineid:this.details.medicineID,
          Plusminus:"+",
          
        }

      
      debugger
      axios({        
          method: 'post',
          url: process.env.VUE_APP_API_ENDPOINT+'ProductListingAPI/InsertMedicinePlusMinusDetails',          
          data:JSON.stringify(data1),
          headers: {'content-type':'application/json'}
        }).then((response) => {
          console.log('sucsc');
        
        this.obj=parseFloat(response.data.quantity);
        this.$emit('changed',this.obj);
      });

      
      

    },
    redirect(event){
     this.$router.push('/productdetails/'+event);
   },
    add() {
      this.count++;
    
      debugger
      
        var data={
          Medicinesizeid:this.details.metric[this.activeIndex]['medicinesizeid'],         
          Medicineid:this.details.medicineID,
          Plusminus:"+",
          
        }

      
      debugger
      axios({        
          method: 'post',
          url: process.env.VUE_APP_API_ENDPOINT+'ProductListingAPI/InsertMedicinePlusMinusDetails',          
          data:JSON.stringify(data),
          headers: {'content-type':'application/json'}
        }).then((response) => {
          
        
        this.obj=parseFloat(response.data.quantity);
        this.$emit('changed',this.obj);
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
        
        this.obj=parseFloat(response.data.quantity);
        console.log(typeof( this.obj));
        this.$emit('changed',this.obj);
      });
    },
    setActive(index) { 
      if(this.condition===2){
        this.condition=1;
      }
      this.activeIndex = index;
      this.gram=this.details.metric[index]['gram'];
      if(this.count!=0){
        this.count=0;
      } 
    }
  },
  };
</script>
<style scoped>
* {
  font-family: ClearSans-Regular;
}
h6{
  color:#000;
}
li {
  list-style: none;
}
.filterWrapper {
  background-color: #efedea;
  min-height: 100vh;
}
.productCard {
  width: 100%;
  background-color: #fff;
  min-height: 250px;
  border-radius: 10px;
}
.boxShadow {
  box-shadow: 0px 0px 9px 0px rgb(0 0 0 / 24%);
}
.productCard .productIMG {
  width: 70%;
  height: 180px;
  margin: 0 auto;
}
.textColorGray {
  color: #919191;
}
.textColorBlack {
  color: #000;
}
.badge-success {
  color: #000;
  background-color: #ffffff;
  border: 1px black solid;
  cursor: pointer;
}
.badge {
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 100;
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
.activeGrms {
  /* background-color: #b7936c !important; */
  color: #b7936c !important;
  text-decoration: underline;
}
.middleBadge {
  border-left: 1px black solid;
  border-right: 1px black solid;
  border-top: 0px;
  border-bottom: 0px;
  border-radius: 0px;
}
.MRP {
  color: red;
  text-decoration: line-through;
}
.QuantityWrapper .qartqty {
  position: relative;
  bottom: 0px;
  right: 0px;
}
.AddPlus {
    font-weight: bold;
    color: #94724d;
    cursor: pointer;
}
</style>