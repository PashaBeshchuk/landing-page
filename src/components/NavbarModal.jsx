import React from 'react'
import SizeMeRenderer from 'react-sizeme'
import './style.css'
import shar from '../images/shar.png'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import twitter from '../images/twitter-black.png'
import home from '../images/home.png'
import photo from '../images/photo.png'
import kompas from '../images/kompas.png'
import message from '../images/message.png'
import face from '../images/face.jpg'


const NavbarModal = (props) => {
    const a = props.width - 500
    return (
        <div className="modal" tabIndex="-1" id='exempelModal' role="dialog">
            <div className="modal-dialog menu-modal" role="document">
                <div className="modal-content shadow-lg">
                    <div className="modal-header">
                        <h5 className="text-danger font-weight-bold logo-modal">LOGO</h5>
                    </div>
                    <div className="modal-body">
                        <ul className="navbar-nav ml-auto menu">
                            <li className="nav-item active mr-3">
                                <img className='img-modal' src={home}/>
                                <a className="text-dark font-weight-bold font-text" href="/">HOME</a>
                            </li>
                            <li className="nav-item mr-3">
                                <div>
                                    <img className='img-modal' src={kompas}/>
                                    <a className="text-dark font-weight-bold font-text" href="/">DISCOVERY</a>
                                </div>   
                            </li>
                            <li className="nav-item mr-3">
                                <img className='img-modal' src={photo}/>
                                <a className="text-dark font-weight-bold font-text" href="/">PHOTOS</a>
                            </li>
                            <li className="nav-item mr-3">
                                <img className='img-modal' src={message}/>
                                <a className="text-dark font-weight-bold font-text" href="/">CONTACT</a>
                            </li>
                            <li className="nav-item mr-3">
                                <img className='img-modal face' src={face}/>
                                <a className="text-dark font-weight-bold font-text" href="/">PROFILE</a>
                            </li>
                        </ul> 
                    </div>
                    <div className='footer-modal'>
                        <div className='container  justify-content-around'>
                            <div>
                                <ul className='navbar-nav footer-menu-modal ml-auto'>
                                    <li className="mr-3">
                                        <a className="text-white" href="/">ABOUT</a>
                                    </li>
                                    <li className="mr-3">
                                        <a className="text-white" href="/">HELP</a>
                                    </li>
                                    <li className="mr-3">
                                        <a className="text-white" href="/">TERMS</a>
                                    </li>
                                    <li className="mr-3">
                                        <a className="text-white" href="/">GUIDLINES</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className='navbar-nav footer-menu-modal ml-auto'>
                                    <li className=" active mr-3">
                                        <a className="text-white" href="/">TESTIMONIALS</a>
                                    </li>
                                    <li className="mr-3">
                                        <a className="text-white" href="/">ADVERTISE</a>
                                    </li>
                                    <li className="mr-3">
                                        <a className="text-white" href="/">INTEGRATIONS</a>
                                    </li>
                                    <li className="mr-3">
                                        <a className="text-white" href="/">CAREERS</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='box-img-modal'>
                                <img className='img' src={instagram}/>
                                <img className='img' src={twitter}/>
                                <img className='img' src={facebook}/>
                                <img className='img' src={shar}/>  
                        </div>       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SizeMeRenderer()(NavbarModal )