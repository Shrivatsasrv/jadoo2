import React from 'react';
import Cat1 from './images/category1.jpg';
import Cat2 from './images/category2.jpg';
import Cat3 from './images/category3.jpg';
import Cat4 from './images/Category4-1.jpg';
import catsideimg from './images/category-sideimg.jpg';
import catdesign from './images/categorydesign.jpg';

const Category = () => {
    return (
        <div className="container-fluid categoryoutside">
            <img src={catsideimg} className='catsideimg1' alt="" />
            <div className="container">
                <div className='row category'>



                    <p className='text-center'>Category</p>
                    <h1 className='text-center'>We offer best service</h1>
                    <img src={catdesign} className='catdesign1' alt="" />
                    <div className="col">
                        <div className="card categorycarddesign" >
                            <img src={Cat1} className="card-img-top categoryCardImage" alt="category1" />
                            <div className="card-body category-card-body">
                                <h5 className="card-title">Calculated Weather </h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, maiores?</p>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card categorycarddesign" >
                            <img src={Cat2} className="card-img-top categoryCardImage" alt="category2" />
                            <div className="card-body category-card-body">
                                <h5 className="card-title">Best Flights</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, minima.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card categorycarddesign" >
                            <img src={Cat3} className="card-img-top categoryCardImage" alt="category3" />
                            <div className="card-body category-card-body">
                                <h5 className="card-title">Local Events</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, ullam!</p>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card categorycarddesign" >
                            <img src={Cat4} className="card-img-top categoryCardImage" alt="category4" />
                            <div className="card-body category-card-body">
                                <h5 className="card-title">Customization</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quidem?</p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default Category;