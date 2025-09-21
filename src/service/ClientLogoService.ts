import { CustomError, PaginationInterface, ServerParams } from "@/types";
import AxiosInstance from "@/lib/axiosClient";
import { handleApiError } from "@/utils/ApiError";
import { apiEndpoints } from "@/constant/apiEndpoints";
import { FetchServer } from "@/lib/FetchServer";
const { CLIENTLOGO } = apiEndpoints;
const { BASE_PATH } = CLIENTLOGO;

const PAGE_KEY = `/client-logo`;

interface UpdateLogoInterface {
    client_logo: number,
    payload: object
}

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
        return { response: null };
    }
}


export async function getClientLogoList(
    {
        options = { page: 1, perPage: 10, search: "" }
    }: PaginationInterface,
    { cookieHeader }: ServerParams
) {
    try {
        const { page, perPage, search } = options;
        const endpoint = `${BASE_PATH}?page=${page}&perPage=${perPage}&search=${search}`;
        const data = await FetchServer(cookieHeader).get(endpoint, { next: { revalidate: 10 } });
        let getAllList = data?.clientlogo ?? []

        return { getAllList };
    } catch (error) {
        console.error("Error in getClientLogoList:", error);
        return { getAllList: [] }
    }
}

export async function deleteLogo(client_logo: number) {
    try {
        const endPoint = `${BASE_PATH}/${client_logo}`
        const { data: response } = await AxiosInstance.delete(endPoint);
        return { response };
    } catch (error) {
        handleApiError({
            error: error as CustomError,
            url: `${PAGE_KEY}/destroy`
        });
        return { response: null };
    }
}
export async function getSingleLogo(client_logo: number) {
    try {
        const endPoint = `${BASE_PATH}/${client_logo}`
        const { data: response } = await AxiosInstance.get(endPoint);
        const singleItem = response?.clientlogo;
        return { singleItem };
    } catch (error) {
        handleApiError({
            error: error as CustomError,
            url: `${PAGE_KEY}/single`,
        });
        return { singleItem: null }
    }
}

export async function updateLogo({ client_logo, payload }: UpdateLogoInterface) {
    try {
        const endPoint = `${BASE_PATH}/${client_logo}`
        const { data: response } = await AxiosInstance.put(endPoint, payload, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return { response };
    } catch (error) {
        handleApiError({
            error: error as CustomError,
            url: `${PAGE_KEY}/${client_logo}`,
        });
        return { response: null };
    }
}
