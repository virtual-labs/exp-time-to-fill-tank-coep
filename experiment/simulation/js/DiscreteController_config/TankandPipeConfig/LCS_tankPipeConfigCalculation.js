
function ToFillTank(){
	
	timeCnt = 0;
	timeForheight = [];
	height = [];
	
	Qin = LCS_Qin/(1000*3600);
	//console.log("Qin "+Qin);
	
	QinLbl.hide();
	QinLbl = Label1((x+460), (y-85), LCS_Qin+" lph");
	
	Q_outLPH = 0;
	Qoutlbl.hide();
	Qoutlbl = Label1((x + 470), (y + 300), Q_outLPH+" lph");
	
	
	tankArea = (pie * LCS_tank_radius * LCS_tank_radius);	
	////console.log("tankArea "+tankArea);
	
	TotaltankV_Mcube = tankArea * LCS_tank_height;
	//console.log("TotaltankV_Mcube " + TotaltankV_Mcube);
	
	
	pvPerSec = Qin/(tankArea);
	//console.log("PV per Sec " + pvPerSec);
	
	// in milimeter
	pv_MiliPerSec = (pvPerSec * 1000);
	//console.log("PV milimeter per Sec " + pv_MiliPerSec);
	
	totalTimeToFullTank = (TotaltankV_Mcube * 1000)/LCS_Qin;
	
	//console.log("totalTimeToFullTank in hrs................ " + totalTimeToFullTank);
	
	//console.log("totalTimeToFullTank in min ..........................." + (totalTimeToFullTank*60));
	
	//console.log("totalTimeToFullTank in Sec..................... " + (totalTimeToFullTank*3600));
	
	// in meter
// pv_MiliPerSec = (pvPerSec);
// //console.log("PV meter per Sec " + pv_MiliPerSec);
	
	
	
	
	
	var DisplayTime = '';
	DisplayTime +='<div class="row"><div class="col-sm-12 col-md-12 col-xl-12"><div class="form-group">'
		+ '<label style="font-size:18px; font-weight:bold">Actual time required to full the tank (<span style="color:red; ">'+(totalTimeToFullTank*60 )+'</span> in Min)</label>'           
		//+'<input class="form-control"  type="text" disabled value='+(totalTimeToFullTank*60)+' >'          
		+'</div>'
		+'</div>'
		if((totalTimeToFullTank * 3600) > (LCS_MIN_TF_maximum * 60)){
			DisplayTime +='<div class="col-sm-12 col-md-12 col-xl-12" id="LCS_FullTnkTF"><div class="form-group">'
			+ '<label>To complete this experiment in '+LCS_MIN_TF_minumum+' to '+LCS_MIN_TF_maximum+' min please add time factor (in Min) to full the tank:</label>'           
			+'<input min="1"  step="1" class="form-control"  type="number" id="LCS_FullTankFactorTime">'          
			+'</div>'
			
			+'<div class="row" style="margin-left: 2px;"><div class="col-sm-12 col-md-8 col-xl-8 ErrerMsg">Note : Time factor should not be blank / 0 / negative number / decimal number  </div>'
			
			
			+ '<div class="col-sm-12 col-md-4 col-xl-4" > <button  id="LCS_FullTankTF">Submit</button><button id="LCSConfigEdit" hidden>Edit</button></div>'
			+ '<div class="col-sm-12 col-md-12 col-xl-12" id="FTNotifyAlert"> </div></div>'
		}else
			{
			
			clearInterval(ref);
			ref = setInterval(increaseWaterLvl_LCS, 1000);
			
			
//			checkTimerInterval();
//			
//			timer = $.timer(increaseWaterLvl_LCS);
//			//console.log(timer);
//			timer.set({ time : 1000, autostart : true });
			
			
			LCS_TF = 1;	
			DisplayTime += '<div class="col-sm-12 col-md-4 col-xl-4" > <button id="LCSConfigEdit" >Edit</button></div></div>'
			}
	
	DisplayTime +='</div>'
			
			$("#DisplayTimeToFullTank").html(" ");
			$("#DisplayTimeToFullTank").html(DisplayTime);
	
			
			
				$("#LCS_FullTankTF").click(
						function(e) {
//							clearInterval(ref);
//							pv = 0;
//
//							waterlvlLabel = 0;
//							waterlvlper.hide();
//							waterlvl.hide();
//							
//							$("#chartContainer").html('');	
							
							
				
							
				LCS_FullTankFactorTime = parseInt($("#LCS_FullTankFactorTime").val());
				
				if(LCS_FullTankFactorTime <= 0 || isNaN(LCS_FullTankFactorTime) == true){
					
					//alertify.alert("Time Factor should not be blank/ 0 / negative number");
					alertify.alert("<div ><i  class='fa fa-exclamation-triangle'></i><b>Time Factor should not be blank/ 0 / negative number </b></div>");
					$("#LCS_FullTankFactorTime").val(" ");
					
				}else{
					
					LCS_TF = (totalTimeToFullTank * 60) / LCS_FullTankFactorTime;
					
					//console.log("Factor..........."+LCS_FullTankFactorTime+"___Time After Factor In Min---------------   "+LCS_TF+"   Time After Factor In Sec---------------   "+(LCS_TF * 60));
					
					if(((LCS_TF * 60) <= (LCS_MIN_TF_maximum * 60)) && ((LCS_TF * 60) >= (LCS_MIN_TF_minumum * 60))){
						
						$("#LCS_FullTankFactorTime").prop("disabled", true);		
						$("#LCS_FullTankTF").prop("hidden", true);
						
						
						//console.log("start interval");
						
						pv_MiliPerSec =  pv_MiliPerSec * LCS_FullTankFactorTime;
						//console.log("PV milimeter per Sec " + pv_MiliPerSec);
						$("#FTNotifyAlert").html("<p class='alert alert-success' >Accelerated time is "+LCS_TF.toFixed(2)+" min.</p>");
						
						clearInterval(ref);
						ref = setInterval(increaseWaterLvl_LCS, 1000);
						
						
//						checkTimerInterval();
//						timer = $.timer(increaseWaterLvl_LCS);
//						//console.log(timer);
//						timer.set({ time : 1000, autostart : true });
						
						  $("#LCSConfigEdit").prop("hidden",false);
						
						
					}else{
						
						//alertify.alert("Accelerated time is "+LCS_TF +" min. Please add another time factor");
						alertify.alert("<div ><i  class='fa fa-exclamation-triangle'></i><b>Accelerated time is "+LCS_TF +" min. Please add another time factor</b></div>");
						$("#LCS_FullTankFactorTime").val(" ");
					}
					
				}
				
				
				
			});
				$("#LCSConfigEdit").on(
						"click",
						function(e) {

							if(LCS_filltankFormEnabled() == true)
								
								{$("#LCSConfigSubmit").show();
							    $("#LCSConfigEdit").prop("hidden",true);
							    $("#FTNotifyAlert").html(" ");
							    }


						});
						
				
// clearInterval(ref);
// ref = setInterval(increaseWaterLvl_LCS, 1000);
	
	
	
	
	
// GraphToFullTank();
	
	
	
	
}



