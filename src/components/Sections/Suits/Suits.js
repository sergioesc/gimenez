import React,{useState, useEffect} from 'react'
import './Suits.css'

import {Link} from 'react-router-dom'
const SuitStore = () => {
    const apiURLstore = 'https://raw.githubusercontent.com/sergioesc/gimenez/master/public/data/dataSuitsStore.json'
    const [suits, setSuits] = useState([])
    useEffect(()=>{
        fetch(apiURLstore)
            .then((response) => response.json())
            .then((data) => setSuits(data))
    })
    return(
        <div className='section-suits-container'>
            <div className='section-suits-grid'>
                {suits.map((st, i) => (
                    <div className='card-suits'>
                        <div className='card-suits-img'>
                            <img src={st.img} alt=" "/>
                        </div>
                        <div className='card-suits-text'>
                            <div className='card-suits-description'>
                                <h2>{st.name}</h2>
                                <p>{st.description}</p>
                                <p>{st.price}</p>

                            </div>
                            <div className='card-suits-price'>
                                
                                <Link to="/contact"> Order Now</Link>

                            </div>
                        </div>
                    </div>
                ))}        
            </div>
        </div>
    )
}

export default SuitStore