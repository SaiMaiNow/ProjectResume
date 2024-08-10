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
        }, 1000, function() {
            $(window).off('scroll');
            isNext = false;
        });
    }
}