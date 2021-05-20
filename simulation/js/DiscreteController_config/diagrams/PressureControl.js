// JavaScript Documentvar paper;


function PressureControl(){	

//	paper = new Raphael(document.getElementById('canvas'), '100%', 700);
	
    //x = 310;
	//y = 160;
	
	x = 390;
	y = 290;

	
	 PL_tank = PL_Tank ((x-115), y);
	
//	 PL_tank = PL_Tank ((x-80), y);
	 
	waterlvlHT = waterlvlHT_PCS(0);
//	waterlvl = drawWaterLvl_PCS(waterlvlHT);
	
	waterlvlper = Label1((x + 50), (y + 80), "0 %");
	
	
	
    PTCircle = PC_PTCircleWithLabel((x+50),(y-140), 25, "PT 100");	
	var PY100 = PC_CircleWithLabel((x-290),(y-60), 25, "PY 100");
	var PE100 = PC_CircleWithLabel((x+50),(y-70), 25, "PE 100");
	var PIC100_Circle = PC_CircleWithLine((x+50),(y-210), 25, "PIC", "100"); 	 
	 
		
	 
	 paper.path('M'+(x-350)+' '+(y+65)+ 'l 43 0').attr({'stroke':'black', 'stroke-width':'2', 'arrow-end':'classic-wide-long'});
	 
	 paper.path('M'+(x-274)+' '+(y+65)+ 'l 35 0').attr({'stroke':'black', 'stroke-width':'1'});
	 
	 paper.path('M'+(x-205)+' '+(y+65)+ 'l 115 0').attr({'stroke':'black', 'stroke-width':'2', 'arrow-end':'classic-wide-long'});
	 
	 paper.path('M'+(x+190)+' '+(y+95)+ 'l 113 0').attr({'stroke':'black', 'stroke-width':'2'});
	 
	 paper.path('M'+(x+337)+' '+(y+95)+ 'l 40 0').attr({'stroke':'black', 'stroke-width':'2', 'arrow-end':'classic-wide-long'});
	 
	 paper.path('M'+(x-290)+' '+(y-35)+ 'l 0 75').attr({'stroke':'black', 'stroke-width':'1'});
	 
	 paper.path('M'+(x-280)+' '+(y-10)+ 'l -25 25').attr({'stroke':'black', 'stroke-width':'1'});
	 
	 paper.path('M'+(x-280)+' '+(y-20)+ 'l -25 25').attr({'stroke':'black', 'stroke-width':'1'});
	 
	 paper.path('M'+(x-290)+' '+(y-85)+ 'l 0 -125 l 315 0').attr({'stroke':'black', 'stroke-width':'2',  'stroke-dasharray' : '--'});
	 	 
	 paper.path('M'+(x+50)+' '+(y-165)+ 'l 0 -20').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 
	 paper.path('M'+(x+50)+' '+(y-95)+ 'l 0 -20').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 
	 paper.path('M'+(x+50)+' '+(y-18)+ 'l 0 -27').attr({'stroke':'black', 'stroke-width':'2'});
	 
	 paper.path('M'+(x+320)+' '+(y)+ 'l 0 70').attr({'stroke':'black', 'stroke-width':'1'});
	 
	 paper.path('M'+(x+330)+' '+(y+15)+ 'l -20 20').attr({'stroke':'black', 'stroke-width':'1'});
	 
	 paper.path('M'+(x+330)+' '+(y+25)+ 'l -20 20').attr({'stroke':'black', 'stroke-width':'1'});
	 
	 
	 PC_ControlValve((x-300),(y+50));	 
	 NRV_Valve((x-230),(y+50));  
	 var MVValve = PC_ControlValve((x+310),(y+80));
	 
	 
	 var CV100 = Label((x-290), (y+90), "PCV 100");	 
	 var NRV100 = Label((x-220), (y+90), "NRV 100");
	 var MV100 = Label((x+320), (y+120), "PCV 200");
	 var UD = Label((x+363), (y+5), "User Demand");
	 var outlet = Label((x+364), (y+80), "Gas Out");
	 userDemandLbl = paper.text((x+364), (y+50), "0 %").attr({	stroke : 'white','font-size' : 12,	"font-family": "sans-serif"	});
	 var inlet = Label((x-370), (y+65), "Gas In");
	 inletSourceLbl = paper.text((x-370), (y+35), "0 %").attr({	stroke : 'white','font-size' : 12,	"font-family": "sans-serif"	});
	 var T100 = Label((x+50), (y+60), "P 100");
	
	paper.text((x+50), (y+200), "Pressure Control System").attr({
			stroke : 'black',
			'font-size' : 25,
			"font-family": "sans-serif" 
		});
	 
};	


	function PL_Tank (x, y){
		
//	 paper.path('M'+(x+25)+' '+(y-18)+'l 0 150 220 0 0 -150 -220 0').attr({
//	"stroke-width" : 1,
//	'stroke':'black',
//	}); 
//	
//	 paper.path('M'+(x+25)+' '+(y-18)+ 'l 0 0 q -68 70 0 150  ').attr({'stroke':'black', 'stroke-width':'1'});	
//	
//	 paper.path('M'+(x+245)+' '+(y-18)+ 'l 0 0 q 68 70 0 150  ').attr({'stroke':'black', 'stroke-width':'1'});	
		
		 var rect = paper.rect((x+25), (y-18), 280, 150, 50).attr({'stroke':'black',"stroke-width" : 1}); 
		 
		 return rect;
		
	};


	function PC_ControlValve(x, y){
	
	
	paper.path('M'+(x)+' '+(y)+ 'l 20 0').attr({'stroke':'black', 'stroke-width':'1'});
	
	 paper.path('M'+(x)+' '+(y)+ 'l 0 0 q 10 -20 20 0  ').attr({'stroke':'black', 'stroke-width':'1'});
	
	paper.path('M'+(x+10)+' '+(y)+ 'l 0 15').attr({'stroke':'black', 'stroke-width':'1'});
	
	 paper.path('M'+(x-8)+' '+(y+3)+ 'l 0 25 l 35 -25 l 0 25 l -35 -25').attr({'stroke':'black', 'stroke-width':'1'});
	
	
	
};
 
	function NRV_Valve(x, y){
	
	
	
	 paper.path('M'+(x-8)+' '+(y+28)+ 'l 0 -25 l 35 25 l 0 -25').attr({'stroke':'black', 'stroke-width':'1'});
	
	 paper.circle((x-8), (y), 3).attr({'stroke':'black', 'stroke-width':'1'});
	 
	 paper.path('M'+(x-8)+' '+(y-8)+ 'l 35 0').attr({'stroke':'black', 'stroke-width':'1', 'arrow-end':'classic-wide-long'});
	
	
};
 

 
 function Label(x, y, text){
	
	paper.text(x, y, text).attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		}).toBack();
	 
	 
	 
 };
 
 function Label1(x, y, text){
		
		var lbl = paper.text(x, y, text).attr({
				stroke : 'black',
				'font-size' : 12,
				"font-family": "sans-serif" 
			}).toFront();
		 
		 return lbl;
		 
	 };
   
   function PC_CircleWithLine(x, y, r, l1, l2){
	
	
	paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1'});
	paper.path('M'+(x-25)+' '+(y)+ 'l 50 0 ').attr({'stroke':'black', 'stroke-width':'1'});	
	Label((x), (y-10), l1);
	Label((x), (y+10), l2);
	
	
	
};

 function PC_CircleWithLabel(x, y, r, l1){
	
	
	paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1'});	
	Label(x, y, l1);

	
	
};
  
  
  function PC_PTCircleWithLabel(x, y, r, l1){
	
	
	var c = paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1'}).toFront();
	Label(x, y, l1);
    return c;
	
	
}; 
  
  
  