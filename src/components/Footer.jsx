import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import facebook from './images/fb.jpg';
import insta from './images/insta.jpg';
import twitter from './images/twitter.jpg';
import playstore from './images/playstore.jpg';
import applestore from './images/applestore.jpg'


const Footer = () => {
    return (
        <div className="container">
            <div className='row footer1'>
                <div className="col-lg-2 col-md-4 footer-name">
                    <h1>Jadoo.</h1>
                    <p>Book your trip in minute, get full

                        Control for much longer</p>
                </div>
                <div className="col-lg-2 col-md-4 footer-link footer-link1">
                    <h3>Company</h3>
                    <div className=''>
                        <span className='footer-link-span'><NavLink className='footer-link-innner' to='/add'>About</NavLink></span>
                        <span className='footer-link-span'><NavLink className='footer-link-innner' to=''>Career</NavLink></span>
                        <span className='footer-link-span'> <NavLink className='footer-link-innner' to=''>Mobile</NavLink></span>


                    </div>



                </div>
                <div className="col-lg-2 col-md-4 footer-link">
                    <h3>Contact</h3>
                    <div className=''>
                        <span className='footer-link-span'><NavLink className='footer-link-innner' to='/add'>Help/FAQ</NavLink></span>
                        <span className='footer-link-span'><NavLink className='footer-link-innner' to=''>Press</NavLink></span>
                        <span className='footer-link-span'> <NavLink className='footer-link-innner' to=''>Affilates</NavLink></span>


                    </div>

                </div>
                <div className="col-lg-2 col-md-4 footer-link">
                    <h3>More</h3>
                    <div className=''>
                        <span className='footer-link-span'><NavLink className='footer-link-innner' to='/add'>AirlineFees</NavLink></span>
                        <span className='footer-link-span'><NavLink className='footer-link-innner' to=''>Airline</NavLink></span>
                        <span className='footer-link-span'> <NavLink className='footer-link-innner' to=''>Low fare tips</NavLink></span>
                    </div>

                </div>
                <div className='col-lg-4 col-md-5 footer-icon'>
                    <div className="icon">
                        <img className='img-fluid footer-img' src={facebook} alt="fb" />
                        <img className='img-fluid footer-img' src={insta} alt="ig" />
                        <img className='img-fluid footer-img' src={twitter} alt="tw" />
                    </div>
                    <p>Discover our app</p>
                    <div className="app-icon">
                        <img className='img-fluid footer-appimg1' src={playstore} alt="fb" />
                        <img className='img-fluid footer-appimg2' src={applestore} alt="ig" />

                    </div>

                </div>
                <p className='footer-rights'>All Rights are reserved @jadoo.co</p>

            </div >
        </div>
    )
}

export default Footer