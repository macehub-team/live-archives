/*
Thunder Bolt Script Inits
Copyright 2016, Ben Gathard of Brevity
Author URI: http://seekbrevity.com/
02/16/2016

Initialize all universal javascript functions
@package Thunder_Bolt
 
TABLE OF CONTENTS: 
1.0 - Modal Nav
2.0 - Sticky Nav 
3.0 - Magnific Popup 
4.0 - Gallery Layout
5.0 - Viewport Height Div
6.0 - Email Updates
7.0 Select Trigger 
*/

$(window).load(function() {
	$('body#body').addClass('reveal');
});
 
 
//1.0 - Modal Nav 
$(document).ready(function() {
	$('.nav-trigger').on("click",function(e) {
		$('body#body').addClass('modal-nav-open');
	});

	$("#nav-close").on("click",function(e) {
     $('body#body').removeClass('modal-nav-open');
  });
  
  
  // Responsive View Port Resets
	var width = $(window).width();
	$(window).resize(function(){
	  if($(this).width() != width){
      width = $(this).width();
      $('body#body').removeClass('modal-nav-open');
	  }
	});
	
	$("#menu-main-navigation > .menu-item-has-children > a").on("click",function(e) {
		e.preventDefault();
    $(this).parent('li.menu-item-has-children').toggleClass('active');
  });
	
});

//2.0 - Sticky Nav  
$(document).ready(function() {
	var $document = $(document),
	    className = 'sticky-header';
	    $headerHeight = $('#masthead').outerHeight();
	    width = $(window).width();
	
	$(window).resize(function(){
	  if($(this).width() != width){
	    $headerHeight = $('#masthead').outerHeight();
	  }
	});

	$document.scroll(function() {
  if ($document.scrollTop() >= $headerHeight * 2) {
    // user scrolled 50 pixels or more;
    // do stuff
    $('#page').addClass(className);
  } else {
    $('#page').removeClass(className);
  }
});
});



//4.0 - Gallery Layout
$( document ).ready(function() { 
	$('.gallery .grid .grid-block:nth-child(9n+1)').addClass("med left");
	$('.gallery .grid .grid-block:nth-child(9n+2)').addClass("large right");
	$('.gallery .grid .grid-block:nth-child(9n+3)').addClass("med left");
	$('.gallery .grid .grid-block:nth-child(9n+4)').addClass("tall left both");
  $('.gallery .grid .grid-block:nth-child(9n+5)').addClass("tall wide");
	$('.gallery .grid .grid-block:nth-child(9n+6)').addClass("tall");
	$('.gallery .grid .grid-block:nth-child(9n+7)').addClass("wide left");
	$('.gallery .grid .grid-block:nth-child(9n+8)').addClass("single left");
	$('.gallery .grid .grid-block:nth-child(9n+9)').addClass("single left");
 });
 
 
 //5.0 - Viewport Height Div
 //Make all divs with class ".viewport-height" full screen
 function resizeDiv() {
 vpw = $(window).width();
 vph = $(window).height();
 	$(".home .viewport-height").css({"height": vph + "px"});
 	$(".viewport-height").css({"min-height": vph + "px"});
 }
 
 //Run scripts on Load
 $(document).ready(function(){
 	resizeDiv();
 });
 //Run scripts on Resize
 var width = $(window).width();
 $(window).resize(function(){
 	resizeDiv();
 });
 

//6.0 - Email Updates
$(document).ready(function(){
	$(".email-signup a.email-signup-trigger").on("click",function() {
	  $(this).parent('.email-signup').toggleClass('active');
	});
});


equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(window).load(function() {
  equalheight('.grid-block');
});


$(window).resize(function(){
  equalheight('.grid-block');
});

//7.0 Select Trigger 
$( document ).ready(function() { 
	$( ".event_sort span" ).click(function() {
		$( ".event_sort > li" ).toggleClass( "active" );
	});
});