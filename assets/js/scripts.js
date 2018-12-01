$(document).ready(function() {
	$(".home-hero").owlCarousel({
		items: 1,
		margin: 30,
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		dots: true,
		smartSpeed: 2000
	});

//========google map==================
	var map = new GMaps({
      el: '#map',
      lat: 24.1023471,
      lng: 88.9617942
	});

	
		

});
//=========scrollTop============

	$('.topup').click(function(){
	    $('html, body').animate({scrollTop:0}, 1000);
	    return false; 
	});

	$(window) .scroll(function (){
		if ($(this).scrollTop()> 300){
		$(".topup").fadeIn();
		}else{
			$(".topup").fadeOut();
		}
	});

// menu background
	$(window).on('scroll', function(){
	if ($(window).scrollTop() > 600){
	$('.header-top-area').addClass('menu-bg');}
	else{
	$('.header-top-area').removeClass('menu-bg');}});
