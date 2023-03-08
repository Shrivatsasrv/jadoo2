import React from 'react';
import personimg from './images/person.jpg'

const Testimonial = () => {
    return (
        <div className='container'>
            <div className="row testimonial">
                <div className="col-lg-5 testimonial1 ">
                    <p>Testimonials</p>
                    <h1>What people say about Us.</h1>

                </div>
                <div className="col-lg-6 testimonial2">

                    <div className='testimonial2-block1'>
                        <p>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                        <h5>Mike taylor</h5>
                        <span>Lahore, Pakistan</span>
                    </div>
                    <img src={personimg} alt="" className='image-fluid testimonial2-image' />
                    <div className='testimonial2-block2'>


                        <h5>Chris Thomas</h5>
                        <span>CEO of Red Button</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;