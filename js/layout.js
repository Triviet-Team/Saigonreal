
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

$('.detail-carousel').owlCarousel({
  loop: false,
  autoplay: false,
  dots: false,
  nav: true,
  margin: 10,
  navText: [
    "<i class='mdi mdi-chevron-left'></i>",
    "<i class='mdi mdi-chevron-right'></i>" 
  ],
  responsive: {
    0: {
      items:2,
    },
    575: {
      items:3,
    },
    768: {
      items:3
    },
    992: {
      items:4
    },
    1200: {
        items:5
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

  $('.box-search-type h4').click(function() {
    $('.box-search-type h4').removeClass('active');
    $(this).addClass('active');
  });

  $('.footer h4').click(function() {
    $(this).parent().find('ul').toggleClass('active');
  });

  $('.search-btn i').click(function() {
    $('.search, .right-search').toggleClass('active');
    $(this).toggleClass('mdi-magnify mdi-close');
  });

  
  function setBoxProductHeight() {
    setInterval(() => {
      const imgNewsWidth = $('.box-news-img img').width();
      const imgProductWidth = $('.box-product-img img').width();
      
      $('.hot-news .box-hot-news').eq(0).addClass('first');
      $('.box-news-img img').css('height', `${imgNewsWidth * 0.7}px`);
      $('.box-product-img img').css('height', `${imgProductWidth * 0.75}px`);
    })
  }

  function setProductNewHeight() {
    const hotNewsHeight = $('.hot-news').height();
    const productViewHeight = $('.product-view').height();
    const socialHeight = $('.social').height();
    const productWardHeight = $('.product-ward').height();
    const productNewHeight = (productViewHeight + socialHeight + productWardHeight) - hotNewsHeight

    $('.product-new-zone').css('max-height', `${productNewHeight - 10}px`)
  }

  function setBannerPosition() {
    const headerHeight = $('header').height() + $('.search').height();

    $('.banner').css('top', `${headerHeight + 110}px`);

    $(window).scroll(function () {
      if ($(this).scrollTop() > headerHeight) {
        $('.banner-box').addClass('active');
      } else {
        $('.banner-box').removeClass('active');
      }
    });
  }
  
  function setProductNewHeightMobile() {
    if (windowWidth < 450) {
      const productHeight = $('.box-product').height() * 4 + 120;
      $('.product-new-zone').css('max-height', `${productHeight}px`)
  
      $('.product-new-more h5').click(() => {
        $('.product-new-zone').css('max-height', `${productHeight * 2}px`)
        $('.product-new-more h5').addClass('d-none')
      });
    };
  }

  // function setNumberForImgDetail() {
  //   $('.main').on('click', function() {
  //     const hash = $('.tab-content .slider-carousel .owl-item.active').find('.item').attr('data-hash');
  //     $('.tab-content .detail-carousel .item').removeClass('active');
  //     $('.tab-content .detail-carousel').filter(function() {
  //       $(this).attr('href', `#${hash}`).addClass('active')
  //     })
  //   });
  // }

  setBoxProductHeight();
  setProductNewHeight();
  setBannerPosition();
  setProductNewHeightMobile();
  // setNumberForImgDetail();
});
