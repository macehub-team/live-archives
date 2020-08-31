/*
Thunder Bolt Script Inits
Copyright 2016, Ben Gathard of Brevity
Author URI: http://seekbrevity.com/
02/16/2016

Initialize skrollr.js javascript functions
@package Thunder_Bolt
 
TABLE OF CONTENTS: 
1.0 - Initialize Skrollr.js 
*/


// 1.0 - Initialize Skrollr.js 

$(document).ready(function () {
  if ($('html').hasClass("no-touch")) {
	  var s = skrollr.init({forceHeight: false});
	}
});