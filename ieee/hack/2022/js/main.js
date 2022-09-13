// counter

// Set the date we're counting down to
var countDownDate = new Date("Jan 30, 2022 10:00:00").getTime();
// var countDownDate = Date.now();

// Update the count down every 1 second
var x = setInterval(function () {
  //   if (Date.now() < new Date("Jan 28, 2022 18:00:00").getTime()) {
  //     document.querySelector(".counter").styles.display = "none";
  //   }
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  //   document.getElementById("demo").innerHTML =
  //     days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  //   console.log(days, hours, minutes, seconds);

  document.querySelector(".counter #days").innerText = days;
  document.querySelector(".counter #hours").innerText = hours;
  document.querySelector(".counter #minutes").innerText = minutes;
  document.querySelector(".counter #seconds").innerText = seconds;

  //   If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".counter #days").innerText = 0;
    document.querySelector(".counter #hours").innerText = 0;
    document.querySelector(".counter #minutes").innerText = 0;
    document.querySelector(".counter #seconds").innerText = 0;
  }
}, 1000);

(function ($) {
  "use strict";

  // Scrollspy
  $("body").scrollspy({
    target: "#nav",
    offset: $(window).height() / 2,
  });

  // Mobile nav toggle
  $(".navbar-toggle").on("click", function () {
    $(".main-nav").toggleClass("open");
  });

  // Fixed nav
  $(window).on("scroll", function () {
    var wScroll = $(this).scrollTop();
    var $win = $(window);
    var winH = $win.height();
    var winW = $win.width();
    if (winW < 1024) {
      winH = 1200;
    }
    if (wScroll > winH) {
      $("#header").addClass("fixed-navbar");
    } else {
      $("#header").removeClass("fixed-navbar");
    }
  });

  // Smooth scroll
  $(".main-nav a[href^='#']").on("click", function (e) {
    e.preventDefault();
    var hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top - 40,
      },
      800
    );
  });
  $("a[href^='#']").on("click", function (e) {
    e.preventDefault();
    var hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top - 40,
      },
      800
    );
  });

  // Section title animation
  $(".section-title").each(function () {
    var $this = $(this);
    $this.find(".title > span").each(function (i) {
      var $span = $(this);
      var animated = new Waypoint({
        element: $this,
        handler: function () {
          setTimeout(function () {
            $span.addClass("appear");
          }, i * 250);
          this.destroy();
        },
        offset: "95%",
      });
    });
  });

  // Galery Owl
  $("#galery-owl").owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    dots: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    autoplay: true,
    autoplaySpeed: 500,
    navSpeed: 500,
    responsive: {
      0: {
        stagePadding: 0,
      },
      768: {
        stagePadding: 120,
      },
    },
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    center: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    autoplay: true,
    navSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // Parallax Background
  $.stellar({
    responsive: true,
  });
})(jQuery);

function register() {
  document.location.href = "/registration";
}

let el = document.querySelectorAll("ul.main-nav li");
el.forEach((element) => {
  element.addEventListener("click", () => {
    let parent = document.querySelector("ul.main-nav");
    parent.classList.remove("open");
    $(".hamburger").removeClass("open");
  });
});
// To change faq prefix icons on click
let faqIcons = document.querySelectorAll(".material-icons");
let faqQues = document.querySelectorAll(".questions");
console.log(faqQues[0]);

faqQues.forEach(function (question, index) {
  question.addEventListener("click", () => {
    faqIcons[index].classList.toggle("active");
  });
});
TweenMax.set(".play-circle-01", {
  rotation: 90,
  transformOrigin: "center",
});

TweenMax.set(".play-circle-02", {
  rotation: -90,
  transformOrigin: "center",
});

TweenMax.set(".play-perspective", {
  xPercent: 6.5,
  scale: 0.175,
  transformOrigin: "center",
  perspective: 1,
});

TweenMax.set(".play-video", {
  visibility: "hidden",
  opacity: 0,
});

TweenMax.set(".play-triangle", {
  transformOrigin: "left center",
  transformStyle: "preserve-3d",
  rotationY: 10,
  scaleX: 2,
});

const rotateTL = new TimelineMax({ paused: true })
  .to(
    ".play-circle-01",
    0.7,
    {
      opacity: 0.1,
      rotation: "+=360",
      strokeDasharray: "456 456",
      ease: Power1.easeInOut,
    },
    0
  )
  .to(
    ".play-circle-02",
    0.7,
    {
      opacity: 0.1,
      rotation: "-=360",
      strokeDasharray: "411 411",
      ease: Power1.easeInOut,
    },
    0
  );

const openTL = new TimelineMax({ paused: true })
  .to(
    ".play-backdrop",
    1,
    {
      opacity: 0.95,
      visibility: "visible",
      ease: Power2.easeInOut,
    },
    0
  )
  .to(
    ".play-close",
    1,
    {
      opacity: 1,
      ease: Power2.easeInOut,
    },
    0
  )
  .to(
    ".play-perspective",
    1,
    {
      xPercent: 0,
      scale: 1,
      ease: Power2.easeInOut,
    },
    0
  )
  .to(
    ".play-triangle",
    1,
    {
      scaleX: 1,
      ease: ExpoScaleEase.config(2, 1, Power2.easeInOut),
    },
    0
  )
  .to(
    ".play-triangle",
    1,
    {
      rotationY: 0,
      ease: ExpoScaleEase.config(10, 0.01, Power2.easeInOut),
    },
    0
  )
  .to(
    ".play-video",
    1,
    {
      visibility: "visible",
      opacity: 1,
    },
    0.5
  );

const button = document.querySelector(".play-button");
const backdrop = document.querySelector(".play-backdrop");
const close = document.querySelector(".play-close");

button.addEventListener("mouseover", () => rotateTL.play());
button.addEventListener("mouseleave", () => rotateTL.reverse());
button.addEventListener("click", () => openTL.play());
backdrop.addEventListener("click", () => openTL.reverse());
close.addEventListener("click", (e) => {
  e.stopPropagation();
  openTL.reverse();
});

$(".ribbon").on("hover", function () {
  var self = $(this),
    newone = self.clone(true);

  self.before(newone);
  $("." + self.attr("class") + ":last").remove();
});
