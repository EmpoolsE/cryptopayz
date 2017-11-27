$(document).ready(function() {
 $(document).scroll(function(){
    if($(window).width()>800){
 	var temp = $(window).height()*0.2;
 	var temp1 = $(window).height()*0.5;
    console.log($(window).height());
    console.log(temp);
    console.log(temp1);
    console.log($(this).scrollTop()+$(window).height());
    console.log($('.get-started').offset().top + $('.get-started').outerHeight());
        if($(this).scrollTop() >= $('.get-started').offset().top - temp && $(this).scrollTop() <= $('.get-started').offset().top + $('.get-started').outerHeight()- temp ) {
            $(".get-started-img-block").addClass('actived');
        }
        if($(this).scrollTop() <= $('.get-started').offset().top - temp1 || $(this).scrollTop() >= $('.get-started').offset().top + $('.get-started').outerHeight()- temp1) {
            $(".get-started-img-block").removeClass('actived');
        }
        if($(this).scrollTop() >= $('.integration').offset().top - temp && $(this).scrollTop() <= $('.integration').offset().top + $('.integration').outerHeight()- temp ) {
            $(".integration-img-block").addClass('actived');
        }
        if($(this).scrollTop() <= $('.integration').offset().top - temp1 || $(this).scrollTop() >= $('.integration').offset().top + $('.integration').outerHeight()- temp1) {
            $(".integration-img-block").removeClass('actived');
        }
        if($(this).scrollTop() >= $('.checkout-solution').offset().top - temp*2 && $(this).scrollTop() <= $('.checkout-solution').offset().top + $('.checkout-solution').outerHeight()- temp*2 ) {
            $(".checkout-img-block").addClass('actived');
        }
        if($(this).scrollTop() <= $('.checkout-solution').offset().top - temp1*0.5 || $(this).scrollTop() >= $('.checkout-solution').offset().top + $('.checkout-solution').outerHeight()- temp1*0.5) {
            $(".checkout-img-block").removeClass('actived');
        }
        if($(this).scrollTop() >= $('.target-section').offset().top - temp*2 && $(this).scrollTop() <= $('.target-section').offset().top + $('.target-section').outerHeight()- temp*2 ) {
            $(".target-text").addClass('actived');
        }
        if($(this).scrollTop() <= $('.target-section').offset().top - temp1*0.5 || $(this).scrollTop() >= $('.target-section').offset().top + $('.target-section').outerHeight()- temp1*0.5) {
            $(".target-text").removeClass('actived');
        }
        if($(this).scrollTop() <= $('.currencies').offset().top && $(this).scrollTop()+$(window).height() >= $('.currencies').offset().top + $('.currencies').outerHeight() ) {
            $(".currencies").addClass('actived');
        }
        if($(this).scrollTop() >= $('.currencies').offset().top + $('.currencies').outerHeight() || $(this).scrollTop()+$(window).height() <= $('.currencies').offset().top) {
            $(".currencies").removeClass('actived');
        }
        if($(this).scrollTop() <= $('.multi-currency').offset().top && $(this).scrollTop()+$(window).height() >= $('.multi-currency').offset().top + $('.currencies').outerHeight() ) {
            $(".multi-currency").addClass('actived');
        }
        if($(this).scrollTop() >= $('.multi-currency').offset().top + $('.multi-currency').outerHeight() || $(this).scrollTop()+$(window).height() <= $('.multi-currency').offset().top) {
            $(".multi-currency").removeClass('actived');
        }
    }else{
       if($(this).scrollTop() <= $('.get-started').offset().top && $(this).scrollTop()+$(window).height() >= $('.get-started').offset().top + $('.get-started').outerHeight() ) {
            $(".get-started-img-block").addClass('actived');
        }
        if($(this).scrollTop() >= $('.get-started').offset().top + $('.get-started').outerHeight() || $(this).scrollTop()+$(window).height()-200 <= $('.get-started').offset().top) {
            $(".get-started-img-block").removeClass('actived');
        }
        if($(this).scrollTop() <= $('.integration').offset().top && $(this).scrollTop()+$(window).height() >= $('.integration').offset().top + $('.integration').outerHeight()) {
            $(".integration-img-block").addClass('actived');
        }
        if($(this).scrollTop() >= $('.integration').offset().top + $('.integration').outerHeight() || $(this).scrollTop()+$(window).height() <= $('.integration').offset().top) {
            $(".integration-img-block").removeClass('actived');
        }
        if($(this).scrollTop() <= $('.checkout-solution').offset().top && $(this).scrollTop()+$(window).height() >= $('.checkout-solution').offset().top + $('.checkout-solution').outerHeight()) {
            $(".checkout-img-block").addClass('actived');
        }
        if($(this).scrollTop() >= $('.checkout-solution').offset().top + $('.checkout-solution').outerHeight() || $(this).scrollTop()+$(window).height() <= $('.checkout-solution').offset().top) {
            $(".checkout-img-block").removeClass('actived');
        }
        if($(this).scrollTop() <= $('.target-section').offset().top && $(this).scrollTop()+$(window).height() >= $('.target-section').offset().top + $('.target-section').outerHeight()) {
            $(".target-text").addClass('actived');
        }
        if($(this).scrollTop() >= $('.target-section').offset().top + $('.target-section').outerHeight() || $(this).scrollTop()+$(window).height() <= $('.target-section').offset().top) {
            $(".target-text").removeClass('actived');
        }
    }
 
    });
	
});