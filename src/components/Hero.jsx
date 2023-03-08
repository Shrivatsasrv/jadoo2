import React from 'react';
import Heroine from './images/Heroine2-1.png';
import { NavLink } from 'react-router-dom';
import youtube from './images/youtube.jpg';
import heroshade from './images/herobgshade.jpg';


const Hero = () => {
    return (
        <div className="container">
            <div className='row'>
                <div className="col-md-5 hero1">
                    <h5 >Best Destination Around The word</h5>
                    <h1>Travel,enjoy and live a new and full life</h1>
                    <p> Built Wicket longer admire do barton vanity itself do in it.
                        Preferred to sportsmen it engrossed listening. Park gate
                        sell they west hard for the.</p>
                    <div>

                        <button className='hero1-btn1'><NavLink className='hero1-link1'>Find out more</NavLink></button>

                        <button className='hero1-btn2'><NavLink className='hero1-link2'><img src={youtube} alt="" /></NavLink></button>
                        <span>Play Demo</span>





                    </div>
                    <div className='hero1shade'>
                        <img src={heroshade} alt="shade" />
                    </div>

                </div>
                <div className="col-md-7 hero2"  >
                    <img src={Heroine} alt="heroine" className='img-fluid' />

                </div>

            </div>
        </div>

    )
}

export default Hero