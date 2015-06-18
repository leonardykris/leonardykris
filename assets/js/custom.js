(function($) {

// prettyPhoto
	jQuery(document).ready(function(){
		jQuery('a[data-gal]').each(function() {
			jQuery(this).attr('rel', jQuery(this).data('gal'));
		});
		jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:false,overlay_gallery: false,social_tools:false,deeplinking:false});
	});

})(jQuery);

$(function(){
	setTimeout(startHello, 0);
});

function startHello(){
	$("#hello").typed({
        strings: ["Hi, my name is Leonardy Kristianto.<br/>Nice meeting you today."],
        typeSpeed: 10,
        backDelay: 2000,
        loop: false,
        contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: false,
        callback: function(){ setTimeout(startIntro, 1000); },
        resetCallback: function() { newTyped(); }
    });

    /*$(".reset").click(function(){
        $("#typed").typed('reset');
    });*/
}

function startIntro(){
	$(".typed-cursor").text(""); //only applying it once

	$("#intro").typed({
        strings: [
        			"I'm a Product Designer, UI/UX Developer and an Undergraduate taking Information Technology under <a href='http://www.topuniversities.com/universities/lancaster-university/undergrad' target='_blank'>Lancaster University</a>. I'm currently completing my final year project so this site might not be updated frequently, but you can check my <a href='https://twitter.com/leonardykris' target='_blank'>twitter feeds</a> or better, my <a href='https://www.linkedin.com/in/leonardykris' target='_blank'>linkedin account</a> for more information. You can also send me a mail at <a href='mailto:leonardykris@live.com'>leonardykris@live.com</a>"
        		],
        typeSpeed: 0,
        backDelay: 2000,
        loop: false,
        contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: false,
        callback: function(){ startRecent(); },
        resetCallback: function() { newTyped(); }
    });
}

function startRecent(){
	$(".typed-cursor").text(""); //only applying it once

	$("#recent").typed({
        strings: [
        			"Recent work: <a href='http://e27.co/women-empowerment-apps-shine-at-mastercards-masters-of-code-20150402/' target='_blank'>MasterCard: Masters of Code</a>"
        		],
        typeSpeed: 0,
        backDelay: 2000,
        loop: false,
        contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: false,
        callback: function(){ foo(); },
        resetCallback: function() { newTyped(); }
    });
}


function newTyped(){ /* A new typed object */ }

function foo(){ console.log("Callback"); }