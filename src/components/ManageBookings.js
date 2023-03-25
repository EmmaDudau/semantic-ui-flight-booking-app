import React, {useState, useEffect} from 'react';
import {Container} from "semantic-ui-react";
import BookingService from "../services/BookingService";
import {Link} from "react-router-dom";


function ManageBookings() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        getBookings()
    }, []);

    const getBookings = () => {
        BookingService.getBookings().then((response) => {
            setBookings(response.data)
        });
    };


    return (
        <Container text style={{marginTop: '7em'}}>
            <div className="ui segment container">
                <h1 className="text-center"> Manage reservations</h1>
                <table className="ui celled padded table">
                    <thead>
                    <tr>
                        <th className="single line">Reservation ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Destination</th>
                        <th>Edit</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bookings.map(
                        booking =>
                        <tr key={booking.id}>
                            <td>{booking.departure}</td>
                            <td>{booking.arrival}</td>
                            <td>{booking.flyOutDate}</td>
                            <td>{booking.flyReturnDate}</td>
                            <td>
                                <Link to={`/edit-booking/${booking.id}`}>
                                    <button className="ui button">
                                        Edit
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </Container>
    );
}


export default ManageBookings;