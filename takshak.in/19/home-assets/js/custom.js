$(document).ready(function() {
	$(".takshak-title").html($('.takshak-title').text().replace(/(\w)/gi,"<span>$1</span>"));
	$(".takshak-title").css('opacity',1);	
});
$(window).on('load',function() {
	$(".takshak-title").addClass('animate');
});