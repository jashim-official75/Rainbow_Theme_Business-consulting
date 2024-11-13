function toggleDropdown() {
  const dropdownContent = document.querySelector(".language-dropdown__content");
  dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

function changeLanguage(language) {
  const languageButton = document.getElementById("languageButton");

  if (language === 'en') {
      languageButton.textContent = "English";  
     
  } else if (language === 'bn') {
      languageButton.textContent = "Bangla";  
  }

  document.querySelector(".language-dropdown__content").style.display = "none";
}


// ==========================
// MOUSE CURSOR CHANGE
// ==========================

 
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", function (e) {
  const posX = e.pageX; 
  const posY = e.pageY; 

  
  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;


  cursorOutline.animate(
    [
      {
        left: `${posX}px`,
        top: `${posY}px`,
      },
    ],
    {
      duration: 500,
      fill: "forwards", 
    }
  );
});




// ==========================
// TESTIMONAIL SLIDER
// ==========================

$(document).ready(function() {
  var swiper = new Swiper('.testimonial-swiper', {
      loop: true,
      autoplay: {
          delay: 3000, 
          disableOnInteraction: false, 
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
              var thumb = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-bullet-thumb');
              return '<span class="' + className + '" style="background-image:url(' + thumb + ')"></span>';
          },
      },
  
  });
});


// ==========================
// GSAP ANIMATION 
// ==========================
gsap.registerPlugin(ScrollTrigger);

let marqueeSpeed = 40; 

let marqueeTween = gsap.to(".marquee__container-content", {
  x: `-=${marqueeSpeed}%`, 
  duration: 10,             
  ease: "none",            
  repeat: -1               
});

ScrollTrigger.create({
  trigger: ".marquee__container", 
  start: "top bottom",             
  end: "bottom top",              
  onUpdate: (self) => {
    if (self.direction === -1) {   
      marqueeTween.timeScale(-1);   
    } else {                       
      marqueeTween.timeScale(1);    
    }
  }
});


// ==========================
// VIDEO POPUP 
// ==========================

document.getElementById("playButton").addEventListener("click", function() {

  document.getElementById("videoPopup").style.display = "flex";
  

  document.body.style.overflow = "hidden";
  
  const videoId = "DR9lxZ8kPYQ"; 
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`; 
  document.getElementById("videoIframe").src = videoUrl;

});

document.getElementById("closePopup").addEventListener("click", closePopup);
document.getElementById("overlay").addEventListener("click", function(event) {
  if (event.target.id === "overlay") {
    closePopup();
  }
});

function closePopup() {

  document.getElementById("videoPopup").style.display = "none";
  document.body.style.overflow = "auto"; 
  document.getElementById("videoIframe").src = ""; 
}

