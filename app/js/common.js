$(function() {

	$(".js-dropdown-link").click(function (e) {
		e.preventDefault();

		var _this = $(this);

		_this.closest(".dropdown").toggleClass("_opened");

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

		$(this).toggleClass("is-active");
		$("body").toggleClass("menu-mobile__opened");
	});



});
