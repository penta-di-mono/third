<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Penta Di Mono 3rd</title>
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <link rel="icon" href="/third/favicon.ico" type="image/x-icon">


    <!-- css -->
    <link rel="stylesheet" href="/third/resources/css/animate.css">
    <link rel="stylesheet" href="/third/resources/css/swiper.css">
    <link rel="stylesheet" href="/third/resources/css/common.css">
    <link rel="stylesheet" href="/third/resources/css/style.css">

    <!-- js -->
    <script src="/third/resources/js/jquery-3.7.1.min.js"></script>
    <script src="/third/resources/js/jquery.easing.min.js"></script>
    <script src="/third/resources/js/swiper.min.js"></script>
    <script src="/third/resources/js/wow.min.js"></script>
    <script src="/third/resources/js/common.js"></script>
    <script src="/third/resources/js/sub.js"></script>

</head>
<body>
    <div id="container" class="portfolio">
        <div class="wrap">
            <!-- 헤더 -->
            <?php include 'header.php'; ?>
        

            <div id="pf_cont" class="contents">
                <div class="thumb-wrap">
                    <div class="cont-wrap">
                        <div class="cont cont1">
                            <h3>Portfolio</h3>

                            <div class="cate-wrap">
                                <a href="#none" data-device="all" class="active">ALL</a>
                                <a href="#none" data-device="web">WEB</a>
                                <a href="#none" data-device="mobile">MOBILE</a>
                            </div>
                        </div>
                        <div class="cont cont2">
                            <div class="pf-list-wrap">
                                <ul id="pf_list"></ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="preview_wrap" class="preview-wrap"></div>
                <div class="view-wrap"></div>
            </div>
        </div>
    </div>
</body>
</html>