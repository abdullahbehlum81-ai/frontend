import React, { useEffect, useState } from "react";
import DataTable from "@/components/ui/DataTable";
interface User {
  id: number;
  name: string;
  email: string;
}

export default function UsersTable() {
  const [data, setData] = useState<User[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalEntries, setTotalEntries] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // last_page = total pages
  // totalEntries = total
  //  currentPage = current_page

  // Columns define karo
  const columns = [
    {
      header: "ID",
      accessor: "id",
      className: "text-center",
    },
    {
      header: "Name",
      accessor: "name",
      className: "",
    },
    {
      header: "Email",
      accessor: "email",
      className: "",
    },
  ];

  useEffect(() => {
    async function fetchUsers() {
      setIsLoading(true);
      // API call example (adjust karo apni API ke hisaab se)
      const params = new URLSearchParams({
        page: currentPage.toString(),
        per_page: perPage.toString(),
        search: searchTerm,
      });
      const res = await fetch(`/api/users?${params.toString()}`);
      const json = await res.json();

      setData(json.data);
      setTotalPages(json.last_page);
      setCurrentPage(json.current_page);
      setTotalEntries(json.total);
      setIsLoading(false);
    }

    fetchUsers();
  }, [currentPage, perPage, searchTerm]);

  return (
    <DataTable<User>
      columns={columns}
      data={data}
      totalPages={totalPages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      row_classname=""
      column_classname=""
      theadclassname=""
      isLoading={isLoading}
      totalEntries={totalEntries}
      perPage={perPage}
      setPerPage={setPerPage}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
    />
  );
}
