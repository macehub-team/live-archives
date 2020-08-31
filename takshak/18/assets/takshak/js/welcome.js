// $(document).ready(function(){

	function g(z_ind){
		 $(".main_welcome12").hide();
		 $('.boxq').removeAttr('style');
		 $('.box1q').removeAttr('style');
		 $('.box2q').removeAttr('style');
		 $('.message_welcome12').removeAttr('style');
		 $('.message_welcome_extra').removeAttr('style');
		 $('.threeq').removeAttr('style');
		 $('.oneq').removeAttr('style');
		 $('.twoq').removeAttr('style');
		 $('.fourq').removeAttr('style');
		 $('.b1q').removeAttr('style');
		 $('.b2q').removeAttr('style');
		 $('.b3q').removeAttr('style');
		 $('.b4q').removeAttr('style');
		 $('.b5q').removeAttr('style');
		 $('.b6q').removeAttr('style');
        $(".xyz_expand").hide();
        $(".sub_xyz").hide();
        $(".xyz_expand").removeAttr('style');
		 // $('.b').removeAttr('style');
	}

	function b1(fun, z_ind) {
		$(".box1q").show();
		$(".box1q").css("z-index", z_ind.toString())
		$(".box1q").animate({width: '600%'}, 1500).promise()
										            .done(function(){
										            	fun(z_ind);
										            });
}
// a();
	function b2(fun, z_ind) {
	$(".main_welcome12").show();
	$(".box2q").show();

	$(".box2q").css("z-index", z_ind.toString())
	$(".box2q").animate({width: '600%'}, 1500).promise()
            .done(function(){
            	fun(z_ind);
            });
}


	function c(z_ind) {
	$(".b1q").css("z-index", z_ind.toString())
	$(".b1q").show();
	$(".box2q").css("width", "0%");
	$(".b1q").animate({opacity:'1'}, 200, function() {
		$(".b1q .message_welcome12").animate({left:'30px', opacity:'1'}, {
																	  duration: 500,
																	  complete: setTimeout(function() {
																		$(".b1q .message_welcome12").animate({left:'0px', opacity:'.5'}, 1000)
																	  }, 500)
		}).promise()
																													            .done(function(){
																													            	b1(d, 203);
																													            });
	})
}

	function d(z_ind) {
	$(".b2q").css("z-index", z_ind.toString())

	$(".b2q").show();
	$(".box1q").css("width", "0%");

	$(".b2q").animate({opacity:'1'}, 0, function() {
		$(".b2q .message_welcome12").animate({left:'30px', opacity:'1'},{
																	  duration: 1000,
																	  complete: setTimeout(function() {
																			$(".b2q .message_welcome12").animate({left:'0px', opacity:'.5'}, 1000)
																	  }, 500)
		}).promise()
																													            .done(function(){
																													            	b2(e, 204);
																													            });
	});
}

	function e(z_ind) {
		$(".b3q").show()
	$(".box2q").css("width", "0%");

	$(".b3q").css("z-index", z_ind.toString())
	$(".b3q").animate({display:'block'}, 1000, function() {
		var $pos="50%"
		$(".b3q .message_welcome12").animate({top:$pos}, {
			duration: 500,
			complete: setTimeout(function() {
				$(".b3q .oneq").animate({opacity: '1'}, {
					duration: 1000,
					complete: setTimeout(function() {
						$(".b3q .fourq").animate({opacity: '1'}, {
							duration: 500,
							complete: setTimeout(function() {
							$(".b3q .twoq").animate({opacity: '1'}, {
								duration: 500,
								complete: setTimeout(function() {
									// $(".b3q .oneq").animate({opacity: '1'}, {
									// 	duration: 1000,
									// 	complete: setTimeout(function() {
											$(".b3q .threeq").animate({left:'-100px', opacity:'.5'}, 1000)
											$(".b3q .oneq").animate({left:'-50px', opacity:'.5'}, 1000).delay(100);
										// }, 500)
									// })
								}, 500)		
							}).promise()
								            .done(function(){
								            	b1(f, 205);
								            	// alert("lkksjf");
								            });
						}, 500)
					});
					}, 500)
				})
			},500)
		});
	});

	}

	function f(z_ind) {
	$(".b4q").show()
	$(".box1q").css("width", "0%");
	$(".b4q").css("z-index", z_ind.toString())
	$(".b4q").animate({display:'block'}, 1000, function() {
		$(".b4q .oneq").animate({opacity: '1'}, {
			duration: 500,
			complete: setTimeout(function() {
				var $pos="50%"
				$(".b4q .message_welcome12").animate({top:$pos}, {
					duration: 500,
					complete: setTimeout(function() {
						$(".b4q .twoq").animate({opacity: '1'}, {
							duration: 1000,
							complete: setTimeout(function() {
								$(".b4q .oneq").animate({opacity: '1'}, {
									duration: 500,
									complete: setTimeout(function() {
										$(".b4q .threeq").animate({left:'-100px', opacity:'.5'}, 1000)
										$(".b4q .oneq").animate({left:'-50px', opacity:'.5'}, 1000).delay(100);
									}, 1000)
								}).promise()
																								            .done(function(){
																								            	b2(h, 206);
																								            });
							}, 500)
						});
					}, 500)
				});
			},500)
		});
	});
}

	function h(z_ind) {
		$(".b5q").show()
	$(".box2q").css("width", "0%");

	$(".b5q").css("z-index", z_ind.toString())
	$(".b5q").animate({display:'block'}, 2000, function() {
		}).promise()
            .done(function(){
            	b1(i, 207);
            });
}	
function i(z_ind) {
		$(".b6q").show()
	$(".box1qq").css("width", "0%");

	$(".b6q").css("z-index", z_ind.toString())
	$(".b6q").animate({display:'block'}, 1000, function() {
		}).promise()
            .done(function(){
            	b1(g, 208);
            });;		
}
	
function startf(){

 b2(c, 201);//#####################################################################################################################


		// $(".b6q").show()
}

// });	