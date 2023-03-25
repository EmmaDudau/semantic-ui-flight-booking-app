import React from 'react';
import {Container, Header} from "semantic-ui-react";
import {Link} from "react-router-dom";

const Booking = () => {
    return (
        <Container text style={{marginTop: '7em'}}>
            <div>
               <Header as='h2'>Your flight has been booked!</Header>

                <Link to={`/manage-booking`}>
                    <button className="ui button">
                        Click here to manage your booking
                    </button>
                </Link>
            </div>
        </Container>
        )
}

export default Booking;