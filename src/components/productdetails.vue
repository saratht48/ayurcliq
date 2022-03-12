<template>
  <div style="background-color: #efedea">
    <div class="detailImageHolder">
      <div class="col-12">
        <div class="row">
          <div class="col-md-8">
            <div class="boxShadow detailBox mb-lg-4 mb-md-4 mb-3 pb-3">
              <detailspart1
                v-for="(datas, index) in dataarr"
                :key="index"
                :details="datas"
              >
              </detailspart1>
            </div>

            <div
              class="boxShadow detailBox sampleProducts mb-lg-4 mb-md-4 mb-3"
            >
              <h4 class="pt-3 px-3 textColorBlack">Indications and Usage</h4>
              <p class="px-3 pt-1 pb-3">
                {{ para1 }}
              </p>
            </div>

            <div
              class="boxShadow detailBox sampleProducts mb-lg-4 mb-md-4 mb-3"
            >
              <h4 class="pt-3 px-3 textColorBlack">Major Ingredients</h4>
              <div class="MajorIngredientsbase">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Sanskrit Name</th>
                      <th>Botanical Name</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(tab, index) in ingredients" :key="index">
                      <td>{{ tab.ingredientsanskritname}}</td>
                      <td>{{ tab.ingredientbotanicalname }}</td>
                      <td class="text-right">{{ tab.quantity }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div
              class="boxShadow detailBox sampleProducts mb-lg-5 mb-md-4 mb-3"
            >
              <h4 class="pt-3 px-3 textColorBlack">{{ heading }}</h4>
              <p class="px-3 pt-1 pb-3">
                {{ para2 }}
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div
              class="boxShadow detailBox sampleProducts mb-lg-4 mb-md-4 mb-3"
            >
              <h4 class="p-3 textColorBlack">Similar Products</h4>
              <detailspart2 :details="sliderdetails"></detailspart2>
            </div>
            <div id="Add1" class="mb-lg-4 mb-md-4 mb-2">
              <img class="img-fluid" src="images/Add/AddImg1.png" />
            </div>
            <div id="Add2" class="mb-lg-4 mb-md-4 mb-2">
              <img class="img-fluid" src="images/Add/AddImg2.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import detailspart1 from "./detailspart1.vue";
import detailspart2 from "./detailspart2.vue";
export default {
  name: "productdetails",
  data() {
    return {
      para1: "",

      para2: "",

      name: "",
      heading: "ashtachoorna",
      listing: [],
      sliderdetails: [],
      ingredients: [],
      dataarr: [],
      urldata: "",
      listing1:[],
      listing2:[],
      sort:[],
      
    };
  },
  methods: {
    before() {
      debugger;
      this.urldata = this.$route.params.id;

      console.log(this.urldata);
    },
    load() {
      axios({
        method: "get",
        url:
          process.env.VUE_APP_API_ENDPOINT +
          "ProductDetails/GetProductDetails?StrMedicineID=" +
          this.urldata,
        headers: { "content-type": "application/json" },
      }).then((response) => {
        this.listing = response.data;
        console.log("hi how are you");
        console.log(this.listing);
        for (var i = 0; i < this.listing.length; i++) {
          var metricarr = [];
          var identy = this.listing[i]["medicineid"];

          for (var j = 0; j < this.listing.length; j++) {
            if (identy == this.listing[j]["medicineid"]) {
              var datapart = {
                gram: this.listing[j]["size"],
                price: this.listing[j]["saleprice"],
                dis: this.listing[j]["discountprice"],
                medicinesizeid: this.listing[j]["medicinesizeid"],
              }
              metricarr.push(datapart);
            }
          }

          var select = {
            //imagealttext:this.listing[i].imagealttext,
            //itemID:this.listing[i].itemID,
            imagepath:process.env.VUE_APP_API_ENDPOINT + this.listing[i].imagepath,
            metric: metricarr,
            medicineID: this.listing[i]["medicineid"],
            fullName: this.listing[i].fullName,
          };
          if (this.dataarr.length == 0) {
            this.dataarr.push(select);
          } else {
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
        debugger
        this.para1 = this.listing[0]["indications"];
        this.para2 = this.listing[0]["content"];
        this.name = this.listing[0]["fullName"];

        for (var k = 0; k < this.listing.length; k++) {
          var identy1= this.listing[k]["medicineIngredientsid"];
          for(var t=0;t<this.listing.length;t++){
            if(identy1===this.listing[t]['medicineIngredientsid']){
                 var select7={
                   ingredientsanskritname: this.listing[t]["ingredientsanskritname"],
                   ingredientbotanicalname: this.listing[t]["ingredientbotanicalname"],
                   quantity: this.listing[t]["quantity"],
                   medicineIngredientsid:this.listing[t]['medicineIngredientsid'],
                 } 
                 if(this.ingredients.length===0){
                   this.ingredients.push(select7)
                 }else{
                   function finder(item){
                     if(item.medicineIngredientsid===identy1){
                       return true
                     }
                   }
                   var yesno = this.ingredients.find(finder);
            if (!yesno) {
              this.ingredients.push(select7);
            }
                 }
            }
          }
          /*var select7 = {
            ingredientsanskritname: this.listing[k]["ingredientsanskritname"],
            ingredientbotanicalname: this.listing[k]["ingredientbotanicalname"],
            quantity: this.listing[k]["quantity"],
          };
          if (this.ingredients.length === 0) {
            this.ingredients.push(select7);
          } else {
            function finder(item) {
              if (item.medicineIngredientsid == identy) {
                return true;
              }
            }
            var yesno = this.ingredients.find(finder);
            if (!yesno) {
              this.ingredients.push(select7);
            }
          }*/
        }
        console.log("ggggggggg");
        console.log(this.ingredients);
      });
    },
    load1(){
      debugger
      axios({
       
          method: 'get',
          url: process.env.VUE_APP_API_ENDPOINT+'ProductDetails/GetSimilarProducts?StrMedicineID='+this.urldata,
          headers: {'content-type':'application/json'}
        }).then((response) => {
        this.listing1=response.data;
        console.log('hhhhhhh');
        console.log(this.listing1);
        for(var i=0;i<this.listing1.length;i++){
                var select9={
                 // imagealttext:this.brands[i].imagealttext,
                 imagepath:this.listing1[i].imagepath,
                 imagealttext:this.listing1[i].imagealttext
                }
                this.sliderdetails.push(select9);
          }
          
        
      });
    },
     load2(){
      
      axios({
       
          method: 'get',
          url: process.env.VUE_APP_API_ENDPOINT+'HomeAPI/GetHomePageDetails?strFilter=Brands',
          headers: {'content-type':'application/json'}
        }).then((response) => {
        this.listing2=response.data;
        console.log(this.listing2);
         /* for(var i=0;i<this.brands.length;i++){
                var select={
                  imagealttext:this.brands[i].imagealttext,
                  itemname:this.brands[i].itemname,
                  itemID:this.brands[i].itemID,
                  itemimage:process.env.VUE_APP_API_ENDPOINT+this.brands[i].itemimage
                }
                this.sort.push(select);
          }*/
        
      });
    },
  },
  beforeMount() {
    this.before(), this.load(),this.load2(),
    this.load1()
  },

  components: {
    detailspart1,
    detailspart2,
  },
};
</script>
<style scoped>
* {
  font-family: ClearSans-Regular;

  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
}
.detailImageHolder {
  width: 95%;
  margin: 0px auto;
  padding: 50px 0px;
}
.detailBox {
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
  min-height: 100px;
}
.boxShadow {
  box-shadow: 0px 0px 9px 0px rgb(0 0 0 / 24%);
}
.col-md-8 {
  padding: 0px 15px;
}
.col-md-4 {
  padding: 0px 15px;
}
</style>
