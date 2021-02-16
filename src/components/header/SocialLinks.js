import React from "react"
import {
    FaLinkedin,
    FaGithubSquare,
    FaStackOverflow,
    FaFreeCodeCamp,
    FaTwitterSquare
} from "react-icons/fa"


const SocialLinks = ({ contacts }) => {
    return (
        <div className="social-links float-right mr-4">
            
                <span title="Linked In">
                    <FaLinkedin size={40} style={{ color: "primary" }} />
                </span>
           
           
                <span title="GitHub">
                    <FaGithubSquare size={40} style={{ color: "light" }} />
                </span>
           
            
                <span title="Stack Overflow">
                    <FaStackOverflow size={40} style={{ color: "warning" }} />
                </span>
            
                <span title="freeCodeCamp">
                    <FaFreeCodeCamp size={40} style={{ color: "success" }} />
                </span>
           
                <span title="Twitter">
                    <FaTwitterSquare size={40} style={{ color: "info" }} />
                </span>
           
        </div>
    )
}

export default SocialLinks