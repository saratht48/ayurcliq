<template>
  <div style="background-color: #efedea">
    <div class="cartBase">
      <div class="col-12">
        <div class="py-4" style="width: 100%; margin: 0px auto">
          <div class="row">
            <div class="col-4 text-center">
              <input
                type="radio"
                id="checkbox-1-1"
                name="select"
                value="1"
                v-model="option"
                checked
                @change="shift"
              />
              <br />
              <label for="checkbox-1-1">Cart</label>
            </div>
            <div class="col-4 text-center">
              <input
                type="radio"
                id="checkbox-1-1"
                name="select"
                value="2"
                v-model="option"
                @change="shift"
              />
              <br />
              <label for="checkbox-1-1">Checkout</label>
            </div>
            <div class="col-4 text-center">
              <input
                type="radio"
                id="checkbox-1-1"
                name="select"
                value="3"
                v-model="option"
                @change="shift"
              />
              <br />
              <label for="checkbox-1-1">Finish</label>
            </div>
          </div>
        </div>
        <div v-if="seenone" class="row">
          <div class="col-md-8">
            <div
              class="boxShadow cartdetails sampleProducts mb-lg-5 mb-md-4 mb-3"
            >
              <h4 class="p-3 textColorBlack" @click="shift">My Cart</h4>
              <cart
                v-for="(detail, index) in content"
                :key="index"
                @changed="load"
                :details="detail"
              />
            </div>
          </div>
          <div class="col-md-4">
            <div
              class="boxShadow detailBox sampleProducts mb-lg-4 mb-md-4 mb-3"
            >
              <div class="calculation">
                <div class="col-12">
                  <div class="row">
                    <div class="col-8 p-2">
                      <input
                        type="text"
                        class="form-control txtboxshadow2"
                        style="height: 44px"
                        name=""
                        placeholder="Gift Card or Promo Code"
                        v-model="inputtext"
                      />
                    </div>
                    <div class="col-4 p-2 text-center">
                      <button @click="apply" type="button" class="btn btn-link">
                        Apply
                      </button>
                    </div>
                    <div class="label col-8 p-2 ">Subtotal</div>
                    <div class="col-4 p-2">
                      <span class=""
                        ><i class="fas fa-rupee-sign"></i>{{ totalprice }}</span
                      >
                    </div>
                    <div class="label col-8 p-2">Shipping</div>
                    <div class="col-4 p-2">
                      <span class=""
                        ><i class="fas fa-rupee-sign"></i>{{ val }}</span
                      >
                    </div>
                    <div
                      v-if="totaldiscount > 0"
                      class="label col-8 p-2 text-success"
                    >
                      Discount
                    </div>
                    <div
                      v-if="totaldiscount > 0"
                      class="col-4 p-2 text-success"
                    >
                      <span class=""
                        ><i class="fas fa-rupee-sign"></i
                        >{{ totaldiscount }}</span
                      >
                    </div>
                    <span v-if="val5===1">INVALID PROMOCODE</span>
                    <div v-if="val4===1" class="label col-8 p-2 text-success">
                      Promo code discount
                    </div>
                    <div v-if="val4===1" class="col-4 p-2 text-success">
                      <span class=""
                        ><i class="fas fa-rupee-sign"></i
                        >{{ discountlabel }}</span
                      >
                    </div>
                  </div>
                </div>
                <div class="col-12 py-3">
                  <div
                    class="row"
                    style="
                      border-top: 1px black solid;
                      border-bottom: 1px black solid;
                    "
                  >
                    <div class="label col-8 p-2">Total</div>
                    <div class="col-4 p-2">
                      <span class=""
                        ><i class="fas fa-rupee-sign"></i>{{ grandtotal }}</span
                      >
                    </div>
                  </div>
                  <div class="row">
                    <div class="label col-12 text-center text-success pt-2">
                      You have saved XY from your order
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="text-center pb-3 notMob">
              <button @click="placeorder" class="btn btn-primary btn-lg btn-block">
                Place Order
              </button>
            </div>
          </div>
        </div>
        <div v-if="seentwo" class="row">
          <div class="col-12">
            <h2 class="pb-2 textColorBlack">Check Out</h2>
          </div>

          <div class="col-xl-8 col-lg-7 col-md-12">
            <div
              class="boxShadow checkOutOtp sampleProducts mb-lg-4 mb-md-4 mb-3 p-3"
            >
              <div class="row mb-3">
                <div class="col-md-8">
                  <input
                    type="text"
                    class="form-control txtboxshadow"
                    placeholder="Mobile/Emai"
                    name=""
                    v-model="otpemail"
                  />
                </div>
                <div class="col-md-4 mt-md-0 mt-2">
                  <button @click="sendotp"  class="btn btn-primary btn-block btnbtn" id="">
                    Send OTP
                  </button>
                </div>
              </div>

              
                <div v-if="seensix"  class="col-md-8">
                  <div class="numberEdit">Edit</div>
                  <input 
                    type="text"
                    class="form-control txtboxshadow mb-3 pad"
                    id=""
                    name=""
                    :value="otpemail"
                  />
                </div>
                <div class="row">
                <div class="col-md-8 ">
                  <input
                    type="text"
                    class="form-control txtboxshadow"
                    placeholder="Enter OTP"
                    name=""
                    v-model="otp"
                  />
                </div>
                <div class="col-md-4">
                  <button @click="load2" class="btn btn-primary btn-block btnbtn">Submit</button>
                 </div>
                </div>
                
                
              
            </div>

            <div v-if="seenfive"
              class="boxShadow cartdetails sampleProducts mb-lg-4 mb-md-4 mb-3 p-3"
            >
              <div class="row">
                <div class="col-md-6 mb-3">
                  <input
                    type="text"
                    class="form-control txtboxshadow"
                    placeholder="Name*"
                    name=""
                    :value="defadress.maincontactName"

                  />
                </div>
                <div class="col-md-6 mb-3">
                  <input
                    type="text"
                    class="form-control txtboxshadow"
                    placeholder="Mobile Number*"
                    name=""
                    :value="defadress.mainphone"
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <input
                    type="text"
                    class="form-control txtboxshadow"
                    placeholder="E-mail"
                    name=""
                    
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <input
                    type="text"
                    class="form-control txtboxshadow"
                    placeholder="Pin Code*"
                    name=""
                    :value="defadress.mainpincode"
                  />
                </div>
                <div class="col-md-12 mb-3">
                  <textarea
                    class="form-control txtboxshadow"
                    placeholder="Address, House No, Flat No*"
                    rows="4"
                    cols="5"
                    :value="defadress.mainaddress1"
                    
                  ></textarea>
                </div>
                <div class="col-md-6 mb-3">
                  <input
                    type="text"
                    class="form-control txtboxshadow"
                    placeholder="City*"
                    name=""
                    :value="defadress.maincity"
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <input
                    type="text"
                    class="form-control txtboxshadow"
                    placeholder="State*"
                    name=""
                    :value="defadress.mainstate"
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <input
                    type="text"
                    class="form-control txtboxshadow"
                    placeholder="Landmark"
                    name=""
                    :value="defadress.mainlandmark"
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <input
                    type="text"
                    class="form-control txtboxshadow"
                    placeholder="Alternative Phone Number"
                    name=""
                    :value="defadress.mainalternatephone"
                  />
                </div>
              </div>
            </div>
            <a name="Addressall"></a>
            <div v-if="seenfive"
              class="boxShadow cartdetails sampleProducts mb-lg-4 mb-md-4 mb-3 p-3"
            >
              <div class="col-12">
                <div class="row">
                  <div class="col-6">
                    <h2 class="pb-2 textColorBlack">Select Address</h2>
                  </div>
                  <div class="col-6 text-right">
                    <h5 class="py-2 textColorBlack">
                      <a @click="displays" href="#">+Add a New Address</a>
                    </h5>
                  </div>
                </div>
              </div>

              <div class="deliveryAddressWrapper">
                <div v-for="(adr,index) in adress" :key="index" class="deliveryAddress boxShadow mb-3">
                  <div class="col-12">
                    <div class="row">
                          <input class="col-md-1 col-2 py-3 positioning"
                             type="radio"
                             id="checkbox-1-1"
                             name="select"
                             :value="index" 
                              :checked="adr.defaultaddress==='1'"
                             @change="changes(adr.contactName,adr.state,adr.phone,adr.city,adr.pincode,adr.landmark,adr.alternatephone,adr.address1,adr.addressid,adr.contactID)"
                          />
                      <label class="col-md-11 col-10 py-3" >
                        <div class="homeAndEditBTNBase">
                          <span class="addressHomeBTN">Home</span>
                          <span class="deliveryAddressEdit">
                            <i class="far fa-edit"></i>
                          </span>
                        </div>
                        <h6>{{adr.contactName}}</h6>
                        <h6>{{adr.phone}}</h6>
                        <p>
                          {{adr.str}}
                        </p>
                      </label>
                      
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#Addressall"
                style="font-size: 14px; padding-left: 20px"
                id="viewAllAddress"
                >View All</a
              >
            </div>
          </div>
          <div class="col-xl-4 col-lg-5 col-md-12">
            <div
              class="boxShadow detailBox sampleProducts mb-lg-4 mb-md-4 mb-3 pb-2"
            >
              <div class="row">
                <div class="col-9">
                  <h4 class="p-3 textColorBlack">Cart Summary</h4>
                </div>
                <div class="col-3 p-3 text-center">Edit</div>
              </div>
              <div class="col-12">
                <div class="row" style="position: relative">
                  <div class="col-md-2 col-lg-3 col-4">
                    <div class="cartSummeryImgbase">
                      <img :src="sort5[0]['imagepath']" :alt="sort5[0]['imagealttext']">
                    </div>
                  </div>
                  <div class="col-md-10 col-lg-9 col-8 p-0">
                    <h6 class="pt-1 pb-0 mb-1">
                      {{sort5[0]['fullname']}}
                    </h6>
                    <p>+{{this.$store.state.counter-1}}</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="boxShadow detailBox sampleProducts mb-lg-4 mb-md-4 mb-3"
            >
              <div class="calculation">
                <div class="col-12">
                  <div class="row">
                    <div class="label col-8 p-2">Subtotal</div>
                    <div class="col-4 p-2">
                      <span class=""
                        ><i class="fas fa-rupee-sign"></i>{{ totalprice }}</span
                      >
                    </div>
                    <div class="label col-8 p-2">Shipping</div>
                    <div class="col-4 p-2">
                      <span class=""
                        ><i class="fas fa-rupee-sign"></i>{{ val }}</span
                      >
                    </div>
                    <div class="label col-8 p-2 text-success">Discount</div>
                    <div class="col-4 p-2 text-success">
                      <span class=""><i class="fas fa-rupee-sign"></i>{{ totaldiscount }}</span>
                    </div>

                    <div class="label col-8 p-2 text-success">Promocodediscount</div>
                    <div class="col-4 p-2 text-success">
                      <span class=""><i class="fas fa-rupee-sign"></i>{{ discountlabel }}</span>
                    </div>
                  </div>
                </div>
                <div class="col-12 py-3">
                  <div
                    class="row"
                    style="
                      border-top: 1px black solid;
                      border-bottom: 1px black solid;
                    "
                  >
                    <div class="label col-8 p-2">Total</div>
                    <div class="col-4 p-2">
                      <span class=""
                        ><i class="fas fa-rupee-sign"></i>{{ grandtotal }}</span
                      >
                    </div>
                  </div>
                  <div class="row">
                    <div class="label col-12 text-center text-success pt-2">
                      You have saved XY from your order
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="text-center pb-3">
              <button @click="billing" class="btn btn-primary btn-lg btn-block">
                Continue to Billing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import cart from "./cart.vue";
