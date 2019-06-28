
$('.slider-carousel').owlCarousel({
  loop: true,
  autoplay: false,
  dots: false,
  nav: true,
  items: 1,
  navText: [
    "<i class='mdi mdi-chevron-left'></i>",
    "<i class='mdi mdi-chevron-right'></i>" 
  ],
});

$('.sale-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  dots: false,
  nav: true,
  autoplaySpeed: 1000,
  margin: 30,
  navText: [
    "<i class='mdi mdi-chevron-left'></i>",
    "<i class='mdi mdi-chevron-right'></i>" 
  ],
  responsive: {
    0: {
        items:1,
    },
    575: {
      items:2,
      margin: 15
    },
    768: {
      items:2
    },
    992: {
        items:3
    },
    1200: {
        items:3
    }
  }
});

$(document).ready(() => {
  const pageUrl = window.location.href;
  const windowWidth = document.body.clientWidth;

  // GO TOP
  $(window).scroll(function () {
    if ($(this).scrollTop() > 120) {
      $('.go-top').fadeIn().css('transform','scale(1)');
      $('.menu').addClass('down')
    } else {
      $('.go-top').fadeOut().css('transform','scale(0)');

      $('.menu').removeClass('down')
    }
  });

  $('.go-top').click(() => {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

  $(".menu a").each( function () {
    if (pageUrl == (this.href)) {
      $(this).closest("a").addClass("active");
    }
  });
  
  $('.toggleMenu').click(() => {
    $('.nav').toggleClass('out');
    $('.overlay-menu').toggleClass('overlay-in');
  });

  $('.overlay-menu, .nav-close').click(function() {
    $('.overlay-menu').removeClass('overlay-in');
    $('.nav').removeClass('out');
  });

  $('.search .box-search-type h4').click(function() {
    $('.box-search-type h4').removeClass('active');
    $(this).addClass('active');
  });

  $('.footer h4').click(function() {
    $(this).parent().find('ul').toggleClass('active');
  });

  $('.search-btn i').click(function() {
    $('.search').toggleClass('mobile');
    $(this).toggleClass('mdi-magnify mdi-close');
  });

  $('.hot-news .box-hot-news').eq(0).addClass('first');

    const imgNewsWidth = $('.box-news-img img').width();
    const imgProductWidth = $('.box-product-img img').width();

    $('.box-news-img img').css('height', `${imgNewsWidth * 0.7}px`);
    $('.box-product-img img').css('height', `${imgProductWidth * 0.75}px`);

  setInterval(() => {
    const hotNewsHeight = $('.hot-news').height();
    const productViewHeight = $('.product-view').height();
    const socialHeight = $('.social').height();
    const productWardHeight = $('.product-ward').height();

    const productNewHeight = (productViewHeight + socialHeight + productWardHeight) - hotNewsHeight

    $('.product-new-zone').css('max-height', `${productNewHeight - 10}px`)
  }, 1)
});