function GraphToFullTank(){
	
	
	timeForheight = [];
	height = [];
	
	height_InMM = 0;
	
	LCS_tank_heightinMiliMeter = LCS_tank_height * 1000;
	
	Qin = LCS_Qin/(1000*3600);
	//console.log("Qin "+Qin);
	
	tankArea = (pie * LCS_tank_radius * LCS_tank_radius);	
	//console.log("tankArea "+tankArea);
	
	
	do{
		
		TotaltankV_Milicube = (tankArea * 1000 * 1000) * height_InMM;
		//console.log("TotaltankV_Milicube " + TotaltankV_Milicube);
		
		
		totalTimeToFullheight = (TotaltankV_Milicube/(1000 * 1000 * 1000))/Qin;
		//console.log("totalTimeToFullheight in Sec " + totalTimeToFullheight);
		
		timeForheight.push((totalTimeToFullheight/3600));
		height.push(height_InMM);
		
		

		if(LCS_tank_heightinMiliMeter > 1000 ){
			
			height_InMM = height_InMM + 1000;
			
		}else if(LCS_tank_heightinMiliMeter > 100){
			
			height_InMM = height_InMM + 100;
		}else{
			
			height_InMM = height_InMM + 10;
		}
		
		
		
	}while(height_InMM <= LCS_tank_heightinMiliMeter)
	
		GraphForFullTank();
	
	
}





