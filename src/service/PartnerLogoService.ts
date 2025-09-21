import { CustomError, PaginationInterface, ServerParams } from "@/types";
import AxiosInstance from "@/lib/axiosClient";
import { handleApiError } from "@/utils/ApiError";
import { apiEndpoints } from "@/constant/apiEndpoints";
import { FetchServer } from "@/lib/FetchServer";
const { PARTNERLOGO } = apiEndpoints;
const { BASE_PATH } = PARTNERLOGO;

interface UpdateLogoInterface {
    partner_logo: number,
    payload: object
}

const PAGE_KEY = "/partner-logo";

export async function uploadLogo(payload: object) {
    try {
        const { data: response } = await AxiosInstance.post(BASE_PATH, payload, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return { response };
    } catch (error) {
        handleApiError({
            error: error as CustomError,
            url: `${PAGE_KEY}/upload`,
        });
        return { response: null }
    }
}


export async function getPartnerLogoList(
    { options = { page: 1, perPage: 10, search: "" } }: PaginationInterface,
    { cookieHeader }: ServerParams
) {
    const { page, perPage, search } = options;
    try {
        const endpoint = `${BASE_PATH}?page=${page}&perPage=${perPage}&search=${search}`;
        const data = await FetchServer(cookieHeader).get(endpoint, { next: { revalidate: 10 } });
        return { getAllList: data?.partnerLogo ?? [] };
    } catch (error) {
        console.error("Error in getClientLogoList:", error);
        return { getAllList: [] };
    }
}

export async function deleteLogo(partner_logo: number) {
    try {
        const endPoint = `${BASE_PATH}/${partner_logo}`
        const { data: response } = await AxiosInstance.delete(endPoint);
        return { response };

    } catch (error) {
        handleApiError({
            error: error as CustomError,
            url: `${PAGE_KEY}/destroy`,
        });
        return { response: null }
    }
}
export async function getSingleLogo(partner_logo: number) {
    try {
        const endPoint = `${BASE_PATH}/${partner_logo}`
        const { data: response } = await AxiosInstance.get(endPoint);
        const singleItem = response?.partnerLogo;
        return { singleItem };

    } catch (error) {
        handleApiError({
            error: error as CustomError,
            url: `${PAGE_KEY}/single`,
        });
        return { singleItem: null }
    }
}

export async function updateLogo({ partner_logo, payload }: UpdateLogoInterface) {
    try {
        const endPoint = `${BASE_PATH}/${partner_logo}`
        const { data: response } = await AxiosInstance.put(endPoint, payload, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return { response };
    } catch (error) {
        handleApiError({
            error: error as CustomError,
            url: `${PAGE_KEY}/${partner_logo}`,
        });
        return { response: null }
    }
}
