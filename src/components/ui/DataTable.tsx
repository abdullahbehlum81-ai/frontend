"use client";
import "@/styles/sass/components/data_table.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";

interface DataTableProps<TData> {
  columns: {
    header: string;
    accessor: keyof TData | ((row: TData) => React.ReactNode);
    className?: string;
  }[];
  data: TData[];
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalEntries: number;
  perPage: number;
  setPerPage: (value: number) => void;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  isLoading?: boolean;
  row_classname?: string;
  column_classname?: string;
  theadclassname?: string;
  bodyId?: string;
  onScrollTop?: () => void;
}

function DataTable<TData>({
  columns,
  data,
  totalPages,
  currentPage,
  setCurrentPage,
  totalEntries,
  perPage,
  setPerPage,
  searchTerm,
  setSearchTerm,
  isLoading = false,
  row_classname = "",
  column_classname = "",
  theadclassname = "",
  bodyId,
  onScrollTop,
}: DataTableProps<TData>) {
  // Local state for debounced search input
  const [localSearch, setLocalSearch] = useState(searchTerm);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setSearchTerm(localSearch);
    }, 500); // 500ms debounce delay

    return () => clearTimeout(debounce);
  }, [localSearch, setSearchTerm]);

  const generatePages = () => {
    const pages: (number | string)[] = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i <= 5 ||
        i > totalPages - 1 ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }
    return pages;
  };

  const handlePageChange = (page: number) => {
    if (page === currentPage) return;
    setCurrentPage(page);
    if (onScrollTop) onScrollTop();
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="_data_table_action_wrap">
        <div className="_entries_select_">
          <label htmlFor="_show_entries" className="mr-2 text-sm text-gray-700">
            Show entries
          </label>
          <select
            id="_show_entries"
            value={perPage}
            onChange={(e) => {
              setPerPage(Number(e.target.value));
              handlePageChange(1);
            }}
            className="!lg:min-w-[120px] !w-full !inline-block !mb-2 !lg:mb-0 sl_control"
            aria-label="Select number of entries to show"
          >
            {[10, 20, 50, 100].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        <div className="_search_input_">
          <input
            type="search"
            placeholder="Search..."
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            aria-label="Search table data"
            className="sl_control"
          />
        </div>
      </div>

      <div className="_table_responsive_container_">
        <table
          className="_data_table_83912_"
          role="table"
          aria-rowcount={totalEntries}
          aria-colcount={columns.length}
        >
          <thead className={theadclassname || "_table_header_contain_2891_"}>
            <tr role="row">
              {columns.map((col, idx) => (
                <th
                  key={idx}
                  className={`${col.className || ""} ${row_classname}`}
                  role="columnheader"
                  style={{ cursor: "default" }}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody id={bodyId} role="rowgroup">
            {isLoading ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="_table_body_row_dv_"
                  role="cell"
                >
                  Loading...
                </td>
              </tr>
            ) : data && data.length > 0 ? (
              data.map((row, i) => (
                <tr key={i} className="_table_body_row_dv_" role="row">
                  {columns.map((col, j) => (
                    <td
                      key={j}
                      className={`${
                        col.className || ""
                      } ${column_classname} _table_body_inner_ bounce-in-up`}
                      role="cell"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {typeof col.accessor === "function"
                        ? col.accessor(row)
                        : String(row[col.accessor] ?? "")}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="_not_found_dv_"
                  role="cell"
                >
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination and summary */}
      <div className="_data_table_action_wrap">
        <div
          className="_data_table_sumary"
          aria-live="polite"
          aria-atomic="true"
        >
          Showing {(currentPage - 1) * perPage + 1} to{" "}
          {Math.min(currentPage * perPage, totalEntries)} of {totalEntries}{" "}
          entries
        </div>

        <nav
          className="_pagination_wrapper_"
          aria-label="Pagination Navigation"
        >
          <div className="_pagination_container_">
            <button
              className="_pagination_previous_btn_"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              aria-disabled={currentPage === 1}
              aria-label="Previous page"
            >
              <FaChevronLeft />
            </button>

            {generatePages().map((page, idx) =>
              page === "..." ? (
                <div
                  key={`dots_${idx}`}
                  className="_pagination_dots"
                  aria-hidden="true"
                >
                  &hellip;
                </div>
              ) : (
                <button
                  key={page}
                  onClick={() => handlePageChange(Number(page))}
                  className={
                    page === currentPage
                      ? "_pagination_page_active_"
                      : "_pagination_page_default_"
                  }
                  aria-current={page === currentPage ? "page" : undefined}
                  aria-label={`Page ${page}`}
                >
                  {page}
                </button>
              )
            )}

            <button
              className="_pagination_next_btn_"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              aria-disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              <FaChevronRight />
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default DataTable;
