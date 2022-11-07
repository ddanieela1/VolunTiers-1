import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import setAuthToken from "../utils/setAuthToken";
import axios from 'axios';

const { REACT_APP_SERVER_URL } = process.env;

const OpportunitiesDetail = (user) => {
    const [isregistered, setIsRegistered] = useState(false);
    const [profile, setProfile] = useState([]);
    
    useEffect(() => {
        renderProfiles();
      }, []);

      useEffect(() => {
        console.log(profile);
      }, [profile]);
  
    const renderProfiles = async () => {
      setAuthToken(localStorage.getItem("jwtToken"));
      const response = await axios.get(`${REACT_APP_SERVER_URL}/users/profile`);
      setProfile(response.data);
    };

    let location = useLocation();
    const data = location.state;
    const userData = user;
    console.log("This is the data>>>>>>>>>", data);
    console.log("Did the User info get passed????", user)

    const handleSubmit = (e) => {
        e.preventDefault(); 
            axios.put(`${REACT_APP_SERVER_URL}/opportunities/:${data.opportunities.id}`, {users: users.push(req.user)})
            //need to push userid into users array in Opportunity 
            .then(response => {
                console.log('===> Yay, update was made');
                console.log(response);
                setIsRegistered(true);
                
            })
            .catch(error => console.log('===> Error in Submission', error));
        } 
        return (
            <div className="row mt-4">
                <div className="col-md-7 offset-md-3">
                    <div className="card card-body">
                        <h2 className="py-2"></h2>
                        <div>
                            <h3>Make a World of Difference...</h3>
                            <h3>Volunteer for</h3>
                           <h2>{data.opportunities.name}</h2>
                           <h4>{`${new Date(data.opportunities.date).getMonth() +1}-${new Date(data.opportunities.date).getDate()}-${new Date(data.opportunities.date).getFullYear()}`}</h4>
                           <h4>{data.opportunities.startTime} until {data.opportunities.endTime}</h4>
                           <h5>{data.opportunities.description}</h5>
    
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="hidden" name="id" value={user.id} className="form-control"/>
                            </div>
                            <button type="submit" className="btn btn-primary float-right">Register Now!</button>
                        </form>
    
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default OpportunitiesDetail;