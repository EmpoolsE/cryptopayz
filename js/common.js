$(document).ready(function() {
 $(document).scroll(function(){
 	var temp = $(window).height()*0.2;
 	var temp1 = $(window).height()*0.5;
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
 
    });
	
});