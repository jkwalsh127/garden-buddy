import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_GARDENS } from '../utils/queries';
import { useTable } from 'react-table'


const GardenTable = () => {
    const { loading, data } = useQuery(QUERY_GARDENS);
    const gardenList = data?.gardens || [];

    const tableData = React.useMemo(
        () => 
        {gardenList.map((garden) => {
                {garden.vegetable}
                {garden.variety}
                {garden.sowDate}
                {garden.plantDate}
                {garden.firstHarvest}
                {garden.lastHarvest}
                {garden.notes}
          })}
      );
    
      const columns = React.useMemo(
        () => [
          {
            Header: 'Vegetable',
            accessor: 'col1',
          },
          {
            Header: 'Variety',
            accessor: 'col2',
          },
        ],
        []
      )
    
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data })
    
      return (
        <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps()}
                    style={{
                      borderBottom: 'solid 3px red',
                      background: 'aliceblue',
                      color: 'black',
                      fontWeight: 'bold',
                    }}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{
                          padding: '10px',
                          border: 'solid 1px gray',
                          background: 'papayawhip',
                        }}
                      >
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      )
    };

export default GardenTable;