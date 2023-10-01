"use client";
import { TimerIcon } from "@radix-ui/react-icons";
import { toast, Toaster, ToastBar } from "react-hot-toast";

export const CustomToaster = () => {
  return (
    <Toaster position="top-center">
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <>
              {icon}
              {message}
              {t.type !== "loading" && <button onClick={() => toast.dismiss(t.id)}>✖</button>}
            </>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
};
