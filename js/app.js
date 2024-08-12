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
var whereaeryouPage = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

function scrollNext(id) {
    if (!isNext && whereaeryouPage == "index.html") {
        isNext = true;

        $('html, body').animate({
            scrollTop: (id == "#home") ? 0 : $(id).offset().top,
        }, 1000, function () {
            $(window).off('scroll');
            isNext = false;
        });
    }
}

function ShowImageFull(element) {
    if (whereaeryouPage != "gallery.html") {
        return;
    }

    disableScroll();
    var imgSrc = "image/data_Image/"+ $(element).attr("id");
    if (imgSrc.split('.').pop() == "png") {
        $('#full-video').attr('src', '').fadeOut();
        $('#full-image').attr('src', imgSrc).fadeIn();
    } else if (imgSrc.split('.').pop() == "mp4") {
        $('#full-image').attr('src', '').fadeOut();
        $('#full-video').attr('src', imgSrc).fadeIn();
    }

    $('#overlay').css({
        "top" : $(window).scrollTop(),
    });

    $('#overlay').fadeIn();
}


$(".bar").each(function () {
    var percentHeight = $(this).attr("percent") + "%";
    $(this).animate({
        height: percentHeight
    }, 1000);
});

if (whereaeryouPage == "gallery.html") {
    const mediaFiles = [];

    for (let i = 1; i <= 43; i++) {
        mediaFiles.push("image/data_Image/image (" + i + ").png");
    }

    for (let i = 1; i <= 3; i++) {
        mediaFiles.push("image/data_Image/vido (" + i + ").mp4");
    }

    const $container = $('.show-image-work');
    mediaFiles.forEach(function (file) {
        const ext = file.split('.').pop().toLowerCase();
        const fileName = file.split('/').pop();

        const divclass = $('<div>').addClass('cut').attr('id', fileName).attr('onClick', 'ShowImageFull(this);').addClass('fadeIn');

        if (['png', 'jpg', 'jpeg'].includes(ext)) {
            const $img = $('<img>').attr('src', file);
            divclass.append($img);
        } else if (ext === 'mp4') {
            const $video = $('<video>').attr({
                'src': file,
                'controls': true,
                'autoplay': true,
                'loop': true,
                'muted': true
            }).prop('volume', 0);
            divclass.append($video);
        }

        $container.append(divclass);
    });

    var overlay = $('<div>', { id: 'overlay', class: 'overlay' })
        .append($('<span>', { id: 'close', text: '×' }))
        .append($('<div>', {class: 'core-cut'}).append($('<img>', { id: 'full-image', class: 'full-image', src: '', alt: 'Full Size' })).append($('<video>', { id: 'full-video', class: 'full-video', src: '', alt: 'Full Size', controls: 'true', loop: 'false' })));

    $('body').append(overlay);

    $('#close').on('click', function () {
        $('#overlay').fadeOut();
        $('#full-video')[0].pause();
        enableScroll();
    });

    $('#overlay').on('click', function (e) {
        if (e.target === this) {
            $(this).fadeOut();
            $('#full-video')[0].pause();
            enableScroll();
        }
    });

    $(window).scroll(function() {
        $('#overlay').fadeOut();
        $('#full-video')[0].pause();
        setTimeout(function(){
            enableScroll();
        }, 900);
    });
}

$("#nextPageBtn").on("click", function () {
    if (!isNext) {
        $("body").css({
            "position": "absolute",
            "top": "0",
            "left": "0",
            "display": "flex",
            "flex-direction": "column",
            "justify-content": "center",
            "align-items": "center",
            "transition": "transform 0.7s ease, opacity 0.7s ease",
        });

        if ($(window).scrollTop() != 0) {
            $('html, body').animate({
                scrollTop: 0,
            }, 1000, function () {
                $(window).off('scroll');
            });

            setTimeout(function () {
                NextPage();
            }, 1500);
        } else {
            NextPage();
        }
    }
});

function NextPage() {
    disableScroll();
    $("body").css({
        "transform": "translateY(-8%) scale(0.8)"
    });

    setTimeout(function () {
        $("body").css({
            "transform": (whereaeryouPage == "index.html") ? "translateX(-100%) translateY(-8%) scale(0.8)" : "translateX(100%) translateY(-8%) scale(0.8)",
            "opacity": "0"
        });

        setTimeout(function () {
            window.location.href = (whereaeryouPage == "index.html") ? "gallery.html" : "index.html";
            enableScroll();
            isNext = false;
        }, 700);
    }, 700);
}

function enableScroll() {
    window.onscroll = function () { };
}

function disableScroll() {
    // Get the current page scroll position in the vertical direction
    scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
    // Get the current page scroll position in the horizontal direction 
    scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft;
    // if any scroll is attempted,
    // set this to the previous value
    window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
    };
}