function GraphForFullTank()
{
	var dps = [];
	
	
	
	
	
	
	 chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		theme: "light2",
		title:{
			fontSize: 15,
		//	text: "fill the tank"
		},
		exportFileName: "Time taken to fill the tank",
		exportEnabled: true,
		axisX:{
			title: "Time in (sec)",
		  //valueFormatString: "#### sec",
		},
		axisY: {
			title: "Water level in (mm)",
			//valueFormatString: "### mm",
		},
		data: [{        
			type: "line",
			//showInLegend: true,
			//yValueFormatString: "###.00000 mm",
			//xValueFormatString: "###.00 sec",
			//markerType: "square",
			//name: "Unique Visit",
			//lineDashType: "dash",
	      	// indexLabelFontSize: 16,
			dataPoints: dps 
			
		}]
	});
	//chart.render();

	updateChart();

	

//	setInterval(function() {updateChart()}, 500);
	
	
	
	
	}

function updateChart() {
	//var boilerColor, deltaY, yVal;
	var dps = chart.options.data[0].dataPoints;
	for (var j = 0; j < timeForheight.length; j++) {	
		dps.push({
			x: timeForheight[j],
			y: height[j],
			markerType: "circle",markerColor: "red", markerSize: 5
		});
	}
	chart.options.data[0].dataPoints = dps; 
	chart.render();
};










