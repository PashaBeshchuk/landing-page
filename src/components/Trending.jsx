import React from 'react'
import './style.css'
import mount from '../images/mountains.jpg'
import beach from '../images/beach.jpg'
import snowboard from '../images/snowboard.jpg'


const Trending = (props) => {
    return (
        <div className='container col-8 trending-box'>
            <div className='trending-box-title'>
                <h1>TRENDING</h1>
                <span className='arrow'>&lt;</span>
                <span className='arrow'>&gt;</span>
            </div>
            
            <div className="row">
                <div className="col-sm-4">
                    <div className="trending-box-content">
                        <img src={mount}></img>
                        <div>
                            <h2>Dolore magna aliqua</h2>
                            <p>Lorem ipsum dolor sit, ipsum, 
                                    labitur lucilius me ad has apparet...</p>
                            <span> <span>&#9716;</span> 2m ago</span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="trending-box-content">
                        <img src={beach}></img>
                        <div>
                            <h2>Morbi eleifend a libero</h2>
                            <p>Lorem ipsum dolor sit, ipsum, 
                                    labitur lucilius me ad has apparet...</p>
                            <span> <span>&#9716;</span> 1h ago</span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="trending-box-content">
                        <img src={snowboard}></img>
                        <div>
                            <h2>Morbi eleifend a libero</h2>
                            <p>Lorem ipsum dolor sit, ipsum, 
                                    labitur lucilius me ad has apparet...</p>
                            <span> <span>&#9716;</span> 3h ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trending