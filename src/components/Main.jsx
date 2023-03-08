import React from 'react'
import Hero from './Hero'
import NavBar from './NavBar'

const Main = () => {
    return (
        <div className='container-fluid '>
            <div className="row">
                <div className="col-md-12 main1">
                    <NavBar />
                    <Hero />
                </div>
            </div>
        </div>
    )
}

export default Main