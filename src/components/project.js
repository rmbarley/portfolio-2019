import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Project = ({ title, description, url, imageData }) => (
  <div className="project">
    <h4 is-3>{title}</h4>
    <Image fluid={imageData} alt={title} />
    <p>{description}</p>
    <p>
      <a href={url}>View this project online</a>
    </p>
    <p>
      <Link to="/">&larr; back to all projects</Link>
    </p>
  </div>
)

export default Project
