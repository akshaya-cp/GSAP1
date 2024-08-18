function startLoader() {
  let counterElement = document.querySelector(".counter");
  let currentValue = 0;

  function updateCounter() {
      if(currentValue === 100){
          return;
      }

      currentValue += Math.floor(Math.random() * 10) + 1;
      if (currentValue > 100) {
          currentValue = 100;
      }

      counterElement.textContent = currentValue + "%";

      let delay = Math.floor(Math.random() * 200) + 250;
      setTimeout(updateCounter, delay);

  }

  updateCounter();
  
}
startLoader();


gsap.registerPlugin(ScrollTrigger);

function pageTear(){
  var tl = gsap.timeline({scrollTrigger:{
      trigger:"#main",
      // markers:true,
      start:"50% 50%",
      end:"150% 50%",
      scrub:2,
      pin:true
  }});
  tl
  .to("#center",{
  height: "100vh",
  },'a')
  .to("#top",{
      top: "-50%",
  },'a')
  .to("#bottom",{
      bottom: "-50%",
  },'a')
  .to("#top-h1",{
      top: "80%"
  },'a')
  .to("#bottom-h1",{
      bottom: "-80%"
  },'a')
  // .to("#center-h1",{
  // top: "-30%"
  // },'a')
  .to(".content",{
  delay: -0.2,
  marginTop: "0%"
  })
}
function helper(){

  gsap.from(".circles", 2, {
  top: "-100%",
  ease: "elastic.out",
  delay: 0.5,
  });

  gsap.to(".circle-inner", 1, {
      width: "75px",
      height: "75px",
      ease: "power4.inOut",
      delay: 2,
  });

  gsap.to(".circle-inner-rotator", 1, {
      scale: 1,
      ease: "power4.inOut",
      delay: 2.5,
  });

  gsap.to(".circles", 1.5, {
      rotation: 360,
      ease: "power4.inOut",
      delay: 3,
  });

  gsap.to(".block", 0.75, {
      display: "block",
      height: "200px",
      ease: "power4.inOut",
      delay: 4,
  });

  gsap.to(".block", 0.75, {
      width: "800px",
      ease: "power4.inOut",
      delay: 4.5,
  });

  gsap.fromTo("#main", {
      duration: 2,
      left: "100%",
      scale: 0.5,
      ease: "power4.inOut",
      delay: 4,
  }, {
      duration: 2,
      left:"50%",
      scale: 0.5,
      transform: "translateX(-50%)",
      ease: "power4.inOut",
      delay: 4,
  });

  gsap.to(".block", 1.5, {
      width: "0px",
      ease: "power4.inOut",
      delay: 5,
  });

  gsap.to(".block", 1.5, {
      height: "0px",
      ease: "power4.inOut",
      delay: 6,
  });

  gsap.to(".circles", 1.5, {
      rotation: 0,
      ease: "power4.inOut",
      delay: 6.5,
  });

  gsap.to(".loader", 2.5, {
      scale: 0,
      ease: "power4.inOut",
      delay: 7,
  });

  gsap.to("#main", 2, {
      scale: 1,
      ease: "power4.inOut",
      delay: 7.5,
      onComplete: function(){
        pageTear();
      }
  });

}

helper();



