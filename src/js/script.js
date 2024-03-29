$(function(){
    $('.hamburger').on('click', function() {
        $('.nav__menu-mobile').fadeIn(1400)
    });
    $('.nav__menu-close, .nav__menu-item').on('click', function() {
        $('.nav__menu-mobile').fadeOut()
    });
  //Модал//
    $('.nav__btn').on('click', function(){
        $('.popup-container').fadeIn(1400)
    });
    $('.popup__close, .modal__close').on('click', function(){
        $('.popup-container') .fadeOut(600)
    });
    function valideForms(form){
        $(form).validate({
            rules:{
                name:'required',
                phone:'required',
                email:{
                    required: true,
                    email: true,
                }
            },
            messages: {
                name:"Пожалуйста, введите имя",
                phone:"Пожалуйста, введите свой телефон",
                email:{
                    required: "Пожалуйста, введите email",
                    email:"Неправильно введен адрес",
                }
            }
        });
    };

    valideForms('#questions__form');
    valideForms('.questions__policy');
    valideForms('.questions__modals');
    
    
   


    

    $('form').submit(function(e) {
        e.preventDefault();
        if(!$(this).valid()) {
            return;
        }   
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#popup').fadeOut();
            $('.popup-container, #thanks').fadeIn();
            $('form').trigger('reset');
        });
        return false;
  });
});

$('.carousel__wrapper').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
    responsive: [
        {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
      {
        breakpoint: 1301,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 764,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });