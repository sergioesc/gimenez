import React, {useState , useEffect} from 'react'
import './OurSuits.css'

const OurSuits = () => {
    const[Items, setItems] = useState([])
    const [visible, setVisible]= useState(2)
    const apiURL = 'https://raw.githubusercontent.com/sergioesc/gimenez/master/public/data/dataSuits.json'


    const showMore = () => {
        if (visible >= 6){
            let button = document.querySelector(".button-show-more")
            button.style.display = "none"
        }else{
            setVisible(value => value + 2)
        }
    }


    useEffect(()=>{
     fetch(apiURL)
     .then((response) => response.json())
     .then((data) => setItems(data))   
    },[])


    return(
        <div className='our-suits-principal'>
            <h2>Our Suits</h2>
            <div className='our-suits-container'>
                {Items.slice(0, visible).map((it, i) => (
                    <div key={i} className='our-suits-show'>
                        <div className='our-suits-img' style={{backgroundImage:`url(${it.img})`}}>
                            <div className='our-suits-description'> 
                                    <h3>{it.name}</h3>
                                    <p>{it.description}</p>
                            </div>
                        </div> 
                    </div>
                ))}
            </div>
            <p onClick={showMore} className='button-show-more'>SHOW MORE <i className='fas fa-angle-down'></i></p>
        </div>
    )
}

export default OurSuits