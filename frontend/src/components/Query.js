import React from "react";
import {useState} from  'react';

const axios = require('axios');



export default function Query(props) {

    const [values, setValues] = useState({
        fname: '',
        lname: '',
        email: '',
        city : ''
    });
    
    var data;
   

    const getData = () => {

        // http://localhost:5000/list?fname=ayush&city=pune

        let url = '/list?' ;

        if(values.fname){
            url = url + `fname=${values.fname}`
        }
        
        if(values.lname){
            url = url + `&lname=${values.lname}`
        }
        if(values.city){
            url = url + `&city=${values.city}`
        }
        if(values.email){
            url = url + `&email=${values.email}`
        }
        
        
        
       


    axios.get(url)
    .then((response) => {
      //console.log(response);
      data = response;
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
      <form onSubmit={handleSubmit , () => props.func(data)}>
      
       
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
        
            
        <button type="submit" >
          Register
        </button>
      </form>
      
    </div>
  );
}