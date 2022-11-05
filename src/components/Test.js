import React from 'react';

const Test = (props) => {
    return (
        <div>
            <h1>MERN Authentication</h1>
            <p>Welcome to my app.</p>
            <Hour>
                {props.signIn}
                {props.signOut}
            </Hour>

        </div>
    )
}

export default Test;