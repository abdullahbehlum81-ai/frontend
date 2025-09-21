import { toast } from "react-hot-toast";
import { ApiErrorProps, ApiSSRErrorProps } from "@/types";

export function handleApiError({ error, url = "/" }: ApiErrorProps) {
    const errorMessage =
        error?.response?.data?.message || error.message || "Something went wrong!";

    const apiError = {
        message: errorMessage,
        status: error?.response?.status,
        data: error?.response?.data,
        url,
    };

    const ntfyMsg = apiError?.message || apiError?.data?.message || "Error occurred";

    toast.error(ntfyMsg);

    throw error;
};



export function handleSrrError({
    error,
    url = "unknown API endpoint",
    fallbackMessage = "Something went wrong on the server.",
}: ApiSSRErrorProps) {
    console.error(`[API ERROR] at ${url}:`, error);

    if (error instanceof Error) {
        return {
            success: false,
            message: error.message || fallbackMessage,
            status: 500,
            data: null,
        };
    }
    return {
        success: false,
        message: fallbackMessage,
        status: 500,
        data: null,
    };
}

