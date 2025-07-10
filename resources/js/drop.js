
function pfListSwiper(){
    let pfThumbSwiper = new Swiper(".pf-list", {
        direction: "vertical",
        slidesPerView: 2,
        slidesPerGroup: 2,
        simulateTouch: true,
        pagination: {
            el: '.pf-list-wrap .pt-swiper-pagenation',
            clickable: true,
            type: 'bullets',
        },
        navigation: { // 네비게이션 설정
            nextEl: '.swiper-arrow .swiper-arrow-next', // 다음 버튼 클래스명
            prevEl: '.swiper-arrow .swiper-arrow-prev', // 이번 버튼 클래스명
        },
    });
}
function pfListHeg(){
    var wrap = $('.wrap');
        wrapHeg = wrap.innerHeight();
        pfTitHeg = $('.portfolio .cont-wrap .cont1').innerHeight();
        cont2Heg = wrapHeg - pfTitHeg - 16;
        pfList = $('.portfolio .cont-wrap');
    var pfListHegight = $('.pf-cont-wrap').height();
        
    $('.portfolio .cont-wrap .cont2').css('height', cont2Heg + 'px');
    $('.portfolio .pf-cont-wrap').css('height', pfListHegight + 'px');
    pfList.find('.swiper-slide .thumbnail').css('height', pfListHegight + 'px');
}


                if( $('#pf_cont').hasClass('pf-view-active')){

                   $('.pf-cont-wrap').css('height', 'inherit');
                   $('.pf-cont-wrap').css('height', '100%');
                }

pfList = $('.portfolio .cont-wrap');
                        $('.portfolio .cont2 .pt-cont-wrap').css('height', '100%');
        $('.portfolio .contents.pf-view-active .swiper-wrapper').css({
            'display':'block'
            // 'grid-template-columns': '1fr',
            // 'grid-template-rows': 'repeat(2, 1fr)',
            // 'gap': '20px',
            // 'height': 'auto'
        })
        $('.portfolio .cont2 .pf-list .swiper-slide').css('height', 'calc((100% - 20px) / 2) !important');
        pfList.find('.swiper-slide .thumbnail').css('height', '100%');



            if( $('#pf_cont').hasClass('pf-view-active') ){
        $('.portfolio .cont2 .pt-cont-wrap').css('height', '100%');
        $('.portfolio .contents.pf-view-active .swiper-wrapper').css({
            'display':'block',
            'height': 'calc((100% - 20px) / 2)'
        })
        // $('.portfolio .cont2 .pf-list .swiper-slide').css('height', 'calc((100% - 20px) / 2) !important');
        pfList.find('.swiper-slide .thumbnail').css('height', '100%');
    } else {

    }




function pfCallList(){
    $.ajax({
        url: "/third/resources/js/portfolio.json",
        method: "GET",
        dataType: "json",
        success: function (data) {
            const itemCount = Object.keys(data.portfolio).length;

            for( i=1; i<=itemCount; i++) {
                thisName = data.portfolio[i].name
                thisThumb = data.portfolio[i].thumb2
                thisTag = data.portfolio[i].tag
                thisDevice = data.portfolio[i].device

                const pfThumbSlide =
                `<li class="swiper-slide `+thisDevice+`">
                    <div class="thumbnail">
                        <p class="img-box"><img src="`+thisThumb+`" alt="`+thisName+`"></p>
                        <div class="tit">
                            <p>`+thisName+`</p>
                            <div class="tag `+thisTag+`">
                                <p class="t-plan">PLANNING</p>
                                <p class="t-design">DESIGN</p>
                                <p class="t-pub">PUBLISHING</p>
                            </div>
                        </div>
                    </div>
                </li>`

                $('.pf-list .swiper-wrapper').append(pfThumbSlide);
            }

            pfListHeg()

            let pfThumbSwiper = new Swiper(".pf-list", {
                direction: "vertical",
                slidesPerView: 2,
                slidesPerGroup: 2,
                simulateTouch: true,
                pagination: {
                    el: '.pf-list-wrap .pt-swiper-pagenation',
                    clickable: true,
                    type: 'bullets',
                },
                navigation: { // 네비게이션 설정
                    nextEl: '.swiper-arrow .swiper-arrow-next', // 다음 버튼 클래스명
                    prevEl: '.swiper-arrow .swiper-arrow-prev', // 이번 버튼 클래스명
                },
            });
        },
        error: function () {
            console.error("AJAX 호출 실패");
        }
    });
}

