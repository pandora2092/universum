$(function() {

	$('.paetner__owl').owlCarousel({
		loop: true,
		nav: false,
		smartSpeed: 700,
		dots: false,
		responsiveClass: true,
		center: true,
		margin: 20,
		responsive: {
			0: {
				items: 1
			},
			500: {
				items: 3
			},
			762: {
				items: 4
			},
			1100: {
				items: 5
			}
		}
	});

	$('.menu_header').click(function() {
		$('.menu_header ~ ul').slideToggle('slow');
	});

});
