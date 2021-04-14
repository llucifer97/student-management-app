import React from 'react'
import { Table } from 'semantic-ui-react'

const TableRow = (props) => (
  
   
      <Table.Row>
        <Table.Cell>{props.name}</Table.Cell>
        <Table.Cell> {props.rollno}</Table.Cell>
        <Table.Cell>{props.email}</Table.Cell>
        <Table.Cell>{props.city}</Table.Cell>
      </Table.Row>
      
    

)

export default TableRow;
