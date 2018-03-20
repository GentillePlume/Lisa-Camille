// ############################################################
//                      NAVIGATION BAR
// ############################################################

$(window).on('scroll', function() {
    var headersize = $('header').height();
    console.log("headersize = " + headersize);    
    
    if ($(window).scrollTop() > headersize) {
        $('nav').addClass('scrolled');
        console.log("Added class 'scrolled'");
    }
    else
    {
        $('nav').removeClass('scrolled');
        console.log("Removed class 'scrolled'");
        console.log("scrollTop : " + $(window).scrollTop() + "px");
    }
})