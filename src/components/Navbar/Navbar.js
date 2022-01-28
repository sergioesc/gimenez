import React  from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom'
const Navbar = () => {
    


    return(
        <div className="navbar">
            <div className="logo-nav">
                <div className="logo-container">
                    <Link to="/" className='logo-container-home'></Link>
                </div>
                <ul className="nav-option">
                    <li>
                        <Link to="/about">
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            CONTACT
                        </Link>
                    </li>
                    <li > 
                        <Link to="/suits">
                            SUITS
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default Navbar;