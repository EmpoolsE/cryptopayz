$(document).ready(function() {


    $('.nav-toggle').click(function() {
        $(this).toggleClass('active');
        $('.header-nav').toggleClass('open');
        event.preventDefault();
    });

    $('.header-nav li a').click(function() {
        $('.nav-toggle').toggleClass('active');
        $('.header-nav').toggleClass('open');

    });


    $(function() {

        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 2000);
                    return false;
                }
            }
        });

    });





    $(".but_top").on("click", "a", function (event) {  //отменяем стандартную обработку нажатия по ссылке  
        event.preventDefault();//забираем идентификатор бока с атрибута href  
        var id  = $(this).attr('href'),  //узнаем высоту от начала страницы до блока на который ссылается якорь   
    top = $(id).offset().top-0;    //анимируем переход на расстояние - top за 1500 мс  
    $('body,html').stop().animate({scrollTop: top}, 1000); 
    });



 $(document).scroll(function(){

       if ($(this).scrollTop() >= 20) {
                $('.navigation').css({
                    "background-color": "#fff"
                });
            } else {
                $('.navigation').css({
                    "background-color": "transparent"
                });
            }
    if($(window).width()>800){
 	var temp = $(window).height()*0.2;
 	var temp1 = $(window).height()*0.5;
        if($(this).scrollTop() >= $('.get-started').offset().top - temp && $(this).scrollTop() <= $('.get-started').offset().top + $('.get-started').outerHeight()- temp ) {
            $(".get-started-img-block,.get-started").addClass('actived');
        }
        if($(this).scrollTop() <= $('.get-started').offset().top - temp1 || $(this).scrollTop() >= $('.get-started').offset().top + $('.get-started').outerHeight()- temp1) {
            $(".get-started-img-block,.get-started").removeClass('actived');
        }
        if($(this).scrollTop() >= $('.integration').offset().top - temp && $(this).scrollTop() <= $('.integration').offset().top + $('.integration').outerHeight()- temp ) {
            $(".integration-img-block,.integration").addClass('actived');
        }
        if($(this).scrollTop() <= $('.integration').offset().top - temp1 || $(this).scrollTop() >= $('.integration').offset().top + $('.integration').outerHeight()- temp1) {
            $(".integration-img-block,.integration").removeClass('actived');
        }
        if($(this).scrollTop() >= $('.checkout-solution').offset().top - temp1 && $(this).scrollTop() <= $('.checkout-solution').offset().top + $('.checkout-solution').outerHeight()- temp1 ) {
            $(".checkout-img-block,.checkout-solution").addClass('actived');
        }
        if($(this).scrollTop() <= $('.checkout-solution').offset().top - temp1|| $(this).scrollTop() >= $('.checkout-solution').offset().top + $('.checkout-solution').outerHeight()- temp1) {
            $(".checkout-img-block,.checkout-solution").removeClass('actived');
        }
        if($(this).scrollTop() >= $('.target-section').offset().top - temp*2 && $(this).scrollTop() <= $('.target-section').offset().top + $('.target-section').outerHeight()- temp*2 ) {
            $(".target-text,.target-text h2,.numss").addClass('actived');
            $('.numss.actived').each(function () {
              var $this = $(this);
              if($this.hasClass('not-active')){
              jQuery({ Counter: 0 }).animate({ Counter: 0.9 }, {
                duration: 3000,
                easing: 'swing',
                step: function () {
                  $this.text(this.Counter.toFixed(1));
                }
              });
                }
            });
            $('.numss').removeClass('not-active');   
        }
        if($(this).scrollTop() <= $('.target-section').offset().top - temp1*0.5 || $(this).scrollTop() >= $('.target-section').offset().top + $('.target-section').outerHeight()- temp1*0.5) {
            $(".target-text,.target-text h2,.numss").removeClass('actived');
            $('.numss').addClass('not-active');

        }
        if($(this).scrollTop() <= $('.currencies').offset().top && $(this).scrollTop()+$(window).height() >= $('.currencies').offset().top + $('.currencies').outerHeight() ) {
            $(".currencies").addClass('actived');
        }
        if($(this).scrollTop() >= $('.currencies').offset().top + $('.currencies').outerHeight() || $(this).scrollTop()+$(window).height() <= $('.currencies').offset().top) {
            $(".currencies").removeClass('actived');
        }
        if($(this).scrollTop() <= $('.multi-currency').offset().top && $(this).scrollTop()+$(window).height() >= $('.multi-currency').offset().top + $('.currencies').outerHeight() ) {
            $(".multi-currency,.multi-currency h2").addClass('actived');
        }
        if($(this).scrollTop() >= $('.multi-currency').offset().top + $('.multi-currency').outerHeight() || $(this).scrollTop()+$(window).height() <= $('.multi-currency').offset().top) {
            $(".multi-currency,.multi-currency h2").removeClass('actived');
        }
        if($(this).scrollTop() <= $('.instant-curr h2').offset().top && $(this).scrollTop()+$(window).height() >= $('.instant-curr h2').offset().top + $('.instant-curr h2').outerHeight() ) {
            $(".instant-curr").addClass('actived');
        }
        if($(this).scrollTop() >= $('.instant-curr h2').offset().top + $('.instant-curr h2').outerHeight() || $(this).scrollTop()+$(window).height() <= $('.instant-curr h2').offset().top) {
            $(".instant-curr").removeClass('actived');
        }
    }else{
       if($(this).scrollTop() <= $('.get-started').offset().top && $(this).scrollTop()+$(window).height() >= $('.get-started').offset().top + $('.get-started').outerHeight()*0.5 ) {
            $(".get-started-img-block").addClass('actived');
        }
        if($(this).scrollTop() >= $('.get-started').offset().top + $('.get-started').outerHeight() || $(this).scrollTop()+$(window).height()-200 <= $('.get-started').offset().top) {
            $(".get-started-img-block").removeClass('actived');
        }
        if($(this).scrollTop() <= $('.integration').offset().top && $(this).scrollTop()+$(window).height() >= $('.integration').offset().top + $('.integration').outerHeight()*0.5 ) {
            $(".integration-img-block").addClass('actived');
        }
        if($(this).scrollTop() >= $('.integration').offset().top + $('.integration').outerHeight() || $(this).scrollTop()+$(window).height() <= $('.integration').offset().top) {
            $(".integration-img-block").removeClass('actived');
        }
        if($(this).scrollTop() <= $('.checkout-solution').offset().top && $(this).scrollTop()+$(window).height() >= $('.checkout-solution').offset().top + $('.checkout-solution').outerHeight()*0.5 ) {
            $(".checkout-img-block").addClass('actived');
        }
        if($(this).scrollTop() >= $('.checkout-solution').offset().top + $('.checkout-solution').outerHeight() || $(this).scrollTop()+$(window).height() <= $('.checkout-solution').offset().top) {
            $(".checkout-img-block").removeClass('actived');
        }
        if($(this).scrollTop() <= $('.target-section').offset().top && $(this).scrollTop()+$(window).height() >= $('.target-section').offset().top + $('.target-section').outerHeight()*0.5 ) {
           $(".target-text,.target-text h2,.numss").addClass('actived');
            $('.numss.actived').each(function () {
              var $this = $(this);
              if($this.hasClass('not-active')){
              jQuery({ Counter: 0 }).animate({ Counter: 0.9 }, {
                duration: 3000,
                easing: 'swing',
                step: function () {
                  $this.text(this.Counter.toFixed(1));
                }
              });
                }
            });
            $('.numss').removeClass('not-active');   
        }
        if($(this).scrollTop() >= $('.target-section').offset().top + $('.target-section').outerHeight() || $(this).scrollTop()+$(window).height() <= $('.target-section').offset().top) {
            $(".target-text,.target-text h2,.numss").removeClass('actived');
            $('.numss').addClass('not-active');
        }
        if($(this).scrollTop() <= $('.instant-curr h2').offset().top && $(this).scrollTop()+$(window).height() >= $('.instant-curr h2').offset().top + $('.instant-curr h2').outerHeight() ) {
            $(".instant-curr").addClass('actived');
        }
        if($(this).scrollTop() >= $('.instant-curr h2').offset().top + $('.instant-curr h2').outerHeight() || $(this).scrollTop()+$(window).height() <= $('.instant-curr h2').offset().top) {
            $(".instant-curr").removeClass('actived');
        }
         $(".currencies,.integration,.multi-currency,.get-started,.checkout-solution,.target-text h2,.multi-currency h2").addClass('actived');

    }
 
    });
$('.nav-toggle').on('click', function() {
    $('body').toggleClass('opened');
  });
	
});