import React, { useEffect, useState } from 'react';
import axios from 'axios';


const {eventId,hours} = props
const [checkIn, setCheckIn] = useState(hours.checkIn);
const [checkOut, setCheckOut] = useState(hours.checkOut);

function Hour(props) {
  
  const checkingIn = (e) => {
 setCheckIn(new Date().toParseInt());
  };

  const checkingOut = (e) => {
    setCheckOut(new Date().toParseInt());
     };
   
const submitTime = (e)=>{
  axios
    .post(`${REACT_APP_SERVER_URL}/opportunities/${props.eventId}`)({
      checkIn: signIn,
      checkOut: signOut,
    })
    .then((response) => {
      console.log(response)
    })
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
