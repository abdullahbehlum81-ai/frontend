interface ErrorResponseData {
    message?: string;
    [key: string]: any;
}

interface ErrorResponse {
    status?: number;
    data?: ErrorResponseData;
    [key: string]: any;

}

interface CustomError extends Error {
    response?: ErrorResponse;
}

export type { CustomError, ErrorResponse }