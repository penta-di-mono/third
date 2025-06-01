<header>
    <div class="header-wrap">
        <nav>
            <button class="btn-nav">메뉴열기</button>
            <ul>
                <li><a href="/third/about.php">ABOUT MI</a></li>
                <li><a href="/third/portfolio.php">PORTFOLIO</a></li>
            </ul>
        </nav>

        <h1>
            <a href="/third/index.php">
                <span>LEE HYEON MI</span>
                <span class="line"></span>
                <span>2025</span>
            </a>
        </h1>

        <div id="sub_btn_wrap" class="sub-btn-wrap">
            <div class="main-sub-btn swiper-arrow">
                <div class="swiper-arrow-prev"></div>
                <div class="swiper-arrow-next"></div>
            </div>

            <div class="about-sub-btn">
                <p class="email-to-mi"><span>madame_apple@naver.com</span></p>
                <p class="call-to-mi"><a href="tel:010-3554-5467"></a></p>
            </div>

            <div class="portfolio-sub-btn swiper-arrow">
                <div class="swiper-arrow-prev"></div>
                <div class="swiper-arrow-next"></div>
            </div>
        </div>
    </div>
</header>

<script>
    $(document).ready(function(){
        var container = $('#container');
        
        if( container.hasClass('main') ){
            $('.main-sub-btn').addClass('on')
        } else if( container.hasClass('about') ){
            $('.about-sub-btn').addClass('on')
        } else { 
            $('.portfolio-sub-btn').addClass('on')
        }
    })
</script>