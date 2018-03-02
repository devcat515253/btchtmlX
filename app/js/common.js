$(function() {

    // 4. Пишем скрипт который создаст и отобразит карту Google Maps на странице.

// Определяем переменную map
    var map;

// Функция initMap которая отрисует карту на странице
    function initMap() {

        // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
        map = new google.maps.Map(document.getElementById('map'), {
            // При создании объекта карты необходимо указать его свойства
            // center - определяем точку на которой карта будет центрироваться
            center: {lat: 55.760186, lng: 37.618711},
            // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
            zoom: 13,

            // Добавляем свои стили для отображения карты
            styles: [ { "featureType": "administrative", "elementType": "all", "stylers": [ { "visibility": "simplified" } ] }, { "featureType": "administrative.province", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "administrative.locality", "elementType": "all", "stylers": [ { "visibility": "simplified" } ] }, { "featureType": "administrative.neighborhood", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "landscape", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, { "featureType": "landscape.man_made", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, { "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [ { "lightness": "-2" }, { "hue": "#ffcc00" }, { "saturation": "0" } ] }, { "featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [ { "saturation": "9" }, { "lightness": "-5" } ] }, { "featureType": "poi", "elementType": "all", "stylers": [ { "visibility": "simplified" } ] }, { "featureType": "poi", "elementType": "labels.text", "stylers": [ { "hue": "#0024ff" } ] }, { "featureType": "poi", "elementType": "labels.text.stroke", "stylers": [ { "visibility": "on" }, { "lightness": "-100" } ] }, { "featureType": "poi", "elementType": "labels.icon", "stylers": [ { "visibility": "on" } ] }, { "featureType": "poi.attraction", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "poi.business", "elementType": "labels", "stylers": [ { "visibility": "simplified" } ] }, { "featureType": "poi.business", "elementType": "labels.text.fill", "stylers": [ { "color": "#111e6c" } ] }, { "featureType": "poi.business", "elementType": "labels.text.stroke", "stylers": [ { "visibility": "on" }, { "lightness": "-100" } ] }, { "featureType": "poi.business", "elementType": "labels.icon", "stylers": [ { "hue": "#0024ff" }, { "saturation": "-62" }, { "visibility": "simplified" } ] }, { "featureType": "poi.government", "elementType": "all", "stylers": [ { "visibility": "simplified" } ] }, { "featureType": "poi.medical", "elementType": "all", "stylers": [ { "visibility": "simplified" } ] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [ { "saturation": "6" }, { "lightness": "-23" } ] }, { "featureType": "road", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, { "featureType": "road", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "transit", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, { "featureType": "transit", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "water", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, { "featureType": "water", "elementType": "geometry", "stylers": [ { "color": "#12608d" } ] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [ { "lightness": "0" }, { "color": "#111e6c" } ] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [ { "visibility": "off" } ] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [ { "visibility": "off" } ] } ]

        });

        // Создаем маркер на карте
        var marker = new google.maps.Marker({

            // Определяем позицию маркера
            position: {lat: 55.762186, lng: 37.625711},

            // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
            map: map,

            // Пишем название маркера - появится если навести на него курсор и немного подождать
            title: 'Наш маркер: Большой театр',

            // Укажем свою иконку для маркера
            icon: '../img/map-marker.svg'
        });

    }

    try{
        $(window).on('load', function() {
            initMap();
        });

    } catch(er) {}


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
