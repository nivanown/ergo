$(document).ready(function(){

	/*- header -*/
	$(window).scroll(function(){
		if ($(this).scrollTop() > 0) {
			$('.header').addClass('fixed');
		} else {
			$('.header').removeClass('fixed');
		}
	});

	/*- project-navi -*/
	var projectNavi = new Swiper(".project-navi", {
        slidesPerView: 5,
        spaceBetween: 7,
        navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
        },
        breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: 5,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 5,
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 5,
			},
        },
    });

	/*- project tabs -*/
    $('#tabs1.project-navi .swiper-slide:first-child').addClass('active');
	$('#content1 .project-content__item').hide();
	$('#content1 .project-content__item:first').show();

	$('#tabs1.project-navi .swiper-slide').click(function(){
		$('#tabs1.project-navi .swiper-slide').removeClass('active');
		$(this).addClass('active');
		$('#content1 .project-content__item').hide();

		var activeTab = $(this).find('a').attr('href');
		$(activeTab).fadeIn();
		return false;
	});

	$('#tabs2.project-navi .swiper-slide:first-child').addClass('active');
	$('#content2 .project-content__item').hide();
	$('#content2 .project-content__item:first').show();

	$('#tabs2.project-navi .swiper-slide').click(function(){
		$('#tabs2.project-navi .swiper-slide').removeClass('active');
		$(this).addClass('active');
		$('#content2 .project-content__item').hide();

		var activeTab = $(this).find('a').attr('href');
		$(activeTab).fadeIn();
		return false;
	});

	/*- projec-slider -*/
	var projectSlider = new Swiper("#projec-slider .project-slider__small", {
        spaceBetween: 10,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
			320: {
				slidesPerView: 4,
				spaceBetween: 5,
			},
			767: {
				slidesPerView: 5,
				spaceBetween: 5,
			},
			1024: {
				slidesPerView: 5,
				spaceBetween: 5,
			},
        },
    });
	var projectSlider2 = new Swiper("#projec-slider .project-slider__big", {
		spaceBetween: 10,
		thumbs: {
		 	swiper: projectSlider,
		},
		navigation: {
			nextEl: "#projec-slider .project-slider__big-wrap .swiper-button-next",
			prevEl: "#projec-slider .project-slider__big-wrap .swiper-button-prev",
        },
	});

	/*- projec-slider 2 -*/
	var projectSlider3 = new Swiper("#projec-slider2 .project-slider__small", {
        spaceBetween: 10,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
			320: {
				slidesPerView: 4,
				spaceBetween: 5,
			},
			767: {
				slidesPerView: 5,
				spaceBetween: 5,
			},
			1024: {
				slidesPerView: 5,
				spaceBetween: 5,
			},
        },
    });
	var projectSlider4 = new Swiper("#projec-slider2 .project-slider__big", {
		spaceBetween: 10,
		thumbs: {
		 	swiper: projectSlider,
		},
		navigation: {
			nextEl: "#projec-slider2 .project-slider__big-wrap .swiper-button-next",
			prevEl: "#projec-slider2 .project-slider__big-wrap .swiper-button-prev",
        },
	});

	/*- projec-slider -*/
	var productSlider = new Swiper(".product-info-slider__small", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
	var productSlider2 = new Swiper(".product-info-slider__big", {
		spaceBetween: 10,
		thumbs: {
		 	swiper: productSlider,
		},
	});

	/*- project-navi -*/
	var projectNavi = new Swiper(".directions-product", {
        slidesPerView: 12,
        spaceBetween: 5,
        loop: false,
        breakpoints: {
	        320: {
				slidesPerView: 3,
				spaceBetween: 5,
			},
			390: {
				slidesPerView: 4,
				spaceBetween: 5,
			},
			580: {
				slidesPerView: 6,
				spaceBetween: 5,
			},
			767: {
				slidesPerView: 8,
				spaceBetween: 5,
			},
			1024: {
				slidesPerView: 10,
				spaceBetween: 5,
			},
			1280: {
				slidesPerView: 12,
				spaceBetween: 5,
			},
		},
    });

	/*- gl-tabs -*/
    $('#tabs4 .gl-tabs__nav li:first-child').addClass('active');
	$('#tabs4 .gl-tabs__content__item').hide();
	$('#tabs4 .gl-tabs__content__item:first').show();

	$('#tabs4 .gl-tabs__nav li').click(function(){
		$('#tabs4 .gl-tabs__nav li').removeClass('active');
		$(this).addClass('active');
		$('#tabs4 .gl-tabs__content__item').hide();

		var activeTab = $(this).find('a').attr('href');
		$(activeTab).fadeIn();
		return false;
	});

	$('#tabs5 .gl-tabs__nav li:first-child').addClass('active');
	$('#tabs5 .gl-tabs__content__item').hide();
	$('#tabs5 .gl-tabs__content__item:first').show();

	$('#tabs5 .gl-tabs__nav li').click(function(){
		$('#tabs5 .gl-tabs__nav li').removeClass('active');
		$(this).addClass('active');
		$('#tabs5 .gl-tabs__content__item').hide();

		var activeTab = $(this).find('a').attr('href');
		$(activeTab).fadeIn();
		return false;
	});

	/*- project tabs -*/
	var contentSlider1 = new Swiper("#slider1 .content-slider", {
		spaceBetween: 0,
		allowTouchMove: false,
	});
	var photoSlider1 = new Swiper("#slider1 .photo-slider", {
		allowTouchMove: false,
        navigation: {
			nextEl: "#slider1 .photo-slider__next",
			prevEl: "#slider1 .photo-slider__prev",
		},
		thumbs: {
		 	swiper: contentSlider1,
		},
    });

    var swiper = new Swiper("#slider1 .gallery-slder", {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });

    var contentSlider = new Swiper("#slider2 .content-slider", {
		spaceBetween: 0,
		allowTouchMove: false,
	});
	var photoSlider = new Swiper("#slider2 .photo-slider", {
		allowTouchMove: false,
        navigation: {
			nextEl: "#slider2 .photo-slider__next",
			prevEl: "#slider2 .photo-slider__prev",
		},
		thumbs: {
		 	swiper: contentSlider,
		},
    });

    var swiper = new Swiper("#slider2 .gallery-slder", {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });

	/*- modal -*/
	const myModal = new HystModal({
        catchFocus: true,
        closeOnEsc: true,
        backscroll: true,
        beforeOpen: function(modal){
        },
        afterClose: function(modal){
            let videoframe = modal.openedWindow.querySelector('iframe');
            if(videoframe){
                videoframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
            }
        },
    });

    /*- menu-btn -*/
	var siteToggle = $('.menu-btn'),
		siteMenu= $('.header__dropdown');


	siteToggle.on('click', function(){
		$(this).toggleClass("collapsed");
			siteMenu.toggleClass("show");
		$('body').toggleClass('overflow-hd');
	});

	/*- questions -*/
    $('.questions.first .places__item').click(function(e) {
        $('.questions.second').addClass('show');
        $('.questions.first').addClass('hide');
    });

    $('.questions.second .acquisition-format__item').click(function(e) {
        $('.questions.third').addClass('show');
        $('.questions.second').removeClass('show');
    });

    $('.questions.third .deadlines__item').click(function(e) {
        $('.questions.fourth').addClass('show');
        $('.questions.third').removeClass('show');
    });

   	$('.questions.first .btn').click(function(e) {
        $('.questions__notification').addClass('show');
        $('.questions.first .btn').addClass('active');
    });

    $('.questions.second .btn').click(function(e) {
        $('.questions__notification').addClass('show');
        $('.questions.first .btn').addClass('active');
    });

    $('.questions.third .btn').click(function(e) {
        $('.questions__notification').addClass('show');
        $('.questions.first .btn').addClass('active');
    });

	$(document).on('mouseup', function(e){
		let s = $('.questions__notification.show');
		if(!s.is(e.target) && s.has(e.target).length === 0) {
	    s.removeClass('show');
	  }
	});
	
});