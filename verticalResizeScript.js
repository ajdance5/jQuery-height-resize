$( document ).ready(function() {
    
   function sectionHeight() {var tallestDiv = null
    $(".top-5-list").each(function() {
    	if (tallestDiv == null) {
    		tallestDiv = $(this).height();
    	}
    	else if ($(this).height() > tallestDiv) {
    		 tallestDiv  = $(this).height();
    		}
    	});

	 	var parseTall = parseInt (tallestDiv, 10);
	 	var parseTallPadding = parseTall + (parseTall/100*6);
 	

	    $(".top-5-list").each(function(){
	     $(this).css("min-height", parseTallPadding);
	    });
	};
	
	sectionHeight();

	$(window).resize(function() {
		$(".top-5-list").each(function(){
	     $(this).css("min-height", "auto");
	    });
		sectionHeight();
	});
});
