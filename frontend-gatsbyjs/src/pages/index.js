import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
const IndexPage = ({ data }) => {
  const {
    allStrapiProject: { nodes: projects },
  } = data;

  return (
    <>
      <Seo title='Home' />
      <main>
        <Hero></Hero>
        <Services></Services>
        <Jobs />
        <Projects title="Featured Projects" showLink projects={projects} />
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProject(filter: { featured: { eq: true } }) {
      nodes {
        featured
        description
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
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
      }
      totalCount
    }
  }
`

export default IndexPage
