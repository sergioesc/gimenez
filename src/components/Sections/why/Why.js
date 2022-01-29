import React from 'react'
import "./Why.css"
import { Link } from "react-router-dom";
const What = ()=>{
    return(
        <>
            <div className="section-what-container">
                <div className="section-what-text">
                    <h2>Why choose us?</h2>
                    <p id="section-what-text-delete"> It’s our attention to the small stuff, scheduling of timelines and keen project management that makes us stand out from the rest. We are creative, while keeping a close eye on the calendar and your budget.</p>
                    <p>Our prices are competitive and fair. There are no surprise bills. Any unexpected or additional expenses must be pre-approved by you. That’s how we would like to be treated, and that is how our clients are treated.</p>
                    <Link to="/gimenez/contact">
                    Contact
                    </Link>
                </div>
                
            </div>
        </>
    )
}

export default What;