function ToEmptyTank(){
	
	timewithFullhead = 0;
	
	timewithFullheadJSON = {};
	
	timewithFullhead_TimeArr = [];
	timewithFullhead_FH_Arr = [];
	
	
	timeArr = [];
	heightArr = [];
	
	HeightGrapgh = [];
	TimeGraph = [];
	
	QoutArr = [];
	
	
	heightForTime_MilimeterReverse = [];
	indexArr = [];
	
	index = 0;
	
	
	LCS_Qin = 0;
	QinLbl.hide();
	QinLbl = Label1((x+460), (y-85), LCS_Qin+" lph");
	
	tankArea = (pie * LCS_tank_radius * LCS_tank_radius);	
	//console.log("tankArea "+tankArea);
	
	tankDiameter = LCS_tank_radius * 2;
	
	TotaltankV_Mcube = tankArea * LCS_tank_height;
	//console.log("TotaltankV_Mcube " + TotaltankV_Mcube);
	
	LCS_PipeDiameterInMeter  = LCS_pipe_diameter/1000;
	
	pipeArea = (pie/4) * LCS_PipeDiameterInMeter * LCS_PipeDiameterInMeter;
	
	pipeLength_inM = 1;
	
	Hf = parseFloat(LCS_tank_height) ;
	
	//console.log("HF before Factor @@@@@@@@@@@@  "+Hf);
	
	// + parseFloat(pipeLength_inM);
	
	
	

	
	
	
	diameterTemp = Math.pow((tankDiameter/LCS_PipeDiameterInMeter), 2);
	
	HTSquareRoot = Math.sqrt(((2 * Hf )/g));
	
	totalTimeToEmptyTank = (1/0.81) * diameterTemp * HTSquareRoot;
	

	//console.log("TOTAL TIME TO EMPTY TANK in SEC!!!!!!!!!!!!!!!!!!  "+totalTimeToEmptyTank);
	
	//console.log("TOTAL TIME TO EMPTY TANK in MIN  "+totalTimeToEmptyTank /60);
	
	//console.log("TOTAL TIME TO EMPTY TANK in Hrs  "+totalTimeToEmptyTank / 3600);
	
	
	
	if(totalTimeToEmptyTank > 1){
		
		
		for(i = 1; i <= totalTimeToEmptyTank; i++){
			
			heightForTime = (g/2) * Math.pow(0.81, 2) * Math.pow(i, 2) * Math.pow((LCS_PipeDiameterInMeter / tankDiameter), 4);
			
			
			
			heightForTime_Milimeter = heightForTime * 1000;
			//console.log("Height for time " + i +" sec is"+heightForTime_Milimeter+" mm");
			
			timeArr.push(i);
			heightArr.push(heightForTime_Milimeter.toFixed(5));		
			
			
			
		}
		
		
		
	}
	
	if(totalTimeToEmptyTank <= 1){
		
		
		for(i = 0.1; i <= totalTimeToEmptyTank; i += 0.1){
			
			heightForTime = (g/2) * Math.pow(0.81, 2) * Math.pow(i, 2) * Math.pow((LCS_PipeDiameterInMeter / tankDiameter), 4);
			
			
			
			heightForTime_Milimeter = heightForTime * 1000;
			//console.log("Height for time " + i +" sec is"+heightForTime_Milimeter+" mm");
			
			timeArr.push(i);
			heightArr.push(heightForTime_Milimeter.toFixed(5));		
			
			
			
		}
		
	}
	
	
	
	heightForTime_MilimeterReverse = heightArr.reverse();
	
	//console.log("reverse"+heightForTime_MilimeterReverse);
	
	
	
	
	var DisplayTime = '';
	DisplayTime +='<div class="row"><div class="col-sm-12 col-md-12 col-xl-12"><div class="form-group">'
		+ '<label style="font-size:18px; font-weight:bold">Actual time required to empty the tank (<span style="color:red; ">'+(totalTimeToEmptyTank / 60 ).toFixed(2)+'</span> in Min)</label>'           
		//+'<input class="form-control"  type="text" disabled value='+(totalTimeToFullTank*60)+' >'          
		+'</div>'
		+'</div>'
		if((totalTimeToEmptyTank) > (LCS_MIN_TF_maximum * 60)){
			DisplayTime +='<div class="col-sm-12 col-md-12 col-xl-12" id="LCS_FullTnkTF"><div class="form-group">'
			+ '<label>To complete this experiment in '+LCS_MIN_TF_minumum+' to '+LCS_MIN_TF_maximum+' min please add time factor (in Min) to empty the tank:</label>'           
			+'<input min="1"  step="1" class="form-control"  type="number" id="LCS_EmptyTankFactorTime">'          
			+'</div>'
			
			+'<div class="row" style="margin-left: 2px;"><div class="col-sm-12 col-md-8 col-xl-8 ErrerMsg">Note : Time factor should not be blank / 0 / negative number / decimal number  </div>'
			
			
			+ '<div class="col-sm-12 col-md-4 col-xl-4" > <button  id="LCS_emptyTankTF">Submit</button><button id="LCS_EmptyConfigEdit" hidden>Edit</button></div>'
			+ '<div class="col-sm-12 col-md-12 col-xl-12" id="ETNotifyAlert"> </div></div>'
		}else
			{
			
			indexA = 0;
			//console.log("indexA "+indexA);
			
			index = Math.round(indexA);
			
			clearInterval(ref);
			ref = setInterval(designToEmptyTank, 1000);
			

			
			
			LCS_TF = 1;	
			DisplayTime += '<div class="col-sm-12 col-md-4 col-xl-4" > <button id="LCS_EmptyConfigEdit" >Edit</button></div></div>'
			}
	DisplayTime +='</div>'
			
			$("#DisplayTimeToFullTank").html(" ");
			$("#DisplayTimeToFullTank").html(DisplayTime);
	
	
	
	
	
// Graph();
	
			 $("#LCS_emptyTankTF").on(
						"click",
						function(e) {
							
							LCS_EmptyTankFactorTime = parseInt($("#LCS_EmptyTankFactorTime").val());
							
							if(LCS_EmptyTankFactorTime <= 0 || isNaN(LCS_EmptyTankFactorTime) == true){
								
								//alertify.alert("Time Factor should not be blank/ 0 / negative number");
								alertify.alert("<div ><i  class='fa fa-exclamation-triangle'></i><b>Time Factor should not be blank/ 0 / negative number</b></div>");
								$("#LCS_FullTankFactorTime").val(" ");
								
							}else{	
								
							
							
							LCS_EmptyTF = (totalTimeToEmptyTank / 60) / LCS_EmptyTankFactorTime;
							
							
							if(((LCS_EmptyTF * 60) <= (LCS_MIN_TF_maximum * 60)) && ((LCS_EmptyTF * 60) >= (LCS_MIN_TF_minumum * 60))){
							
								$("#LCS_EmptyTankFactorTime").prop("disabled", true);	
								$("#LCS_emptyTankTF").prop("hidden", true);
								
							indexA = totalTimeToEmptyTank/(LCS_EmptyTF * 60);
							
							//console.log("index"+indexA);
										
							index = Math.round(indexA);
						
							$("#ETNotifyAlert").html("<p class='alert alert-success' >Accelerated time is "+LCS_EmptyTF.toFixed(2)+" min.</p>");
							
							
							
							
							
							clearInterval(ref);
							ref = setInterval(designToEmptyTank, 1000);	
							
							
							
							$("#LCS_EmptyConfigEdit").prop("hidden",false);
							
							}else{
								
								
								//alertify.alert("Accelerated time is "+LCS_EmptyTF +" min. Please add another time factor");
								alertify.alert("<div ><i  class='fa fa-exclamation-triangle'></i><b>Accelerated time is "+LCS_EmptyTF +" min. Please add another time factor </b></div>");
								$("#LCS_EmptyTankFactorTime").val(" ");
							}
							
							}
							
						});
	
	
	
			 $("#LCS_EmptyConfigEdit").on(
						"click",
						function(e) {

							if(LCS_EmptytankFormEnabled() == true)
								
								{$("#LCSemptyTannkDivSubmit").show();
							    $("#LCS_EmptyConfigEdit").prop("hidden",true);
							    $("#ETNotifyAlert").html(" ");
							    }


						});

	
	
	
}





 cnt = 0;

 
 

 
 

