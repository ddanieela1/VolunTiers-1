import React, { useEffect, useState } from 'react';
import axios from 'axios';



const [checkIn, setCheckIn] = useState('');
const [checkOut, setCheckOut] = useState('');

function Hour(props) {
  
  
  const checkingIn = (e) => {
 setCheckIn(new Date().toParseInt());
  };

  const checkingOut = (e) => {
    setCheckOut(new Date().toParseInt());
     };
   
const submitTime = (e)=>{
  axios
    .post(`${REACT_APP_SERVER_URL}/opportunities/${props.eventId.id}`)({
      checkIn: signIn,
      checkOut: signOut,
    })
    .then((response) => {
      console.log(response)
    })

}

  return (
    <div>
      {/* add time slots here */}
    </div>
  );
}

export default Hour;
