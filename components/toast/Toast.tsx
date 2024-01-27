"use client";
import { toast } from "sonner";

type ToastProps = {
  toastOptions: "Success" | "Error";
  message: string;
};

const Toast = ({ toastOptions, message }: ToastProps) => {
  if (toastOptions === "Success") {
    return toast.success(message, { duration: 5000 });
  }
  if (toastOptions === "Error") {
    return toast.error(message, { duration: 5000 });
  }
  return toast(message);
};

export default Toast;
