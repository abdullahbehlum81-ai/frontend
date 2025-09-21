import axios, {
    AxiosError,
    AxiosInstance as AxiosInstanceType,
    InternalAxiosRequestConfig,
    AxiosResponse,
} from "axios";
import toast from "react-hot-toast";
import { API_VERSION_PATH, BASEURL, ADMIN_AUTH_TOKEN } from "@/constant";
const API_BASE_URL = `${BASEURL}/${API_VERSION_PATH}`;

// --- Create Axios Instance ---
const AxiosInstance: AxiosInstanceType = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});


// --- Request Interceptor ---
AxiosInstance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
        if (typeof window !== "undefined") {
            // let efuzoneToken ;
            const adminToken = localStorage.getItem(ADMIN_AUTH_TOKEN);

            if (adminToken && config.headers) {
                config.headers.Authorization = `Bearer ${adminToken}`;
            }
        }

        return config;
    },
    (error: AxiosError) => Promise.reject(error)
);


// --- Response Interceptor ---
AxiosInstance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
        const status = error.response?.status;
        const message =
            (error.response?.data as any)?.message || "Something went wrong";

        switch (status) {
            case 400:
                toast.error("Bad request");
                break;
            case 401:
                toast.error("Unauthorized – please log in again");
                break;
            case 403:
                toast.error("Forbidden – access denied");
                break;
            case 404:
                toast.error("Not found");
                break;
            case 500:
                toast.error("Server error – please try again later");
                break;
            default:
                toast.error(message);
                break;
        }

        return Promise.reject(error);
    }
);

export default AxiosInstance;
