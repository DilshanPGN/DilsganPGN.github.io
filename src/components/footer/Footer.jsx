import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import "./Footer.css"

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">

        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                <div>
                    <p>353/1, Pitipana South, Homogama, Colombo.</p>
                    <p>Sri Lanka.</p>
                </div>
            </div>

            <div className="phone">
                <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                <h4>
                    <div>
                        +94-778-634-044
                    </div>
                </h4>
            </div>

            <div className="email">
                <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                <h4>
                    <div>
                        dilshanpgn@gmail.com
                    </div>
                </h4>
            </div>
        </div>
        <div className="right">
            <h4>
                About me                
            </h4>
            <p>
                Blah blah balaj
            </p>
            <div className="social">
                <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                <FaTwitter size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}}/>
            </div>

        </div>
        </div>      
    </div>
  )
}

export default Footer
