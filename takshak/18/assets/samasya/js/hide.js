$(document).ready(function(){
	$('.questionForm').hide();
	$('#q1').show()
    $('#q1 #submit').click(function(){
    	$('.questionForm').hide();
    	 var x = document.getElementById("#q1");
    		$('#q2').fadeIn(1000);
  
    	return false;
  }); 
   $('#q2 #submit').click(function(){
    	$('.questionForm').hide();
    	 var x = document.getElementById("#q1");
    		$('#q3').fadeIn(1000);
  
    	return false;
  });  
    $('#q3 #submit').click(function(){
    	$('.questionForm').hide();
    	 var x = document.getElementById("#q1");
    		$('#q4').fadeIn(1000);
  
    	return false;
  }); 
     $('#q4 #submit').click(function(){
    	$('.questionForm').hide();
    	 var x = document.getElementById("#q1");
    		$('#q5').fadeIn(1000);
  
    	return false;
  }); 
      $('#q5 #submit').click(function(){
    	$('.questionForm').hide();
    	 var x = document.getElementById("#q1");
    		$('#q6').fadeIn(1000);
  
    	return false;
  }); 
       $('#q6 #submit').click(function(){
    	$('.questionForm').hide();
    	 var x = document.getElementById("#q1");
    		$('#result').fadeIn(1000);
  
    	return false;
  }); 
        

})
