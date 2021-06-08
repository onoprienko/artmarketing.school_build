(function (jQuery) {
	
	jQuery(document).on("mouseover", ".video-holder", function (e) {
		e.preventDefault();
		jQuery(".video-button").show('fast');
	});
	jQuery(document).on("mouseleave", ".video-holder", function (e) {
		e.preventDefault();
		jQuery(".video-button").hide('fast');

	});
	jQuery(document).on("click", ".video-holder video", function (e) {
		e.preventDefault();
		var video = document.getElementById(jQuery(this).attr('id'));
		var video_duration;
		if (jQuery(this).get(0).paused) {
			jQuery(this).trigger('play');
			jQuery(".play_hover").text('Pause');
			jQuery(this).parent().find('.video-button').addClass('play');
		} else {
			jQuery(this).trigger('pause');
			jQuery(".play_hover").text('Play');
			jQuery(this).parent().find('.video-button').removeClass('play');
		}
		jQuery(this).on("timeupdate", function(event){
			video_duration = this.duration;
			video_currenttime = this.currentTime;
			jQuery(this).parent().find('.curent').css('width', Math.round((video_currenttime/video_duration)*100)+'%');
			jQuery(this).parent().find('input[type="range"]').attr('value', (video_currenttime/video_duration)*100);
		});
		jQuery(this).parent().on('change', 'input[type="range"]', function(){
			console.log('range');
			percent = video_duration/100;
			video.currentTime = Math.round(jQuery(this).val()*percent);
			console.log(Math.round(jQuery(this).val()*percent));
			/*audio = document.getElementById('audio');
			percent = audio.duration/100;
			audio.currentTime = jQuery(this).val()*percent;
			jQuery('.wave-holder').css('width', jQuery(this).val()+'%');*/
		})
	});


})(jQuery.noConflict());



(function (jQuery) {
if(screen.width > 992){
	let scroll_old;
	let direction = 1;
	var speedindex = 1;
	let timing = 2;
	let title_offset_width = {};
	let title_offset_left = {};
	let title_all = document.getElementsByClassName("title-scroll");
	var pos = [];
	var i_count = [];
	for (let i = 0; i < title_all.length; i++) {
		title_offset_width[i] = title_all[i].offsetWidth;
		title_offset_left[i] = title_all[i].offsetLeft;
		i_count[i] = i;
		title_all[i].style.position = 'relative';
		title_all[i].style.display = 'inline-block';
		setInterval(moove1, timing, speedindex, title_all, i);
	}
	window.onscroll = function(e) {
		if(this.scrollY>=scroll_old){direction = 1; }else if(this.scrollY<=scroll_old){direction = -1; }else{direction = 1; }
		scroll_old = this.scrollY;
		for (var i in i_count) {
			moove1(4, title_all, i_count[i]);
		};
		//header_fix();
	}
	function moove1(speedindex, title_all, i){
		if (typeof pos[i] == 'undefined') { pos[i] = 0;}
		if(speedindex){}else{speedindex = 1; } 
		pos[i] = pos[i] + (1*direction*speedindex);
		title_all[i].style.left = pos[i] + 'px';
		if(direction>=0 && title_all[i].offsetLeft>=0 && title_all[i].offsetLeft>=window.innerWidth){
			pos[i] = title_all[i].style.left = 0 - title_offset_width[i] - title_offset_left[i];
		}
		if(direction<=0 &&  title_all[i].offsetLeft<=0 && title_all[i].offsetLeft<=(title_offset_width[i]+title_offset_left[i])*-1){
			pos[i] = title_all[i].style.left = window.innerWidth-1;
		}
	}
}
})(jQuery.noConflict());




(function (jQuery) {

jQuery(document).ready(function () {
	jQuery('.owl-carousel-forms').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:false,
	    dots:false,
	    autoplay : true,
		slideTransition: 'linear',
		autoplayTimeout : 4000,
		autoplayHoverPause : true,
		autoplaySpeed : 4000,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})

	jQuery('.owl-carousel-forms').on('change.owl.carousel', function(e) {
		var curent_item = jQuery('.owl-carousel-forms .owl-item.active .item').data('name');
		jQuery('.row-forwho .img img').removeClass('active');
		jQuery('.row-forwho .img').find('img[data-'+curent_item+']').addClass('active');
	});
});


})(jQuery.noConflict());


