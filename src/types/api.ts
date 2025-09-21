import { CustomError } from "./error";

interface ApiResponse<T> {
    current_page: number;
    data: T[];
    first_page_url: string;
    last_page: number;
    last_page_url: string;
    links: any[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}
interface ApiErrorProps {
    error: CustomError;
    url?: string;
}

interface UpdateApiInterface {
    id: number,
    payload: object
}

interface ServerParams {
    cookieHeader?: string
}


interface ApiSSRErrorProps {
    error: unknown;
    url?: string;
    fallbackMessage?: string;
}
interface SearchParams {
    searchParams: {
        page?: string;
        perPage?: string;
        search?: string;
    };
}

export type { ApiErrorProps, ApiResponse,
     UpdateApiInterface, ServerParams, ApiSSRErrorProps, SearchParams }