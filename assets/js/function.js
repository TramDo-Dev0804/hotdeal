// banner-top
$('#bannerClose').on('click', function (e) {
  e.preventDefault();
  $('#banner').hide();
});
// Navbar mobile
function openNav() {
  document.getElementById("mySidenav").style.width = "70%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
// scroll-top
$(function () {
  $('#scrollToTop').on('click', () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  })
})

// nav 
$(function () {
  const $navFixed = $('.nav-header-fixed');
  const $scrollToTop = $('#scrollToTop');

  const deltaTop = $('.top-banner').height() + $('.wrap-header').height();
  const scrollToTopOffset = $scrollToTop.offset();

  $(window).scroll(function () {
    var nowScrollTop = $(this).scrollTop();

    if (nowScrollTop > deltaTop) {
      $navFixed.addClass('visible');
    }
    else {
      $navFixed.removeClass('visible');
    }

    if (nowScrollTop > scrollToTopOffset.top) {
      $scrollToTop.addClass('show');
    }
    else {
      $scrollToTop.removeClass('show');
    }

    // show more button


    $('.btn-show-more').on('click', function (e) {
      $(this).parents('.content-shorted').toggleClass('show');
      if ($(this).parents('.content-shorted').first().hasClass('show')) {
        $(this).text('Rút gọn');
      }
      else {
        $(this).text('Xem thêm');
      }
    })

  });
});
// scroll-footer
 
$('body').ready(function (e) {
  $(".accordion").click(function () {
    $(this).closest('.accordion-item').find('.accordion-content').slideToggle();
  });
});

// local-dropdown
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
//-----JS for Price Range slider-----


window.onload = function () {
  slideOne();
  slideTwo();
};

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

function slideOne() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.textContent = sliderOne.value;
  $('#after').val(sliderOne.value)
  fillColor();
}
function slideTwo() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.textContent = sliderTwo.value;
  $('#before').val(sliderTwo.value)
  fillColor();
}
function fillColor() {
  percent1 = (sliderOne.value / sliderMaxValue) * 100;
  percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #71be0f ${percent1}% , #71be0f ${percent2}%, #71be0f ${percent2}%)`;
}
