import React from 'react'
import './Who.css'
import {Link} from 'react-router-dom'
const Who = () =>{
    return(
        <div className='section-who-container'>

            <div className='section-who-text'>
                <h2>
                About Gimenez Co.
                </h2>
                <p id="section-who-text-delete">
                    From a small suits shop for men in Paraguarí to one of the largest suppliers of Men's Paraguayan Designer suits on the west coast.
                </p>
                <p>
                    Find Men's suits for all events including Men's wedding suits and tuxedos, quinceaneras and special events suits, prom suits and tuxedos and more. We have the elegant look for your special occassion.
                </p>
                <Link to="/gimenez/about">
                    About Us
                </Link>
            </div>

        </div>
    )
}

export default Who;
