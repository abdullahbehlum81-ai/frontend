type PaginationOption = {
    page?: number;
    perPage?: number;
    search?: string
}
interface PaginationInterface {
    options: PaginationOption
}

export type { PaginationInterface, PaginationOption }