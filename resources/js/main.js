function mainSwiper(){
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
        breakpoints: {
            681: {
                slidesPerView: 1,
            },
            1025: {
                slidesPerView: 2,
            },
        }
    });
}

function headerHeight(){
    var winWid = $(window).width();
    var mainContHeg = $('.main-cont').innerHeight();
    var header = $('header')

    if( winWid <= 1280 && winWid >= 769 ){
        header.css('height', mainContHeg + 'px')
    }else if ( winWid <= 769 && winWid >= 481 ){
        header.css('height', '72px')
    } else if( winWid <= 480){
        header.css('height', '64px')
    }
}

$(document).ready(function(){
    $.ajax({
        url: "/third/resources/js/portfolio.json",
        method: "GET",
        dataType: "json",
        success: function (data) {
            const itemCount = Object.keys(data.portfolio).length;

            for( i=1; i<=itemCount; i++) {
                thisClient = data.portfolio[i].client
                thisName = data.portfolio[i].name
                thisThumb = data.portfolio[i].thumb1
                thisOpen = data.portfolio[i].open
                thisUrl = data.portfolio[i].homepage
                thisTag = data.portfolio[i].tag

                const mainSlide =
                `<li class="swiper-slide">
                    <div class="list-cont corner-wrap">
                        
                        <div class="list-tag `+thisTag+`">
                            <p>DESIGN</p>
                            <p>PUBLISHING</p>
                        </div>

                        <p class="img-box"><img src="`+thisThumb+`" alt="`+thisClient+`"></p>
                        <p class="comp-name">`+thisName+`</p>
                        
                        <div class="info-wrap">
                            <dl>
                                <dt>Clien</dt>
                                <dd>`+thisClient+`</dd>
                            </dl>
                            <dl>
                                <dt>Open</dt>
                                <dd>`+thisOpen+`</dd>
                            </dl>
                            <dl>
                                <dt>URL</dt>
                                <dd>`+thisUrl+`</dd>
                            </dl>
                        </div>

                        <div class="small-corner-wrap">
                            <a href="/third/portfolio.php">포트폴리오 바로가기</a>
                        </div>
                    </div>
                </li>`

                $('.list-wrap .swiper-wrapper').append(mainSlide);
            }
             mainSwiper();

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
        },
        error: function () {
            console.error("AJAX 호출 실패");
        }
    });
    
    mainSwiper();



});

$(window).resize(function(){
    mainSwiper();
    headerHeight()
})