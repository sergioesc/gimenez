import React  from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom'
const Navbar = () => {
    


    return(
        <div className="navbar">
            <div className="logo-nav">
                <div className="logo-container">
                    <Link to="/gimenez" className='logo-container-home'></Link>
                </div>
                <ul className="nav-option">
                    <li>
                        <Link to="/gimenez/about">
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link to="/gimenez/contact">
                            CONTACT
                        </Link>
                    </li>
                    <li > 
                        <Link to="/gimenez/suits">
                            SUITS
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default Navbar;