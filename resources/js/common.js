function hdSubBtn(){
    var winWid = $(window).innerWidth();
    var winTop = $(window).scrollTop();

    if( winWid <= 768 ){
        if( winTop > 200 ){
            $('header .sub-btn-wrap').addClass('active');
        } else { 
            $('header .sub-btn-wrap').removeClass('active');
        }
    }
}
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
    var winWid = $(window).innerWidth();
    if( winWid > 1024 ){
        $('.corner-wrap').on('mouseover', function(){
            $(this).find('.big-corner-wrap').addClass('active');
            $(this).find('.small-corner-wrap').addClass('active');
        }).on('mouseleave', function(){
            $(this).find('.big-corner-wrap').removeClass('active');
            $(this).find('.small-corner-wrap').removeClass('active');
        });
    } else { 
        $(this).find('.big-corner-wrap').addClass('active');
        $(this).find('.small-corner-wrap').addClass('active');
    }

    hdSubBtn();
});

$(window).scroll(function(){
    hdSubBtn();
})