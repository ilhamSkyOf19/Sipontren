// utils/confirmDelete.js
import Swal from 'sweetalert2';

const confirmDelete = (onConfirm) => {
    Swal.fire({
        title: 'Yakin ingin menghapus?',
        text: 'Data ini akan dihapus permanen!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Ya, hapus!',
        cancelButtonText: 'Batal',
        width: '90%',
    }).then((result) => {
        if (result.isConfirmed) {
            deleteSuccess(onConfirm);
        }
    });
};
const deleteSuccess = (onConfirm) => {
    Swal.fire({
        title: 'Sukses!',
        text: 'Data berhasil dihapus',
        icon: 'success',
        confirmButtonColor: 'green',
        confirmButtonText: 'selesai',
        width: '90%',
    }).then((result) => {
        if (result.isConfirmed) {
            console.log('onConfirm', onConfirm);
        }
    });
};

export default confirmDelete;
