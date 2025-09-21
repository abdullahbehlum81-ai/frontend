"use client";
import DataTable from "@/components/ui/DataTable";
import Link from "next/link";
import toast from "react-hot-toast";
import { ConfirmDeleteButton } from "@/components/ui/Button";
import { BASEURL } from "@/constant";
import { deleteLogo } from "@/service/ClientLogoService";
import { ApiResponse, CustomError } from "@/types";
import { handleApiError } from "@/utils/ApiError";
import { FaEdit, FaTrash } from "react-icons/fa";
import { CreateAt, Updated_At } from "@/components/coman/DateFn";
import { useRouter } from "next/navigation";
import { useTableQueryParams } from "@/hook/useTableQueryParams";
import { parseSearchParams } from "@/utils/utils";
interface TableColumnsProp {
  id: number;
  logo: string;
  alt: string;
  created_at: string;
  updated_at: string;
}
interface PartnerLogoTableProps {
  getAllList: ApiResponse<TableColumnsProp>;
}
function PartnerLogoTable({
  getAllList
}: PartnerLogoTableProps) {
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
      return handleApiError({
        error: error as CustomError,
        url: "/partner/logo/remove",
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
      accessor: (row) => <CreateAt row={row} />,
    },
    {
      header: "Update Date",
      accessor: (row) => <Updated_At row={row} />,
    },
    {
      header: "Action",
      accessor: (row: TableColumnsProp) => (
        <div className="table-action-btn-wrap">
          <Link href={`partner-logo/edit/${row.id}`}>
            <FaEdit />
          </Link>
          <ConfirmDeleteButton onConfirm={() => handleDelete(row.id)}>
            <FaTrash />
          </ConfirmDeleteButton>
        </div>
      ),
    },
  ];

  let totalEntries = getAllList.total;
  let totalPages = getAllList.last_page;

  return (
    <DataTable
      currentPage={page}
      setCurrentPage={setPage}
      searchTerm={search}
      totalEntries={totalEntries}
      perPage={perPage}
      setPerPage={setPerPage}
      setSearchTerm={setSearch}
      data={getAllList.data}
      columns={columns}
      totalPages={totalPages}
    />
  );
}

export default PartnerLogoTable;