function quotes_rotation() {

    // Get the quotes number stored in "quotes_number"
    var quotes_number = $('#section-quotes span').length;
    console.log("Quotes number = " + quotes_number);

    // Select the quotes
    var quotes = $('#section-quotes span');
    console.log("Quotes selection = " + quotes);

    // ...
    for (i = 0; i < quotes_number; i++) {
        quotes[i].addClass("displayed-ib");
        console.log("quote " + i + " displayed !");

        setTimeout(function () {
                quotes[i].removeClass("displayed-ib");
                console.log("quote " + i + " undisplayed !");
        }, 5000);
    }
}

// When the document is fully loaded, launch the function
$(document).ready(quotes_rotation);