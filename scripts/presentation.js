var about = $('#about');
var close = $('#closeabout');
var panel = $('#s2-panel');
var overlay = $('#s2-paneloverlay');

about.click(function () {
    console.log("about button clicked");

    about[0].style.height = 100 + "%";
    about[0].style.backgroundColor = "rgba(0, 108, 255, 1)";
    document.querySelector('#presentation a > p').style.display = "none";
    about[0].style.cursor = "default";

    setTimeout(function () {
        about[0].style.width = 100 + "%";
        overlay[0].style.backgroundColor = "rgba(255,255,255,1)";
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
    }, 2000);
    
    setTimeout(function () {
        overlay[0].style.transition = "all 1s ease-in-out 0s";
        overlay[0].style.backgroundColor = "rgba(255,255,255,0.7)";
    }, 2500);
});


close.click(function () {
    setTimeout(function () {
        close[0].style.width = 0;
        $('#closeabout p')[0].style.display = "none";
        about[0].style.marginLeft = 0;
        about[0].style.width = 100 + "%";
    }, 0);

    setTimeout(function () {
        panel[0].style.backgroundImage = "none";
        about[0].style.width = 25 + "%";
        
        close[0].style.display = "none";
        close[0].style.width = 25 + "%";
        $('#closeabout p')[0].style.display = "inline-block";
        
    }, 1000);

    setTimeout(function () {
        about[0].style.height = 10 + "%";
        about[0].style.backgroundColor = "rgba(0, 108, 255, 0.8)";
        about[0].style.cursor = "pointer";
    }, 1500);
    
    setTimeout(function () {
        document.querySelector('#presentation a > p').style.display = "inline-block";
    }, 2000);    
});