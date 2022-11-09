import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect, useLocation } from "react-router-dom";
const  REACT_APP_SERVER_URL  = process.env.REACT_APP_SERVER_URL;


function Hour(props) {
  const location = useLocation();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const checkingIn = (e) => {
    setCheckIn(new Date());
    axios
    .put(`${REACT_APP_SERVER_URL}/hours/${location.state.hours.userId}`,{
      signIn: checkIn,
    })
    .then((response) => {
      console.log(response);
      return <Redirect to="/opportunities"/>;
    })
    .catch((error) => {
      console.log("Error", error);
    });
  };

  const checkingOut = (e) => {
    setCheckOut(new Date());
    axios
    .put(`${REACT_APP_SERVER_URL}/hours/${location.state.hours.userId}`,{
      signOut: checkOut,
    })
    .then((response) => {
      console.log(response);
      return <Redirect to="/opportunities" />;
    })
    .catch((error) => {
      console.log("Error", error);
    });
  };

  
  // const submitTime = (e) => {
  //   if (!checkIn && !checkOut) {
  //     axios
  //       .put(`${REACT_APP_SERVER_URL}/opportunities/${location.state.opportunities._id}`,{
  //         signIn: checkIn,
  //       })
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((error) => {
  //         console.log("Error", error);
  //       });
  //       if (checkIn) {
  //         return <Redirect to="/opportunities" />;
  //       }
  //       if (checkOut) {
  //         return <Redirect to="/opportunities" />;
  //       }
  //   } else {
  //     axios
  //       .put(`${REACT_APP_SERVER_URL}/hours/${eventId.id}`)({
  //         signIn: checkIn,
  //         signOut: checkOut,
  //       })
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((error) => {
  //         console.log("Error", error);
  //       });
  //   }
  // };



  return (
    <div>
        <button onClick={checkingIn}>Check In</button>
      <button onClick={checkingOut}>Check Out</button>

      {/* <button onClick={submitTime}>Submit</button> */}

      {/* <button onClick={()=> props.checkingIn()}>Check In</button>
      <button onClick={()=> props.checkingOut()}>Check Out</button>
      <button onClick={()=> props.submitTime()}>Submit</button> */}

    </div>
  );
}



export default Hour;
