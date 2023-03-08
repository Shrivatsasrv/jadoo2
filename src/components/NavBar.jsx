import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import LogoImg from './images/logo1.jpg';


const NavBar = () => {
    return (
        <div className='container'>


            <div className='row Nav'>
                <div className="col-md-3"><img src={LogoImg} className='logo-img' alt="logo" /></div>
                <div className="col-md-9 navlink1">
                    <NavLink className='link' to='/DestinationBlog'>Destinations</NavLink>
                    <NavLink className='link' to='/Hotels'>Hotels</NavLink>
                    <NavLink className='link' to='/Flights'>Flights</NavLink>
                    <NavLink className='link' to='/BookingBlog'>Booking</NavLink>
                    <NavLink className='link' to='/Login'>Login</NavLink>
                    <NavLink className='link border1' to='/Signup'>Signup</NavLink>
                    <NavLink className='link  dropdown-toggle' to='En'>En</NavLink>
                </div>
            </div>


        </div>

    )
}

export default NavBar