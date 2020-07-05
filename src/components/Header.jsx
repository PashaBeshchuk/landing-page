import React from 'react'
import './style.css'



const Header = (props) => {
    return (
        <div className='container col-12'>
           <div className="row">
                <div className="col-sm-7 head-image">
                    <div className='head-image-text'>
                        <h1>WORL NEWS</h1>
                        <hr></hr>
                        <h2>Amazing places in America to visit</h2>
                        <p>For some reason - this country, this city, this neighdor, this particular street is the place you are living a majority of your life in</p>
                        <button type="button" className='btn btn-danger btn-sm head-image-text-button'>LEARN MORE</button>
                    </div>
                </div>
                <div className="col-sm-5">
                   <div className='head-more-news'>
                        <h1>MORE NEWS</h1> 
                        <span className='arrow'>&lt;</span>
                        <span className='arrow'>&gt;</span>
                        <hr></hr>
                        <div className='block-text'>
                            <h2>TRAVEL</h2>
                            <h3>Article title</h3>
                            <p>Lorem ipsum dolor sit, ipsum, 
                                labitur lucilius me ad has apparet...</p>
                            <span> <span>&#9716;</span> 2 min ago</span>
                        </div>
                        <div className='block-text'>
                            <h2>TECHNOLOGY</h2>
                            <h3>Article title</h3>
                            <p>Lorem ipsum dolor sit, ipsum, 
                                labitur lucilius me ad has apparet...</p>
                            <span> <span>&#9716;</span> 2 min ago</span>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Header
