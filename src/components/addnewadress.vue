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
                    v-model="name"
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <input
                    type="text"
                    class="form-control txtboxshadow"
                    placeholder="Mobile Number*"
                    name=""
                    v-model="mobilenumber"
                    
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <input
                    type="text"
                    class="form-control txtboxshadow"
                    placeholder="E-mail"
                    name=""
                    v-model="email"
                    
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <input
                    type="text"
                    class="form-control txtboxshadow"
                    placeholder="Pin Code*"
                    name=""
                    v-model="pincode"
                    
                  />
                </div>
                <div class="col-md-12 mb-3">
                  <textarea
                    class="form-control txtboxshadow"
                    placeholder="Address, House No, Flat No*"
                    rows="4"
                    cols="5"
                    v-model="adr1"
                    
                    
                  ></textarea>
                </div>
                <div class="col-md-6 mb-3">
                  <input
                    type="text"
                    class="form-control txtboxshadow"
                    placeholder="City*"
                    name=""
                    v-model="city"
                   
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <input
                    type="text"
                    class="form-control txtboxshadow"
                    placeholder="State*"
                    name=""
                    v-model="state1"
                    
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <input
                    type="text"
                    class="form-control txtboxshadow"
                    placeholder="Landmark"
                    name=""
                    v-model="landmark"
                    
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <input
                    type="text"
                    class="form-control txtboxshadow"
                    placeholder="Alternative Phone Number"
                    name=""
                    v-model="altphone"
                   
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
    name:'addnewadress',
    data(){
    return{
        name:'',
        mobilenumber:'',
        email:'',
        pincode:'',
        adr1:'',
        city:'',
        state1:'',
        landmark:'',
        altphone:'',
        opt:0,
        contactid:''
    }
    },
    methods:{
        load(){
          console.log('vijy2');
          console.log(this.$store.state.contactid);
          this.contactid=this.$store.state.contactid; 
          console.log('contactid');
          console.log(this.contactid);
          
        },
        setdefault(){
             this.opt=1;
        },
        submit(){
      debugger
          var data20={
          ContactID:this.contactid,
          Address1:this.adr1,
          Pincode:this.pincode,
          Landmark:this.landmark,
          State:this.state1,
          Defaultaddress:this.opt.toString(),
          City:this.city,
          Alternatephone:this.altphone,
          Phone:this.mobilenumber,
          ContactName:this.name,
        }
      debugger
      axios({        
          method: 'post',
          url: process.env.VUE_APP_API_ENDPOINT+'Contactaddress/InsertContactAddress',          
          data:JSON.stringify(data20),
          headers: {'content-type':'application/json'}
        }).then((response) => {
          console.log(response.data);
          //this.load2();
      });

    },

    },
    beforeMount(){
    this.load()
	}
}

</script>
<style scoped>

</style>
