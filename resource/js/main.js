$(document).ready(function () {
    mainVisualSwiper();
});

function mainVisualSwiper() {
    
    
    var autoPlayDelay = 3000;
    var options = {
        //slidesPerView: 1,
        init: true,
        // Optional parameters
        loop: false,
        autoplay: {
            delay: autoPlayDelay
        },
        navigation: {
            nextEl: '.main-visual .swiper-button-next',
            prevEl: '.main-visual .swiper-button-prev',
        },
        
    };

    var mySwiper = new Swiper('.main-visual .swiper-container', options);
    var slidersCount = mySwiper.params.loop ? mySwiper.slides.length - 2 : mySwiper.slides.length;
    var widthParts = 100 / slidersCount;

    $('.swiper-counter .total').html(slidersCount);
    for (let i = 0; i < slidersCount; i++) {
        $('.swiper-progress-bar .progress-sections').append('<span></span>');
    }

    function initProgressBar() {
        let calcProgress = (slidersCount - 1) * (autoPlayDelay + mySwiper.params.speed);
        calcProgress += autoPlayDelay;
        $('.swiper-progress-bar .progress').animate({
            width: '100%'
        }, calcProgress, 'linear');
    }

    initProgressBar();

    mySwiper.on('slideChange', function () {
        let progress = $('.swiper-progress-bar .progress');

        $('.swiper-counter .current').html(this.activeIndex + 1);

        if (
            (
                this.progress == -0 || (this.progress == 1 && this.params.loop)
            ) && !progress.parent().is('.stopped')
        ) {
            progress.css('width', '0');
            if (this.activeIndex == 0) {
                initProgressBar();
            }
        }

        if (progress.parent().is('.stopped')) {
            progress.animate({
                'width': Math.round(widthParts * (this.activeIndex + 1)) + '%'
            }, this.params.speed, 'linear');
        }
    });

    mySwiper.on('touchMove', function () {
        $('.swiper-progress-bar .progress').stop().parent().addClass('stopped');
    });
    $('.main-visual .swiper-button-pause').click(function () {
		if ($(this).hasClass('off')) {
		  $(this).removeClass('off');
		  mySwiper.autoplay.start();
		} else {
		  $(this).addClass('off');
		  mySwiper.autoplay.stop();
		}
	  });

    mySwiper.on('slideChangeTransitionEnd', function () {
        if(this.activeIndex == 1){
            $(".main-visual").addClass("is-secondSlide");
        }else{
            $(".main-visual").removeClass("is-secondSlide");
        }
        if(this.activeIndex == 3){
            $("body, .section-first").addClass("is-thirdSlide");
        }else{
            $("body, .section-first").removeClass("is-thirdSlide");
        }
    });



}