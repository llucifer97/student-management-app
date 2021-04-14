import React from "react";
import {useState} from  'react';
const axios = require('axios');





export default function Signup() {

    const [values, setValues] = useState({
        fname: '',
        lname: '',
        email: '',
        city : ''
    });
    
   

    const getData = (data) => {


    axios.post('/addstudent', data)
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });



    }



    const handleFirstNameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            fname: event.target.value,
        }));
    };

    const handleLastNameInputChange = (event) => {
       event.persist();
        setValues((values) => ({
            ...values,
            lname: event.target.value,
        }));
    };
    
    const handleEmailInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            email: event.target.value,
        }) );
    };
    
    const handleCityInputChange = (event) => {
         event.persist();
         setValues((values) => ({
             ...values,
             city: event.target.value,
         }) );
     };
    


    const handleSubmit = (event) => {
        event.preventDefault();
       
        
        //setValues((values) => ( { email: ""} ) );
        getData(values);
        console.log(values)
        }






  return (
    <div>
      <form onSubmit={handleSubmit}>
      
       
        <input
          id="first-name"
         
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.fname}
          onChange={handleFirstNameInputChange}
        />
        
        
        <input
          id="last-name"
         
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lname}
          onChange={handleLastNameInputChange}
        />
  
          
         <input
          id="email"
         
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleEmailInputChange}
        />

        <input
          id="city"
         
          type="text"
          placeholder="city"
          name="city"
          value={values.city}
          onChange={handleCityInputChange}
        />
        
            
        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
}