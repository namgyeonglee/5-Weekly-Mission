import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = ({ isCopied }) => {
  useEffect(() => {
    if (isCopied) {
      showToast("복사되었습니다!");
    }
  }, [isCopied]);

  const showToast = (message) => {
    toast(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default Toast;