function pfCallDetail(){
        $.ajax({
        url: "/third/resources/js/portfolio.json",
        method: "GET",
        dataType: "json",
        success: function (data) {
            const itemCount = Object.keys(data.portfolio).length;
            $('.portfolio .thumbnail').on('click', function(){
                var thisInx = $(this).parent('li').index();
                    newInx = thisInx + 1;

                    thisName = data.portfolio[newInx].name
                    thisThumb = data.portfolio[newInx].thumb3
                    thisExp = data.portfolio[newInx].exp
                    thisStart = data.portfolio[newInx].start
                    thisOpen = data.portfolio[newInx].open
                    thisEntire = data.portfolio[newInx].entire
                    thisAsset = data.portfolio[newInx].asset
                    thisContri1 = data.portfolio[newInx].contri1
                    thisContri2 = data.portfolio[newInx].contri2
                    thisContri3 = data.portfolio[newInx].contri3
                    thisHome = data.portfolio[newInx].homepage

                const viewPortfolio =
                `<div class="corner-wrap">
                    <p class="pf-name">`+thisName+`</p>  

                    <div class="view-cont">
                        <div class="pf-cont-wrap">
                            <p class="pf-vis"><img src="`+thisThumb+`" alt="`+thisName+`"></p>
                            <div class="c-say">
                                <p class="tit">Client say : </p>
                                <p class="txt">
                                </p>
                            </div>

                            <div class="pf-info clear">
                                <div class="pf-left">
                                    <p class="pf-tit">`+thisName+`</p>
                                    <p class="pf-txt">`+thisExp+`</p>
                                    <p class="cha-wrap">
                                        <span></span>
                                    </p>
                                    <p class="date">`+thisStart+` - `+thisOpen+`</p>
                                </div>
                                <div class="pf-right">
                                    <p class="img-box"><img src="`+thisEntire+`" alt="`+thisName+`"></p>
                                </div>
                            </div>

                            <div class="pf-detail">
                                <p class="tit">Detail</p>
                                <ul class="detail-wrap"></ul>
                            </div>

                            <div class="pf-asset">
                                <p class="tit">Asset</p>
                                <p class="img-box"><img src="`+thisAsset+`" alt="`+thisName+`"></p>
                            </div>

                            <div class="pt-contri">
                                <p class="tit">Contribution Review</p>
                                <div class="contri-wrap">
                                    <div class="contri plan">
                                        <p class="bar"><span class="gage">`+thisContri1+`</span></p>
                                        <dl>
                                            <dt>Project plan</dt>
                                            <dd><span>`+thisContri1+`</span>%</dd>
                                        </dl>
                                    </div>
                                    <div class="contri design">
                                        <p class="bar"><span class="gage">`+thisContri2+`</span></p>
                                        <dl>
                                            <dt>Design</dt>
                                            <dd><span>`+thisContri2+`</span>%</dd>
                                        </dl>
                                    </div>
                                    <div class="contri pub">
                                        <p class="bar"><span class="gage">`+thisContri3+`</span></p>
                                        <dl>
                                            <dt>Publishing</dt>
                                            <dd><span>`+thisContri3+`</span>%</dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>

                            <div class="btn-wrap"><button class="btn btn-cls">닫기</button></div>
                        </div>

                        <div class="small-corner-wrap">
                            <a href="#none" class="btn-corner-cls" title="닫기"></a>
                        </div>
                    </div>
                </div>`
                
                $('.view-wrap').html(viewPortfolio);
                $('#pf_cont').addClass('pf-view-active');

                $('.portfolio .view-wrap .contri .bar').each(function(){
                    var $this = $(this);
                        thisChild = $this.children('.gage')
                        thisGage = thisChild.text();

                    thisChild.css('width', thisGage + '%');
                });


                // 고객요청
                const thisSay = data.portfolio[newInx].say 
                for (const key in thisSay) {
                    const chaSpan = document.createElement("span");
                    chaSpan.textContent = thisSay[key];

                    $('.c-say .txt').append(chaSpan);
                }

                // 특징
                const thisChaWrap = data.portfolio[newInx].character 
                for (const key in thisChaWrap) {
                    const chaSpan = document.createElement("span");
                    chaSpan.textContent = thisChaWrap[key];

                    $('.cha-wrap').append(chaSpan);
                }

                // 디테일
                const thisDetail = data.portfolio[newInx].detail 
                for (const key in thisDetail) {
                    const detailLi = document.createElement("li");
                    const detailImg = document.createElement("img");

                        detailImg.src = thisDetail[key]; 
                        detailLi.appendChild(detailImg);

                    $('.detail-wrap').append(detailLi);
                }

                // 코너 효과 및 닫기버튼
                $('.corner-wrap').on('mouseover', function(){
                    $(this).find('.small-corner-wrap').addClass('active');
                }).on('mouseleave', function(){
                    $(this).find('.small-corner-wrap').removeClass('active');
                });


                // 포트폴리오 닫기 (상단)
                $(document).on('click', '.small-corner-wrap a', function(){
                    $('#pf_cont').removeClass('pf-view-active');
                });

                // 포트폴리오 닫기(하단)
                $(document).on('click', '.view-wrap .btn-wrap .btn-cls', function(){
                    $('#pf_cont').removeClass('pf-view-active');
                })
            });
        },
        error: function () {
            console.error("AJAX 호출 실패");
        }
    });
}

