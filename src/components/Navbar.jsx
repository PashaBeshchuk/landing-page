import React, { useState } from 'react'
import SizeMeRenderer from 'react-sizeme'
import './style.css'

import face from '../images/face.jpg';
import NavbarMenu from './NavbarMenu';
import NavbarModal from './NavbarModal';

const Navbar = (props) => {
    const { width } = props.size
    const [ displayMenu, setDisplayMenu ] = useState(false)
    return (
    <div className='menu-body'>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            { width > 575 && <a href="/" className="navbar-brand text-danger font-weight-bold">LOGO</a>}
            
            <button className="navbar-toggler" type="button" data-toggle="modal"  data-target="#exempelModal " aria-controls="navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <NavbarModal/>
            { width < 575 && <a href="/" className="navbar-brand text-danger font-weight-bold">LOGO</a>}
            <div className="collapse navbar-collapse nav-right " id="navbarNav">
                <ul className="navbar-nav ml-auto menu">
                    <li className="dropdown-divider active mr-3"></li>
                    <li className="nav-item active mr-3" 
                        onMouseOver={()=>{setDisplayMenu(true)}}
                        onMouseOut={()=>{setDisplayMenu(false)}}>
                        <a className="nav-link text-dark font-weight-bold" href="/">HOME</a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link text-info font-weight-bold" href="/">DISCOVERY</a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link text-info font-weight-bold" href="/">PHOTOS</a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link text-info font-weight-bold" href="/">CONTACTS</a>
                    </li>
                </ul>
            </div>
            <div >
                <img className="face" src={face}/>
            </div>
        </nav>
        {displayMenu && <NavbarMenu width={width}/>}
    </div>
    )
}

export default SizeMeRenderer()(Navbar)
