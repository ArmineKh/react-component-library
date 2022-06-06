import React from 'react'

const THead = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map(item=>(<th key={item.field}>{item.headerName}</th>))}
      </tr>
    </thead>
  )
}

export default THead