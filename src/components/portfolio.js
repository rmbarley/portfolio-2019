import React from "react"
import ProjectPreview from "../components/project-preview"
import { graphql, useStaticQuery } from "gatsby"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            slug
            url
            description
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  const projects = data.allProjectsJson.edges
  return (
    <section className="portfolio container has-text-centered">
      <h2 className="title is-3 is-capitalized">Portfolio</h2>
      <div className="project-wrapper">
        {projects.map(({ node: project }) => {
          const { title, description, slug, image } = project
          const imageData = image.childImageSharp.fluid
          return (
            <ProjectPreview
              title={title}
              description={description}
              imageData={imageData}
              slug={slug}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
