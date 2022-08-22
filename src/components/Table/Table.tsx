import { Card, Paper } from '@mui/material'
import React from 'react'
import './Table.scss'

interface Props {
  columns: string[]
  rows: any[][]
}
export const Table = ({ columns, rows }: Props) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, index) => (
              <td key={index}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
