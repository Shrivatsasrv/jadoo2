import React from 'react';
import Easy1 from './images/Easy1.jpg';
import Easy2 from './images/easy2.jpg';
import Easy3 from './images/easy3.jpg';
import greece from './images/greece.jpg';
import leaf from './images/leaf.jpg';
import map from './images/map.jpg';
import arrow from './images/arrow.jpg';
import building from './images/building.jpg';
import sideImg from './images/sideImg.jpg';




const Booking = () => {
    return (
        <div className='container'>
            <div className="row booking">
                <div className="col-lg booking-block-1">
                    <p>Easy and Fast</p>
                    <h1>Book your next trip in 3 easy steps</h1>
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="booking-block-1-bookingbox">
                                <img src={Easy1} alt="easy1" className='img-fluid' />
                                <div >
                                    <h5>Choose Destination</h5>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, totam?</p>
                                </div>


                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="booking-block-1-bookingbox">
                                <img src={Easy2} alt="easy2" className='img-fluid' />
                                <div >
                                    <h5>Make Payment</h5>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, totam?</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="booking-block-1-bookingbox">
                                <img src={Easy3} alt="easy3" className='img-fluid' />
                                <div >
                                    <h5>Reach Airport on Selected Date</h5>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, totam?</p>
                                </div>

                            </div>
                        </div>

                    </div>


                </div>
                <div className="col-lg booking-block-2">
                    <div className='booking-block-2-1'>
                        <img src={greece} alt="" className='img-fluid booking-block-2-1-main-img' />
                        <h5>Trip To Greece</h5>
                        <p>14-29 June | by Robbin joseph</p>
                        <span className='booking-block-2-1-icon-img'>
                            <img src={leaf} alt="leaf" className='img-fluid' />
                            <img src={map} alt="map" className='img-fluid' />
                            <img src={arrow} alt="arrow" className='img-fluid' />
                            <div className='booking-block-2-2'>
                                <img src={building} alt="building" />
                                <p>24 people going</p>
                            </div>
                        </span>


                    </div>
                    <div className="booking-block-2-3">
                        <img src={sideImg} alt="sideimg" className='img-fluid' />
                        <div className='booking-block-2-3-1'>
                            <p>Ongoing</p>
                            <h5>Trip to rome</h5>
                            <h6><span>40% </span>completed</h6>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                    </div>
                    <div className="booking-block-2-4">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking;