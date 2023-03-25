import React from 'react'
import { Link } from 'react-router-dom';
import {
    Container,
    Image,
    Menu
} from 'semantic-ui-react';


const FixedMenuLayout = () => (
    <div>
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item as='a' header>
                    <Image size='mini' src="/logo.png" style={{ marginRight: '1.5em' }} />
                    <Link to="/">
                    Aloha Air
                </Link>
            </Menu.Item>
                <Menu.Item as='a'>
                    <Link to="/book-a-flight">
                        Fly with us
                    </Link>
                </Menu.Item>
                <Menu.Item as='a'>
                    <Link to="/manage-booking">
                    Manage Bookings
                </Link>
                </Menu.Item>
                <Menu.Item as='a'>
                    <Link to="/about-us">
                    About us
                    </Link>
                </Menu.Item>
            </Container>
        </Menu>
    </div>
)

export default FixedMenuLayout;