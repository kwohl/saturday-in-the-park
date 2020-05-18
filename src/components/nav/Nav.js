import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './Nav.css'

const NavBar = props => {

    return (
        <nav>
            <Link to='/ '>
                Home
            </Link>
            <Link to='/myitinerary'>
                My Itinerary
            </Link>
            <Link to='/login'>
                Log In
            </Link>
            <Link to='/register'>
                Register
            </Link>
        </nav>
    )

};

export default withRouter(NavBar);