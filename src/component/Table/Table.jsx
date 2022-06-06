import React, { useState, useMemo } from 'react';
import Pagination from './Pagination';
import './style.css';
import THead from "./THead";
import TBody from "./TBody";



export default function Table({ columns, rows, pageSize}) {
  

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return rows.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
      <table>
        <THead columns={columns} />

        <TBody rows={currentTableData} />
        
        
      </table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={rows.length}
        pageSize={pageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </>
  );
}
