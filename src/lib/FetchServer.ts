


import { BASEURL, API_VERSION_PATH } from "@/constant";

/**
 * Fetch wrapper to behave like AxiosServer
 * @param cookies Optional cookie string
 */
export const FetchServer = (cookies?: string) => {
    /**
     * GET request
     */
    const get = async (endpoint: string, options?: RequestInit) => {
        const headers: Record<string, string> = {
            "Content-Type": "application/json",
            Accept: "application/json",
        };

        if (cookies) {
            headers.Cookie = cookies;

            const match = cookies.match(/efuzone_root_token=([^;]+)/);
            if (match) headers.Authorization = `Bearer ${match[1]}`;
        }

        const url = `${BASEURL}/${API_VERSION_PATH}${endpoint}`;

        const res = await fetch(url, {
            method: "GET",
            headers,
            ...options,
        });
        if (res.status === 401) {
            if (typeof window !== "undefined") {
                window.location.href = "/efuzone/efuzone-backend/";
            }
            return null; 
        }
        if (!res.ok) throw new Error(`Fetch error: ${res.status}`);
        return res.json();
    };

    /**
     * POST request
     */
    const post = async (endpoint: string, body: any, options?: RequestInit) => {
        const headers: Record<string, string> = {
            "Content-Type": "application/json",
            Accept: "application/json",
        };

        if (cookies) {
            headers.Cookie = cookies;

            const match = cookies.match(/efuzone_root_token=([^;]+)/);
            if (match) headers.Authorization = `Bearer ${match[1]}`;
        }

        const url = `${BASEURL}/${API_VERSION_PATH}${endpoint}`;

        const res = await fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify(body),
            ...options,
        });

        if (!res.ok) throw new Error(`Fetch error: ${res.status}`);
        return res.json();
    };

    return { get, post };
};


