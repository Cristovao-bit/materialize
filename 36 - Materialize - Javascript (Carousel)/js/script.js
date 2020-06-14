$(document).ready(function(){

    $('.carousel').carousel({
    	duration: 1000,
    	shift: 10
    });

    $('.next').click(function(){
    	$('.carousel').carousel('next')    	
    });

    $('.prev').click(function(){
    	$('.carousel').carousel('prev')
    });

    $('.carousel.carousel-slider').carousel({
    	fullWidth: true
    });

});