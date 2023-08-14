import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"



export default function Info() {
    return (
        <div className="info--card">        
            <img src="./images/matt-profile-img.jpg" className="main--img"/>
            <h1 className="info--title">Matias G.Braconi</h1>
            <h3 className="info--subtitle">Frontend Developer</h3>
            <a className="info--website" href="#">noMattGB.website</a>
                <div className="btn--container">
                    <a className="info--btn btn--email" href="mailto:matiasgbraconi@gmail.com" target="_blank">
                        <FontAwesomeIcon className="icon--svg" icon= { faEnvelope } />
                        Email
                    </a>
                    <a className="info--btn btn--linkedin" href="https://www.linkedin.com/in/mat%C3%ADas-gonzalez-braconi-697356109/" target="_blank">
                        <FontAwesomeIcon className="icon--svg" icon= { faLinkedin } />  
                        LinkedIn
                        </a>
                    
                </div>
        </div>
        
    )
}