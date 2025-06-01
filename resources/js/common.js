$(document).ready(function () {
	// wow 호출
	$('.wow').addClass('animated');
	new WOW().init();

    $('header .btn-nav').on('click', function(){
        $(this).next('ul').show();
    });

    $('header nav ul').on('mouseleave', function(){
        $(this).hide();
    });
});