import React from 'react';
import client1 from './images/company1.jpg';
import client2 from './images/company2.png';
import client3 from './images/company3.jpg';
import client4 from './images/company4.png';
import client5 from './images/company5.jpg';

const Clients = () => {
    return (
        <div className="container">
            <div className='row clientblock'>
                <div className="col"><img src={client1} alt="" className='image-fluid' /></div>
                <div className="col"><img src={client2} alt="" className='image-fluid' /></div>
                <div className="col"><img src={client3} alt="" className='image-fluid' /></div>
                <div className="col"><img src={client4} alt="" className='image-fluid' /></div>
                <div className="col"><img src={client5} alt="" className='image-fluid' /></div>
            </div>
        </div>

    )
}

export default Clients