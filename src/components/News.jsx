import React from 'react';
import { NavLink } from 'react-router-dom';
import newsmessage from './images/news-message1.png';
import newsdesign from './images/newsdesignn.jpg';


const News = () => {
    return (
        <div className="container-fluid newsmain1">
            <img src={newsmessage} alt="" className='newsmessage1' />
            <img src={newsdesign} alt="" className='newsdesign1' />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className='newssection image-fluid'>
                            <div className="newscontent">
                                <h1>Subscribe to get information, latest news and other
                                    interesting offers about Jadoo</h1>
                                <div className='newscontentinput'>
                                    <input type="text" placeholder='Enter Email' />
                                    <button><NavLink className='newscontentlink'>Subscribe</NavLink></button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default News;