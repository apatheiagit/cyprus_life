$(function(){
	AOS.init();
	$('.movie-premieres-carousel').owlCarousel({
		loop:true,
		margin:20,
		nav:true,
		dots:false,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	});
	$('.movie-premieres3-carousel').owlCarousel({
		loop:true,
		margin:20,
		nav:true,
		dots:false,
		autoWidth:true,
		responsive:{
			0:{
				items:2,
				autoWidth:false,
			},
			600:{
				items:2,
			},
			1200:{
				items:3,
			}
		}
	});
	$('.topics-carousel').owlCarousel({
		loop:true,
		margin:20,
		nav:true,
		dots:false,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	});
	$('.topics3-carousel').owlCarousel({
		loop:true,
		margin:20,
		nav:true,
		dots:false,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});
	$('.hit-main-carousel').owlCarousel({
		loop:false,
		nav:false,
		dots:false,
		items: 1,
		autoplay:true,
    autoplayTimeout:15000,
    autoplayHoverPause:true,
		thumbs: true,
    thumbsPrerendered: true,
    thumbContainerClass: 'hit-topic-container',
    thumbItemClass: 'hit-topic-item',
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 25,
        margin: 10
      },
      768: {
        items: 1
      }
    }
	});

	$('.hit-topic-small').on('click', function(){
		var hit_small = $(this).html();
		$(this).addClass('active').children().css('opacity', 0.7);
		$('.hit-topic-big').children().css('opacity', 0.7);
		setTimeout( function() {
      $('.hit-topic-small.active').html($('.hit-topic-big').html());
			$('.hit-topic-big').html(hit_small);
			$('.hit-topic-small.active').children().css('opacity', 1);
			$('.hit-topic-big').children().css('opacity', 1);
			$('.hit-topic-small.active').removeClass('active');
     }, 400);
		
		

		/*$('.hit-topic-item.active').removeClass('active');
		$(this).addClass('active');
		$('.hit-topic').html($(this).html());*/
	});

	$('.open-search').on('click', function(){
		$(this).hide();
		$('.l-search-block').show();
	});
	$('.close-search').on('click', function(){
		$('.l-search-block').hide();
		$('.open-search').show();
	});
	$('.burger').on('click', function(){
		$('.l-menu').addClass('open');
		$('body, html').css('overflow-y', 'hidden');
	});
	$('.close-burger').on('click', function(){
		$('.l-menu').removeClass('open');
		$('body, html').css('overflow-y', 'auto');
	});
})