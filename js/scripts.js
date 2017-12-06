$(document).ready(function() {

	/***************** Waypoints ******************/

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInRight');
	}, {
		offset: '75%'
	});

	/***************** Tooltips ******************/
    $('[data-toggle="tooltip"]').tooltip();

	/***************** Nav Transformicon ******************/

	/* When user clicks the Icon */
	$('.nav-toggle').click(function() {
		$(this).toggleClass('active');
		$('.header-nav').toggleClass('open');
		event.preventDefault();
	});
	/* When user clicks a link */
	$('.header-nav li a').click(function() {
		$('.nav-toggle').toggleClass('active');
		$('.header-nav').toggleClass('open');

	});

	/***************** Header BG Scroll ******************/

		$(function() {
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();

			if (scroll >= 20) {
				$('.but_top').css({"display":"block"});
				$('section.navigation').addClass('fixed');
				$('.navigation').css({
					"background-color": "#fff"
				});
				
				$('header').css({
					"border-bottom": "none"
					
					
				});
				$('header .member-actions').css({
					
				});
				$('header .navicon').css({
					
				});
				$('header').css({"padding":"25px 0"});
				$('.menu').css({"top":"22px"});
			} else {
				$('.but_top').css({"display":"none"});
				$('header').css({"padding":"40px 0"});
				$('.menu').css({"top":"37px"});
				$('.navigation').css({
					"background-color": "transparent"
				});
				$('section.navigation').removeClass('fixed');
				$('header').css({
					
				});
				
				$('header .navicon').css({
					
				});
			}
		});
	});
	/***************** Smooth Scrolling ******************/
	$(".but_top").on("click", "a", function (event) {  //отменяем стандартную обработку нажатия по ссылке  
		event.preventDefault();//забираем идентификатор бока с атрибута href  
		var id  = $(this).attr('href'),  //узнаем высоту от начала страницы до блока на который ссылается якорь   
	top = $(id).offset().top-0;    //анимируем переход на расстояние - top за 1500 мс  
	$('body,html').stop().animate({scrollTop: top}, 1000); 
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

});


$('.nav-toggle').on('click', function() {
    $('body').toggleClass('opened');
  });