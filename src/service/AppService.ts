import { ADMIN_PATH, API_VERSION_PATH, apiEndpoints, BASEURL } from "@/constant";
import AxiosInstance from "@/lib/axiosClient";
import { CustomError } from "@/types";
import { handleApiError } from "@/utils/ApiError";
const { GENERATE_TOKEN } = apiEndpoints;
interface LoginCredentials {
    email: string;
    password: string;
}

interface RootLoginResponse {
    token: string | null;
    user: string | null;
    success: boolean;
    msg: string | null;
}


export async function NextAppToken() {
    const endPoint = `${BASEURL}/${API_VERSION_PATH}/${GENERATE_TOKEN}`;

    try {
        const response = await fetch(endPoint, {
            method: "GET",
            credentials: "include",
            cache: "no-store",
            headers: {
                "Accept": "application/json",
            },
        });

        let jsonData: any = null;
        try {
            jsonData = await response.json();
        } catch {
            console.warn("No JSON body in response (maybe only Set-Cookie)");
        }

        return { response, jsonData };
    } catch (error) {
        console.error("NextAppToken fetch failed:", error);
        return { response: null, jsonData: null };
    }
}



export async function RootLogin(credentials: LoginCredentials): Promise<RootLoginResponse> {
    try {
        const { data: response } = await AxiosInstance.post(
            `${ADMIN_PATH}/login`, credentials);
        if (!response?.success) {
            console.error("Login Failed Please Try Again Later");
            return { token: null, user: null, success: false, msg: response?.message ?? "Login Failed" };
        }
        return {
            token: response?.token ?? null,
            user: response?.user?.email ?? null,
            success: true, msg: response?.message
        }
    } catch (error) {
        handleApiError({
            error: error as CustomError,
            url: `/app/root/login`,
        });
        return {
            token: null,
            user: null,
            success: false,
            msg: "Something went wrong"
        }
    }
}

export async function RootLogout(token: string) {
    try {
        const { data: response } = await AxiosInstance.get(`${ADMIN_PATH}/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return { response };
    } catch (error) {
        handleApiError({
            error: error as CustomError,
            url: `/app/root/logout`,
        });
        return { response: null }
    }
}