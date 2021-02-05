

PIDController_SelectApp = function(){
	
	
	ExpTrackData = {};
		
		$("#mainDiv").html('');
		
		var selectApp = '';
		selectApp +='<div id = "selectAppDiv" class="container-fluid">'
		    +'<div class="row">'
		    +'<div class="col-xl-offset-3 col-xl-6 col-md-offset-3 col-md-6  col-sm-12">'
		    +'<label>Select Application:</label>'
		    +'<select class="form-control" name="App" id="SelectAppID" >'
			+'<option value="-1">Select</option>'
			+'<option value="1">Level Control System</option>'
//			+'<option value="2">Temperature Control System</option>'
//			+'<option value="3">Pressure Control System</option>'
//			+'<option value="4">Flow Control System</option>'
			+'</select>'
		    
				+'</div>' // col close
				+'</div>' // row close 
				+'</div>'; // container close
				
			
			$("#mainDiv").html(selectApp);
		
			
			$('select#SelectAppID').on(
					'change',
					function() {

						if(this.value == 1)
						{ Level_config(this.value);}
						
						if(this.value == 2)
						{Temp_config(this.value);}
						
						if(this.value == 3)
						{Pressure_config(this.value);}
						
						if(this.value == 4)
						{Flow_config(this.value);}
						
					});
			
}

 
		   
			
							
							
			