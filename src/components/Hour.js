import React, { useEffect, useState } from 'react';
import axios from 'axios';
const{REACT_APP_SERVER_URL} = process.env;


function Hour(props) {
  const {eventId,hours} = props
  const [checkIn, setCheckIn] = useState(hours.checkIn);
  const [checkOut, setCheckOut] = useState(hours.checkOut);
  
  const checkingIn = (e) => {
 setCheckIn(new Date().toParseInt());
  };

  const checkingOut = (e) => {
    setCheckOut(new Date().toParseInt());
     };
   
const submitTime = (e)=>{
  if(!checkIn && !checkOut){
    axios.post(`${REACT_APP_SERVER_URL}/hours/${eventId}`)({
      signIn:checkIn,
      signOut:checkOut,
    })
    .then((response) => {
      console.log(response)
    })
    .catch(error =>{
      console.log('Error',error)
    })

  }else{
axios.put(`${REACT_APP_SERVER_URL}/hours/${eventId}`)({
      signIn:checkIn,
      signOut:checkOut,
    })
    .then((response) => {
      console.log(response)
    })
    .catch(error =>{
      console.log('Error',error)
    })
  }
}

  return (
    <div>
    
      <button onClick={checkingIn}>Check In</button>
      <button onClick={checkingOut}>Check Out</button>
      <button onClick={submitTime}>Submit</button>
    </div>
  );
}

export default Hour;
