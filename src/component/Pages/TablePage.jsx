import React from 'react'
import { Table } from "../index";

import './index.css'
import '../Table/style.css'
import { columns, rows } from '../../helpers/constants'


const TablePage = () => {
  return (
    <main>
        <h1>Table</h1>
        <p>Tables display sets of data</p>
        <p>In order to prevent the pagination controls from scrolling, the TablePagination component is used outside of the Table. </p>
        
        <Table columns={columns} rows={rows} pageSize={5} />
      </main>
  )
}

export default TablePage