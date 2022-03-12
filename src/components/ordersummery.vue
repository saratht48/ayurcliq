<template>

<div class="col-12 filterWrapper">
	<div style="width:95%;margin:0 auto;">
		<div class="row">
			<div class="col-md-3 my-md-5 mt-3">
				<div class="boxShadow" id="demo">
					<ul class="dashboardMenu">
						<li>
							<a href="#">
								<i class="fas fa-user pr-2 dMenuIS"></i> My Account
							</a>
						</li>
						<li>
							<a href="#">
								<i class="fas fa-cart-plus pr-2 dMenuIS"></i> My Orders 
							</a>
						</li>
						<li>
							<a href="#">
								<i class="fas fa-map-marker-alt pr-2 dMenuIS"></i> My Addresse
							</a>
						</li>
						<li>
							<a href="#">
								<i class="fas fa-heart pr-2 dMenuIS"></i> Wishlis
							</a>
						</li>
						<li>
							<a href="#">
								<i class="far fa-bell pr-2 dMenuIS"></i> Medicine Reminde
							</a>
						</li>
						<li>
							<a href="#">
								<i class="fas fa-file-alt pr-2 dMenuIS"></i> My Prescriptions
							</a>
						</li>
						<li>
							<a href="#">
								<i class="far fa-question-circle pr-2 dMenuIS"></i> Help
							</a>
						</li>
						<li>
							<a href="#">
								<i class="fas fa-power-off pr-2 dMenuIS"></i> Sign out
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="col-md-9 mt-md-5 mb-md-5 mt-0 mb-4">
				<div class="dashbordGraphWrapper boxShadow">
					
					<div class="row">
						<div class="col-6">
							<h2 class="p-2">My Orders</h2>	
						</div>
						<div class="col-6 text-right pt-2">
							<button class="btn btn-primary btn-sm">+ Make New Order</button>
						</div>
					</div>
					<div v-for="(item,index) in sort2" :key="index" class="deliveryAddress boxShadow mb-3" style="width:100%">
						<div class="orderBlock py-2">
							<div class="col-12">
								<div class="row" style="position:relative;">
									<div class="col-lg-2">
										<div class="newCartImgBase">
											<img :src="item.imagepath">
										</div>
									</div>
									<div class="col-lg-6">
										<div class="row">
											<div class="col-12">
												<h6 class="pt-3 pb-0 mb-md-2 mb-0">
													{{item.fullName}}
												</h6>
											</div>
										</div>
										<div class="row">
											<div class="col-md-12 pt-md-0 pt-0">
												<ul class="p-md-0 p-0 mb-3">
													<li class="textColorGray">
														MRP
														<span class="textColorBlack">
															<i class="fas fa-rupee-sign" style="font-size:14px;padding-left: 10px;"></i> 
															<span>50</span>
														</span>
													</li>
													<li class="textColorBlack" style="font-size:14px;font-weight:800">
														Order ID : {{item.orderid}}
													</li>
													<li>
														+ {{totproductCount[index]['Totalcount']-1}}more
													</li>

												</ul>
											</div>
										</div>
									</div>
									<div class="col-lg-4">
										<div class="homeAndEditBTNBase">
											<span>
												<div class="addressSelectIconselect ">
													<i class="fas fa-check"></i>
												</div>
											</span>
											<span class="Setasdefault">Delivery By SEP 31</span>
										</div>
									</div>
								</div>
							</div>
						</div>
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
    name:'ordersummery',
    data(){
        return{
			listing:[],
			sort:[],
			listing2:[],
			sort2:[],
			count:0,
			totproductCount:[]

        }
    },
    methods:{
		load(){
      
      axios({
       
          method: 'get',
          url: process.env.VUE_APP_API_ENDPOINT+'Medicineorders/GetMedicineOrder?strContactid=16',
          headers: {'content-type':'application/json'}
        }).then((response) => {
        this.listing=response.data;
		console.log('ordersummery');
        console.log(this.listing);
		
        /* for(var i=0;i<this.listing.length;i++){
                var select={
                  
                }
                this.sort.push(select);
          }*/
		   axios({
       
          method: 'get',
          url: process.env.VUE_APP_API_ENDPOINT+'Medicineorders/GetMedicineorderDetails?strContactid=16',
          headers: {'content-type':'application/json'}
        }).then((response) => {
        this.listing2=response.data;
		console.log('second api testing');
		var pcount=0;

        console.log(this.listing2);
             for(var i=0;i<this.listing2.length;i++)
			 {
              var order=this.listing2[i]['orderid'];
			  for(var j=0;j<this.listing2.length;j++){
				  if(order===this.listing2[j]['orderid']){
					 pcount++;
					  var select={
						  fullName:this.listing2[j]['fullName'],
                          imagepath:this.listing2[j]['imagepath'],
                          medicineid:this.listing2[j]['medicineid'],
                          medicinesizeID:this.listing2[j]['medicinesizeID'],
                          orderdetailid:this.listing2[j]['orderdetailid'],
                          orderid:this.listing2[j]['orderid'],
                          orderquantity:this.listing2[j]['orderquantity'],
                          orderstatus:this.listing2[j]['orderstatus'],
						  count:0,
					}
					   
                   if(this.sort2.length===0){
						  this.sort2.push(select);
					  }
					  else {

                        function finder(item) {
                            if (item.orderid == order) {
                                return true;
                            }
                        }
                        var yesno = this.sort2.find(finder);
                        if (!yesno) {
                            this.sort2.push(select);
                        }
                    }
				  }
		    	}

				if(this.totproductCount.length==0){
		   			this.totproductCount.push({'Totalcount':pcount,'orderID':this.listing2[i]['orderid']});	
				}
				else
				{
					function finder(item) {
						if (item.orderID == order) {
							return true;
						}
					}
           		 var yesno = this.totproductCount.find(finder);
				if (!yesno) {
					this.totproductCount.push({'Totalcount':pcount,'orderID':this.listing2[i]['orderid']});
					}
				}


				pcount=0;


			 /* for(var c=0;c<this.listing2.length;c++){
				    this.count=0;
					if(order===this.listing2[c]['orderid']){
						this.count++;
					}
			  }
			  
			  for(var d=0;d<this.sort2.length;d++){
				    if(order=this.sort2[d]['orderid']){
						this.sort2[d]['count']=this.count;
					}
			  }*/
			 }
			 console.log('check');
			 console.log(this.sort2);
			 console.log(this.totproductCount);
          /*for(var i=0;i<this.brands.length;i++){
                var select={
                  imagealttext:this.brands[i].imagealttext,
                  itemname:this.brands[i].itemname,
                  itemID:this.brands[i].itemID,
                  itemimage:process.env.VUE_APP_API_ENDPOINT+this.brands[i].itemimage
                }
                this.sort.push(select);
          }*/
        
      });
        
      });
    },

    },
    beforeMount(){
    this.load()
      
	}
}

