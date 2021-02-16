import React from "react";
import {
    FaLinkedin,
    FaGithubSquare,
    FaStackOverflow,
    FaFreeCodeCamp,
    FaTwitterSquare
} from "react-icons/fa"

import "../layout.css"

const MobileSocialLinks = ({ contacts }) => {
    return (
        <div className="bottom-bar py-1">
           
                <span title="Linked In">
                    <FaLinkedin size={26} style={{ color: "primary" }} />
                </span>
            
           
                <span title="GitHub">
                    <FaGithubSquare size={26} style={{ color: "light" }} />
                </span>
          
                <span title="Stack Overflow">
                    <FaStackOverflow size={26} style={{ color: "warning" }} />
                </span>
           
                <span title="freeCodeCamp">
                    <FaFreeCodeCamp size={26} style={{ color: "success" }} />
                </span>
          
           
                <span title="Twitter">
                    <FaTwitterSquare size={26} style={{ color: "info" }} />
                </span>
         
        </div>
    )
}

export default MobileSocialLinks;