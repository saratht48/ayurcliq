<template>
<div style="background-color: #efedea">
    <div class="cartBase">
      <div class="col-12">
        <div class="py-4" style="width: 100%; margin: 0px auto">
          <div class="boxShadow cartdetails sampleProducts mb-lg-4 mb-md-4 mb-3 p-3"
            >
              <div class="row">
                <div class="col-md-6 mb-3">
                  <input
                    type="text"
                    class="form-control txtboxshadow"
                    placeholder="Name*"
                    name=""
                    :value="obj1.contactName"
                    @change="name"
                   
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <input
                    type="text"
                    class="form-control txtboxshadow"
                    placeholder="Mobile Number*"
                    name=""
                    :value="obj1.phone"
                    @change="phone"
                    
                    
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <input
                    type="text"
                    class="form-control txtboxshadow"
                    placeholder="E-mail"
                    name=""
                    @change="email"
                    
                   
                    
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <input
                    type="text"
                    class="form-control txtboxshadow"
                    placeholder="Pin Code*"
                    name=""
                    :value="obj1.pincode"
                    @change="pincode"
                    
                    
                  />
                </div>
                <div class="col-md-12 mb-3">
                  <textarea
                    class="form-control txtboxshadow"
                    placeholder="Address, House No, Flat No*"
                    rows="4"
                    cols="5"
                    :value="obj1.address1"
                    @change="adress"
                   
                    
                    
                  ></textarea>
                </div>
                <div class="col-md-6 mb-3">
                  <input
                    type="text"
                    class="form-control txtboxshadow"
                    placeholder="City*"
                    name=""
                    :value="obj1.city"
                    @change="city"
                    
                   
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <input
                    type="text"
                    class="form-control txtboxshadow"
                    placeholder="State*"
                    name=""
                    :value="obj1.state"
                    @change="state"
                   
                    
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <input
                    type="text"
                    class="form-control txtboxshadow"
                    placeholder="Landmark"
                    name=""
                    :value="obj1.landmark"
                    @change="landmark"
                    
                    
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <input
                    type="text"
                    class="form-control txtboxshadow"
                    placeholder="Alternative Phone Number"
                    name=""
                    :value="obj1.alternatephone"
                    @change="alternatephone"
                    
                   
                  />
                </div>
                <div>
                <input style="width:35%;"
                    type="checkbox"
                    class="form-control txtboxshadow"
                    value=1
                    name=""
                    @change="setdefault"
                   
                  />
                  <label for="">set as default adress</label>
                </div>
                <button @click="submit" class="btn btn-primary btbt">submit</button>
              </div>
            </div>
        </div>
      </div>
    </div>
 </div>
    
</template>
<script>
import axios from 'axios';
export default{
    name:'editadress',
    data(){
        return{
            obj1:{},
            opt:0,
            name1:'',
            state1:'',
            city1:'',
            pincode1:'',
            phone1:'',
            alternatephone1:'',
            landmark1:'',
            adress1:'',
            contactid:'',
            addressid:''
        }

    },
    methods:{
      name(event){
        this.name1=event.target.value;
      },
      city(event){
        this.city1=event.target.value;
      },
      state(event){
          this.state1=event.target.value;
      },
      landmark(event){
        this.landmark1=event.target.value;
      },
      phone(event){
        this.phone1=event.target.value;
      },
      adress(event){
        this.adress1=event.target.value;
      },
      alternatephone(event){
        this.alternatephone1=event.target.value;
      },
      pincode(event){
        this.pincode1=event.target.value;
      },
        load(){
            this.contactid=this.$store.state.contactid;
            this.obj1=this.$store.state.obj;
            console.log('aaaaaaa');
            console.log(this.obj1);
            this.name1=this.$store.state.obj.contactName;
            this.state1=this.$store.state.obj.state;
            this.adress1=this.$store.state.obj.address1;
            this.city1=this.$store.state.obj.city;
            this.landmark1=this.$store.state.obj.landmark;
            this.phone1=this.$store.state.obj.phone;
            this.alternatephone1=this.$store.state.obj.alternatephone;
            this.addressid=this.$store.state.obj.addressid;
            this.pincode1=this.$store.state.obj.pincode;

        },
        setdefault(){
            this.opt=1;
        },
        submit(){
          var data2={
          ContactID:this.contactid,
          Address1:this.adress1,
          Pincode:this.pincode1,
          Landmark:this.landmark1,
          State:this.state1,
          Defaultaddress:this.opt.toString(),
          City:this.city1,
          Alternatephone:this.alternatephone1,
          Phone:this.phone1,
          ContactName:this.name1,
          Addressid:this.addressid        
        }
      debugger
      axios({        
          method: 'post',
          url: process.env.VUE_APP_API_ENDPOINT+'Contactaddress/InsertContactAddress',             
          data:JSON.stringify(data2),
          headers: {'content-type':'application/json'}
        }).then((response) => {
          console.log(response.data); 
      });
        }
    },
    beforeMount(){
    this.load()
      
	}
}
</script>
<style scoped>

</style>
