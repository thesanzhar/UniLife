// Menu Burger
$(document).ready(function () {
  $('.header__burger').click(function (event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
  });
});

// $("#demo1").maskMoney({thousands:' ', decimal:',', allowZero: false, allowEmpty: true, suffix: ' ₸'});

var mainSwiper = new Swiper(".mainSwiper", {
  loop: 1,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var newsSwiper = new Swiper(".newsSwiper", {
  loop: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 3,
    },
    700: {
      slidesPerView: 2,
    },
  }
});

var partnersSwiper = new Swiper(".partnersSwiper", {
  loop: 1,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    700: {
      slidesPerView: 2,
    },
  }
});

var teamSwiper = new Swiper(".teamSwiper", {
  loop: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
});

var pageNumber_active = document.getElementById("newsPage__count");
var btns = pageNumber_active.getElementsByClassName("newsPage__pageNumber_items");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("pageNumber_active");
  current[0].className = current[0].className.replace(" pageNumber_active", "");
  this.className += " pageNumber_active";
  });
}



