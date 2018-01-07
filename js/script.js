$(window).scroll(
    function() {
        console.log($(this).scrollTop());
    });




var navBar = $('.navbar');
$(window).scroll(function() {
    if ($(window).scrollTop() >= 150) {
        navBar.addClass("slimNav");
    } else {
        navBar.removeClass("slimNav")
    }

});
