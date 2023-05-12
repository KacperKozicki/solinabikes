$(document).scroll((e) => {
    let percentScrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 5;
    const video = $("#bound-one video")[0];
    const boundOne = $("#bound-one")[0];
    let minWidth = 200;
    let maxWidth = window.innerWidth;
    let width = percentScrolled * (maxWidth - minWidth) + minWidth;
  
    let minHeight = 400;
    let maxHeight = window.innerHeight;
    let height = percentScrolled * (maxHeight - minHeight) + minHeight;
  
    let rotation = Math.min(percentScrolled, 1) * 90;
    if (rotation > 90) {
      rotation = 90;
    }
    $(".fake-image").css("transform", "rotate(" + rotation + "deg)");
  
    let minScale = 1;
    let maxScale = Math.min(maxWidth / minWidth, maxHeight / minHeight) * 4;
  
    let scaleAmount = percentScrolled < 1 ? (percentScrolled * (maxScale - minScale) + minScale) : maxScale;
  
    $(".fake-image").css("transform", "rotate(" + rotation + "deg) scale(" + scaleAmount + ")");
  
    // Dodatkowa klasa dla efektu dziury
    if (percentScrolled >= 1) {
      $(".fake-image").addClass("hole-effect");
      video.play();
    } 
  });
  
  $(window).resize((e) => {
    // Ponownie wywołaj skalowanie przy zmianie rozmiaru okna
    $(document).scroll();
  });
  




  let controller = new ScrollMagic.Controller();

// Add timeline
let tl2 = anime.timeline({autoplay: false});

// Add animations
let s2a1 = {
  targets: '#two .elem img',
  opacity: [0.3,1],
  scale: [4,1],
  duration: 1000,
  delay: 0,
  easing: 'easeInOutSine'
};

let s2a2 = {
  targets: '#two .elem img',
  scale: 1,
  duration: 2000,
};

// Add children
tl2.add(s2a1).add(s2a2);

// Get section height
let twoHeight = document.getElementById("two").clientHeight;
console.log('twoHeight: ' + twoHeight);

//------------------
//SCENE 2
//------------------

//Add second scrollmagic scene
let scene2 = new ScrollMagic.Scene({
  triggerElement: "#two",
  duration: 4500,
  triggerHook: 0,
})

// Add debug indicators
.addIndicators({
  colorTrigger: "black",
  colorStart: "blue",
  colorEnd: "red",
  indent: 10
})

// Trigger animation timeline
//Use scroll position to play animation
.on("progress", function (event) {
  tl2.seek(tl2.duration * event.progress);
})

.setPin('#two')
.addTo(controller);

