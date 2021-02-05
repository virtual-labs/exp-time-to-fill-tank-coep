function LCS_controllercalculation (){
	
	
	console.log(ControllerType, ControllerActionType, ValveActionType,  ControllerToBeConfig,IpValForLCV100, IpValForLCV200, HysterisisVal, FloatingContSteps);
	
	ref = 0;
	
	if(ControllerType == 1){
		// for LCV 100
		if(ControllerToBeConfig == 1){
			
			output = decideOutputforLCV100_LCS();
		}
	
	}
	
	
	
}

function decideOutputforLCV100_LCS(){
	
	var output1;
	
	if(ValveActionType == 1){
		
		 Actual_FlowInM = C_d  * Math.sqrt(2*g*pv) * PipeAreaInM;
		 Actual_FlowInmiliM = Actual_FlowInM * 1000;
		 outFlow = (Actual_FlowInmiliM * 5);
//		 console.log(outFlow);
	}
	if(ValveActionType == 2){
		
		outFlow = 0;
	}
	if(IpValForLCV200 == 100){
		
		if(ValveActionType == 1 && pv >= SP_val){
			Diff = height_fulltank_5Sec - outFlow; 
		}else{
			
			Diff = height_fulltank_5Sec; 
		}
		if(ValveActionType == 2){
			Diff = height_fulltank_5Sec;
		}
		
		
//		console.log(Diff);
	}
	if(IpValForLCV200 == 0){
		
		Diff = 0;
		
	}
	
	console.log(outFlow);
	console.log(Diff);
	
	err = SP_val - pv;
	
	
	
	
	if(err > 0 || err == 0){
		if(ControllerActionType == 1){
			output1 = 1;
			LC100ToLCV100.hide();
			LC100ToLCV100 = paper.path('M'+(x+380)+' '+(y+150)+ 'l 0 138').attr({'stroke':'green', 'stroke-width':'2', 'stroke-dasharray' : '--'});
		}
		if(ControllerActionType == 2){
			output1 = 0;
			LC100ToLCV100.hide();
			LC100ToLCV100 = paper.path('M'+(x+380)+' '+(y+150)+ 'l 0 138').attr({'stroke':'red', 'stroke-width':'2', 'stroke-dasharray' : '--'});
		}
		


				
				clearInterval(ref);
				ref = setInterval(increaseWaterLvl_LCS, 1000);
				
		
		
		
	}
	if(err < 0){
		if(ControllerActionType == 1){
			output1 = 0;
			LC100ToLCV100.hide();
			LC100ToLCV100 = paper.path('M'+(x+380)+' '+(y+150)+ 'l 0 138').attr({'stroke':'red', 'stroke-width':'2', 'stroke-dasharray' : '--'});
		}
		if(ControllerActionType == 2){
			output1 = 1;
			LC100ToLCV100.hide();
			LC100ToLCV100 = paper.path('M'+(x+380)+' '+(y+150)+ 'l 0 138').attr({'stroke':'green', 'stroke-width':'2', 'stroke-dasharray' : '--'});
		}
		
		
		
		if(outFlow == 0){
			clearInterval(ref);
			ref = setInterval(increaseWaterLvl_LCS, 1000);
		}else{
			clearInterval(ref);
			ref = setInterval(decreaseWaterLvl_LCS, 1000);
		}

	}
	
	
	
	outputarr.push(output1);
	
	console.log("pv"+pv+"output"+outputarr);
	
	return output1;
	
}