</script>
<style  scoped>
*{
    font-family: ClearSans-Regular;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
   box-sizing: border-box;
}
ul {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
.boxShadow {
    box-shadow: 0px 0px 9px 0px rgb(0 0 0 / 24%);
    
}
.dashboardMenu {
    list-style-type: none;
    border-radius: 10px;
    padding:0px;
    position:relative;
    top:-13px;
}
.dMenuIS {
    font-size: 18px;
}
.filterWrapper {
    background-color: #EFEDEA;
    min-height: 100vh;
}
img {
    vertical-align: middle;
    border-style: none;
}
.btn-primary {
    color: #fff;
    background-color: #9a7652 !important;
    border-color: #9a7652 !important;
}

.btn-sm {
    padding: 0.25rem 1.5rem;
    font-size: .875rem;
    line-height: 1.5;
    border-radius: 0.2rem;
}
.newCartImgBase img {
    width: 100%;
    height: 120px;
    object-fit: contain;
}
.dashbordGraphWrapper {
    min-height: 300px;
    background-color: #fff;
    border-radius: 10px;
    padding: 15px;
}
.deliveryAddress {
    margin: 0 auto;
    border-radius: 5px;
}
.orderBlock {
    width: 100%;
}
.newCartImgBase {
    width: 100%;
    height: 120px;
    margin: 0px 0px;
}

</style>
