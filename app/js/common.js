$(function() {


    //  active currency class
    $(".exchange .column .subblock-content .btns .item").click(function (e) {
        $(this).closest('.btns').find('.is-selected').removeClass('is-selected');
        $(this).addClass('is-selected');
    });

	// faq <

	// scroll to element
    $(".inner .navbars .item__nav a").click(function (e) {
        e.preventDefault();

        $(".inner .list-numeric.drop .item__head").removeClass('opened');
        $(".inner .list-numeric.drop .item__content").slideUp();

        var targetId = $(this).attr('href');


        $('html, body').animate({
            scrollTop: $(targetId).offset().top - $(window).height()/2
        }, 1000);

        $(targetId).find('.item__content').slideDown();
        $(targetId).find('.item__head').addClass('opened');
    });

	(function() {
        $(".inner .list-numeric.drop .item__content").hide();
        $(".inner .list-numeric.drop .item__head.opened").closest('.item').find('.item__content').slideDown();
	})();



    $(".inner .list-numeric.drop .item__head").click(function (e) {
        $(this).toggleClass('opened').closest('.item').find('.item__content').slideToggle();
    });

    // faq >

	$(".js-view-other").click(function (e) {
		e.preventDefault();

		var _this = $(this);
		var text = _this.find(".item").attr("text");
		var textReplace = _this.find(".item").attr("replaceText");


		if (_this.closest(".currencies").hasClass("hidden-opened")) {
			_this.closest(".currencies").removeClass("hidden-opened");
			_this.find(".item span").text(text);
		}else{
			_this.closest(".currencies").addClass("hidden-opened");
			_this.find(".item span").text(textReplace);
		}
	});

	$(".js-select-currencies .item:not(.js-view-other .item)").click(function (e) {
		e.preventDefault();
		$(this).closest(".column").find(".currencies .item").removeClass("is-selected");
		$(this).addClass("is-selected");
	});

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
