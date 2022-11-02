import React from "react";
//user info imported here

function Hour(props) {
  const [hour, setHour] = useState("");

  //    checkIn={props.signIn}
  //    checkOut={props.signOut}

  axios
    .post(`${REACT_APP_SERVER_URL}/hours/:userId`)({
      signIn: this.props.signIn,
      signOut: this.props.signOut,
    })
    .then((res) => {
      const times = result.data;
      times.sort(function (a, b) {
        return a - b;
      });
    });

  const checkingIn = (e) => {
    // const newTime = e.target.value
    this.setState(new Date(props.signIn));
  };

  const checkingOut = (e) => {
    this.setState(new Date(props.signOut));
  };

  return (
    <div>
      {/* add time slots here */}
    </div>
  );
}

export default Hour;
