<template>
  <div class="col-12 filterWrapper">
	<div style="width:95%;margin:0 auto;">
		<div class="row">
			<div class="col-md-3 my-md-5 mt-3">
				<div class="boxShadow" id="demo">
					<ul class="dashboardMenu text-left">
						<li> <a href="#"><i class="far fa-chart-bar pr-2 dMenuIS"></i> Dashboard</a></li>
						<li> <a href="#"><i class="fas fa-file-alt pr-2 dMenuIS"></i> Generate Prescription</a></li>
						<li> <a href="#"><i class="fas fa-user pr-2 dMenuIS"></i> My Patient</a></li>
						<li> <a href="#"><i class="fas fa-power-off pr-2 dMenuIS"></i> Sign out</a></li>
					</ul>
				</div>
			</div>
			<div class="col-md-9 mt-md-5 mb-md-5 mt-0 mb-4">
				<div class="dashbordGraphWrapper boxShadow">
					<h2 class="p-2">Rejin(60)</h2>
					<div>
						 <table id="exbasic" class="table table-striped table-bordered" cellspacing="0" width="100%">
					      <thead>
					        <tr>
					          <th class="bg-primary">Order Date</th>
					          <th class="bg-primary">Order Value</th>
					          <th class="bg-primary">Delivery Date</th>
					          <th class="bg-primary">Prescription</th>
					        </tr>
					      </thead>
					      <tbody>
					          <tr>
					            <td>23/10/2021</td>
					            <td style="text-align: right;">₹ 350</td>
					            <td>23/10/2021</td>
					            <td style="text-align:center;">View</td>
					          </tr>
					          <tr>
					            <td>23/10/2021</td>
					            <td style="text-align: right;">₹ 350</td>
					            <td>23/10/2021</td>
					            <td style="text-align:center;">View</td>
					          </tr>
					          <tr>
					            <td>23/10/2021</td>
					            <td style="text-align: right;">₹ 350</td>
					            <td>23/10/2021</td>
					            <td style="text-align:center;">View</td>
					          </tr>
					          <tr>
					            <td>23/10/2021</td>
					            <td style="text-align: right;">₹ 350</td>
					            <td>23/10/2021</td>
					            <td style="text-align:center;">View</td>
					          </tr>
					        </tbody>
					    </table>     
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
  name: 'MyPatients',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
