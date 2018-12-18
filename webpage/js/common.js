$(window).on('load', function () {
"use strict";

	// Preloader
	$('.preloader').fadeOut(500);
	$('.header-image-container').addClass('slideInDown');
	// Preloader

});

// Main js
$(document).ready(function(){
"use strict";

	// Remove paralax in IE
	if (navigator.userAgent.match(/Trident\/7\./)) {
		$('body').on("mousewheel", function () {
			// remove default behavior
			event.preventDefault();

			//scroll without smoothing
			var wheelDelta = event.wheelDelta;
			var currentScrollPosition = window.pageYOffset;
			window.scrollTo(0, currentScrollPosition - wheelDelta);
		});
	}
	// Remove paralax in IE

	// Smooth scroll
	$('a[href*="#"]:not([href="#"])').on('click', function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 500);
		return false;}
		}
	});
	// Smooth scroll

	// ScrollSpy offset
	$('.navbar').scrollspy({ offest: 70 });
	// ScrollSpy offset


	$(document).ready( function () {
    // Add return on top button
    $('body').append('<div id="returnOnTop" title="Retour en haut">&nbsp;</div>');

    // On button click, let's scroll up to top
    $('#returnOnTop').click( function() {
        $('html,body').animate({scrollTop: 0}, 'slow');
    });
});

$(window).scroll(function() {
    // If on top fade the bouton out, else fade it in
    if ( $(window).scrollTop() == 0 )
        $('#returnOnTop').fadeOut();
    else
        $('#returnOnTop').fadeIn();
});



});
