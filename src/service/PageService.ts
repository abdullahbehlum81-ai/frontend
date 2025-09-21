import AxiosInstance from "@/lib/axiosClient"
import { FetchServer } from "@/lib/FetchServer"
import { CustomError, UpdateApiInterface, PaginationInterface, ServerParams } from "@/types";
import { apiEndpoints } from "@/constant/apiEndpoints";
import { handleSrrError, handleApiError } from "@/utils/ApiError";
const PAGE_KEY = "pages";
const { CMS } = apiEndpoints
const { PAGES } = CMS;
const { BASE_PATH, CREATE, LIST, STATUS } = PAGES;
export async function createPage(payload: object) {
    try {
        const { data: response } = await AxiosInstance.post(`${BASE_PATH}${CREATE}`, payload, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return { response };
    } catch (error) {
        handleApiError({
            error: error as CustomError,
            url: `${PAGE_KEY}/create`,
        });
        return { response: null };
    }
}
export async function updatePage({ id, payload }: UpdateApiInterface) {
    try {
        const { data: response } = await AxiosInstance.post(`${BASE_PATH}/${id}`, payload, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return { response };
    } catch (error) {
        handleApiError({
            error: error as CustomError,
            url: `${PAGE_KEY}/${id}/update`,
        });
        return { response: null };

    }
}

export async function deletePage(id: number) {
    try {
        const { data: response } = await AxiosInstance.delete(`${BASE_PATH}/${id}`);
        return { response };
    } catch (error) {
        handleApiError({
            error: error as CustomError,
            url: `${PAGE_KEY}/${id}/remove`,
        });
        return { response: null };

    }
}

export async function togglePageStatus(id: number) {
    try {
        const { data: response } = await AxiosInstance.put(`${BASE_PATH}/${id}${STATUS}`);
        return { response };
    } catch (error) {
        handleApiError({
            error: error as CustomError,
            url: `${PAGE_KEY}/${id}/status`,
        });
        return { response: null };

    }
}

export async function getPagePaginatedList({ options }: PaginationInterface, { cookieHeader }: ServerParams) {
    try {
        const { page, perPage, search } = options;
        const endpoint = `${BASE_PATH}${LIST}?page=${page}&perPage=${perPage}&search=${search}`;
        const data = await FetchServer(cookieHeader).get(endpoint, {
            next: {
                revalidate: 15,
            }
        });

        return { getAllList: data?.pages ?? [] };
    } catch (error) {
        handleSrrError({ error, url: `${PAGE_KEY}/list` });
        return { getAllList: [] };
    }
}

export async function getSinglePage(id: number) {
    try {
        const endPoint = `${BASE_PATH}/${id}`
        const { data: response } = await AxiosInstance.get(endPoint);
        const singleItem = response?.page;
        return { singleItem }
    } catch (error) {
        handleSrrError({ error, url: `${PAGE_KEY}/${id}` });
        return { singleItem: null }
    }
}