function designToEmptyTank(){
	
	cnt++;
	ht_mm = heightForTime_MilimeterReverse[index];
	time = timeArr[index];
	if(ht_mm != undefined){
		ht_mtr = ht_mm/1000;
		
		Hf = ht_mtr;

		
		// 4
		if(Hf <=0.9 && Hf != 0){
			
			Velocity = 0.9 * (Math.sqrt(2 * g * (Hf + pipeLength_inM)));
			//console.log("Velocity "+Velocity);
			
		}else{
			
			Velocity = 5.4864;
		}
		
		Q_out = (Velocity * pipeArea);
		//console.log("Q_out "+Q_out);
		
		
		
		Q_outLPH = Q_out * 1000 * 3600;
		//console.log("Q_outLPH................................. "+Q_outLPH);
		
		HeightGrapgh.push(parseFloat(ht_mm));
		TimeGraph.push(parseFloat(time));
		
		QoutArr.push(Q_outLPH);

		
//		h_new = ((Q_out/tankArea) * 1000);
//		
//		//console.log("h_new "+h_new);
		

		

		
		waterlvlLabel = Hf * 1000;

		
		
		
		waterlvlper.hide();				
		waterlvlper = Label1((x + 100), (y + 100), waterlvlLabel.toFixed(5)+" mm");
		
		
		Qoutlbl.hide();
		Qoutlbl = Label1((x + 470), (y + 300), Q_outLPH.toFixed(5)+" lph");
		
		
		tanklevel = (ht_mm/(LCS_tank_height * 1000))*100;
		waterlvlHT = waterlvlHT_LCS(tanklevel);
		
		waterlvl.hide();
		waterlvl = drawWaterLvl_LCS(waterlvlHT);
		

		if((totalTimeToEmptyTank) > (LCS_MIN_TF_maximum * 60)){
			
			index = index + Math.round(indexA);
			
			
		}else{
			
			index = index + 1;
			
		}
		
		

		
		//console.log("updated index............."+index);
		
		//console.log("Cnt.........."+cnt);
		
	}else{
		
		
		
		ht_mm = 0;
		waterlvlLabel = 0; 		
		Q_outLPH = 0;
		
		HeightGrapgh.push(ht_mm);
		QoutArr.push(Q_outLPH);
		
		
		if(totalTimeToEmptyTank > 1){
			
		TimeGraph.push(parseFloat(timeArr.length) + 1);
		
		}
		
		
		if(totalTimeToEmptyTank <= 1){
			
			
			TimeGraph.push(parseFloat(timeArr[timeArr.length - 1]) + 0.1);
			
		}
		
		waterlvlper.hide();				
		waterlvlper = Label1((x + 100), (y + 100), waterlvlLabel.toFixed(5)+" mm");
		
		
		Qoutlbl.hide();
		Qoutlbl = Label1((x + 470), (y + 300), Q_outLPH.toFixed(5)+" lph");
		
		
		tanklevel = (ht_mm/(LCS_tank_height * 1000))*100;
		waterlvlHT = waterlvlHT_LCS(tanklevel);
		
		waterlvl.hide();
		waterlvl = drawWaterLvl_LCS(waterlvlHT);
		
		
		//alertify.alert("<img src='images/alertWarning.jpg' style='width:40px; height:40px;'><b>Tank is empty</b>");
		alertify.alert("<div ><i  class='fa fa-exclamation-triangle'></i><b>Tank is empty</b></div>");
		clearInterval(ref);
		
		//console.log(HeightGrapgh);
		//console.log(TimeGraph);
		
		
		GraphForEmptyTank();
		
	}
	
}






