/*
Thunder Bolt Script Inits
Copyright 2016, Ben Gathard of Brevity
Author URI: http://seekbrevity.com/
02/16/2016

Inits for all Green Sock Animations
@package Thunder_Bolt
 
TABLE OF CONTENTS: 
1.0 - Home Feature
*/
 
 
//1.0 - Home Feature
$(window).load(function() {
  function homeFeatureAnimation() {  
    var tilt = $('.home .tilt');
    		word_1 = $('#word-1');
    		word_2 = $('#word-2');
    		word_3 = $('#word-3');
    		word_4 = $('#word-4');
				word_5 = $('#word-5');
				word_6 = $('#word-6');
				word_7 = $('#word-7');
				word_8 = $('#word-8');
    		
    
    TweenLite.to(tilt,    7, {css:{opacity:1}});
    TweenLite.to(word_1, .8, {css:{scaleX:1, scaleY:1, opacity:1}, ease:Power1.easeOut, delay: .6});
    TweenLite.to(word_2, .8, {css:{scaleX:1, scaleY:1, opacity:1}, ease:Power1.easeOut, delay: .5});
    TweenLite.to(word_3, .8, {css:{scaleX:1, scaleY:1, opacity:1}, ease:Power1.easeOut, delay: .7});
    TweenLite.to(word_4, .8, {css:{scaleX:1, scaleY:1, opacity:1}, ease:Power1.easeOut, delay: 	0});
    TweenLite.to(word_5, .8, {css:{scaleX:1, scaleY:1, opacity:1}, ease:Power1.easeOut, delay: .2});
		TweenLite.to(word_6, .8, {css:{scaleX:1, scaleY:1, opacity:1}, ease:Power1.easeOut, delay: .1});
		TweenLite.to(word_7, .8, {css:{scaleX:1, scaleY:1, opacity:1}, ease:Power1.easeOut, delay: .3});
		TweenLite.to(word_8, .8, {css:{scaleX:1, scaleY:1, opacity:1}, ease:Power1.easeOut, delay: .4});
		
	}
	setTimeout(homeFeatureAnimation, 500)
});


