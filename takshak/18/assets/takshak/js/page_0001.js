function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function Alert(message, time=3000, color="rgb(186, 39, 39)") {
	// alert(time);
	// clearTimeout(my_timer);
	// alert(time);
	if(typeof my_timer!=='undefined') {
    	clearTimeout(my_timer);
	}
	$(".enclosingalertbox").hide();
	$(".alertbox .message").html(message);
	$(".enclosingalertbox").show();
	// alert(color);
	// alert($(".alertbox").css("border-color"));
	$(".alertbox").css("border-color", color);
	$(".alertbox").css("color", color);
	// $('.enclosingalertbox').delay(time).fadeOut(200); 

	my_timer = setTimeout(function () {
	    $('.enclosingalertbox').fadeOut(200);
	}, time);
}
// <div class="perEventPage">
// 	<h1>Title</h1>
	// <h3 class="department">Department</h3>
	// <p class="description">Description</p>

$(document).ready(function() {
	var my_timer;

    	// alert(my_timer);

	// document.domain = "localhost"


	$(".enclosingalertbox").hide();
	$(".commonPage").hide();


	var $participantCount=0;
	var $maxparticipant=1;
	var $minparticipant=1;
	var $groupArray=[];

	var $compulsory="NO";
	var $max=1;
	var $min=1;



	    $registerForm=$(".group-register-form");
		$registerForm.submit(function(event) {
			event.preventDefault();
			var $maxparticipant=$groupArray[2]
			var $minparticipant=$groupArray[3]
			var $compulsory=$groupArray[4]

			if($compulsory=="YES" && $maxparticipant!=($participantCount+1)) {
					Alert(("There should %s member for this event").replace("%s", $maxparticipant.toString()), 4000);
			}
			else
			if($compulsory=="NO" && $maxparticipant<($participantCount+1)) {
					Alert(("There should only %s member for this event").replace("%s", $maxparticipant.toString()), 4000);
			}
			else
			if($compulsory=="NO" && $minparticipant>($participantCount+1)) {
					Alert(("There atleast should %s member for this event").replace("%s", $minparticipant.toString()), 4000);
			}
			else {
				var $formData=$registerForm.serializeArray();
				var $formData=JSON.stringify($formData);
				var $thisURL=$registerForm.attr('data-url');
				var $id=$(".group-register-form").attr('data');
				console.log($id);
				var $formData={'id':$id, 'no':($participantCount+1),'data':$formData};
				var $thisURL=$registerForm.attr('data-url');

				console.log($formData);
				console.log($thisURL);



				$.ajax({
					method:'POST',
					url: $thisURL,
					data: $formData,
					success: handleSuccess,
					error: handleError,
				});
			}

			function handleSuccess(data) {

				if(data['status']==201){
					Alert(data['message'], 4000);
				}
				else
				if(data['status']==207) {
					var $error=data['error']
					console.log($error);
					var text=""
					$.each($error, function(index, value) {
						text=text+value+"<br />";
					});
					Alert(text, 8000);
				}
				else
				if(data['status']==400) {
					Alert(data['message'], 20000);
					var email=data['error'][0]
					var paymentid=data['error'][1]
					var eventcode=data['error'][2]+2078

					window.setTimeout(function (){window.location = "http://payment.takshak.in?eventcode=" + eventcode + "&email=" + email + '&paymentid=' + paymentid;
						}, 10000);
					}
				else
				if(data['status']==200)
				{
					Alert("Sucessfully Registered", 4000, color="green");
					$('.groupEvents').delay(1000).slideUp('slow', function() {
												$('.commonPage3').hide();
											});

					$registerForm.trigger('reset');
				}
			}
			function handleError(ThrowError) {
				alert("refresh Page");
			}



		});

function phonenumber(inputtxt)
{
  var phoneno = /^\d{10}$/;
  if(inputtxt.match(phoneno))
  {
      return true;
  }
  else
        {
        	return false;
        }
}
		var $Form = $('.my-ajax-form')
		$Form.submit(function(event) {
		  event.preventDefault();
		  $myFormid=$(this).attr('id');
		  if($myFormid=="registerForm") {
		  	$password1=$("#id_Password1").val();
		  	$password2=$("#id_Password2").val();
		  	$phone=$("#id_phone").val();
		  	$phonenumberVALID=phonenumber($phone);

		  	if($phonenumberVALID==false){
		  		Alert("Invalid phone number.")
		  		return;
		  	}

		  	if($password1.length<4 || $password2.length<4) {
		  		Alert("This Password field doesn't have 4 Characters", 4000);
		  		return;
		  	}
		  	else
		  	if($password1 != $password2) {
		  		Alert("Password Didn't match", 4000);
		  		return;
		  	}
		  }
		  $myForm=$("#"+$myFormid);
		  var $formData= $myForm.serialize();

		  console.log($formData);
		  var $thisURL = $myForm.attr('data-url')
		  var $division=$(this).attr('id');
		  

			$.ajax({
				method:'POST',
				url: $thisURL,
				data: $formData,
				beforeSend: handleBeofreSend,
				success: handleSuccess,
				error: handleError,
			});

			function handleBeofreSend(){
				Alert("Please wait until process is finish", 30000, color="rgb(57, 51, 132)");
			    $(".divBlock").show();
			}
			function handleSuccess(data) {
				// alert(request);
			    $(".divBlock").hide();
				// alert("handleSuccess");

				var message='';
				console.log(data);
				console.log($division);
				if(data['status']==206){
				}
				if(data['status']==203 || data['status']==206){
					$(".Logoutlink").show();
					$(".Loginlink").hide();
				$(".userTitle").show();
					$(".userTitle").html(data['error'][0]);
                    			$(".usernametitle .text").html(data['error'][0]);	
				}
				if(data['status']==200 || data['status']==203 || data['status']==206){
					message=data['message']
					Alert(data['message'], 4000, color="green");
					console.log(message);
					// $("#loginButton	").hide();
					$('.form-style-10').fadeOut('slow', function() {
						$(".commonPage").hide();



						// $(".fixedPage1 p.errorMessage").html('<strong><center>' + data['error']['status'] + '</center></strong>');
						console.log($division);
						$("#"+$division+" p.errorMessage").html('<strong><center>' + "" + '</center></strong>');
						$("#"+$division).trigger('reset');
					});
				}

				else{
						if(data['error'].length!=0){
   						message=data['error'][0]
   						// data['error']['status']="";
   						// data['error']['message']="";
	   					console.log(message);
						if($division=="loginForm") {
							Alert(message, 4000);
							$("#"+$division+" p.errorMessage").css("color", "red");
							$("#"+$division+" p.errorMessage").html('<strong><center>' + message + '</center></strong>');
						}
						else
							if($division=="registerForm"){
								Alert(message, 4000);
								$(".fixedPage1 p.errorMessage").html('<strong><center>' + message + '</center></strong>');
								// $(".fixedPage1 p#registerError:nth-of-type(1)").html(data['error']['email']);
								// $(".fixedPage1 p#registerError:nth-of-type(2)").html(data['error']['name']);
								// $(".fixedPage1 p#registerError:nth-of-type(3)").html(data['error']['college']);
								// $(".fixedPage1 p#registerError:nth-of-type(4)").html(data['error']['district']);
								// $(".fixedPage1 p#registerError:nth-of-type(5)").html(data['error']['phone']);
								// $(".fixedPage1 p#registerError:nth-of-type(6)").html(data['error']['Password']);
							}
	   				}
				}

			}
			function handleError(ThrowError) {
			    $(".divBlock").hide();
				alert("Refresh Page")
			}
		});


//++++++++++++++++++++++++++++++++++++++++++++ SINGLE EVENT REGISTRATIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


		$(".RegisterButton").click(function() {
			var $eventid;
			var $id=$(this).attr('data-url');
			//alert($id);
			data={'id':$id};
			console.log("Entered click123");
			$.ajax({
				method:'POST',
				url: "/2018/takshak/registerEvent/",
				data: data,
				success: handleSuccess,
				error: handleError,
			});
			function handleSuccess(data) {
				console.log("---------------");
				console.log(data);
				console.log(data['status'])


				if(data['status']==204)
					Alert(data['message'], 4000);

				else
				if(data['status']==205) {
					Alert("Enter group Details", 4000, color="rgb(57, 51, 132)");
					console.log(data);
					$groupArray=data['message'];
					$(".commonPage3").show();
					$('.groupEvents').show();

					$participantCount=0;
					$maxparticipant=data['message'][2];
					// $minparticipant=data['message'];

					$(".content").html('\
								<div class="teamName">\
									\
								</div>\
								<div class="participantsList">\
									<div class="subparticipantsList">\
										<header>Team Leader<span><p style="float:right; font-size:12px; color:red">Team Leader details cannot be edited. Add Participants</p></span></header>\
										<input class="participantName_1 input text" type="text" placeholder="Name" required name="form-0-name" />\
										<input class="participantEmail_1 input text" type="email" placeholder="Email ID" required name="form-0-email" />\
										<input class="participantCollege_1 input text" type="text" placeholder="College" required name="form-0-college" />\
									</div>\
									<p class="groupErrorMessage"></p>\
								</div>\
								');
					$(".groupEvents h2").html(data['message'][1]);
					$(".participantName_1").val(data['message'][5]);
					$(".participantEmail_1").val(data['message'][6]);
					$(".participantCollege_1").val(data['message'][7]);

					$(".participantName_1").prop("readonly", true);
					$(".participantEmail_1").prop("readonly", true);
					$(".participantCollege_1").prop("readonly", true);

					// $(".group-register-form").attr('data', $eventid.toString()); 

				}
				else
				if(data['status']==201)
					Alert(data['message'], 6000);
				else
				if(data['status']==400) {
					Alert(data['message'], 20000);
					var email=data['error'][0]
					var paymentid=data['error'][1]
					var eventcode=data['error'][2]+2078

					window.setTimeout(function (){window.location = "http://payment.takshak.in/?eventcode=" + eventcode + "&email=" + email + '&paymentid=' + paymentid;
						}, 10000);
					}
				else
				if(data['status']==200) {
					Alert(data['message'], 4000, color="green");
				}
				else{
					alert("error.....")
				}
				
			}
			function handleError(ThrowError) {
					// console.log(ThrowError		   						Alert("Refresh Page")
			}
		});


//++++++++++++++++++++++++++++++++++++++++++++ END OF SINGLE EVENT REGISTRATIONS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


		$(".close1").click(function(){
			$(".commonPage").hide();
	});


			    $(".fixedPage3").click(function(event){
			        event.stopPropagation();
			        $division=event.target.className;
			        if($division=="fixedPage3"){

						$('.groupEvents').slideUp('fast', function() {
							$('.commonPage3').hide();
						});
			        }
			    });


			    $(".addParticipant").click(function() {
			    	if($maxparticipant!=($participantCount+1)) {
				    	$participantCount++;
				    	$code='\
								<div class="participantsList animated bounceIn delay-1s">\
									<div class="subparticipantsList">\
										<header>Participant %s</header>\
										<input type="text" class="input text" placeholder="Name" required name="form-%s-name" />\
										<input type="email" class="input text" placeholder="Email ID" required name="form-%s-email" />\
										<input type="text" class="input text" placeholder="College" required name="form-%s-college" />\
									</div>\
									<p class="groupErrorMessage"></p>\
								</div>\
								';
						$code=($code).replace("%s", ($participantCount+1).toString())
						$code=($code).replace("%s", ($participantCount).toString())
						$code=($code).replace("%s", ($participantCount).toString())
						$code=($code).replace("%s", ($participantCount).toString())
						$(".content").append($code);
						console.log($code);
						// console.log($(".groupEvents"))
						// var objDiv=$(".groupEvents");
						// objDiv.scrollTop = objDiv.scrollHeight;
						// alert(objDiv.scrollTop);
						$('.groupEvents').scrollTop($('.groupEvents')[0].scrollHeight);
					}
					else{
						Alert("Max Member for this event is "+$maxparticipant.toString(), 4000);
					}

				});

//+++++++++++++++++++++++++++++++++++++++++++++++++ GROUP EVENT REGISTRATION +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


			// });

//+++++++++++++++++++++++++++++++++++++++++++++++++ END OF GROUP EVENT REGISTRATION +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


		$(".Loginlink").click(function(){
			$(".fixedPage2").hide();
			$(".fixedPage1").hide();
			$(".commonPage").hide();
			$(".commonPage").show();
			$(".fixedPage").show();
			$(".form-style-10").show();

	});

		$(".Signinlink").click(function(){
			$(".fixedPage").hide();
			$(".fixedPage2").hide();
				$(".commonPage").hide();
				$(".commonPage").show();
			$(".fixedPage1").show();
			$(".form-style-10").show();

	});


	$(".commonPage").click(function() {
	    if($(this) != $(".form-style-10")) {
			$(".fixedPage2").hide();
			$(".fixedPage1").hide();
			$(".fixedPage").hide();
				$(".commonPage").hide();
	    }
	});



    $(".commonPage").click(function(){
			$(".fixedPage2").hide();
			$(".fixedPage").hide();
			$(".fixedPage1").hide();
				$(".commonPage").hide();
    });

	// $.ajaxSetup({beforeSend: function(xhr, settings){
	//     xhr.setRequestHeader('X-CSRFToken', 
	//                          '{{ csrf_token }}');
	// }});


    $(".Logoutlink").click(function(){
    	// var data = {'csrfmiddlewaretoken': '{{ csrf_token }}'};
    	$.ajax({
				method:'POST',
				url: "/2018/takshak/logout/",
				data: {},
            // contentType: false,
				success: handleSuccess,
				error: handleError,
			});
			function handleSuccess(data) {
				console.log(data);
				$(".Logoutlink").hide();
				$(".Loginlink").show();
				$(".userTitle").hide();
                		$(".usernametitle .text").html("not logged in");
				Alert("successfully LoggedOut", 4000, color="green");
			}
			function handleError(ThrowError) {
				// console.log(ThrowError);
				Alert("Refresh Page", 4000);
			}
    });

    $(".form-style-10").click(function(event){
        event.stopPropagation();	
    });

});

