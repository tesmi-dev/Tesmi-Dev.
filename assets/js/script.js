var nav = $('.overlay');
var headerOpen = $('.header__nav-toggle');

headerOpen.on('click', function () {
	nav.addClass('active');
})

var overlayClose = $('.overlay__toggler');

overlayClose.on('click', function () {
	nav.removeClass('active');
})

if ($(window).width() > 600) {
	nav.css('display', 'none');
}