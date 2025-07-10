function pfCallList(){
    $.ajax({
        url: "/third/resources/js/portfolio.json",
        method: "GET",
        dataType: "json",
        success: function (data) {
            const itemCount = Object.keys(data.portfolio).length;

            for( i=1; i<=itemCount; i++) {
                thisClient = data.portfolio[i].client
                thisName = data.portfolio[i].name
                thisThumb = data.portfolio[i].thumb2
                thisTag = data.portfolio[i].tag
                thisDevice = data.portfolio[i].device
                thisFeat = data.portfolio[i].feat
                thisYear = data.portfolio[i].open

                const pfThumbSlide =
                `<li class="`+thisDevice+`">
                    <div class="thumbnail corner-wrap">
                        <div class="thumb-img">
                            <div class="img-box">
                                <img src="`+thisThumb+`" alt="`+thisName+`">
                            </div>
                            <div class="big-corner-wrap pf-coner">
                                <a href="#none">보기</a>
                            </div>
                        </div>
                        <div class="tit">
                            <p class="pj-name">`+thisName+`</p>
                            <p>`+thisClient+`</p>
                        </div>
                        
                    </div>
                </li>`                

                $('#pf_list').append(pfThumbSlide);

                $('.corner-wrap').on('mouseover', function(){
                    $(this).find('.big-corner-wrap').addClass('active');
                    $(this).find('.small-corner-wrap').addClass('active');
                }).on('mouseleave', function(){
                    $(this).find('.big-corner-wrap').removeClass('active');
                    $(this).find('.small-corner-wrap').removeClass('active');
                });
            }
        },
        error: function () {
            console.error("AJAX 호출 실패");
        }
    });
}

function pfListHeg(){
    var wrap = $('.wrap');
        wrapHeg = wrap.innerHeight();
        
        $('.portfolio .thumb-wrap').css('height', wrapHeg + 'px' );
}
function pfContHeg(pd){
    var wrap = $('.wrap');
        container = $('#container');
        wrapHeg = wrap.innerHeight();
        contPad = wrapHeg + ([pd] * 2)

        console.log(contPad)
       $('#container.portfolio').css('height', contPad + 'px' )
}

function pfCallPreview(){
    $.ajax({
        url: "/third/resources/js/portfolio.json",
        method: "GET",
        dataType: "json",
        success: function (data) {
            const itemCount = Object.keys(data.portfolio).length;

            function previewBox(i){
                thisThumb = data.portfolio[i].thumb4
                thisClient = data.portfolio[i].client
                thisName = data.portfolio[i].name
                thisFeat = data.portfolio[i].feat
                thisYear = data.portfolio[i].open
            
                const pfPreview =
                `<div class="preview-box" data-box-index="`+i+`">
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
                </div>`

                $('#preview_wrap').html(pfPreview);
            }


            previewBox(i = 1);

            $(document).on('click', '#pf_list li', function(){
                var thisInx = $(this).index();
                    i = thisInx + 1;

                previewBox(i);
            });
        },
        error: function () {
            console.error("AJAX 호출 실패");
        }
    });
}

function pfCallDetail(i){
    $.ajax({
        url: "/third/resources/js/portfolio.json",
        method: "GET",
        dataType: "json",
        success: function (data) {
            const itemCount = Object.keys(data.portfolio).length;

                thisName = data.portfolio[i].name
                thisThumb = data.portfolio[i].thumb3
                thisExp = data.portfolio[i].exp
                thisStart = data.portfolio[i].start
                thisOpen = data.portfolio[i].open
                thisEntire = data.portfolio[i].entire
                thisAsset = data.portfolio[i].asset
                thisContri1 = data.portfolio[i].contri1
                thisContri2 = data.portfolio[i].contri2
                thisContri3 = data.portfolio[i].contri3
                thisHome = data.portfolio[i].homepage

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

            // 코너 효과 및 닫기버튼
            $('.corner-wrap').on('mouseover', function(){
                $(this).find('.small-corner-wrap').addClass('active');
            }).on('mouseleave', function(){
                $(this).find('.small-corner-wrap').removeClass('active');
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
}

$(document).on('click', '#preview_wrap .view-pf', function(){
    var thisInx = $(this).parent('.preview-box').data('box-index');
        newInx = thisInx;

    pfCallDetail(i = newInx);


    // 포트폴리오 닫기 (상단)
    $(document).on('click', '.small-corner-wrap a', function(){
        $('#pf_cont').removeClass('pf-view-active');
    });

    // 포트폴리오 닫기(하단)
    $(document).on('click', '.view-wrap .btn-wrap .btn-cls', function(){
        $('#pf_cont').removeClass('pf-view-active');
    })

})

$(document).ready(function(){
    var winWid = $(window).innerWidth();

    if( winWid > 1360){
        pfListHeg();
    }
    

    pfCallList();
    pfCallPreview();
    
    // 카테고리 선택
    $('.portfolio .cate-wrap > a').on('click', function(){
        var $this = $(this)
        var devBtn = $(this).data('device');
        
        $('.portfolio .cate-wrap > a').removeClass('active');
        $this.addClass('active');

        if( devBtn === "all" ){
             $('#pf_list').find('li').show();
        } else {
            $('#pf_list').find('li').hide();
            $('#pf_list').find('.'+ devBtn).show();
        }
    })
});