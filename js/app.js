function copy(text) {
    navigator.clipboard.writeText(text);

    Swal.fire({
        position: "center",
        icon: "success",
        title: "Success to copy text",
        showConfirmButton: false,
        timer: 1500
    });
}