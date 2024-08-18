function valueSetters(){
  gsap.set("#nav a", {y: "-100%", opacity: 0});
  gsap.set("#home .parent .child", {y: "100%"});
  gsap.set("#home .row img", {opacity: 0});
  
  document.querySelectorAll("#Visual>g").forEach(function(e){
    let character = e.childNodes[1].childNodes[1];
    character.style.strokeDasharray = character.getTotalLength() + 'px';
    character.style.strokeDashoffset = character.getTotalLength() + 'px';
  });
}

function revealToSpan() {
  document.querySelectorAll(".reveal")
  .forEach(function(elem){
    let parent = document.createElement("span");
    let child = document.createElement("span");

    parent.classList.add("parent");
    child.classList.add("child");

    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);

    elem.innerHTML =  "";
    elem.appendChild(parent);
  });
}

function loaderAnimation(){
  var tl = gsap.timeline();
  tl
  .from("#loader .child span", {
    x: 100,
    duration: 1.4,
    stagger: .2,
    ease: Power3.easeInOut
  })
  .to("#loader .parent .child", {
    y: "-100%",
    duration: 1,
    ease: Circ.easeInOut
  })
  .to("#loader", {
    height: 0,
    duration: 1,
    ease: Circ.easeInOut
  })
  .to("#green", {
    height: "100%",
    top: 0,
    duration: 1,
    delay: -.8,
    ease: Circ.easeInOut
  })
  .to("#green", {
    height: "0%",
    top: 0,
    delay: -.5,
    duration: 1,
    ease: Circ.easeInOut,
    onComplete: function() {
      animateHomepage();
    }
  });
}

function animateSvg(){
  gsap.to("#Visual>g>g>path, #Visual>g>g>polyline", {
    strokeDashoffset: 0,
    duration: 2,
    ease: Expo.easeInOut,
  });
}

function animateHomepage(){
  let tl = gsap.timeline();

  tl.to("#nav a", {
    y: 0,
    opacity: 1,
    stagger: .05,
    ease: Expo.easeInOut
  });
  tl.to("#home .parent .child", {
    y: 0,
    stagger: .1,
    duration: 1.5,
    ease: Expo.easeInOut
  });
  tl.to("#home .row img", {
    opacity: 1,
    delay: -.5,
    ease: Expo.easeInOut,
    onComplete: function(){
      animateSvg();
    }
  });
}

function locoInitialize(){
  const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    // multiplier :true
    
  });
}

function locoInitialize1(){
  const scroll = new LocomotiveScroll({
    el: document.querySelector('#work'),
    smooth: true,
    
  });
}  

function cardHoverEffect() {
  document.querySelectorAll(".cnt")
  .forEach(function(cnt){
    var showingImage;
    cnt.addEventListener("mousemove", function(dets){
      document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
      showingImage = dets.target;
      document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;
      showingImage.style.filter = "grayscale(1)";

      document.querySelector("#work").style.backgroundColor = "#fff";
    });
    cnt.addEventListener("mouseleave", function(dets){
      document.querySelector("#cursor").children[showingImage.dataset.index].style.opacity = 0;
      showingImage.style.filter = "grayscale(0)";
    });
  });
}

function imageCardParallax() {
  gsap.utils.toArray("#imgrig .imgcntnr").forEach((img, i) => {
    gsap.to(img, {
      yPercent: -10 * i, // Parallax effect
      rotation: (i + 1) * 5, // Rotation effect, increasing with each card
      translateZ: 0, // Force hardware acceleration
      ease: "none",
      scrollTrigger: {
        trigger: img,
        scrub: true,
        start: "top bottom",
        end: "bottom top",
        onComplete: function(){
          locoInitialize();

        }
      }
    });
  });
}




  
 
  




// Initialize all functions
document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);

  

  // Initialize functions
  
  revealToSpan();
  valueSetters();
  loaderAnimation();
  cardHoverEffect();

  // locoInitialize();
   // Initialize Locomotive Scroll
  imageCardParallax();

  // middlePageTear();

  
   // Initialize the image card parallax effect
});

