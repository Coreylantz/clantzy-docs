import React from "react";

// const TableRow = props => (
//   props.map(row => {
//     <tr>
//       <td>{row.fieldName}</td>
//       <td>{row.inputType}</td>
//       <td>{row.description}</td>
//     </tr>
//   })
// );


export const FieldTable = (  post  ) => {
  const TableRow = post.table.map((row, key) => 
        <tr key={`${row.fieldName}-1`}>
          <td>{row.fieldName}</td>
          <td>{row.inputType}</td>
          <td>{row.description}</td>
        </tr>)
  return (
    <table>
      <tbody>
        <tr>
          <th>Field Name</th>
          <th>Input Type</th>
          <th>Description</th>
        </tr>
        { TableRow }
      </tbody>
    </table>
  )
};