function GraphForEmptyTank()
{
	var dps = [];
	
	
	
	
	
	
	 chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		theme: "light2",
		title:{
			fontSize: 15,
		//	text: "fill the tank"
		},
		exportFileName: "Time taken to empty the tank",
		exportEnabled: true,
		axisX:{
			title: "Time in (sec)",
		  //valueFormatString: "#### sec",
		},
		axisY: {
			title: "Water level in (mm)",
			//valueFormatString: "### mm",
		},
		data: [{        
			type: "line",
			//showInLegend: true,
			//yValueFormatString: "###.00000 mm",
			//xValueFormatString: "###.00 sec",
			//markerType: "square",
			//name: "Unique Visit",
			//lineDashType: "dash",
	      	// indexLabelFontSize: 16,
			dataPoints: dps 
			
		}]
	});
	//chart.render();

	updateEmptyChart();

	

//	setInterval(function() {updateChart()}, 500);
	
	
	
	
	}




function updateEmptyChart() {
	//var boilerColor, deltaY, yVal;
	var dps = chart.options.data[0].dataPoints;
	for (var j = 0; j < HeightGrapgh.length; j++) {	
		dps.push({
			x: TimeGraph[j]  ,
			y: HeightGrapgh[j],
			markerType: "circle",markerColor: "red", markerSize: 5
		});
	}
	chart.options.data[0].dataPoints = dps; 
	chart.render();
};















function Graph()
{
	var dps = [];
	
	
	for (var j = 0; j < timewithFullhead_TimeArr.length; j++) {	
		dps.push({
			x: timewithFullhead_TimeArr[j],
			y: timewithFullhead_FH_Arr[j]
		});
	}
	

	
	
	var chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		theme: "light2",
		title:{
			text: "Simple Line Chart"
		},
		exportEnabled: true,
		data: [{        
			type: "line",
	      	// indexLabelFontSize: 16,
			dataPoints: dps 
			
		}]
	});
	chart.render();

	}
	



function ToMaintainSp(){
	
	
	
	// Calculation For tank
	
	// in MeterCube per Sec
	Qin = LCS_Qin/(1000*3600);
	//console.log("Qin "+Qin);
	
	QinLbl.hide();
	QinLbl = Label1((x+460), (y-85), LCS_Qin+" lph");
	
	// in meter square
	tankArea = (pie * LCS_tank_radius * LCS_tank_radius);	
	//console.log("tankArea "+tankArea);
	
	// LCS_tank_diameter In Milimeter
	LCS_tank_diameterInMM =  (LCS_tank_radius * 2) * 1000;
	//console.log("LCS_tank_diameterInMM " + LCS_tank_diameterInMM);
	
	// in Meter Cube per Sec
	TotaltankV_Mcube = tankArea * LCS_tank_height;
	//console.log("TotaltankV_Mcube " + TotaltankV_Mcube);
	
	// in meter per Sec
	pvPerSec = Qin/(tankArea);
	//console.log("PV per Sec " + pvPerSec);
	
	// in milimeter per Sec
	pv_MiliPerSec = (pvPerSec * 1000);
	//console.log("PV milimeter per Sec " + pv_MiliPerSec);
	
	
	// Time to full the tank in sec
	totalTimeToFullTank = TotaltankV_Mcube/Qin;
	//console.log("totalTimeToFullTank in Sec " + totalTimeToFullTank);
	
	//console.log("totalTimeToFullTank in min " + (totalTimeToFullTank/60));
	
	//console.log("totalTimeToFullTank in hrs " + (totalTimeToFullTank/3600));
	
	// in meter
// pv_MiliPerSec = (pvPerSec);
// //console.log("PV meter per Sec " + pv_MiliPerSec);
	
	// Sp in meter according to total height
	spInMeter = (spVal/100)*LCS_tank_height
	
	// SP in Milimeter
	sp_inMili = parseFloat(spInMeter) * 1000;	
	//console.log("sp_inMili " + sp_inMili);
	
	
	
	// Calculation For Pipe
	
	//console.log("LCS_pipe_diameter In milimeter!!!!!!!!!!!!!!!! " + LCS_pipe_diameter);
	
	
	LCS_PipeDiameterInMeter  = LCS_pipe_diameter/1000;
	
	pipeArea = (pie/4) * LCS_PipeDiameterInMeter * LCS_PipeDiameterInMeter;
	
	pipeLength_inM = 1;
	
// Hf = parseFloat(spInMeter) + parseFloat(pipeLength_inM);
	
	Coeff = 0.009;
	
	
	
	
	
// if(pv_MiliPerSec <= sp_inMili){
		
		
		clearInterval(ref);
		ref = setInterval(increaseWaterLvlToMaintainSP_LCS, 1000);
					
// }
	

	
}


