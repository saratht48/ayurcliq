<template>
  <div class="cartBlock">
    <div>{{this.details.fullname}}</div>
    <div class="col-12">
      <div class="row" style="position: relative">
        <i @click="deleted" class="far fa-trash-alt deleteItem"></i>
        <div class="col-lg-3">
          <div class="cartImgBase">
            <img :src="details.image" />
          </div>
        </div>
        <div class="col-lg-4">
          <h6 class="pt-3 pb-0 mb-md-3 mb-2">
            {{ details.fullname }}
          </h6>

          <p class="mb-1 textColorGray">{{ details.quantity }}</p>
        </div>
        <div class="col-lg-3">
          <ul class="p-md-3 p-0">
            <li class="textColorGray">
              MRP
              <span class="MRP"
                ><i class="fas fa-rupee-sign"></i>{{ details.price }}</span
              >
            </li>
            <li>
              <div class="text-left p-0">
                <i class="fas fa-rupee-sign"></i>
                <span>{{ details.discount }}</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-lg-2 text-right" style="position: relative">
          <div class="textColorBlack Quantity qartqty">
            <i @click="substract" class="far fa-minus-square minus" id=""></i>
            <span class="px-2 qty" id="">{{ details.count }}</span>
            <i @click="add" class="far fa-plus-square plus" id=""></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'cart',
  props:{
    details: {
      image: String,
      fullname: String,
      quantity: String,
      price: String,
      discount: String,
      count: Number,
      medicineid:String,
    },
  },
  methods:{
    add() {
      this.details.count++;
    
      debugger
      
        var data={
          Medicinesizeid:this.details.medicinesizeid,      
          Medicineid:this.details.medicineid,
          Plusminus:"+",
          
        }

      
      debugger
      axios({        
          method: 'post',
          url: process.env.VUE_APP_API_ENDPOINT+'ProductListingAPI/InsertMedicinePlusMinusDetails',          
          data:JSON.stringify(data),
          headers: {'content-type':'application/json'}
        }).then((response) => {
          
        
       // this.obj=parseFloat(response.data.quantity);
        this.$emit('changed');
      });
    },
     substract() {
      if (this.details.count!==0) {
      this.details.count--;
      }
       var data2={
          Medicinesizeid:this.details.medicinesizeid,      
          Medicineid:this.details.medicineid,
          Plusminus:"-",
          
        }

      
      debugger
      axios({        
          method: 'post',
          url: process.env.VUE_APP_API_ENDPOINT+'ProductListingAPI/InsertMedicinePlusMinusDetails',          
          data:JSON.stringify(data2),
          headers: {'content-type':'application/json'}
        }).then((response) => {
        console.log(typeof( this.obj));
        this.$emit('changed');
      });
    },
   deleted(){
       var data1={
         Medicinesizeid:this.details.medicinesizeid,
          Sessionid:"1"      
        }

      
      debugger
      axios({        
          method: 'post',
          url: process.env.VUE_APP_API_ENDPOINT+'cartpage/DeleteCart',          
          data:JSON.stringify(data1),
          headers: {'content-type':'application/json'}
        }).then((response) => {
          console.log('pppppppppp');
        console.log(response.data);
         this.$emit('changed');
      });
      
      

    },
    setActive(){
      console.log(this.details.fullname);
    }
  },
  beforeMount(){
    this.setActive();
 }
};
</script>
<style scoped></style>
