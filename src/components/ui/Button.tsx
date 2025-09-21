import { cn } from "@/utils/utils";
import { ReactNode } from "react";
import Swal from "sweetalert2";
interface confirmDeleteButton {
  onConfirm: () => void;
  children: ReactNode;
  message?: string;
  confirmText?: string;
  className?: string;
}
const ConfirmDeleteButton = ({
  onConfirm,
  children,
  message = "Are you sure you want to delete this?",
  confirmText = "Yes, delete it!",
  className,
}: confirmDeleteButton) => {
  const handleClick = async () => {
    const result = await Swal.fire({
      title: "Confirm Delete",
      text: message,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: confirmText,
    });

    if (result.isConfirmed && onConfirm) {
      onConfirm();
    }
  };

  return (
    <button
      className={cn("delete-confirm-btn", className)}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export { ConfirmDeleteButton };
