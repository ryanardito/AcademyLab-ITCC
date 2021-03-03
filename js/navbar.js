$(document).ready(function(){
	$(window).scroll(function(){
		$windowScroll = $(window).scrollTop();
		$outterHeightNav = $('nav').outerHeight();

		if ($windowScroll > $outterHeightNav) {
			$('nav').addClass('bg-nav-fixed');
			$('nav').css({'top' : '0px'});
		}
		else{
			$('nav').removeClass('bg-nav-fixed');
			$('nav').css({'top' : '-50px'});
		}
	});
});