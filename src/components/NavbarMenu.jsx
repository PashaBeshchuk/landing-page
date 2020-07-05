import React from 'react'
import SizeMeRenderer from 'react-sizeme'
import './style.css'

const NavbarMenu = (props) => {
    const a = props.width - 500
    return (
        <div className="popup-menus" style={{"left":a}}>
            <div className="row">
                <ul className='navbar-nav'>
                    <li className="nav-item active mr-3">
                        <a className="text-info font-weight-bold" href="/">WORLD NEWS</a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="text-info font-weight-bold" href="/">TRAVEL</a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="text-info font-weight-bold" href="/">TECHNOLOGY</a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="text-info font-weight-bold" href="/">CITY</a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="text-info font-weight-bold" href="/">CULTURE</a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="text-info font-weight-bold" href="/">MORE...</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SizeMeRenderer()(NavbarMenu)