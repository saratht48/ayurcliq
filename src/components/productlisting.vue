<template>
  <div class="col-12 filterWrapper">
    <div class="row">
      <div class="col-md-3 my-md-5 mt-3">
        <button class="btn btn-primary btn-block mb-3" id="filter">Filter</button>
            <div class="filterSelection p-md-4 p-4 boxShadow inandout mb-md-0 mb-4" id="filterset">
                <h5 class="textColorBlack mb-2">
                    CATAGORIES
                </h5>
                <div class="categoryItem">
                    <ul>
                        <li v-for="bat in sort3" :key="bat">
                            <input type="radio" id="checkbox-1-1"  name="select" :value="bat.id" v-model="radiodata" @change="check('strGroup')">
                            <label for="checkbox-1-1">{{bat.name}}</label>
                            
                        </li>
                        
                    </ul>
                </div>
                <h5 class="textColorBlack mb-2">
                    TYPES
                </h5>
                <div class="types">
                    <ul>
                        <li v-for="bat1 in sort2" :key="bat1">
                         <input type="radio" id="checkbox-1-1" name="select" :value="bat1.id"  v-model="radiodata" @change="check('strType')">
                            <label for="checkbox-1-1">{{bat1.name}}</label>   
                        </li>
                    </ul>
                </div>

                <h5 class="textColorBlack mb-2">
                    BRANDS
                </h5>
                <div class="types">
                    <ul>
                        <li v-for="bat2 in sort1" :key="bat2">
                            <input type="radio" id="checkbox-1-1"  name="select"  :value="bat2.id"  v-model="radiodata" @change="check('strBrand')" >
                            <label for="checkbox-1-1">{{bat2.name}}</label>
                            
                        </li>
                        
                    </ul>
                </div>
            </div>
      </div>
      <div class="col-md-9 my-md-5 my-0">
        <div class="col-12 p-0">
          <div class="row" id="listHolder">
            <card
              v-for="detail in dataarr" 
              :key="detail"
              :details="detail" @changed="changed"
            ></card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import {mapMutations} from 'vuex'
import axios from 'axios';
import card from './card.vue'


export default {
  name: 'productlisting',
  data() {
    return {
      urldata:'',
      details2: [],
      sort:[],
      details1:[],
      sort1:[],
      sort2:[],
      sort3:[],
      content:[],
      radiodata:null,
      dataarr:[]
    };
  },
  methods:{
    //...mapMutations(['addtocounter']),
    
      check(event1){
        this.urldata=this.radiodata;
        this.name=event1;
        console.log(this.urldata+''+this.name);
        this.dataarr=[];
        this.load();
      },
      heading(){
          debugger
          //this.urldata=this.$route.query.id;
         // this.name=this.$route.query.name;
            this.urldata=this.$store.state.url1;
            this.name=this.$store.state.name1;
          console.log(this.urldata+''+this.name);
          
      },
      changed(value){
        console.log('qqqqqqq');
        console.log(value);
       //addtocounter(value);
       this.$store.commit('addtocounter',value)
      },
      

    load(){
      debugger
      axios({
          method: 'get',
          url: process.env.VUE_APP_API_ENDPOINT+'ProductListingAPI/GetMedicineDatatoShow?'+this.name+'='+this.urldata,
          headers: {'content-type':'application/json'}
        }).then((response) => {
        this.details2=response.data;
        debugger
        console.log('good morning');
        console.log(this.details2);

        
        for(var i=0;i<this.details2.length;i++){
            var listItem={
              brandName:this.details2[i]['brandName'],
              medicineID:this.details2[i]['medicineID'],
              imagepath:this.details2[i]['imagepath'],
              saleprice:this.details2[i]['saleprice']
            }
            console.log(listItem)
        }

         for(var i=0;i<this.details2.length;i++){
            var metricarr=[];
            var identy=this.details2[i]['medicineID'];

            for (var j = 0; j < this.details2.length; j++) {
                if (identy == this.details2[j]['medicineID']) {
                   var datapart={
                       gram:this.details2[j]['quantity'],
                       price:this.details2[j]['saleprice'],
                       dis:this.details2[j]['discountedprice'],
                       medicinesizeid:this.details2[j]['medicinesizeid']
                   }
                   metricarr.push(datapart);
                }
            }
                var select={
                  imagealttext:this.details2[i].imagealttext,
                  itemID:this.details2[i].itemID,
                  imagepath:process.env.VUE_APP_API_ENDPOINT+this.details2[i].imagepath,
                  metric:metricarr,
                  medicineID:this.details2[i]['medicineID'],
                  fullName:this.details2[i].fullName
                }
                if (this.dataarr.length == 0) {
                        this.dataarr.push(select);
                    }
                    else {

                        function finder(item) {
                            if (item.medicineID == identy) {
                                return true;
                            }
                        }
                        var yesno = this.dataarr.find(finder);
                        if (!yesno) {
                            this.dataarr.push(select);
                        }
                    }
          }
 console.log(this.dataarr);
 console.log('good morning');




      });
    },
    load1(){
      
      axios({ 
          method: 'get',
          url: process.env.VUE_APP_API_ENDPOINT+'ProductListingAPI/GetProductListingFilters?strFilter=1',
          headers: {'content-type':'application/json'}
        }).then((response) => {
        this.details1=response.data;
        console.log(this.details1);
         for(var i=0;i<this.details1.length;i++){
              var classname=this.details1[i].class;
              if(classname=='Brands'){
                var select1={
                  name:this.details1[i].name,
                  id:this.details1[i].id
                  
                }
                this.sort1.push(select1);
              }
              if(classname=='Types'){
                var select2={
                  name:this.details1[i].name,
                    id:this.details1[i].id
                }
                this.sort2.push(select2)
              }
              if(classname=='Groups'){
                var select3={
                  name:this.details1[i].name,
                    id:this.details1[i].id
                }
                this.sort3.push(select3)
              }
          }

      });
    },
  },
  beforeMount(){
    this.heading(),
    this.load(),
    this.load1()
    },
  components: {
    card,
  },
};
</script>

<style  scoped>
*{
    font-family: ClearSans-Regular;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
}
h5{
    font-family: 'ClearSans-Medium';
    font-size: 16px;
    font-weight: 400;
    margin: 0px;
}
label{
  padding-left: 12px;
}
.filterSelection {
    width: 80%;
    margin: 0px auto;
    background-color: #fff;
    min-height: 100vh;
    border-radius: 10px;
}
.boxShadow {
    box-shadow: 0px 0px 9px 0px rgb(0 0 0 / 24%);
}
</style>