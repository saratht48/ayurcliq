<template>
  <div class="col-12 filterWrapper">
	<div style="width:95%;margin:0 auto;">
		<div class="row">
			<div class="col-md-4 my-md-5 mt-3">
				<div class="boxShadow" id="demo">
					<ul class="dashboardMenu text-left">
						<li> <a href="#"><i class="far fa-chart-bar pr-2 dMenuIS"></i> Dashboard</a></li>
						<li> <a href="#"><i class="fas fa-file-alt pr-2 dMenuIS"></i> Generate Prescription</a></li>
						<li> <a href="#"><i class="fas fa-user pr-2 dMenuIS"></i> My Patient</a></li>
						<li> <a href="#"><i class="fas fa-power-off pr-2 dMenuIS"></i> Sign out</a></li>
					</ul>
				</div>
			</div>
			<div class="col-md-8 mt-md-5 mb-md-5 mt-0 mb-4">
				<div class="dashbordGraphWrapper boxShadow">
						
						<h2 class="p-2 text -left">Dashboard</h2>
						
						<div class="row">
							<div class="col-lg-3 col-6 mb-lg-0 mb-3">
									<div class="SmallBox boxShadow2">
											<h4 class="textColorBlack pt-3">Total Order</h4>
											<div class="display-5 numberSize text-success">
												345
											</div>
									</div>
							</div>
							<div class="col-lg-3 col-6 mb-lg-0 mb-3">
									<div class="SmallBox boxShadow2">
											<h4 class="textColorBlack pt-3">Total Value</h4>
											<div class="display-5 numberSize text-success">
												₹2,34567
											</div>
									</div>
							</div>
							<div class="col-lg-3 col-6 mb-lg-0 mb-3">
									<div class="SmallBox boxShadow2">
											<h4 class="textColorBlack pt-3">Total Paid</h4>
											<div class="display-5 numberSize text-success">
												₹2,34567
											</div>
									</div>
							</div>
							<div class="col-lg-3 col-6 mb-lg-0 mb-3">
									<div class="SmallBox boxShadow2">
											<h4 class="textColorBlack pt-3">Due</h4>
											<div class="display-5 numberSize text-danger">
												₹2,34567
											</div>
									</div>
							</div>
						</div>
						
						<div class="row">
							<div class="col-12 mt-lg-4 mt-2">
									<div class="SmallBox boxShadow2">
											<div class="display-5 numberSize text-success">
												<div id="container"></div>
											</div>
									</div>
							</div>
						</div>

						<div class="row">
							<div class="col-12 mt-4">
									<div class="SmallBox boxShadow2">
											<h2 class="p-2 text-left">Payment History</h2>
											<div>
												<table class="table">
														<thead>
															<tr>
																<th>Date</th>
																<th>Amount</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>12-10-2021</td>
																<td>₹10,00</td>	
															</tr>
															<tr>
																<td>18-10-2021</td>
																<td>₹10,00</td>	
															</tr>
															<tr>
																<td>13-11-2021</td>
																<td>₹10,00</td>	
															</tr>
														</tbody>
												</table>
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
export default {
  name: 'Dashboard',
  props: {
    msg: String
  },
  methods:{
	  
	},
  beforeMount(){
       
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.highcharts-figure,
.highcharts-data-table table {
    min-width: 310px;
    max-width: 800px;
    margin: 1em auto;
}

#container {
    height: 400px;
}

.highcharts-data-table table {
    font-family: Verdana, sans-serif;
    border-collapse: collapse;
    border: 1px solid #ebebeb;
    margin: 10px auto;
    text-align: center;
    width: 100%;
    max-width: 500px;
}

.highcharts-data-table caption {
    padding: 1em 0;
    font-size: 1.2em;
    color: #555;
}

.highcharts-data-table th {
    font-weight: 600;
    padding: 0.5em;
}

.highcharts-data-table td,
.highcharts-data-table th,
.highcharts-data-table caption {
    padding: 0.5em;
}

.highcharts-data-table thead tr,
.highcharts-data-table tr:nth-child(even) {
    background: #f8f8f8;
}

.highcharts-data-table tr:hover {
    background: #f1f7ff;
}
</style>
