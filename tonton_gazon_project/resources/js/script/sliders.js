import $ from 'jquery'

$(function () {
  $('.recent_list').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    // centerPadding: '48px',
    initialSlide: 1,
    variableWidth: true,
    dots: false,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 1348,
        settings: {
          centerMode: false,
          infinite: true,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          centerMode: true,
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.tondeurs_list').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    // centerPadding: '48px',
    initialSlide: 2,
    variableWidth: true,
    dots: false,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 1348,
        settings: {
          // infinite: true,
          slidesToShow: 4,
          initialSlide: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          centerMode: true,
          infinite: false,
          initialSlide: 1,
          slidesToShow: 1,
        }
      }
    ]
  });
});

