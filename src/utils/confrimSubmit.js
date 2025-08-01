import Swal from "sweetalert2"


export const handleConfirm = (url, navigate) => {
    Swal.fire({
        title: 'Apakah data sudah benar?',
        text: 'Data akan disimpan setelah dikonfirmasi',
        icon: 'info',
        showConfirmButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Konfirmasi',
        showCancelButton: true,
        cancelButtonColor: '#45556c',
        cancelButtonText: 'Cek kembali',
        reverseButtons: true,
        width: '90%',
    }).then((result) => {
        if (result.isConfirmed) {
            console.log('berhasil')
            // tampilkan pesan sukses
            Swal.fire("Data berhasil disimpan!", "", "success")
                .then(() => {
                    navigate(url)
                })
        }
    })
}