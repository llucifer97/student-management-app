import React from 'react'
import { Tab } from 'semantic-ui-react'
import TableExampleSingleLine from './Table'
 import  { useState } from 'react';
 import Signup from './Form'
import Query from './Query'

 const axios = require('axios');

const TabExampleBasic = () => {

  const [data, setData] = useState([]);


const getData = () => {

  axios.get('/students')
 .then(function (response) {
   // handle success
   
   //console.log(response.data)
   setData(response.data);

 })
 .catch(function (error) {
   // handle error
   console.log(error);
 })
 .then(function () {
   // always executed
 });
}

// useEffect(() => {
//   getData();
// }, []);

let val ;
  const getStudentlist = (item) => {
    val = item;
    console.log(val);
    console.log("getStdudentdata is called...")
  }


const panes = [
  { menuItem: 'Tab 1', render: () =>  

    <Tab.Pane>
    <button onClick = {getData} >GET STUDENT LIST</button>
    {
      data.length > 0 ?  <TableExampleSingleLine info = {[data]} /> : ""
    }
   
    </Tab.Pane>

   },
   { menuItem: 'Tab 2', render: () =>  

    <Tab.Pane>
    <h1>register here!</h1>
    <Signup />
    </Tab.Pane>

   },
   { menuItem: 'Tab 3', render: () =>  

   <Tab.Pane>
   <Query func = {getStudentlist}/>
   {
      val?.info?.length > 0 ? <TableExampleSingleLine info = {val} /> : "Loading..."
   }
   
    
    
   </Tab.Pane>

  }
  
]

 return (
  <Tab panes={panes} />

 )}

export default TabExampleBasic;
