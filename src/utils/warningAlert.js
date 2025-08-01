import Swal from "sweetalert2";

export const warningAlert = (title, text, button) => {
    Swal.fire({
        title: title,
        text: text,
        icon: 'warning',
        showConfirmButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: button,
        width: '90%',
    }).then((result) => {
        if (result.isConfirmed) {
            return false;
        }
    })
}