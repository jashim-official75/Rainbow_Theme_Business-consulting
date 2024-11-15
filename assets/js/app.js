

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

$(document).ready(function() {


  function openPopup() {
    $("#videoPopup").css("display", "flex");
    $("body").css("overflow", "hidden");
    const videoId = "DR9lxZ8kPYQ"; 
    const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    $("#videoIframe").attr("src", videoUrl);
  }

  $(".playButtonMobile").on("click", function() {
    openPopup();
  });

  $(".playButtonDesktop").on("click", function() {
    openPopup();
  });

  $("#closePopup").on("click", closePopup);

 
  $("#videoPopup").on("click", function(event) {
    if (event.target.id === "videoPopup") {
      closePopup();
    }
  });

  function closePopup() {
    $("#videoPopup").css("display", "none");
    $("body").css("overflow", "auto");
    $("#videoIframe").attr("src", ""); 
  }
});



  
// ======================================
//AOS NEXT ANIMATION ACTIVATION CODE
// ======================================

AOS.init();

        // ALL GSAP ANIMATION

        var tl = gsap.timeline()

        tl.from(".header__logo", {
            y: -30,
            duration: 1,
            opacity: 0,
            ease: "power2.out",
        }, "0")

        tl.from(".hero__title", {
            y: -100,
            duration: 1.5,
            ease: "power2.out",
            opacity: 0,
            delay: 0.2,
        }, 0);


        tl.from(".nav__menu li , .primary-btn", {
            y: -30,
            duration: 1,
            ease: "power2.out",
            stagger: 0.15,
            opacity: 0,
            delay: 0.2,
        })

        gsap.to(".circle", {
            rotation: 360,
            repeat: -1,
            ease: "linear",
            duration: 10,
        })

        gsap.to(".dancer", {
            y: -50,
            rotation: 20,
            duration: 3,
            yoyo: true,
            repeat: -1,
            ease: "power1.inOut",
        });

        gsap.from(".fadein", {
            x: 20,
            opacity: 0,
            duration: 2,

        })

        gsap.from(".fadeleft", {
            x: -100,
            opacity: 0,
            duration: 2,

        })

        const waveHeading = document.querySelector(".hero__description");
        waveHeading.innerHTML = waveHeading.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        gsap.fromTo(".letter", {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            ease: "back.out(1)",
            duration: 0.5
        });

// ==========================
// MOBILE SIDEBAR
// ==========================

document.addEventListener('DOMContentLoaded', function() {

  const menuIconDesktop = document.querySelector('.menu-icon');
  const menuIconMobile = document.querySelector('.menu__icon');
  const sidebar = document.querySelector('.mobile_sidebar');
  const overlay = document.querySelector('.overlay');
  const closeButton = document.querySelector('.menu__close-btn');
  const menuItems = document.querySelectorAll('.mobile_sidebar .mobile__menu');

  function openSidebar() {
    sidebar.classList.add('active');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  if (menuIconDesktop) menuIconDesktop.addEventListener('click', openSidebar);
  if (menuIconMobile) menuIconMobile.addEventListener('click', openSidebar);
  closeButton.addEventListener('click', closeSidebar);
  overlay.addEventListener('click', closeSidebar);

  menuItems.forEach(item => {
    item.addEventListener('click', closeSidebar);
  });

});


// ==========================
// SERVICE CARD ONSCROLL EFFECT
// ==========================

document.addEventListener('DOMContentLoaded', () => {

  const serviceCards = document.querySelectorAll('.service__card');

  const observerOptions = {
    threshold: 0.3, 
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  serviceCards.forEach((card) => {
    observer.observe(card);
  });
});


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
    1366: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 2,
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
      slidesPerView: 1,
      spaceBetween: 5,
    },
    450: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    420: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    400: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    380: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    350: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
  },
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
      nextEl: '.testomonail__arrow .swiper-button-next',
      prevEl: '.testomonail__arrow .swiper-button-prev',
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
