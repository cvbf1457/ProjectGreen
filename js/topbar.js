(function($){
	$(function(){	
      // scroll is still position
			var scroll = $(document).scrollTop();
			var headerHeight = $('#topbar').outerHeight();
			// console.log(headerHeight);
			// console.log(scroll);

			$(window).scroll(function() {
				// scrolled is new position just obtained
				var scrolled = $(document).scrollTop();
				// optionally emulate non-fixed positioning behaviour
				if (scrolled > headerHeight){
					$('#topbar nav').addClass('off-canvas');
				} else {
					$('#topbar nav').removeClass('off-canvas');
				}

			    if (scrolled > scroll){
			         // scrolling down
					 $('#topbar nav').removeClass('fixed');
			      } else {
					  //scrolling up
					  $('#topbar nav').addClass('fixed');
			    }				
				 
				scroll = $(document).scrollTop();	
			 });
    
    
 	});
})(jQuery);   
