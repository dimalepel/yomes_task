$(document).ready(function () {
	// Modal gallery
	$('.open-gallery').click(function() {
    $.fancybox({
      href: '#modal-gallery',
			padding: 0,
			beforeShow: function() {
				$('.wrapper').addClass('blur');
				// Slider
				$('.owl-carousel').owlCarousel({
					center: true,
					smartSpeed: 1000,
					nav: true,
					navText: ['',''],
					items:2,
					loop:false,
					margin:2
				});
			},
			afterClose: function() {
				$('.wrapper').removeClass('blur');
			}
    });    
	});
});