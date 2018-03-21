// ############################################################
//                      NAVIGATION BAR
// ############################################################

function navbar_menu_size() {
        
    // Number of the menus - stored in "menusnumber"
    var menusnumber = document.querySelector('nav ul').children.length;
    /*console.log("number = " + menusnumber);*/
    
    // Selection of all menus - stored in "menus"
    var lis = document.querySelector('nav ul').children;
    
    // Navigation bar size - stored in "navsize"
    var ulsize = document.querySelector('nav ul').offsetWidth;
    /*console.log("ul size = " + ulsize);*/
    
    // Calcul the menu size - stored in "lisize"
    var lisize = ulsize / menusnumber + "px";
    /*console.log("li size = " + lisize);*/
    
    // Application of the size to all menus
    for (i = 0; i < lis.length; i++){
        lis[i].style.width = lisize;
    }
}

// Every .5s
setInterval(navbar_menu_size, 500);
// When the window is resized
window.addEventListener('resize', navbar_menu_size);
// When the site is loaded
window.addEventListener('load', navbar_menu_size);
