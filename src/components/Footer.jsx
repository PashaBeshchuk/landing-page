import React from 'react'
import './style.css'
import send from '../images/send.png'
import shar from '../images/shar.png'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import twitter from '../images/twitter-black.png'



const Footer = (props) => {
    return (
        <div className='container col-12 footer'>
            <div className='container footer-content col-8'>
                <div className="row">
                    <div className="col-sm-1 footer-logo">
                            <h1>LOGO</h1>
                    </div>
                    <div className="col-sm-4">
                        <div className="row">
                            <div className="footer-menu">
                                <ul className='navbar-nav ml-auto menu'>
                                    <li className="nav-item active mr-3">
                                        <a className="text-white" href="/">Home</a>
                                    </li>
                                    <li className="nav-item mr-3">
                                        <a className="text-white" href="/">Discovery</a>
                                    </li>
                                    <li className="nav-item mr-3">
                                        <a className="text-white" href="/">Photos</a>
                                    </li>
                                    <li className="nav-item mr-3">
                                        <a className="text-white" href="/">Contacts</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-menu">
                                <ul className='navbar-nav ml-auto menu'>
                                    <li className="nav-item active mr-3">
                                        <a className="text-white" href="/">About</a>
                                    </li>
                                    <li className="nav-item mr-3">
                                        <a className="text-white" href="/">Help</a>
                                    </li>
                                    <li className="nav-item mr-3">
                                        <a className="text-white" href="/">Terms</a>
                                    </li>
                                    <li className="nav-item mr-3">
                                        <a className="text-white" href="/">Guidlines</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-menu">
                                <ul className='navbar-nav ml-auto menu'>
                                    <li className="nav-item active mr-3">
                                        <a className="text-white" href="/">Testimonials</a>
                                    </li>
                                    <li className="nav-item mr-3">
                                        <a className="text-white" href="/">Advertise</a>
                                    </li>
                                    <li className="nav-item mr-3">
                                        <a className="text-white" href="/">Integrations</a>
                                    </li>
                                    <li className="nav-item mr-3">
                                        <a className="text-white" href="/">Careers</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5 serch-box">
                        <div className="container col-10 serch-box">
                            <input type="text" className="footer-input" 
                                placeholder="Email"/>
                            <p>Stay in touch with us for the freshet products!</p>
                            <img className='img-send' src={send}/>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className='row box-img'>
                            <div className='col-sm-2'>
                                <img className='img' src={instagram}/>
                            </div>
                            <div className='col-sm-2'>
                                <img className='img' src={twitter}/>
                            </div>
                            <div className='col-sm-2'>
                                <img className='img' src={facebook}/>
                            </div>
                            <div className='col-sm-2'>
    
                                <img className='img' src={shar}/>
                            </div>
                        </div>       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer