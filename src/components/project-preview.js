import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const ProjectPreview = ({ slug, title, description, imageData }) => (
  <div className="project-preview">
    <Link to={`/${slug}/`}>
      <Image fluid={imageData} alt={title} />
    </Link>
    <h2 className="title is-4">
      <Link to={`/${slug}/`}>{title}</Link>
    </h2>
    <p>{description}</p>
    <p>
      <Link to={`/${slug}/`}>View this project</Link>
    </p>
  </div>
)

export default ProjectPreview
