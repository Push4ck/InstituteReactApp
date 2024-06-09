// sweet alert
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { useEffect } from "react"; // hook

const SuccessPopup = ({ onConfirm }) => {
  useEffect(() => {
    Swal.fire({
      title: "Success!",
      text: "Thank You!",
      icon: "success",
      confirmButtonText: "Close",
    }).then((result) => {
      // a promise of deletion
      if (result.isConfirmed) {
        onConfirm();
      }
    });
  }, [onConfirm]);

  return null; // renders nothing
};

export default SuccessPopup;
