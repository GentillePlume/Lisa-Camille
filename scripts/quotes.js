/*function quotes_rotation() {

    console.log("Function quotes_rotation launched !");

    // Get the quotes number stored in "quotes_number"
    var quotes_number = $('#section-quotes span').length;
    console.log("Quotes number = " + quotes_number);

    // Select the quotes
    var quotes = document.querySelectorAll('#section-quotes span');
    console.log("Quotes selection = " + quotes);

    // Add class
    for (i = 0; i < quotes_number; i++) {

        quotes[i].classList.add("displayed-ib");
        console.log("quote " + i + " displayed !");

        setTimeout(remove_class, 5000);
    }

    function remove_class() {
        // Remove class
        for (i = 0; i < quotes_number; i++) {

            quotes[i].classList.remove("displayed-ib");
            console.log("quote " + i + " undisplayed !");
        }
    }

}

// When the document is fully loaded, launch the function
$(document).ready(quotes_rotation);*/