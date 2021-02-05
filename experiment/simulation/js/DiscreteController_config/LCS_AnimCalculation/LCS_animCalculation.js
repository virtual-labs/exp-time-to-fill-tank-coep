function waterlvlHT_LCS(tanklevel){
	 
	var ht; 
	if(tanklevel == 0){
		ht = 0;
	}
	if(tanklevel > 0 && tanklevel <=5){
		ht = 20;
	}
	if(tanklevel > 5 && tanklevel <=10){
		ht = 25;
	}
	if(tanklevel > 10 && tanklevel <=15){
		ht = 30;
	}
	if(tanklevel > 15 && tanklevel <=20){
		ht = 35;
	}
	if(tanklevel > 20 && tanklevel <=25){
		ht = 40;
	}
	if(tanklevel > 25 && tanklevel <=30){
		ht = 45;
	}
	if(tanklevel > 30 && tanklevel <=35){
		ht = 50;
	}
	if(tanklevel > 35 && tanklevel <=40){
		ht = 70;
	}
	if(tanklevel > 40 && tanklevel <=45){
		ht = 90;
	}
	if(tanklevel > 45 && tanklevel <=50){
		ht = 110;
	}
	if(tanklevel > 50 && tanklevel <=55){
		ht = 130;
	}
	if(tanklevel > 55 && tanklevel <=60){
		ht = 140;
	}
	if(tanklevel > 60 && tanklevel <=65){
		ht = 150;
	}
	if(tanklevel > 65 && tanklevel <=70){
		ht = 160;
	}
	if(tanklevel > 70 && tanklevel <=75){
		ht = 170;
	}
	if(tanklevel > 75 && tanklevel <=80){
		ht = 180;
	}
	if(tanklevel > 80 && tanklevel <=85){
		ht = 190;
	}
	if(tanklevel > 85 && tanklevel <=90){
		ht = 200;
	}
	if(tanklevel > 90 && tanklevel <=95){
		ht = 210;
	}
	if(tanklevel > 95 && tanklevel <=100){
		ht = 220;
	}
	
	return ht;
	
}

function drawWaterLvl_LCS(ht) {
	
	var a = paper.path('M'+(x+100)+' '+(y+201)).attr({'stroke':'#7fbfff','stroke-width': '148', opacity : 1});
	 a.animate( {path:"M"+ (x+100) +" "+ (y+201) +" l 0" + -ht, 'stroke-width': '148', 'stroke':'#7fbfff',
			opacity : 1}, 0).toBack();
	 return a;
	
}

function increaseWaterLvl_LCS(){
	

	timeCnt++;
	
	waterlvlLabel = waterlvlLabel + parseFloat(pv_MiliPerSec);
 
	if(waterlvlLabel > (LCS_tank_height * 1000)){
		
		waterlvlLabel = (LCS_tank_height * 1000);

	}
	
//	waterlvl.hide();	

	
	tanklevel = (pv/(LCS_tank_height * 1000))*100;
	waterlvlHT = waterlvlHT_LCS(tanklevel);
	
	waterlvl.hide();
	waterlvl = drawWaterLvl_LCS(waterlvlHT);
	
	

	
	waterlvlHT_LCS(tanklevel);
	
	waterlvlper.hide();				
	waterlvlper = Label1((x + 100), (y + 100), waterlvlLabel.toFixed(5)+" mm");
	
	
	
	pv = waterlvlLabel.toFixed(5);
	
//	checkheightToCalculateQout();
	
//	ActualTimeForPV = (tankArea * (pv/1000))/Qin;
//	console.log("ActualTimeForPV______________"+ActualTimeForPV);
//	
//	timeForheight.push(ActualTimeForPV);
//	height.push(parseFloat(pv));
	
	
		
		timeForheight.push(timeCnt);
		//console.log(timeForheight);
		height.push(parseFloat(pv));
		//console.log(height);
		

		
	
	
	
//	clearInterval(ref);
//	ref = setInterval(increaseWaterLvl_LCS, 1000);

	
	
	if(waterlvlLabel == (LCS_tank_height * 1000)){
		
		waterlvl.hide();
		waterlvl = drawWaterLvl_LCS(220);
		
		//alertify.alert("<img src='images/alertWarning.jpg' style='width:40px; height:40px;'><b>Tank is full</b>");
		alertify.alert("<div ><i  class='fa fa-exclamation-triangle'></i><b>Tank is full</b></div>");
		
		
		clearInterval(ref);
		GraphForFullTank();


		
		
	}
	
	
}





function decreaseWaterLvl_LCS() {
	

	
	waterlvlLabel = waterlvlLabel - h_new;

	if(waterlvlLabel < 0){
		
		waterlvlLabel = 0;
		Q_outLPH = 0;

	}
	
	
	
	waterlvlper.hide();				
	waterlvlper = Label1((x + 100), (y + 100), waterlvlLabel.toFixed(5)+" mm");
	
	
	Qoutlbl.hide();
	Qoutlbl = Label1((x + 470), (y + 300), Q_outLPH.toFixed(5)+" lph");
	
	
	
	//in milimeter
	pv = ((Hf * 1000) - h_new);	
	
	
	Hf = (pv/1000) ;
	
	
	//in meter
//	pv = (Hf - h_new);
//	console.log("pv "+pv);
//	Hf = pv;
	
	//console.log("pv "+pv);
	//console.log("updated Hf "+Hf);
	
	
	
	
		if(waterlvlLabel != 0){
			designToEmptyTank();
		}
	
	
	if(waterlvlLabel == 0){
		//alertify.alert("<img src='images/alertWarning.jpg' style='width:40px; height:40px;'><b>Tank is empty</b>");
		alertify.alert("<div ><i  class='fa fa-exclamation-triangle'></i><b>Tank is empty</b></div>");
		
		clearInterval(ref);
	}
	
}


function increaseWaterLvlToMaintainSP_LCS(){
	

	
	
	waterlvlLabel = waterlvlLabel + parseFloat(pv_MiliPerSec);
 
	if(waterlvlLabel > (LCS_tank_height * 1000)){
		
		waterlvlLabel = (LCS_tank_height * 1000);

	}
	
//	waterlvl.hide();	
//
//	
//	waterlvlHT = waterlvlHT_LCS(waterlvlLabel);
//	
//	waterlvl.hide();
//	waterlvl = drawWaterLvl_LCS(waterlvlHT);
	
	waterlvlper.hide();				
	waterlvlper = Label1((x + 100), (y + 100), waterlvlLabel.toFixed(5)+" mm");
	
	Qoutlbl.hide();
	Qoutlbl = Label1((x + 470), (y + 300), "Q_out = 0 lph");
	
	
	pv = waterlvlLabel.toFixed(5);
	
	
	if(waterlvlLabel != (LCS_tank_height * 1000)){
		
		if(pv > sp_inMili){
			checkheightToCalculateQout();
			}
		
		
	}

	

	
	
	if(waterlvlLabel == (LCS_tank_height * 1000)){
		
		checkheightToCalculateQout();
		
		//alertify.alert("<img src='images/alertWarning.jpg' style='width:40px; height:40px;'><b>Tank is overflown</b>");
		alertify.alert("<div ><i  class='fa fa-exclamation-triangle'></i><b>Tank is overflown</b></div>");
		clearInterval(ref);
	}
	
}









