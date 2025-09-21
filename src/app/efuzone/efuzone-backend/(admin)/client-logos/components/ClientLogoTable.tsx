"use client";

import DataTable from "@/components/ui/DataTable";
import { ConfirmDeleteButton } from "@/components/ui/Button";
import { BASEURL } from "@/constant";
import { deleteLogo } from "@/service/ClientLogoService";
import { ApiResponse, CustomError } from "@/types";
import { handleApiError } from "@/utils/ApiError";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaEdit, FaTrash } from "react-icons/fa";
import { CreateAt, Updated_At } from "@/components/coman/DateFn";
import { useTableQueryParams } from "@/hook/useTableQueryParams";
import { parseSearchParams } from "@/utils/utils";

interface TableColumnsProp {
  id: number;
  logo: string;
  alt: string;
  created_at: string;
  updated_at: string;
}

interface ClientLogoTableProps {
  getAllList: ApiResponse<TableColumnsProp>;
}

function ClientLogoTable({ getAllList }: ClientLogoTableProps) {
  const router = useRouter();
  const { page, perPage, search } = parseSearchParams();
  const { setPage, setPerPage, setSearch } = useTableQueryParams();

  const handleDelete = async (id: number) => {
    try {
      const { response } = await deleteLogo(id);
      if (response?.success) {
        toast.success(response?.message);
        router.refresh();
      }
    } catch (error) {
      handleApiError({
        error: error as CustomError,
        url: "/client/logo/remove",
      });
    }
  };

  const columns: {
    header: string;
    accessor:
      | keyof TableColumnsProp
      | ((row: TableColumnsProp) => React.ReactNode);
    className?: string;
  }[] = [
    {
      header: "Logo",
      accessor: (row: TableColumnsProp) => (
        <img
          src={`${BASEURL}${row.logo}`}
          alt={row.alt}
          width={100}
          height={100}
        />
      ),
    },
    {
      header: "Alt",
      accessor: "alt",
    },
    {
      header: "Created Date",
      accessor: (row: TableColumnsProp) => <CreateAt row={row} />,
    },
    {
      header: "Update Date",
      accessor: (row: TableColumnsProp) => <Updated_At row={row} />,
    },
    {
      header: "Action",
      accessor: (row: TableColumnsProp) => (
        <div className="table-action-btn-wrap">
          <Link href={`client-logos/edit/${row.id}`}>
            <FaEdit />
          </Link>
          <ConfirmDeleteButton onConfirm={() => handleDelete(row.id)}>
            <FaTrash />
          </ConfirmDeleteButton>
        </div>
      ),
    },
  ];

  return (
    <DataTable
      currentPage={page}
      perPage={perPage}
      setPerPage={setPerPage}
      searchTerm={search}
      setSearchTerm={setSearch}
      setCurrentPage={setPage}
      totalEntries={getAllList.total}
      totalPages={getAllList.last_page}
      data={getAllList.data}
      columns={columns}
    />
  );
}

export default ClientLogoTable;
