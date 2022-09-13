
$("[data-trigger]").on("click", function () {
  var trigger_id = $(this).attr("data-trigger");
  $(trigger_id).toggleClass("show");
  $("body").toggleClass("offcanvas-active");
});

// close button
$(".btn-close").click(function (e) {
  $(".navbar-collapse").removeClass("show");
  $("body").removeClass("offcanvas-active");
});

(function ($) {
  "use strict";
  $(window).on("load", function () {
    if ($(".preloader").length > 0) {
      $(".preloader").fadeOut("slow");
    }
  });
})(jQuery);


  typing_effect(['24 hours of Coding', 'Endless space for innovation', 'See you soon!'],
            ['white', 'white', 'white']);
function typing_effect(words, colors) {
  var cursor = document.getElementById("cursor"); //cursor
  var text = document.getElementById("text"); //text

  var blink = true;
  var wait = false;
  var letters_count = 1;
  var temp = 1;

  text.style.color = colors[0];
  window.setInterval(function () {
    //wait between words when it starts writting
    if (letters_count === 0 && wait === false) {
      wait = true;

      text.innerHTML = ""; // leave a blank
      window.setTimeout(function () {
        var usedColor = colors.splice(0, 1)[0]; //remove first element and get it as str
        colors.push(usedColor);
        var usedWord = words.splice(0, 1)[0];
        words.push(usedWord);
        temp = 1;
        text.style.color = colors[0];
        letters_count += temp;
        wait = false;
      }, 1000);
    } else if (letters_count === words[0].length + 1 && wait === false) {
      wait = true;
      window.setTimeout(function () {
        //wait a bit until words finished and start deleting
        temp = -1;
        letters_count += temp;
        wait = false;
      }, 1000);
    } else if (wait === false) {
      //write words
      text.innerHTML = words[0].substr(0, letters_count);
      letters_count += temp;
    }
  }, 120);
  window.setInterval(function () {
    if (blink) {
      cursor.style.opacity = "0";
      blink = false;
    } else {
      cursor.style.opacity = "1";
      blink = true;
    }
  }, 400);
}

const participants = document.querySelector(
  ".overview-counter-participants span"
);
const teams = document.querySelector(".overview-counter-teams span");
const hours = document.querySelector(".overview-counter-hours span");
const projects = document.querySelector(".overview-counter-projects span");

var observer = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true) {
      console.log("Element has just become visible in screen");
      // counter values
      const counter = [369, 114, 36, 42];
      const currentCounter = [0, 0, 0, 0];
      
      // max value in counter array
      const maxCounter = 369;
      
      const timer = setInterval(() => {
        if (currentCounter[0] <= counter[0]) {
          participants.textContent = currentCounter[0]++;
        }

        if (currentCounter[1] <= counter[1]) {
          teams.textContent = currentCounter[1]++;
        }

        if (currentCounter[2] <= counter[2]) {
          hours.textContent = currentCounter[2]++;
        }

        if (currentCounter[3] <= counter[3]) {
          projects.textContent = currentCounter[3]++;
        }

        if (
          currentCounter[0] == maxCounter ||
          currentCounter[0] == maxCounter ||
          currentCounter[0] == maxCounter ||
          currentCounter[0] == maxCounter
        ) {
          clearInterval(timer);
        }
      }, 10);
    }
  },
  { threshold: [0] }
);

observer.observe(document.querySelector("#overview"));

document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 

