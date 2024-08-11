console.log("© 2024 Rachanon official");

function copy(text) {
    navigator.clipboard.writeText(text);
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Success to copy email",
        showConfirmButton: false,
        timer: 1500
    });
}

var isNext = false;

function scrollNext(id) {
    if (!isNext) {
        isNext = true;

        $('html, body').animate({
            scrollTop: (id == "#home") ? 0 : $(id).offset().top,
        }, 1000, function () {
            $(window).off('scroll');
            isNext = false;
        });
    }
}

$(".bar").each(function () {
    var percentHeight = $(this).attr("percent") + "%";
    $(this).animate({
        height: percentHeight
    }, 1000);
});

$("#nextPageBtn").on("click", function () {
    // $("#mainPage").css({
    //     "transform": "scale(0.8)"
    // });

    // setTimeout(function() {
    //     $("#mainPage").css({
    //         "transform": "translateX(-100%) scale(0.8)",
    //         "opacity": "0"
    //     });
    // }, 700);
    if ($(window).scrollTop() != 0) {
        scrollNext("#home");
        setTimeout(function(){
            NextPage();
        }, 1500);
    } else {
        NextPage();
    }
});

function NextPage() {
    $('.nav-bar').css({
        "transform": "translateY(-100%)",
        "transition": ".5s"
    });
    setTimeout(function(){
        $(".content-home-text-right").css({
            "transform": "translateX(-100%)",
            "opacity": "0",
            "transition": ".5s"
        });
        $(".content-home-image-left").css({
            "transform": "translateX(100%)",
            "opacity": "0",
            "transition": ".5s"
        });
        setTimeout(function(){
            window.location.href = "gallery.html";
        }, 1000);
    },700);
}