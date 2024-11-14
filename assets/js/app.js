



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
      { left: `${posX}px`, top: `${posY}px` } 
    ],
    {
      duration: 500,
      fill: "forwards" 
    }
  );
});


 

// ==========================
// SWIPER CAROUSEL FOR OUR WORK SECTION
// ==========================
const swiperContainer = document.querySelector('.our__work');
const slides = swiperContainer.querySelectorAll('.swiper-slide');

const shouldLoop = slides.length > 3;

var mySwiper = new Swiper('.our__work', {
  loop: shouldLoop,
  speed: 600,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 30,
  coverflowEffect: {
    rotate: 0,
    stretch: 10,
    depth: 100,
    modifier: 3,
    slideShadows: false,
  },
  navigation: {
    nextEl: '.work__arrow .swiper-button-next',
    prevEl: '.work__arrow .swiper-button-prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
 
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 1.5,
      spaceBetween: 5,
    },
  },
});


// ==========================
// GSAP SCROLL ANIMATION FOR SERVICE CARDS
// ==========================
gsap.utils.toArray('.service__card').forEach((card, index) => {
  gsap.to(card, {
    y: -100 * index,
    scale: 0.5,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      end: "top 20%",
      scrub: 1,
      toggleActions: "play none none reverse",
    }
  });
});

// ==========================
// LANGUAGE TOGGLE DROPDOWN
// ==========================
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
// NUMBER COUNT ANIMATION
// ==========================
$(document).ready(function() {
  function countUp() {
    $('.number').each(function() {
      var $this = $(this);
      var target = $this.data('target');

      if (!$this.hasClass('counted')) {
        $this.addClass('counted');

        $this.animate({
          num: target
        }, {
          duration: 6000,
          step: function (now) {
            $this.text(Math.ceil(now) + ($this.text().includes('%') ? '%' : '+'));
          }
        });
      }
    });
  }
  
  $(window).on('scroll', function() {
    $('.number').each(function() {
      var $this = $(this);
      if ($this.is(':visible') && !$this.hasClass('counted')) {
        countUp();
      }
    });
  });

  countUp();
});

// ==========================
// TESTIMONIAL SLIDER
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
        return `<span class="${className}" style="background-image:url(${thumb})"></span>`;
      },
    },
  });
});

// ==========================
// GSAP MARQUEE ANIMATION
// ==========================
gsap.registerPlugin(ScrollTrigger);

let marqueeSpeed = 40; 

let marqueeTween = gsap.to(".marquee__container-content ", {
  x: `-=${marqueeSpeed}%`,
  duration: 10,
  ease: "none",
  repeat: -1
});

ScrollTrigger.create({
  trigger: ".marquee__container",
  start: "10% bottom",
  end: "bottom top",
  onUpdate: (self) => {
    marqueeTween.timeScale(self.direction === -1 ? -1 : 1);
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


document.getElementById("videoPopup").addEventListener("click", function(event) {
  if (event.target === this) {  
    closePopup();
  }
});


function closePopup() {
  document.getElementById("videoPopup").style.display = "none";
  document.body.style.overflow = "auto";
  document.getElementById("videoIframe").src = "";  
}
