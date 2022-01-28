import React from 'react'
import './Foot.css'
import {Link} from 'react-router-dom'
const Foot = () =>{
    return(
        <div className='section-foot-container'>
            <ul>
                <li><Link to="/privacy">Privacy policy</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About us</Link></li>
            </ul>
        </div>
    )
}

export default Foot