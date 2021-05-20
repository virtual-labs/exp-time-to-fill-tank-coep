Level_config = function(appId) {
	
	$("#mainDiv").html('');
   
	

	
	ref = 0;
	timer = null;
	
	var selectApp = '';
	selectApp += '<div id = "LCSConfigDiv" class="container-fluid">'
			+ '<div class="row">'

			+ '<div class="col-sm-12 col-md-6 col-xl-6">'
			+ '<div id = "canvas"></div>'
			+ '</div>'
			
			+'<div class="col-sm-12 col-md-6 col-xl-6" id="LCS_DesignPlant">'
			+'<div id="LCS_DesignPlantConfigDiv">'
			+ '<h1>Level Control System Tank Configuration</h1>'
			
			
			
			+'<div class="form-group">'
			+ '<label>Select Operation:</label>'
			+ '<select class="form-control"  id="LCS_operation" >'
			+ '<option value="-1">Select</option>'
			+ '<option value="1">Estimate the time required to fill the tank</option>'
//			+ '<option value="2">Estimate the time required to empty the tank</option>'
//			+ '<option value="3" disabled>Estimate the time required to maintain a certain level (SP) in the tank</option>'			
			+ '</select>'
			
			
			+ '</div>' 
			+'<div class="row"><div id="tankConfiguration" class="col-sm-12 col-md-7 col-xl-7">'	
			+'<form id="LCS_LevelForm" novalidate hidden>'
			
			
			+'<div class="form-group">'
			+'<label>InFlow Q<sub>in</sub> in between (1000 - 20000 lph) :</label>'
			+' <input class="form-control" min="1000" max="20000" type="number" id="Qin" required>'
			+' <div class="invalid-feedback">Please enter Qin InFlow in between (1000 - 20000 lph).</div>'
			+'</div>'
			
			+'<div class="row"><div class="form-group col-sm-12 col-md-6 col-xl-6">'
			+'<label>Tank radius in (0.1 m - 20 m ):</label>'
			+'<input class="form-control" type="number" min="0.1" max="20" step="0.1" id="tank_radius" required>'
			+' <div class="invalid-feedback">Please enter Tank radius in (0.1 m - 20 m ).</div>'
			
			+'</div>'
			
			
			+'<div class="form-group col-sm-12 col-md-6 col-xl-6">'
			+'<label>Tank height in (0.1 m - 20 m ):</label>'
			+'<input class="form-control" type="number" min="0.1" max="20" step="0.1" id="tank_height"  required>'
			+' <div class="invalid-feedback">Please enter Tank height in (0.1 m - 20 m ).</div>'
			
			+'</div></div>'
			
			
			+ '<button id="LCSConfigSubmit">Submit</button> '
			//+'<div id="NotifyAlert" ></div>'
			+'</form>'
			
			
			
			
			+'<form id="LCSemptyTannkDiv" novalidate hidden>'

			+'<div class="form-group">'
			+'<label>Tank radius in (0.1 m - 20 m ):</label>'
			+'<input type="number" class="form-control" min="0.1" max="20" step="0.1" id="emptytank_radius"  required>'
			+' <div class="invalid-feedback">Please enter Tank radius in (0.1 m - 20 m ).</div>'
			+' <div id="tankRadisCustEmp" class="custErrer"></div>'
			+'</div>'
			
			+'<div class="form-group">'
			+'<label>Tank height in (0.1 m - 20 m ):</label>'
			+'<input type="number" class="form-control" min="0.1" max="20" step="0.1" id="emptytank_height"  required>'
			+' <div class="invalid-feedback">Please enter Tank height in (0.1 m - 20 m ).</div>'
			+'</div>'
			
			+'<div class="form-group">'
			+'<label>Pipe diameter in (6 mm - 300 mm ):</label>'
			+'<input type="number" class="form-control" min="6" max="300" step="1" id="emptypipe_diameter"  required>'
			+' <div class="invalid-feedback">Please enter Pipe diameter in (6 mm - 300 mm ).</div>'
			+' <div id="CustDimErrorEmp" class="custErrer"></div>'
			+'</div>'
			+'<button id="LCSemptyTannkDivSubmit">Submit</button>'
//			+'<div id="NotifyAlert" ></div>'
			+'</form>'
			
			+'<form id="maintainSpLvlDiv" novalidate hidden>'
			
			+'<div class="form-group">'
			+'<label>InFlow Q<sub>in</sub> in between (1000 - 20000 lph) :</label>'
			+' <input class="form-control"  type="number"  min="1000" max="20000" id="SpLvlQin" required>'
			+' <div class="invalid-feedback">Please enter InFlow in between (1000 - 20000 lph).</div>'
			+'</div>'
			
			+'<div class="form-group">'
			+'<label>SP in between (1 % - 100 %):</label>'
			+' <input class="form-control"  type="number" min="1" max="100" step="1" id="spVal"  required>'
			+' <div class="invalid-feedback">Please enter SP in between (1 % - 100 %).</div>'
			+'</div>'

			+'<div class="form-group">'
			+'<label>Tank radius in (0.1 m - 20 m ):</label>'
			+'<input class="form-control"  type="number" min="0.1" max="20" step="0.1" id="SpLvltank_radius" required>'
			+' <div class="invalid-feedback">Please enter Tank radius in (0.1 m - 20 m ).</div>'
			+' <div id="tankRadisCust" class="custErrer"></div>'
			+'</div>'

			+'<div class="form-group">'
			+'<label>Tank height in (0.1 m - 20 m ):</label>'
			+'<input class="form-control"  type="number" min="0.1" max="20" step="0.1" id="SpLvltank_height" required>'
			+' <div class="invalid-feedback">Please enter Tank height in (0.1 m - 20 m ).</div>'
			+'</div>'
			
			+'<div class="form-group">'
			+'<label>Pipe diameter in (6 mm - 300 mm ):</label>'
			+'<input class="form-control"  type="number" min="6" max="300" step="1" id="SpLvlpipe_diameter"  required>'
			+' <div class="invalid-feedback">Please enter Pipe diameter in (6 mm - 300 mm ).</div>'
			+' <div id="CustDimError" class="custErrer"></div>'
			+'</div>'
			
			+ '<br/><button id="LCSmaintainSpLvlDivSubmit">Submit</button>'
			+'</form>'
			+'</div>'
			+'<div id = "DisplayTimeToFullTank" class="col-sm-12 col-md-5 col-xl-5"></div></div>'
			+'<div id="chartContainer" style="height: 500px; width: 100%;"></div>'
			
			+ '</div>' // row close
			+ '</div>'; // container close
	
	$("#mainDiv").html(selectApp);
	//paper = new Raphael(document.getElementById('canvas'), '100%', 700);

		var w = 900;
    var h = 500;

var width = $(window).width();

  if ($(window).width() < 500) {
	    width = $(this).width();
	    paper = new Raphael(document.getElementById('canvas'), '100%', 500);
	paper.setViewBox(0,0,w,h,true);
	paper.setSize('100%', 500);
  }else
  {
      paper = new Raphael(document.getElementById('canvas'), '100%', 600);
	paper.setViewBox(0,0,w,h,true);
	paper.setSize('100%', 700);
  }
	
	
	$("#LCS_operation")
	.on(
			"change",
			function() {
				
//				Qoutlbl.hide();
				
				if ($("#LCS_operation option:selected").val() == -1) {
					$("#LCS_LevelForm").prop("hidden" , true);
					$("#LCSemptyTannkDiv").prop("hidden" , true);
					$("#maintainSpLvlDiv").prop("hidden" , true);
					
					clearInterval(ref);
					
//					checkTimerInterval();
					
					pv = 0;
					waterlvlper.hide();
					waterlvl.hide();
					Qoutlbl.hide();
					$("#LCS_LevelForm")[0].reset();
					$("#LCSemptyTannkDiv")[0].reset();
					$("#maintainSpLvlDiv")[0].reset();
					$("#chartContainer").html('');
					$("#DisplayTimeToFullTank").html('');
					
				}
				
				if ($("#LCS_operation option:selected").val() == 1) {
					
					$("#LCS_LevelForm").prop("hidden" , false);
					$("#LCSemptyTannkDiv").prop("hidden" , true);
					$("#maintainSpLvlDiv").prop("hidden" , true);
					clearInterval(ref);
//					checkTimerInterval();
					pv = 0;
					waterlvlper.hide();
					waterlvl.hide();
					Qoutlbl.hide();
					QinLbl.hide();
					$("#LCS_LevelForm")[0].reset();
					$("#chartContainer").html('');
					$("#DisplayTimeToFullTank").html('');
					LCS_filltankFormEnabled();
					$("#LCSConfigSubmit").show();
					
				}
				
				if ($("#LCS_operation option:selected").val() == 2) {
					$("#LCS_LevelForm").prop("hidden" , true);
					$("#LCSemptyTannkDiv").prop("hidden" , false);
					$("#maintainSpLvlDiv").prop("hidden" , true);
					clearInterval(ref);
//					checkTimerInterval();
					pv = 0;
					waterlvlper.hide();
					waterlvl.hide();
					Qoutlbl.hide();
					QinLbl.hide();
					$("#LCSemptyTannkDiv")[0].reset();
					$("#chartContainer").html('');
					$("#DisplayTimeToFullTank").html('');
					LCS_EmptytankFormEnabled();
					$("#LCSemptyTannkDivSubmit").show();
				}
				
				if ($("#LCS_operation option:selected").val() == 3) {
					
					$("#LCS_LevelForm").prop("hidden" , true);
					$("#LCSemptyTannkDiv").prop("hidden" , true);
					$("#maintainSpLvlDiv").prop("hidden" , false);
					clearInterval(ref);
//					checkTimerInterval();
					pv = 0;
					waterlvl.hide();
//					waterlvlper.hide();
					
//					Qoutlbl.show();
					Qoutlbl = Label1((x + 470), (y + 300), "Q_out = 0 lph");
					QinLbl.hide();
//					Qoutlbl = Label1((x + 470), (y + 300), "Q_out = 0 MCube/Sec");
					$("#maintainSpLvlDiv")[0].reset();
					
					$("#chartContainer").html('');
					$("#DisplayTimeToFullTank").html('');
				}
			
				
				
			});
	
	
	
	
	



	
	 
	

	
	
	

		$("#LCSConfigSubmit").on(
			"click",
			function(e) {

				var form = document.getElementById('LCS_LevelForm');
				form.addEventListener('submit', function(e) {
					if (form.checkValidity() === false) {
						e.preventDefault();
						e.stopPropagation();
					}
					form.classList.add('was-validated');
					e.preventDefault();
				}, false);

				if (form.checkValidity() == true) {

					e.preventDefault();

					LCS_Qin = $("#Qin").val();
					LCS_tank_radius = $("#tank_radius").val();
					LCS_tank_height = $("#tank_height").val();

					////console.log("LCS_Qin" + LCS_Qin + ",LCS_tank_radius"
					//		+ LCS_tank_radius + ",LCS_tank_height"
					//		+ LCS_tank_height);

					clearInterval(ref);
//					checkTimerInterval();
					pv = 0;

					waterlvlLabel = 0;
					waterlvlper.hide();
					waterlvl.hide();
					
					$("#chartContainer").html('');
					
					if(LCS_filltankFormDisabled() == true)
						{
					      $("#LCSConfigSubmit").hide();
						}
//					Qin, tank_radius, tank_height
					
					ToFillTank();

				}

			});
	
	
		LCS_filltankFormDisabled = function  ()
		{
			var form = document.getElementById('LCS_LevelForm');
			
			 for (var i = 0; i < form.elements.length; i++) {
				 
				    form.elements[i].disabled = true;
				   
				  
				    }
			return true;
		
		}
		LCS_filltankFormEnabled = function  ()
		{
			var form = document.getElementById('LCS_LevelForm');

			 for (var i = 0; i < form.elements.length; i++) {
				 
				    form.elements[i].disabled = false;
				   
				    }
			 
			return true;
			}
		
	
	
		
		
	
	

		$("#LCSemptyTannkDivSubmit").on("click", function(e) {

		var form = document.getElementById('LCSemptyTannkDiv');
		form.addEventListener('submit', function(e) {
			if (form.checkValidity() === false) {
				e.preventDefault();
				e.stopPropagation();
			}
			form.classList.add('was-validated');
			e.preventDefault();
		}, false);

		LCS_tank_radius = $("#emptytank_radius").val();
		LCS_tank_height = $("#emptytank_height").val();
		LCS_pipe_diameter = $("#emptypipe_diameter").val();

		//console.log("LCS_tank_radius" + LCS_tank_radius);
		//console.log("LCS_tank_height" + LCS_tank_height);
		//console.log("LCS_pipe_diameter" + LCS_pipe_diameter);
		// LCS_tank_diameter In Milimeter
		LCS_Emp_tank_diameterInMM = (LCS_tank_radius * 2) * 1000;
		//console.log("LCS_tank_diameterInMM " + LCS_Emp_tank_diameterInMM);

		if (form.checkValidity() == true && ckeckEmptyDimeterSize() == true) {

			e.preventDefault();

			clearInterval(ref);

			pv = (LCS_tank_height * 1000);

			waterlvlLabel = (LCS_tank_height * 1000);
			waterlvlper.hide();
			waterlvlper = Label1((x + 100), (y + 100), waterlvlLabel + " mm");
			
			waterlvl.hide();
			waterlvlHT = waterlvlHT_LCS(100);
			waterlvl = drawWaterLvl_LCS(waterlvlHT);

			Q_outLPH = 0;
			Qoutlbl.hide();
			Qoutlbl = Label1((x + 470), (y + 300), Q_outLPH.toFixed(5)+" lph");
			
			$("#chartContainer").html('');
			// pv = LCS_CylinderHeight;
			// waterlvlLabel = LCS_CylinderHeight;
			if(LCS_EmptytankFormDisabled() == true)
			{
		      $("#LCSemptyTannkDivSubmit").hide();
			}
			ToEmptyTank();

		}

	});
	
		LCS_EmptytankFormDisabled = function  ()
		{
			var form = document.getElementById('LCSemptyTannkDiv');
			
			 for (var i = 0; i < form.elements.length; i++) {
				 
				    form.elements[i].disabled = true;
				   
				  
				    }
			return true;
		
		}
		LCS_EmptytankFormEnabled = function  ()
		{
			var form = document.getElementById('LCSemptyTannkDiv');

			 for (var i = 0; i < form.elements.length; i++) {
				 
				    form.elements[i].disabled = false;
				   
				    }
			 
			return true;
			}

		$("#LCSmaintainSpLvlDivSubmit").on("click", function(e) {

		var form = document.getElementById('maintainSpLvlDiv');
		form.addEventListener('submit', function(e) {
			if (form.checkValidity() === false) {
				e.preventDefault();
				e.stopPropagation();
			}
			form.classList.add('was-validated');
			e.preventDefault();
		}, false);

		LCS_Qin = $("#SpLvlQin").val();
		spVal = $("#spVal").val();
		LCS_tank_radius = $("#SpLvltank_radius").val();
		LCS_tank_height = $("#SpLvltank_height").val();
		LCS_pipe_diameter = $("#SpLvlpipe_diameter").val();

		// LCS_tank_diameter In Milimeter
		LCS_tank_diameterInMM = (LCS_tank_radius * 2) * 1000;
		//console.log("LCS_tank_diameterInMM " + LCS_tank_diameterInMM);

		//console.log("LCS_Qin" + LCS_Qin);
		//console.log("spVal" + spVal);
		//console.log("LCS_tank_radius" + LCS_tank_radius);
		//console.log("LCS_tank_height" + LCS_tank_height);
		//console.log("LCS_pipe_diameter" + LCS_pipe_diameter);
		if (form.checkValidity() == true && ckeckDimeterSize() == true) {

			e.preventDefault();

			// $("#maintainSpLvlDiv").reset();

			clearInterval(ref);
			pv = 0;

			waterlvlLabel = 0;
			waterlvlper.hide();
			Q_out = 0;
			Qoutlbl.hide();
			$("#chartContainer").html('');
			ToMaintainSp();

		}

	});
	

	
	function ckeckEmptyDimeterSize()
	{
	      if(LCS_Emp_tank_diameterInMM <= LCS_pipe_diameter)
	    	  {
	    	  $("#tankRadisCustEmp").html("Tank diameter should not less than pipe diameter");
	    	  $("#CustDimErrorEmp").html("Pipe diameter should not greater than tank diameter");
	    	  $("#emptytank_radius").css("border","1px solid red");
	    	  $("#emptypipe_diameter").css("border","1px solid red");
	    	    
	    	  return false
	    	  }
	      else
	    	  {
	    	  $("#tankRadisCustEmp").html(" ");
	    	  $("#CustDimErrorEmp").html(" ");
	    	
	    	  $("#emptytank_radius").css("border","1px solid #ced4da");
	    	  $("#emptytank_height").css("border","1px solid #ced4da");
	    	  $("#emptypipe_diameter").css("border","1px solid #ced4da");
	    	  return true
	    	  }
	}
	
	
	
	
	
	
	
	
	
	function ckeckDimeterSize()
	{
	      if(LCS_tank_diameterInMM <= LCS_pipe_diameter)
	    	  {
	    	  $("#tankRadisCust").append("Tank diameter should not less than pipe diameter");
	    	  $("#CustDimError").append("Pipe diameter should not greater than tank diameter");
	    	  $("#SpLvltank_radius").css("border","1px solid red");
	    	  $("#SpLvlpipe_diameter").css("border","1px solid red");
	    	    
	    	  return false
	    	  }
	      else
	    	  {
	    	  $("#tankRadisCust").html(" ");
	    	  $("#CustDimError").html(" ");
	    	      
	    	  $("#SpLvltank_height").css("border","1px solid #ced4da");
	    	  $("#SpLvlQin").css("border","1px solid #ced4da");
	    	  $("#spVal").css("border","1px solid #ced4da");
	    	  $("#SpLvltank_radius").css("border","1px solid #ced4da");
	    	  $("#SpLvlpipe_diameter").css("border","1px solid #ced4da");
	    	  return true
	    	  }
	}
	
	

			
	LevelControl();
	Qoutlbl.hide();
	
	
	
	
	
	

}
