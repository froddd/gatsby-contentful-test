import React from "react"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
    <pre>{JSON.stringify(data, null, 2)}</pre>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allContentfulBlogPost {
      nodes {
        title
        author {
          name
          bestPost {
            title
          }
        }
      }
    }
  }
`