function pfListHeg(){
    var wrap = $('.wrap');
        wrapHeg = wrap.innerHeight();
        pfTitHeg = $('.portfolio .cont-wrap .cont1').innerHeight();
        cont2Heg = wrapHeg - pfTitHeg - 16;
        pfList = $('.portfolio .cont-wrap');
    var pfListHegight = $('.pf-cont-wrap').height();
        
    $('.portfolio .cont-wrap .cont2').css('height', cont2Heg + 'px');
    $('.portfolio .pf-cont-wrap').css('height', pfListHegight + 'px');
    pfList.find('.swiper-slide .thumbnail').css('height', pfListHegight + 'px');


}


        $('.portfolio .thumbnail').on('click', function(){
            $.ajax({
                url: "/third/resources/js/portfolio.json",
                method: "GET",
                dataType: "json",
                success: function (data) {
                    const itemCount = Object.keys(data.portfolio).length;
                var thisInx = $(this).parent('li').index();
                    newInx = thisInx + 1;

                    thisName = data.portfolio[newInx].name
                    thisThumb = data.portfolio[newInx].thumb3
                    thisExp = data.portfolio[newInx].exp
                    thisStart = data.portfolio[newInx].start
                    thisOpen = data.portfolio[newInx].open
                    thisEntire = data.portfolio[newInx].entire
                    thisAsset = data.portfolio[newInx].asset
                    thisContri1 = data.portfolio[newInx].contri1
                    thisContri2 = data.portfolio[newInx].contri2
                    thisContri3 = data.portfolio[newInx].contri3
                    thisHome = data.portfolio[newInx].homepage

                const viewPortfolio =
                `<div class="corner-wrap">
                    <p class="pf-name">`+thisName+`</p>  

                    <div class="view-cont">
                        <div class="pf-cont-wrap">
                            <p class="pf-vis"><img src="`+thisThumb+`" alt="`+thisName+`"></p>
                            <div class="c-say">
                                <p class="tit">Client say : </p>
                                <p class="txt">
                                </p>
                            </div>

                            <div class="pf-info clear">
                                <div class="pf-left">
                                    <p class="pf-tit">`+thisName+`</p>
                                    <p class="pf-txt">`+thisExp+`</p>
                                    <p class="cha-wrap">
                                        <span></span>
                                    </p>
                                    <p class="date">`+thisStart+` - `+thisOpen+`</p>
                                </div>
                                <div class="pf-right">
                                    <p class="img-box"><img src="`+thisEntire+`" alt="`+thisName+`"></p>
                                </div>
                            </div>

                            <div class="pf-detail">
                                <p class="tit">Detail</p>
                                <ul class="detail-wrap"></ul>
                            </div>

                            <div class="pf-asset">
                                <p class="tit">Asset</p>
                                <p class="img-box"><img src="`+thisAsset+`" alt="`+thisName+`"></p>
                            </div>

                            <div class="pt-contri">
                                <p class="tit">Contribution Review</p>
                                <div class="contri-wrap">
                                    <div class="contri plan">
                                        <p class="bar"><span class="gage">`+thisContri1+`</span></p>
                                        <dl>
                                            <dt>Project plan</dt>
                                            <dd><span>`+thisContri1+`</span>%</dd>
                                        </dl>
                                    </div>
                                    <div class="contri design">
                                        <p class="bar"><span class="gage">`+thisContri2+`</span></p>
                                        <dl>
                                            <dt>Design</dt>
                                            <dd><span>`+thisContri2+`</span>%</dd>
                                        </dl>
                                    </div>
                                    <div class="contri pub">
                                        <p class="bar"><span class="gage">`+thisContri3+`</span></p>
                                        <dl>
                                            <dt>Publishing</dt>
                                            <dd><span>`+thisContri3+`</span>%</dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>

                            <div class="btn-wrap"><button class="btn btn-cls">닫기</button></div>
                        </div>

                        <div class="small-corner-wrap">
                            <a href="#none" class="btn-corner-cls" title="닫기"></a>
                        </div>
                    </div>
                </div>`
                
                $('.view-wrap').html(viewPortfolio);
                $('#pf_cont').addClass('pf-view-active')
                

                $('.portfolio .view-wrap .contri .bar').each(function(){
                    var $this = $(this);
                        thisChild = $this.children('.gage')
                        thisGage = thisChild.text();

                    thisChild.css('width', thisGage + '%');
                });


                // 고객요청
                const thisSay = data.portfolio[newInx].say 
                for (const key in thisSay) {
                    const chaSpan = document.createElement("span");
                    chaSpan.textContent = thisSay[key];

                    $('.c-say .txt').append(chaSpan);
                }

                // 특징
                const thisChaWrap = data.portfolio[newInx].character 
                for (const key in thisChaWrap) {
                    const chaSpan = document.createElement("span");
                    chaSpan.textContent = thisChaWrap[key];

                    $('.cha-wrap').append(chaSpan);
                }

                // 디테일
                const thisDetail = data.portfolio[newInx].detail 
                for (const key in thisDetail) {
                    const detailLi = document.createElement("li");
                    const detailImg = document.createElement("img");

                        detailImg.src = thisDetail[key]; 
                        detailLi.appendChild(detailImg);

                    $('.detail-wrap').append(detailLi);
                }
                },
                error: function () {
                    console.error("AJAX 호출 실패");
                }
            });

                // 코너 효과 및 닫기버튼
                $('.corner-wrap').on('mouseover', function(){
                    $(this).find('.small-corner-wrap').addClass('active');
                }).on('mouseleave', function(){
                    $(this).find('.small-corner-wrap').removeClass('active');
                });


                // 포트폴리오 닫기 (상단)
                $(document).on('click', '.small-corner-wrap a', function(){
                    $('#pf_cont').removeClass('pf-view-active');
                });

                // 포트폴리오 닫기(하단)
                $(document).on('click', '.view-wrap .btn-wrap .btn-cls', function(){
                    $('#pf_cont').removeClass('pf-view-active');
                })
            });





            const pfPreview =
                `<div class="preview-box">
                    <div class="preview-img">
                        <p class="img-box">
                            <img src="`+thisThumb+`" alt="`+thisName+`">
                        </p>

                        <div class="tit-box">
                            <p class="tit-cate `+thisFeat+`">
                                <span>Planning</span>
                                <span>Design</span>
                                <span>Publishing</span>
                            </p>

                            <p class="pre-tit">`+thisName+`</p>
                            <p class="pre-client">`+thisClient+` <span class="pre-year">`+thisYear+`</span></p>
                        </div>

                        <div class="view-pf"><a href="#none">포트폴리오 보기</a></div>
                    </div>
                </div>`