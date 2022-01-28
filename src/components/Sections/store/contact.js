import React from 'react'
import './contact.css'
const Store = () =>{
    return(
        <div className='section-contact-container'>
            <div className='section-contact-come'>
                <div className='section-contact-come-banner'>
                    <div className='contact-come-text'>
                        <div className='store'>
                            <h2>
                                STORE
                            </h2>
                            <p>
                            1515 N. Main St.
                            Santa Ana, Paraguari 92701                 
                            </p>
                        </div>

                        <div className='store'>
                            <h2>
                                HOURS
                            </h2>
                            <p>
                                Mon - Fri : 11AM - 7PM
                            </p>
                            <p>
                                Sat: 10AM - 6PM
                            </p>
                            <p>
                                Sun : 11AM - 5PM
                            </p>
                        </div>

                        <div className='store'>
                            <h2>
                                TEL
                            </h2>
                            <p>
                            (123) 4567890                 
                            </p>
                            <p>
                            (098) 7654321               
                            </p>
                        </div>

                        <div className='store'>
                            <h2>
                                CONNECT WITH US
                            </h2>
                            <p>
                            If you have any questions about your recent purchase, or would like to schedule a proper fiting please contact us at  
                            <span id='store-email'> gimenezco@suit.com</span>
                            </p>
                        </div>

                        <div className='media'>
                                <div className='Facebook' id='media-size'>
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> </a>
                                </div>
                                <div className='Instagram' id='media-size'>
                                    <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'> </a>
                                </div>
                                <div className='Twitter' id='media-size'>
                                    <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'> </a>
                                </div>
                                <div className='Whatsapp' id='media-size'>
                                    <a href="https://whatsapp.com" target='_blank' rel='noopener noreferrer'> </a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section-contact-find'>
                
            </div>
        </div>
    )
}

export default Store