function checkheightToCalculateQout(){
	
// if(pv > sp_inMili){
		
		clearInterval(ref);
		
// if(LCS_tank_diameterInMM > LCS_pipe_diameter){
			
			pv1 = pv/1000;
			
// HC = parseFloat(pv1) + parseFloat(pipeLength_inM);
			
			HC = parseFloat(pv1) ;
			
// Velocity = 2 * (Math.sqrt(g * HC))
			
			if(HC <=0.9 && HC != 0){
				
				Velocity = 0.9 * (Math.sqrt(2 * g * (HC + pipeLength_inM)));
				//console.log("Velocity "+Velocity);
				
			}else{
				
				Velocity = 5.4864;
			}
			
// }
// else{
//			
// pv1 = pv/1000;
// Hf = parseFloat(pv1) + parseFloat(pipeLength_inM);
//			
// SquareofVelocity = ((2 * g * LCS_PipeDiameterInMeter * (Hf)) / (4 * Coeff *
// pipeLength_inM));
// //console.log("SquareofVelocity "+SquareofVelocity);
//			
// Velocity = (Math.sqrt(SquareofVelocity));
// //console.log("Velocity "+Velocity);
// }
			
		
		
		Q_out = (Velocity * pipeArea);
		//console.log("Q_out................................. "+Q_out);
		
		Q_outLPH = Q_out * 1000 * 3600;
		//console.log("Q_outLPH................................. "+Q_outLPH);
		
		h_new = (Q_out/tankArea)*1000;
		//console.log("h_new "+h_new);
		
// netHeight = pv_MiliPerSec - h_new;
		netHeight = pv - h_new;
		
		//console.log("netHeight................................. "+netHeight);
		
		
		if(netHeight >= 0){
		

		
		waterlvlLabel = netHeight;
// waterlvlper.hide();
// waterlvlper = Label1((x + 100), (y + 100), waterlvlLabel.toFixed(5)+" mm");
		
		Qoutlbl.hide();
		Qoutlbl = Label1((x + 470), (y + 300), "Q_out = "+Q_outLPH.toFixed(5)+" lph");
		
		
// if(netHeight <= sp_inMili){
			
			
			clearInterval(ref);
			ref = setInterval(increaseWaterLvlToMaintainSP_LCS, 1000);
			
// }
		
// if(netHeight > sp_inMili){
//			
//			
//			
// pv = netHeight;
// waterlvlper.hide();
// waterlvlper = Label1((x + 100), (y + 100), waterlvlLabel.toFixed(5)+" mm");
// clearInterval(ref);
// ref = setInterval(checkheightToCalculateQout, 1000);
//			
//			
// // waterlvlLabel = netHeight;
// // clearInterval(ref);
// // ref = setInterval(increaseWaterLvlToMaintainSP_LCS, 1000);
//			
// }
		
		
		
		}else{
			
		
		
			pv = 0;
		
			netHeight = 0;
			
// clearInterval(ref);
			
			waterlvlLabel = netHeight;
// waterlvlper.hide();
// waterlvlper = Label1((x + 100), (y + 100), waterlvlLabel.toFixed(5)+" mm");
			
			Qoutlbl.hide();
			Qoutlbl = Label1((x + 470), (y + 300), "Q_out = "+Q_outLPH.toFixed(5)+" lph");
			alertify.alert("<div ><i  class='fa fa-exclamation-triangle'></i><b>Tank is drain</b></div>");
			//alertify.alert("<img src='images/alertWarning.jpg' style='width:40px; height:40px;'><b>Tank is drain</b>");
			
			
				
				
// clearInterval(ref);
// ref = setInterval(increaseWaterLvlToMaintainSP_LCS, 1000);
				
	
			
		}
			
		
		
// }
}








