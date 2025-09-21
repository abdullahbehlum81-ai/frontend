import { CustomError } from "@/types";
import toast from "react-hot-toast";


const showErrorMessage = (error: unknown): void => {
  let message = "Something went wrong!";

  if (typeof error === "string") {
    message = error;
  } else if (error && typeof error === "object" && "message" in error) {
    message = (error as CustomError)?.response?.data?.message || (error as Error).message;
  }

  toast.error(message);
};

export { showErrorMessage };
