$(function() {



	$(".hard-table .tr-default").click(function (e) {
		$(this).next(".tr-content").toggle(); 
	});

	$(".progress-bar > span").each(function() {

		var _thisChildrenSpan = $(this).children("span");
		var statusText = _thisChildrenSpan.attr("statusText");

		if ($(this).closest(".progress-bar").hasClass("green")) {
			$(this)
			.data("origWidth", $(this).width())
			.width(0)
			.animate({
				width: $(this).data("origWidth")
			}, 1200);

			setTimeout(function() {
				_thisChildrenSpan.text(statusText)
			}, 1200);
		}else{
			_thisChildrenSpan.text(statusText)
		}
		

		

		
	});



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

	

	

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	/*
 * Replace all SVG images with inline SVG
 */
 $('img.img-svg').each(function(){
 	var $img = $(this);
 	var imgID = $img.attr('id');
 	var imgClass = $img.attr('class');
 	var imgURL = $img.attr('src');

 	$.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = $(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
        	$svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
        	$svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        	$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

 });


});
