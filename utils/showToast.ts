import Swal from "sweetalert2";

export default function ({ message, type }: IToast) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 3000,
    width: 'fit-content',
    timerProgressBar: true,
  });


  Toast.fire({
    icon: type,
    title: message
  });

}
