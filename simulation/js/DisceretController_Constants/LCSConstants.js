pie = 3.14;
C_d = 0.98 ;
g = 9.81 ;

timeFactor = 500;

LCS_MIN_TF_maximum = 20;

LCS_MIN_TF_minumum = 5;

function checkTimerInterval(){
	
	if(timer != null)
	{
		timer.stop();
		
	}
	
}