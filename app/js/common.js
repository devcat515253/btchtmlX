$(function() {

	$(".js-dropdown-link").click(function (e) {
		e.preventDefault();

		var _this = $(this);
		_this.closest(".dropdown").toggleClass("_opened");
	});

	$(".header .nav-menu>li .dropdown-link").click(function (e) {
		e.preventDefault();
		var _this = $(this);
		_this.closest(".transform-to-mobile").toggleClass("sub-opened");
	});

		




	$(document).click( function(event){
		if( $(event.target).closest(".dropdown").length ) // родитель выпадающего списка
		return;
		$(".dropdown").removeClass("_opened");
		event.stopPropagation();
	});

	$(".rippler").rippler({
		effectClass     :  'rippler-effect',
	    effectSize      :  0,      // Default size (width & height)
	    addElement      :  'div',   // e.g. 'svg'(feature)
	    duration        :  400
	});

	$(".hamburger").click(function(e) {
		e.preventDefault();


		if ( $("body").hasClass("menu-mobile__opened")) {
			$(".transform-to-mobile").removeClass("sub-opened");
		}

		$(this).toggleClass("is-active");
		$("body").toggleClass("menu-mobile__opened");
		
	});



	// MAGNIFIC
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in',

		callbacks: {
			open: function() {
				$(".header, .page__footer, .page__content").addClass("effects-blur");

				$.magnificPopup.instance.close = function () {
					$(".header, .page__footer, .page__content").removeClass("effects-blur");
					$.magnificPopup.proto.close.call(this);
				};

			},
		}
	});

	

	



});