(function (jQuery) {

jQuery(document).ready(function () {
	jQuery('.owl-carousel-authors--right').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:false,
	    dots:false,
	    autoplay : true,
		slideTransition: 'linear',
		autoplayTimeout : 8000,
		autoplayHoverPause : true,
		autoplaySpeed : 8000,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})
});

})(jQuery.noConflict());


(function (jQuery) {

jQuery(document).ready(function () {
	jQuery('.owl-carousel-authors--revers').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:false,
	    dots:false,
	    autoplay : true,
		slideTransition: 'linear',
		autoplayTimeout : 8000,
		autoplayHoverPause : true,
		autoplaySpeed : 8000,
		rtl: true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})
});

})(jQuery.noConflict());






(function (jQuery) {
	if(jQuery('.body-color-trigger').length !=0) { 
		jQuery('.body-color-trigger').each(function(index) {
			var inview = new Waypoint.Inview({
			  element: jQuery(this)[0],
			  enter: function(direction) {
			    //console.log('Enter triggered with direction ' + direction +' | '+ jQuery(this.element).attr('class'));
			    if(direction=='up'){
			    	jQuery('body').css('background', jQuery(this.element).attr("data-color"));
			    }else{
			    	jQuery(this.element).css('color', jQuery(this.element).attr("data-text_swapcolor"));
			    }
			  },
			  entered: function(direction) {
			    //console.log('Entered triggered with direction ' + direction +' | '+ jQuery(this.element).attr('class'));
			    if(direction=='up'){
			    	jQuery(this.element).css('color', jQuery(this.element).attr("data-text_swapcolor"));
			    }else{
			    	jQuery('body').css('background', jQuery(this.element).attr("data-color"));
			    	jQuery(this.element).css('color', jQuery(this.element).attr("data-text_color"));
			    }
			  },
			  exit: function(direction) {
			    //console.log('Exit triggered with direction ' + direction +' | '+ jQuery(this.element).attr('class'))
			    if(direction=='up'){
			    	jQuery(this.element).css('color', jQuery(this.element).attr("data-text_color"));
			    }else{
			    	jQuery('body').css('background', jQuery(this.element).attr("data-color"));
			    	jQuery(this.element).css('color', jQuery(this.element).attr("data-text_color"));
			    }
			  },
			  exited: function(direction) {
			    //console.log('Exited triggered with direction ' + direction +' | '+ jQuery(this.element).attr('class'))
			     if(direction=='up'){

			    }else{

			    }
			  },
			  offset: '100%'
			});
		});
	}
})(jQuery.noConflict());




(function (jQuery) {
	jQuery(document).ready(function() {
		jQuery('.popup-with-form').magnificPopup({
			type: 'inline',
			preloader: false,
			focus: '#name-enrol',
			removalDelay: 300,
			mainClass: 'mfp-fade',
			modal: true,
			callbacks: {
				beforeOpen: function() {
					if(jQuery(window).width() < 700) {
						this.st.focus = false;
					} else {
						this.st.focus = '#name-enrol';
					}
				}
			}
		});
	});
	jQuery(".close-popup").click(function(event){
		event.preventDefault();
		jQuery.magnificPopup.close();
	})
})(jQuery.noConflict());


(function (jQuery) {
	jQuery('body').on('click', '.more', function(event){
		event.preventDefault();
		jQuery(this).parent().parent().find('.more-text').toggleClass('active');
		jQuery(this).parent().parent().find('.more-text').scrollTop();
		jQuery('html, body').animate({
		    scrollTop: jQuery(this).parent().parent().offset().top
		}, 100);
	})

})(jQuery.noConflict());

(function (jQuery) {
	jQuery('body').on('click', '.accord-title', function(event){
		event.preventDefault();
		jQuery(this).parent().toggleClass('active');
		jQuery('.curriculum-img img').attr('src', jQuery(this).parent().data('img'));
	})
})(jQuery.noConflict());

