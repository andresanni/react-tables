import React, { useMemo } from "react";
import { useTable, useRowSelect } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import './BasicTable.css'
import { CheckBox } from "./CheckBox";

const RowSelection = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const addSelectionColumn= (hooks)=>{
    hooks.visibleColumns.push(columns=>{
      return [
        {
          id:'selection',
          Header:({getToggleAllRowsSelectedProps})=>(
            <CheckBox {...getToggleAllRowsSelectedProps()}/>
          ),
          Cell:({row})=>(
            <CheckBox {...row.getToggleRowSelectedProps()}/>
          )
        },
        ...columns
      ]            
    })
  }


  const tableInstance = useTable({ columns, data },useRowSelect,(hooks)=>{addSelectionColumn(hooks)});

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, footerGroups,selectedFlatRows } =
    tableInstance;
  
  const firstPageRows = rows.slice(0,10);

  

  


    return (
    <div className="container">
    <table {...getTableProps()}>
      <thead>
        {// Loop over the header rows
        headerGroups.map(headerGroup => (
          // Apply the header row props
          <tr {...headerGroup.getHeaderGroupProps()}>
            {// Loop over the headers in each row
            headerGroup.headers.map(column => (
              // Apply the header cell props
              <th {...column.getHeaderProps()}>
                {// Render the header
                column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      {/* Apply the table body props */}
      <tbody {...getTableBodyProps()}>
        {// Loop over the table rows
        firstPageRows.map(row => {
          // Prepare the row for display
          prepareRow(row)
          return (
            // Apply the row props
            <tr {...row.getRowProps()}>
              {// Loop over the rows cells
              row.cells.map(cell => {
                // Apply the cell props
                return (
                  <td {...cell.getCellProps()}>
                    {// Render the cell contents
                    cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
      <tfoot>
        {
          footerGroups.map(footerGroup =>(
            <tr {...footerGroup.getFooterGroupProps()}>
              {
                footerGroup.headers.map(column=>(
                  <td {...column.getFooterProps}>
                    {column.render("Footer")}
                  </td>
                ))
              }
            </tr>
          ))
        }
      </tfoot>
    </table>
    
      <div className='selected-rows'>
        <h2>Datos seleccionados</h2>
        <pre>{JSON.stringify(selectedFlatRows.map(row=>row.original), null, 2)}</pre>
      </div>
    </div>
    );
};

export default RowSelection;
