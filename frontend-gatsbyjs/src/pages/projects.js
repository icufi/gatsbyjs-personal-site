import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
const ProjectsPage = ({data:{allStrapiProject:{nodes:projects}}}) => {
  return (
    <>
    <Seo title='Projects'/>
      <main>
        <section className='projects-page'>
          <Projects title='All Projects' projects={projects} />
        </section>
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProject {
      nodes {
        description
        featured
        github
        id
        slug
        title
        url
        stack {
          id
          title
        }
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
      totalCount
    }
  }
`

export default ProjectsPage
