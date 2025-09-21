"use client";
import { useTableQueryParams } from "@/hook/useTableQueryParams";
import { ApiResponse } from "@/types";
import { deletePage, togglePageStatus } from "@/service/PageService";
import { handleApiCallById } from "@/utils/function";
import ToggleSwitch from "@/components/ui/Switch";
import { ConfirmDeleteButton } from "@/components/ui/Button";
import { FaEdit, FaTrash } from "react-icons/fa";
import DataTable from "@/components/ui/DataTable";
import { parseSearchParams } from "@/utils/utils";
import { useState } from "react";
import Link from "next/link";
import { PANNEL_URL_PATH } from "@/constant/constant";
import { useRouter } from "next/navigation";
interface TableColumnsProp {
  id: number;
  pageTitle: string;
  slug: string;
  status: number;
  publishDate: string;
}
interface PageParams {
  getAllList: ApiResponse<TableColumnsProp>;
}
function PageTable({ getAllList }: PageParams) {
  const [pageList, setPageList] = useState<TableColumnsProp[]>(getAllList.data);
  const { page, perPage, search } = parseSearchParams();
  const router = useRouter();
  const { setPage, setPerPage, setSearch } = useTableQueryParams();
  const handleDelete = (id: number) => {
    return handleApiCallById({
      id,
      fn: deletePage,
      errorUrl: "/page/remove",
    });
  };

  const handleToggleStatus = (id: number) => {
    setPageList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: item.status === 1 ? 0 : 1 } : item
      )
    );
    return handleApiCallById({
      id,
      fn: togglePageStatus,
      errorUrl: "/page/status",
    });
  };

  const Columns: {
    header: string;
    accessor:
      | keyof TableColumnsProp
      | ((row: TableColumnsProp) => React.ReactNode);
  }[] = [
    {
      header: "Title",
      accessor: "pageTitle",
    },
    {
      header: "Url",
      accessor: "slug",
    },

    {
      header: "Status",
      accessor: (row) => (
        <div className="mytable-status-col">
          <ToggleSwitch
            status={row.status}
            onChange={() => {
              handleToggleStatus(row.id);
            }}
          />
        </div>
      ),
    },
    {
      header: "Publish Date",
      accessor: "publishDate",
    },
    {
      header: "Actions",
      accessor: (row) => (
        <div className="table-action-btn-wrap">
          <button
            type="button"
            className="page-form-edit-btn"
            onClick={() => {
              router.push(`${PANNEL_URL_PATH}/cms/pages/edit/${row.id}`);
            }}
          >
            <FaEdit />
          </button>
          <ConfirmDeleteButton onConfirm={() => handleDelete(row.id)}>
            <FaTrash />
          </ConfirmDeleteButton>
        </div>
      ),
    },
  ];
  return (
    <DataTable
      columns={Columns}
      data={pageList}
      currentPage={page}
      setCurrentPage={setPage}
      perPage={perPage}
      setPerPage={setPerPage}
      searchTerm={search}
      setSearchTerm={setSearch}
      totalEntries={getAllList.total}
      totalPages={getAllList.last_page}
    />
  );
}

export default PageTable;
