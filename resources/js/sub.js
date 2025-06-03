
document.addEventListener('DOMContentLoaded', function() {
    function pfListSwiper(){
        let pfThumbSwiper = new Swiper(".pf-list", {
            direction: "vertical",
            slidesPerView: 2,
            slidesPerGroup: 2,
            simulateTouch: true,
            pagination: {
                el: '.pf-list .pt-swiper-pagenation',
                clickable: true,
                type: 'bullets',
            },
            navigation: { // 네비게이션 설정
                nextEl: '.swiper-arrow .swiper-arrow-next', // 다음 버튼 클래스명
                prevEl: '.swiper-arrow .swiper-arrow-prev', // 이번 버튼 클래스명
            },
        });
    }

    var contents = $('.contents')
    var wrap = $('.wrap');
        wrapHeg = wrap.innerHeight();
        pfTitHeg = $('.portfolio .cont-wrap .cont1').innerHeight();
        cont2Heg = wrapHeg - pfTitHeg - 16;
        pfList = $('.portfolio .cont-wrap');
   
        pfList.find('.cont2').css('height', cont2Heg + 'px');

    if( contents.hasClass('pf-view-active')){  
        var pfListHeg = pfList.find('.pf-list-wrap').height();

        pfListSwiper();
        
        pfList.find('.pf-list').css('height', pfListHeg + 'px');
        console.log(cont2Heg, pfListHeg);

    } else { 
        var pfListHeg = pfList.find('.pf-list-wrap').height();

        pfListSwiper();

        pfList.find('.pf-list').css('height', pfListHeg + 'px');
        pfList.find('.swiper-slide .thumbnail').css('height', pfListHeg + 'px');

    }
    
});