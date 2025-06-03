$(document).ready(function () {
	// wow 호출
	$('.wow').addClass('animated');
	new WOW().init();

    // 헤더
    $('header .btn-nav').on('click', function(){
        $(this).next('ul').show();
    });
    $('header nav ul').on('mouseleave', function(){
        $(this).hide();
    });

    // 코너 버튼
    $('.corner-wrap').on('mouseover', function(){
        $(this).find('.big-corner-wrap').addClass('active');
        $(this).find('.small-corner-wrap').addClass('active');
    }).on('mouseleave', function(){
        $(this).find('.big-corner-wrap').removeClass('active');
        $(this).find('.small-corner-wrap').removeClass('active');
    });
});