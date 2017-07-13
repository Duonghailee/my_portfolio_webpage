$(document).ready(function() {
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
    $(window).scroll(function() {
        $(".slideanim").each(function() {


            // slide target
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });

    });





});

// get current time and display at the bottom of the page
function getTime() {
    var currentDate = new Date();
    var date_time = currentDate.getDate() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getFullYear() + "@" +
        currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    var showtime = document.getElementById("show_time");

    document.getElementById("show_time").innerHTML = "<h3>Local time (Helsinki) is now:  " + date_time + "</h3>";

    //move target to bottom, slow the motion for 2800ms before going back to about navigation
    $('html, body').animate({ scrollTop: $('#show_time').offset().top }, 2800);


};

//get weather api
function get_weather() {
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Helsinki,Finland&&APPID=b9d8c6dc9a699b32bff4368ac7696ef1", function(data) {
        $('#show_weather').html('Helsinki, Finland temperature: ' + (data.main.temp - 273.15).toFixed(1) + '<sup>o</sup>C');
    });
};



// send validation
function check_form() {
    var age = document.getElementById("age").value;
    // convert age to a number
    age = parseInt(age, 10);

    //check if age is a number or less than or greater than 100
    if (isNaN(age) || age < 18 || age > 100) {
        alert("The age must be a number between 18 and 100");
        return false;
    }

    alert("Thanks for contacting me");
    return true;
};

function reset() {
    document.getElementById("form").reset();
};