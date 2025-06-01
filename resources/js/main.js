$(document).ready(function(){
    var mainListSwiper = new Swiper(".list-wrap .swiper-container", {
        direction: "horizontal",
        loop: true,
        slidesPerView: 3,
        spaceBetween: 16,
        observer: true,
        simulateTouch: true,
        navigation: { // 네비게이션 설정
            nextEl: '.swiper-arrow .swiper-arrow-next', // 다음 버튼 클래스명
            prevEl: '.swiper-arrow .swiper-arrow-prev', // 이번 버튼 클래스명
        },
    });

    $('.corner-wrap').on('mouseover', function(){
        $(this).find('.big-corner-wrap').addClass('active');
        $(this).find('.small-corner-wrap').addClass('active');
    }).on('mouseleave', function(){
        $(this).find('.big-corner-wrap').removeClass('active');
        $(this).find('.small-corner-wrap').removeClass('active');
    });
});