export default {
  name: "cartpage",
  data() {
    return {
      option: null,
      listing: [],
      content: [],
      total: 0,
      seensix: false,
      seenone: true,
      seentwo: false,
      seenthree: false,
      seenfive:false,
      listing1: [],
      arr: [],
      val: 0,
      totalprice: 0,
      totaldiscount: 0,
      inputtext: "",
      listing2: [],
      val1: 0,
      discountlabel:0,
      grandtotal:0,
	  listing3:[],
    adress:[],
    val3:'',
    val4:0,
    val5:0,
    listing3:[],
    defaultadr:[],
    contactid:'',
    seenfour:false,
    defadress:{
                  mainaddress1:'',
                  mainaddress2:'',
                  mainaddressid:'',
                  mainalternatephone:'',
                  maincity:'',
                  maincontactID:'',
                  maincontactName:'',
                  maindefaultaddress:'',
                  mainlandmark:'',
                  mainphone:'',
                  mainpincode:'',
                  mainstate:'',
                  mainstr:'',
    },
    listing5:[],
    sort5:[],
    num:0,
    adressid:'',
    contactid:'',
    listing6:[],
    resp:'',
    listing7:[],
    otpemail:'',
    otp:'',
    cartid2:'',
    };
  },
  methods: {
    sendotp(){
      this.seensix=true;
    },
    billing(){
     var datas={
          ContactID:this.contactid,
          Contactaddressid:this.adressid,
          Ordervalue:this.grandtotal.toString(),
          PromotioncodeID:this.val3,
          Medicinecartid:this.$store.state.cartid
          
        }
        console.log(datas)

      
      debugger
      axios({        
          method: 'post',
          url: process.env.VUE_APP_API_ENDPOINT+'Medicineorders/Insertmedicineorders',          
          data:JSON.stringify(datas),
          headers: {'content-type':'application/json'}
        }).then((response) => {
          console.log('sucsc');
          console.log(response.data);
          var res=response.data[0]['medicinecartid'];
          this.resp=response.data[0]['orderid']
          axios({
       
          method: 'get',
          url: process.env.VUE_APP_API_ENDPOINT+'MedicineCartdetail/GetMedicinecartDetails?StrCartdetailid='+res,
          headers: {'content-type':'application/json'}
        }).then((response) => {
        this.listing6=response.data;
        console.log('sasssss');
        console.log(this.listing6);
        for(var i=0;i<this.listing6.length;i++){
           var dbs={
             Orderid:this.resp,
             MedicinesizeID:this.listing6[i]['referenceid1'],
             Orderquantity:this.listing6[i]['quantity'],
           }
           this.listing7.push(dbs)
        }
         axios({        
          method: 'post',
          url: process.env.VUE_APP_API_ENDPOINT+'Medicineorders/InsertmedicineorderDetails',          
          data:JSON.stringify(this.listing7),
          headers: {'content-type':'application/json'}
        }).then((response) => {
          console.log('llllllll');
          console.log(response.data);
         
          
        
        
      });
        
         
        
      });
        
      });

    },
    displays(){
      this.$store.commit('setcontactid',this.contactid);
      this.$router.push({path:'/addnewadress'});
    },
    changes(event1,event2,event3,event4,event5,event6,event7,event8,event9,event10){
     this.defadress.maincontactName=event1;
     this.defadress.mainphone=event3;
     this.defadress.mainpincode=event5;
     this.defadress.mainaddress1=event8;
     this.defadress.maincity=event4;
     this.defadress.mainstate=event2;
     this.defadress.mainlandmark=event6;
     this.defadress.mainalternatephone=event7;
     this.adressid=event9;   
     this.contactid=event10;   
    },
     load5(){
       this.cartid2=this.$store.state.cartid;

      debugger
      axios({
       
          method: 'get',
          url: process.env.VUE_APP_API_ENDPOINT+'cartpage/GetCartsummayDetails?StrCartid='+this.cartid2+'&StrSessionid=1',
          headers: {'content-type':'application/json'}
        }).then((response) => {
          console.log(response.data);
        this.listing5=response.data;
        console.log('ststststst');
        console.log(this.listing5);
         for(var i=0;i<this.listing5.length;i++){
                var select20={
                  brandname:this.listing5[i].brandname,
                  fullname:this.listing5[i].fullname,
                  imagealttext:this.listing5[i].imagealttext,
                  imagepath:process.env.VUE_APP_API_ENDPOINT+this.listing5[i].imagepath
                }
                this.sort5.push(select20);
                
                
          }
          this.num=this.sort5.length-1;
          console.log('lllllll');
          console.log(this.sort5);
        
      });
    },
    placeorder(){
        axios({
      
          method: 'get',
          url: process.env.VUE_APP_API_ENDPOINT+'cartpage/GetCartidandquantity?StrSessionid=1',
          headers: {'content-type':'application/json'}
        }).then((response) => {
        this.listing3=response.data;
        console.log('tttttttttt');
        console.log(this.listing3);
         /* for(var i=0;i<this.products.length;i++){
                var select={
                  imagealttext:this.products[i].imagealttext,
                  itemname:this.products[i].itemname,
                  itemID:this.products[i].itemID,
                  itemimage:process.env.VUE_APP_API_ENDPOINT+this.products[i].itemimage
                }
                this.sort.push(select);
          }*/
        
      });
      
       var data1={
        Medicinecartsummaryid:'1',
        Sessionid:'1',    
        Totalitems:'10',
        Totalcost:this.grandtotal.toString(),
        Shippingcost:this.val.toString(),
        Totaldiscount:this.totaldiscount.toString(),
        Promocodeid:this.val3.toString(),
        Promodiscount:this.discountlabel.toString()
        
        }

      
      debugger
      axios({        
          method: 'post',
          url: process.env.VUE_APP_API_ENDPOINT+'cartpage/UpdateMedicinecartDetails',          
          data:JSON.stringify(data1),
          headers: {'content-type':'application/json'}
        }).then((response) => {
          console.log('pppppppppp');
        console.log(response.data);
         
      });
    },
    shift() {
      console.log("good work");
      console.log(this.option);
      if (this.option == 1) {
        this.seenone = true;
        this.seentwo = false;
      } else {
        this.seenone = false;
        this.seentwo = true;
      }
    },
    load() {
      this.content = [];
      console.log("clicked");

      axios({
        method: "get",
        url:
          process.env.VUE_APP_API_ENDPOINT +
          "cartpage/GetCartDetails?Strsessionid=1",
        headers: { "content-type": "application/json" },
      }).then((response) => {
        this.listing = response.data;
        console.log('pppppppps');
        console.log(this.listing);
        for (var i = 0; i < this.listing.length; i++) {
          var select = {
            fullname: this.listing[i].fullname,
            image: this.listing[i].imagepath,
            quantity: this.listing[i].size,
            price: parseFloat(this.listing[i].saleprice),
            discount: parseFloat(this.listing[i].discountedprice),
            count: parseFloat(this.listing[i].quantity),
            medicinesizeid: this.listing[i].medicinesizeid,
            medicineid:this.listing[i].medicineid,
          };
          this.content.push(select);
        }

        console.log(this.content);
        this.total = 0;
        var price = 0;
        var quant = 0;
        for (var j = 0; j < this.content.length; j++) {
          (price = this.content[j].discount),
            (quant = this.content[j].count),
            (this.total += price * quant);
        }
        console.log(this.total);
        this.totalprice = 0;
        var price1 = 0;
        var quant1 = 0;
        for (var h = 0; h < this.content.length; h++) {
          (price1 = this.content[h].price),
            (quant1 = this.content[h].count),
            (this.totalprice += price1 * quant1);
        }
        console.log(this.totalprice);
        this.totaldiscount = this.totalprice - this.total;
        this.discountlabel=0;
        this.grandtotal =
          this.totalprice + this.val - this.discountlabel - this.totaldiscount;
      });
      
    },
    apply() {
      axios({
        method: "get",
        url:
          process.env.VUE_APP_API_ENDPOINT +
          "cartpage/GetPromotioncode?StrPromotioncode=" +
          this.inputtext,
        headers: { "content-type": "application/json" },
      }).then((response) => {
        this.listing2 = response.data;
        console.log("qqqqqqqqqq");
        console.log(this.listing2);
        if(this.listing2.length===0){
          alert('invalid promo')
        }else{
       
        
        this.val3='';
        /*for(var i=0;i<this.brands.length;i++){
                var select={
                  imagealttext:this.brands[i].imagealttext,
                  itemname:this.brands[i].itemname,
                  itemID:this.brands[i].itemID,
                  itemimage:process.env.VUE_APP_API_ENDPOINT+this.brands[i].itemimage
                }
                this.sort.push(select);
          }*/
          
          
        this.val1 = parseFloat(this.listing2[0]["discountpercent"]);
        this.val3=this.listing2[0]['promotioncodeid'];
        if(this.val3){
          this.val4=1;
        }else{
          this.val5=1;
        }
        this.discountlabel = (this.total * this.val1) / 100;
        console.log(this.discountlabel);
        this.grandtotal =
          this.totalprice + this.val-(this.discountlabel+this.totaldiscount);
        }
      });
    },
    load10(){
      if(this.$store.state.loginusername&&this.$store.state.loginotp){

           this.otp=this.$store.state.loginotp;
           this.otpemail=this.$store.state.loginusername;



            axios({
       
          method: 'get',
          url: process.env.VUE_APP_API_ENDPOINT+'checkOut/GetaddressDetails?StrOtp='+this.otp+'&StrPhone='+this.otpemail,
          headers: {'content-type':'application/json'}
        }).then((response) => {
        this.listing3=response.data;
        console.log('qqqqqqqqqqttttttt');
        console.log(this.listing3);
        if(this.listing3.length===0){
          alert('invalid otp');
        }else{
          this.$store.commit('setloginotp',this.otp);
          this.$store.commit('setloginusername',this.otpemail);
          this.seenfive=true;
          for(var v=0;v<this.listing3.length;v++){
                var select10={
                  address1:this.listing3[v].address1,
                  address2:this.listing3[v].address2,
                  addressid:this.listing3[v].addressid,
                  alternatephone:this.listing3[v]. alternatephone,
                  city:this.listing3[v].city,
                  contactID:this.listing3[v].contactID,
                  contactName:this.listing3[v].contactName,
                  defaultaddress:this.listing3[v].defaultaddress,
                  landmark:this.listing3[v].landmark,
                  phone:this.listing3[v].phone,
                  pincode:this.listing3[v].pincode,
                  state:this.listing3[v].state,
                  str:this.listing3[v].address1+','+this.listing3[v].address2+','+this.listing3[v].state+','+this.listing3[v].city+','+this.listing3[v].landmark+','+this.listing3[v].pincode,
                }
                this.adress.push(select10);
          }
                this.contactid=this.adress[0]['contactID'];
                console.log(this.contactid);

                for(var t=0;t<this.listing3.length;t++){
                  

                  if(this.listing3[t].defaultaddress==='1'){
                   this.defadress={
                  mainaddress1:this.listing3[t].address1,
                  mainaddress2:this.listing3[t].address2,
                  mainaddressid:this.listing3[t].addressid,
                  mainalternatephone:this.listing3[t]. alternatephone,
                  maincity:this.listing3[t].city,
                  maincontactID:this.listing3[t].contactID,
                  maincontactName:this.listing3[t].contactName,
                  maindefaultaddress:this.listing3[t].defaultaddress,
                  mainlandmark:this.listing3[t].landmark,
                  mainphone:this.listing3[t].phone,
                  mainpincode:this.listing3[t].pincode,
                  mainstate:this.listing3[t].state,
                  mainstr:this.listing3[t].address1+','+this.listing3[t].address2+','+this.listing3[t].state+','+this.listing3[t].city+','+this.listing3[t].landmark+','+this.listing3[t].pincode,
                    }
                    
                  
                  }

                }  
                this.adressid=this.defadress.mainaddressid;
                this.contactid=this.defadress.maincontactID;
           console.log(this.defadress);
        }
        
      });

           
        
      }


    },
	load2(){
    if(this.otp===''||this.otpemail===""){
      alert('invalid otp or phone number');
    }
      
      axios({
       
          method: 'get',
          url: process.env.VUE_APP_API_ENDPOINT+'checkOut/GetaddressDetails?StrOtp='+this.otp+'&StrPhone='+this.otpemail,
          headers: {'content-type':'application/json'}
        }).then((response) => {
        this.listing3=response.data;
        console.log('qqqqqqqqqqttttttt');
        console.log(this.listing3);
        if(this.listing3.length===0){
          alert('invalid otp');
        }else{
          this.$store.commit('setloginotp',this.otp);
          this.$store.commit('setloginusername',this.otpemail);
          this.$store.commit('setseenone',false);
		      this.$store.commit('setseentwo',true);
          this.seenfive=true;
          for(var v=0;v<this.listing3.length;v++){
                var select10={
                  address1:this.listing3[v].address1,
                  address2:this.listing3[v].address2,
                  addressid:this.listing3[v].addressid,
                  alternatephone:this.listing3[v]. alternatephone,
                  city:this.listing3[v].city,
                  contactID:this.listing3[v].contactID,
                  contactName:this.listing3[v].contactName,
                  defaultaddress:this.listing3[v].defaultaddress,
                  landmark:this.listing3[v].landmark,
                  phone:this.listing3[v].phone,
                  pincode:this.listing3[v].pincode,
                  state:this.listing3[v].state,
                  str:this.listing3[v].address1+','+this.listing3[v].address2+','+this.listing3[v].state+','+this.listing3[v].city+','+this.listing3[v].landmark+','+this.listing3[v].pincode,
                }
                this.adress.push(select10);
          }
                this.contactid=this.adress[0]['contactID'];
                console.log(this.contactid);

                for(var t=0;t<this.listing3.length;t++){
                  

                  if(this.listing3[t].defaultaddress==='1'){
                   this.defadress={
                  mainaddress1:this.listing3[t].address1,
                  mainaddress2:this.listing3[t].address2,
                  mainaddressid:this.listing3[t].addressid,
                  mainalternatephone:this.listing3[t]. alternatephone,
                  maincity:this.listing3[t].city,
                  maincontactID:this.listing3[t].contactID,
                  maincontactName:this.listing3[t].contactName,
                  maindefaultaddress:this.listing3[t].defaultaddress,
                  mainlandmark:this.listing3[t].landmark,
                  mainphone:this.listing3[t].phone,
                  mainpincode:this.listing3[t].pincode,
                  mainstate:this.listing3[t].state,
                  mainstr:this.listing3[t].address1+','+this.listing3[t].address2+','+this.listing3[t].state+','+this.listing3[t].city+','+this.listing3[t].landmark+','+this.listing3[t].pincode,
                    }
                    
                  
                  }

                }  
                this.adressid=this.defadress.mainaddressid;
                this.contactid=this.defadress.maincontactID;
           console.log(this.defadress);
        }
        
      });
    },
    load1() {
      axios({
        method: "get",
        url:
          process.env.VUE_APP_API_ENDPOINT + "cartpage/GetShipping?StrFilter=1",
        headers: { "content-type": "application/json" },
      }).then((response) => {
        this.listing1 = response.data;
        console.log("good morning");
        console.log(this.listing1);
        /* for(var k=0;k<this.listing1.length;k++){
              var select5={
				  shippingratemax:this.listing1[k].shippingratemax,
                  shippingratestandard:this.listing1[k].shippingratestandard
			  }
			  this.arr.push(select5)

		  }*/
        this.val = parseFloat(this.listing1[0]["shippingratemax"]);
        this.grandtotal =
          this.totalprice + this.val - this.discountlabel - this.totaldiscount;
      });
    },
    updatetotal() {
      console.log(this.content.length);
    },
  },
  beforeMount() {
    this.load(), 
    this.load1(),
    this.load5(),
    this.load10()
  },
  components: {
    cart,
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
  font-family: ClearSans-Regular;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
}
.cartBase {
  width: 95%;
  margin: 0px auto;
}
.numberEdit {
  width: 60px;
  height: 30px;
  position: absolute;
  text-align: center;
  line-height: 30px;
  right: 10px;
  top: 3px;
  cursor: pointer;
}
.txtboxshadow {
  box-shadow: 0px 0px 2px 1px rgb(52 49 48 / 19%);
}
.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  /* background-color: #fff;*/
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.deliveryAddressWrapper {
    height: 386px;
    overflow: hidden;
    padding-top: 5px;
}
.deliveryAddress {
    width: 96%;
    margin: 0 auto;
    border-radius: 5px;
}
.boxShadow {
    box-shadow: 0px 0px 9px 0px rgb(0 0 0 / 24%);
}
.addressSelectIcon {
    width: 22px;
    height: 22px;
    background-color: white;
    border-radius: 50%;
    border: 2px black solid;
    text-align: center;
    line-height: 18px;
    font-size: 10px;
    color: white;
    margin: 0 auto;
}
.homeAndEditBTNBase {
    position: absolute;
    top: 5px;
    right: 15px;
    width: 100%;
    text-align: right;
    padding: 5px 0px;
}
.addressHomeBTN {
    display: inline-block;
    padding: 0px 15px;
    background-color: lightgray;
    cursor: pointer;
    color: #000;
    font-size: 12px;
    border-radius: 5px;
    line-height: unset;
    padding-bottom: 1px;
}
.addressHomeBTN:hover {
    background-color: gray;
}
h6 {
    font-family: 'ClearSans-Regular';
    font-size: 18px;
    font-weight: 400;
    margin: 0px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.label{
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    font-size: 18px
}
.btn-link {
    font-weight: 400;
    color: #99764f;
    text-decoration: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    user-select: none;
    text-align: center;
    vertical-align: middle;
}
.btn-link:hover{
  color:#007bff;
}
.btn-primary {
    color: #fff;
    background-color: #9a7652 !important;
    border-color: #9a7652 !important;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    font-weight: 400;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem;
}
.btnbtn{
    font-weight: 400;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
}
.btn-primary:hover{
  background-color: orange;
}
.positioning{
  position: relative;
  top: 35px;
}
.btbt{
  position: relative;
  left: 650px;

}
.pad{
  padding-left: 0px;
}
</style>
