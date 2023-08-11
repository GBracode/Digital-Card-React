import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return (
        <footer>
            <div className="footer--container">
                <a href="https://twitter.com/noMatt_GB" target="_blank">
                            <FontAwesomeIcon className="footer--icons" icon= { faXTwitter } />
                </a>
                <a href="https://www.facebook.com/Mattniac" target="_blank">
                            <FontAwesomeIcon className="footer--icons" icon= { faFacebook } />
                </a>
                <a href="https://www.instagram.com/mattg_braconi/" target="_blank">
                            <FontAwesomeIcon className="footer--icons" icon= { faInstagram } />
                </a>
                <a href="https://github.com/GBracode" target="_blank">
                            <FontAwesomeIcon className="footer--icons" icon= { faGithub } />
                </a>
            </div>
        </footer>
    )
}