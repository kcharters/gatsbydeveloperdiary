import React from "react"
import "./sidebar.css"

import biopic from "../../images/watercolorplanet.png"

const Bio = ({ author, tagline }) => {

    return (
        <div className="bio-main w-75">
            <img src={biopic} style={{ maxWidth: `100px` }} className="profile-img" alt="" />
            <h3 className="mt-2 author-bio">{author}</h3>
            <small className="text-muted">{tagline}</small>
            <p>{author.bio}</p>
        </div>
    )
}

export default Bio