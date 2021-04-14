import React from 'react'
import { Table } from 'semantic-ui-react'
import TableRow from './TableRow'





const TableExampleSingleLine = (props) => {
  // const a = props.info[0][1] ? props.info[0] : '';
  //console.log( props.info[0][1]) // gives city

    //console.log("PROPS :  ",props)


    if(props.info === undefined) return <h1>Loading...</h1>
    
  return(
    
 
  <Table singleLine>
    <Table.Header>
      
        <TableRow name = "name" rollno = "ROLLLNO" email = "EMAIL" city = "CITY"/>
    </Table.Header>

    <Table.Body>

   {
      props.info[0].map((user,key) =>  <TableRow name = {user.fname + " " + user.lname} rollno = {user.student_id} email = {user.email} city = {user.city} key = {user.student_id}/>)

   }
    
    
    

    </Table.Body>
  </Table>

  )
}

export default TableExampleSingleLine
