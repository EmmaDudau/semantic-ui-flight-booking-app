import React, {useState, useEffect} from 'react';
import {Divider, Radio, Table} from 'antd';
import {Container, Header, Image} from "semantic-ui-react";
import axios from "axios";


const Home = () => {
    const [liveFlights, setLiveFlights] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/live-arrivals')
            .then(response => {
                setLiveFlights(response.data)
            });
    }, [])

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };


    return (
        <Container text style={{marginTop: '7em'}}>
            <Divider/>
            <div className="ui container">
                <Header as='h1'>Live Flights Status</Header>
                <Divider/>
                <div>
                    <table className="ui celled padded table">
                        <thead>
                        <tr>
                            <th className="single line">From</th>
                            <th>Time</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            liveFlights.map(
                                liveFlights =>
                                    <tr>
                                        <td>{liveFlights.from}</td>
                                        <td>{liveFlights.time}</td>
                                        <td>{liveFlights.status}</td>
                                    </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </Container>
    )
}


export default Home;