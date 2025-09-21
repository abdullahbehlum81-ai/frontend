import { CustomError } from "@/types";
import { handleApiError } from "./ApiError";
import toast from "react-hot-toast";

interface IdFnParams {
    id: number;
    fn: (id: number) => Promise<{ response: { success: boolean; message: string } }>;
    errorUrl: string;
    onSuccess?: () => void;
}

const handleApiCallById = async ({
    id,
    fn,
    errorUrl,
    onSuccess,
}: IdFnParams) => {
    try {
        const { response } = await fn(id);

        if (response?.success) {
            onSuccess?.();
            toast.success(response?.message || "Item Successfully");
            return true;
        }
    } catch (error) {
        handleApiError({
            error: error as CustomError,
            url: errorUrl,
        });
    }

    return false;
};

export { handleApiCallById };
