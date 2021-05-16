$(document).ready(function(){
$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

var count = $('.count');
var loader = $('#loader');
$({ Counter: 0 }).animate({ Counter: count.text() }, {
  duration: 4000,
  step: function () {
    count.text(Math.ceil(this.Counter)+ "%");
  }
});
    
setTimeout(function(){
    $("#loader").css({"z-index": "0", "display": "none",}); 
    $(".navbar").css({"display": "block"});
}, 3500);

var text = 'Hi to everyone, I am Junior Front-End Developer...Welcome into my World ';

	$.each(text.split(''), function(i, letter){
		setTimeout(function(){
	 		$('.intro-lead-in').html( $('.intro-lead-in').html() + letter).addClass('sharpen');
	 	 	}, 100*i);
        	});
			
		
 function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
      
        osElement.css({
          '-webkit-animation-delay':  osAnimationDelay,
          '-moz-animation-delay':     osAnimationDelay,
          'animation-delay':          osAnimationDelay
        });

        var osTrigger = ( trigger ) ? trigger : osElement;
        
        osTrigger.waypoint(function() {
          osElement.addClass('animated').toggleClass(osAnimationClass);
          },{
              triggerOnce: false,
              offset: '90%'
        });
  });
}

 onScrollInit( $('.os-animation') );
 onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );




});

! function(t) {
    "use strict";
    t("a.page-scroll").bind("click", function(a) {
        var o = t(this);
        t("html, body").stop().animate({
            scrollTop: t(o.attr("href")).offset().top - 50
        }, 1250, "easeInOutExpo"), a.preventDefault()
    }), t("body").scrollspy({
        target: ".navbar-fixed-top",
        offset: 51
    }), t(".navbar-collapse ul li a").click(function() {
        t(".navbar-toggle:visible").click()
    }), t("#mainNav").affix({
        offset: {
            top: 100
        }
    })
}(jQuery);