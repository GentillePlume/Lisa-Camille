// ############################################################
//                      NAVIGATION BAR
// This script make the navigation bar fixed on top when the
// header section is left
// ############################################################

$(window).on('scroll', function() {
    
    // Get the header size
    var headersize = $('header').height();
    /* console.log("headersize = " + headersize); */    
    
    // From the moment when the header size equivalent 
    // is scrolled,  add the class "scrolled" to the
    // navigation bar
    if ($(window).scrollTop() > headersize) {
        $('nav').addClass('scrolled');
        /* console.log("Added class 'scrolled'"); */
    }
    // If the header size equivalent isn't scrolled,
    // the class "scrolled" is removed from the navigation bar
    else
    {
        $('nav').removeClass('scrolled');
        /* console.log("Removed class 'scrolled'"); */
        /* console.log("scrollTop : " + $(window).scrollTop() + "px"); */
    }
})