import React, {useState, useEffect} from "react";
import {Link, useParams} from 'react-router-dom';
import {Container, Header, Menu, Dropdown, Image} from "semantic-ui-react";
import {DatePicker, Space} from "antd";
import 'antd/dist/antd.css';
import {useNavigate} from "react-router";
import BookingService from "../services/BookingService";
import moment from "moment";


function Flights() {

    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');
    const [flyOutDate, setFlyOutDate] = useState('');
    const [flyReturnDate, setFlyReturnDate] = useState('');
    let navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateBooking = (e) => {
        e.preventDefault();

        console.log("fff"+departure)
        const booking = {id, departure, arrival, flyOutDate, flyReturnDate}

        if (id) {
            console.log("fff")
            const dateFormat = 'YYYY-MM-DD';
            setFlyReturnDate(moment(flyReturnDate, dateFormat).utc(true));
            setFlyOutDate(moment(flyOutDate,dateFormat ).utc(true));
            BookingService.updateBooking(id, booking).then((response) => {
                navigate('/booking')
            }).catch(error => {
                console.log(error)
            })

        } else {
            BookingService.createBooking(booking).then((response) => {

                console.log(response.data)
                navigate('/booking');

            }).catch(error => {
                console.log(error)
            })
        }

    }



    useEffect(() => {
        if (id != null) {
            BookingService.getBookingById(id).then((response) => {
                setDeparture(response.data.departure)
                setArrival(response.data.arrival)
                setFlyOutDate(moment(response.data.flyOutDate, "YYYY-MM-DD"));
                setFlyReturnDate(moment(response.data.flyReturnDate, "YYYY-MM-DD"));
            }).catch(error => {
                console.log(error)
            })
        }
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Booking</h2>
        }else{
            return <h2 className = "text-center">Add Booking</h2>
        }
    }

    const dateFormat = 'YYYY/MM/DD';

    return (
        <Container text style={{marginTop: '7em'}}>
            <Header as='h1'>{title()}</Header>
            <div className="ui form">
                <br></br>
                <p>Departing from</p>

                <select className="ui search dropdown" value={departure} onChange={(e) => setDeparture(e.target.value)}>
                    <option value="">State</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                </select><p> Arriving to</p>
                <select className="ui search dropdown" value={arrival} onChange={(e) => setArrival(e.target.value)}>
                    <option value="">State</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                </select>
            </div>
            <br/>
            <div className="ui section divider"></div>
            <Space direction="vertical">
                <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} value={flyOutDate}
                            onChange={(e) => {
                                console.log(e)
                                setFlyOutDate(moment(e, dateFormat).utc(true));
                            }}/>
                <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} value={flyReturnDate}
                            onChange={(e) => {
                                setFlyReturnDate(moment(e, dateFormat).utc(true));
                            }}/>
            </Space>
            <div className="ui section divider"></div>
            <br/>
            <button className="ui inverted pink button" onClick={saveOrUpdateBooking}>Book flight</button>
        </Container>
    )
}

export default Flights;