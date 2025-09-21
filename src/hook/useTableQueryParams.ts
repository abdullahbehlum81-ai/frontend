"use client";

import { useRouter, useSearchParams } from "next/navigation";

type QueryParamUpdate = {
    page?: number;
    perPage?: number;
    search?: string;
    [key: string]: string | number | undefined;
};

export function useTableQueryParams() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const updateQuery = (updates: QueryParamUpdate) => {
        const params = new URLSearchParams(searchParams.toString());

        Object.entries(updates).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                params.set(key, String(value));
            } else {
                params.delete(key);
            }
        });

        router.push(`?${params.toString()}`);
    };

    const setPage = (page: number) => updateQuery({ page });
    const setPerPage = (perPage: number) => updateQuery({ perPage, page: 1 });
    const setSearch = (search: string) => updateQuery({ search, page: 1 });

    return {
        setPage,
        setPerPage,
        setSearch,
        updateQuery, 
    };
}
