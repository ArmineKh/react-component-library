import React from 'react'

const TBody = ({ rows }) => {
  return (
    <tbody>
          {rows.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            );
          })}
        </tbody>
  )
}

export default TBody