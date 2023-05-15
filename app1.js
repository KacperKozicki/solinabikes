
const nav = document.querySelector("nav");
const navHeight = 70;
// the point the scroll starts from (in px)
let lastScrollY = 0;
// how far to scroll (in px) before triggering
const delta = 10;

// function to run on scrolling
function scrolled() {
  let sy = window.scrollY;
  // only trigger if scrolled more than delta
  if (Math.abs(lastScrollY - sy) > delta) {
    // scroll down -> hide nav bar
    if (sy > lastScrollY && sy > navHeight) {
      nav.classList.add("nav-up");
    } 
    // scroll up -> show nav bar
    else if (sy < lastScrollY) {
      nav.classList.remove("nav-up");
    }
   // update current scroll point
   lastScrollY = sy 
  }
}

// Add event listener & debounce so not constantly checking for scroll
let didScroll = false;
window.addEventListener("scroll", function(e){
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    scrolled();
    didScroll = false;
   }
}, 250)




let isNavHidden = false;

$(document).scroll((e) => {
  const percentScrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 5;
  const video = $("#bound-one video")[0];
  const boundOne = $("#bound-one")[0];
  const fake = $(".fake-image")[0];
  const nav = $("nav")[0];
  const minWidth = 200;
  const maxWidth = window.innerWidth;
  const width = percentScrolled * (maxWidth - minWidth) + minWidth;

  const minHeight = 400;
  const maxHeight = window.innerHeight;
  const height = percentScrolled * (maxHeight - minHeight) + minHeight;

  let rotation = Math.min(percentScrolled, 1) * 90;
  if (rotation > 90) {
    rotation = 90;
  }
  $(".fake-image").css("transform", "rotate(" + rotation + "deg)");

  const minScale = 1;
  const maxScale = Math.min(maxWidth / minWidth, maxHeight / minHeight) * 4;

  const scaleAmount = percentScrolled < 1 ? (percentScrolled * (maxScale - minScale) + minScale) : maxScale;

  $(".fake-image").css("transform", "rotate(" + rotation + "deg) scale(" + scaleAmount + ")");

  if (percentScrolled >= 1) {
    $(".fake-image").addClass("hole-effect");
    video.play();
    fake.style.position = "absolute";
    // fake.style.left="calc(50% - 100px)";
    fake.style.top = "130%";

    
  } else {
    fake.style.position = "fixed";
    fake.style.top = "calc(50% - 200px)";

    
  }
});

// 
// 
//


/* Please ❤ this if you like it! */



(function($) { "use strict";

	
	
		//Scroll back to top
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
		
	
	
})(jQuery); 


document.addEventListener('DOMContentLoaded', function() {
  
  var toggleDarkMode = function() {
    var elements = document.querySelectorAll('*');
    elements.forEach(function(element) {
      element.classList.toggle('dark');
    });

    var logoElement = document.getElementById('logo');
    var darkSrc = 'logo2.png';
    var lightSrc = 'logo2white.png';

    if (logoElement.getAttribute('src') === darkSrc) {
      logoElement.setAttribute('src', lightSrc);
    } else {
      logoElement.setAttribute('src', darkSrc);
    }
  };

  var darkModeButton = document.getElementById('checkbox');
  darkModeButton.addEventListener('click', toggleDarkMode);
});




// const checkbox = document.getElementById('checkbox');
// checkbox.addEventListener('change', () =>{
//   document.body.classList.toggle('dark');
//   nav.classList.toggle('dark');
// });