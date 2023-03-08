import React from 'react';
import Dest1 from './images/rome.jpg';
import Dest2 from './images/London.jpg';
import Dest3 from './images/europe.jpg';
import destarrow from './images/destinationarrow.jpg';
import destsideimg from './images/destinationsideimg.jpg';

const Destination = () => {
    return (
        <div className="container-fluid destinationfluid">
            <img src={destsideimg} className='destinationsideimg1' alt="" />
            <div className="container">
                <div className='row destination'>
                    <p className='text-center'>Top Selling</p>
                    <h1 className='text-center'>Top Destinations</h1>
                    <div className="col">
                        <div className="card destinationcarddesign" >
                            <img src={Dest1} className="card-img-top destinationCardImage" alt="destination1" />
                            <div className="card-body destination-card-body">
                                <div className='destinationleft'>
                                    <h5 className="card-title">Rome,Italy  </h5>
                                    <h5>$5,42k</h5>
                                </div>
                                <img src={destarrow} alt="" />
                                <span className="card-text">10 Days Trip</span>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card destinationcarddesign" >
                            <img src={Dest2} className="card-img-top destinationCardImage" alt="destination1" />
                            <div className="card-body destination-card-body">
                                <div className='destinationleft'>
                                    <h5 className="card-title">London, UK</h5>
                                    <h5>$4.2k </h5>
                                </div>
                                <img src={destarrow} alt="" />
                                <span className="card-text">12 Days Trip</span>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card destinationcarddesign" >
                            <img src={Dest3} className="card-img-top destinationCardImage" alt="destination1" />
                            <div className="card-body destination-card-body">
                                <div className='destinationleft'>
                                    <h5 className="card-title">Full Europe</h5>
                                    <h5>$15k </h5>
                                </div>
                                <img src={destarrow} alt="" />
                                <span className="card-text">28 Days Trip</span>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>


    )
}

export default Destination