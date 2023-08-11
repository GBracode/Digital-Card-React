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
                <a className="" href="https://twitter.com/noMatt_GB">
                            <FontAwesomeIcon className="footer--icons" icon= { faXTwitter } />
                </a>
                <a className="" href="https://www.facebook.com/Mattniac">
                            <FontAwesomeIcon className="footer--icons" icon= { faFacebook } />
                </a>
                <a className="" href="https://www.instagram.com/mattg_braconi/">
                            <FontAwesomeIcon className="footer--icons" icon= { faInstagram } />
                </a>
                <a className="" href="https://github.com/GBracode">
                            <FontAwesomeIcon className="footer--icons" icon= { faGithub } />
                </a>
            </div>
        </footer>
    )
}