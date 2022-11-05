import React, { useEffect, useState } from 'react'
import axios from 'axios';
import OppDetails from './components/OppDetails';
const { REACT_APP_SERVER_URL } = process.env;

const Opportunities = () => {
    const [opportunities, setOpportunity] = useState([]);

    useEffect(() => {
        fetchOpportunity();
    }, [])
    useEffect(() => {
        console.log(opportunities)
    }, [opportunities])

    const fetchOpportunity = async () => {
        const response = await axios.get(`${REACT_APP_SERVER_URL}/users/opportunities`)
        setOpportunity(response.data);
    }


    return (
        <OppDetails></OppDetails>
        <div className="board">
            <h1 className='opportunities'>Opportunities Available</h1>

            <div style={{ alignItems: 'center', margin: '20px 60px' }}>
                <ul>
                    {
                        opportunities.map((opportunities) => {
                            return <li key={opportunities.id}>{ opportunities.name }</li>
                        })
                    }
                </ul>
            </div>


        </div>
    );
}

export default Opportunities;