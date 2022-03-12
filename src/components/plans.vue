<template>
<div class="cover">
       <div class="boxshadow pt-3 pb-4 mb-1 mx-1 mt-lg-5 mt-mt-3 mt-0">
          <div class="base">
          <div>
              <div class="row">
                  <div class="col-lg-8 prescriptionallign">
                      <img class="image" src="assets/icon3.jpg" alt="">
                      <h3>free online doctor consultation</h3>
                      <p style="font-size:18px" class="mb-1">Get a free online consultation with an expert Ayurveda doctor</p>
                   </div>
                   <div class="col-lg-4">
                       <div class="text-left pt-md-4 pt-0">
                           <button class="btn btn-primary btn-lg btn-block">Get Plan Now <i class="fas fa-file-alt pl-3"></i></button>
                       </div>                   
                   </div>
              </div>
          </div>
          </div>
       </div>
    </div> 
</template>
<script>
export default{
    name:'treatment'
}

</script>
<style scoped>
*{
    box-sizing: border-box;
}
.boxshadow{
    box-shadow: 0px 0px 9px 0px rgb(0 0 0 / 24%);
    background-color: #fef5ee;
}
.prescriptionallign{
    padding-left: 10rem;     
}
.base{
    width: 60%;
    margin: 0 auto;
    position: relative;
    min-height: 120px;
}
.btn-primary {
    color: #fff;
    background-color: #9a7652 !important;
    border-color: #9a7652 !important;
    padding: .5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: .3rem;
    position:absolute;
    top:45px;

}
.image{
    position: absolute;
    left: 0px;
    vertical-align: middle;
    border-style: none;
}


</style>
