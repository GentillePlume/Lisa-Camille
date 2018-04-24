var about = $('#about');
var close = $('#closeabout');
var panel = $('#s2-panel');
var overlay = $('#s2-paneloverlay');

var aboutswitch = 0;

if (aboutswitch = 1) {
    about.off('click');
} else {}

about.click(function () {
    console.log("about button clicked");

    aboutswitch = aboutswitch + 1;
    
    about[0].style.height = 100 + "%";
    about[0].style.backgroundColor = "rgba(0, 108, 255, 1)";
    document.querySelector('#about p:first-child').style.display = "none";
    about[0].style.cursor = "default";

    setTimeout(function () {
        about[0].style.width = 100 + "%";
        overlay[0].style.backgroundColor = "rgba(255,255,255,1)";
        $('#s2-titlesbox h1')[0].style.display = "none";
        $('#s2-titlesbox h1')[1].style.display = "none";
        $('#s2-titlesbox h1')[2].style.display = "none";
        $('#s2-panel p')[0].style.display = "none";
        $('#s2-titlesbox h2')[0].style.display = "inline-block";
    }, 500);

    setTimeout(function () {
        about[0].style.marginLeft = 25 + "%";
        about[0].style.width = 75 + "%";
    }, 1200);

    setTimeout(function () {
        close[0].style.display = "flex";
        panel[0].style.backgroundImage = "url(https://i.imgur.com/r15KJmc.jpg)";
        panel[0].style.backgroundRepeat = "no-repeat";
        panel[0].style.backgroundPosition = "center";
        panel[0].style.backgroundSize = "cover";

        $('#about p:last-child')[0].style.display = "inline-block";
    }, 2000);

    setTimeout(function () {
        overlay[0].style.transition = "all 1s ease-in-out 0s";
        overlay[0].style.backgroundColor = "rgba(255,255,255,0.7)";
    }, 3000);
});


close.click(function () {
    setTimeout(function () {
        $('#about p:last-child')[0].style.display = "none";
        close[0].style.width = 0;
        $('#closeabout p')[0].style.display = "none";
        about[0].style.marginLeft = 0;
        about[0].style.width = 100 + "%";
    }, 0);

    setTimeout(function () {
        $('#s2-titlesbox h1')[0].style.display = "inline-block";
        $('#s2-titlesbox h1')[1].style.display = "inline-block";
        $('#s2-titlesbox h1')[2].style.display = "inline-block";
        $('#s2-panel p')[0].style.display = "inline-block";
        $('#s2-titlesbox h2')[0].style.display = "none";

        panel[0].style.backgroundImage = "none";
        about[0].style.width = 25 + "%";

        close[0].style.display = "none";
        close[0].style.width = 25 + "%";
        $('#closeabout p')[0].style.display = "inline-block";

    }, 1000);

    setTimeout(function () {
        about[0].style.height = 10 + "%";
        about[0].style.cursor = "pointer";
    }, 1500);

    setTimeout(function () {
        document.querySelector('#presentation a > p').style.display = "inline-block";
        about.on('click');
        about[0].style.backgroundColor = "rgba(0, 108, 255, 0.8)";
        
        aboutswitch = aboutswitch - 1;
    }, 2000);
});