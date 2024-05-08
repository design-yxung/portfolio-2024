$(window).ready(()=>{
    // 웹 접속 시 가장 먼저 뜨는 웹 커버 영역
    $('.title-btn').click(function(){
        $(this).parents('#webCover').fadeOut();
        $('#wrap').css('height','auto');
    });


    // 메인메뉴
    $(window).scroll(function(){
        let roll=$(window).scrollTop();
        console.log(roll)

        if(0<=roll<1838){
            $('.mainMenu>li').find('a').css('color','var(--textColor)')
            $('.mainMenu>li').eq(0).find('a').css('color','var(--mainColor)')
        }else{
            $('.mainMenu>li').eq(0).find('a').css('color','var(--textColor)')
        }
        if(roll>=1838){
            $('.mainMenu>li').find('a').css('color','var(--textColor)')
            $('.mainMenu>li').eq(1).find('a').css('color','var(--mainColor)')
        }else{
            $('.mainMenu>li').eq(1).find('a').css('color','var(--textColor)')
        }
    })

    $('.mainMenu>li').click(function(){
        $('.mainMenu>li').find('a').css('color','var(--textColor)')
        $(this).find('a').css('color','var(--mainColor)')
    })


    // 미모지 효과
    $('.mimo>a').click(function(){
        $(this).css('animation-name','scale')
        $(this).parents('.mimo').find('.text').css('transform','scale(1)')
    });


    // 스크롤 이벤트
    $(".active").each(function () {
        //개별적으로 wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 100;
                if (window.opera) delta = -delta;
            } else if (event.detail) delta = -event.detail / 3;
            
            var moveTop = null;
            //마우스휠을 위에서 아래로
            
            if (delta < 0) {
                moveTop = $(this).next().offset().top;
                //마우스휠을 아래에서 위로
            } else {
                if ($(this).prev().length != 0) {
                    moveTop = $(this).prev().offset().top;
                } else {
                    moveTop = $(this).parent().prev().offset().top;
                }
            }
            //화면이동 0.8초(800)
            $("html, body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 500,
                complete: function () {}
            });
        });
    });
    
    // 워크
    $('.workIdx>li').click(function(){
        let chk=$(this).index();
        console.log(chk);

        $('.workIdx>li').removeAttr('class');
        $(this).addClass('on');

        $('.workBoard>li').fadeOut(300);
        $('.workBoard>li').eq(chk).fadeIn(300);
    });

    // 스와이퍼 스크립트
    $('.workBoard>li:not(:first-child)').hide()
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        observer: true,
        observeParents: true,
        loop: true,
          slidesPerView: 1,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
    });
    // swiper.destroy(true, true);

    // 갤러리
    $('.swiper ul li a.moreview').click(function() {
        var itemID = $(this).attr('href');
        $(itemID).addClass('item_open');
        $('.workPop').fadeIn(500)
        return false;
    });
    $('.close').click(function() {
        $('.popupFrame').removeClass('item_open');
        $('.workPop').fadeOut(200)
        return false;
    });
});