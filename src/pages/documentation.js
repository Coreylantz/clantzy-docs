import React from "react"
import { graphql } from "gatsby";
import { DocList } from "../components/docList";
import Layout from "../components/layout";

const DocumentationListPage = ({
  data: {
    allContentfulDocumentationPost: { edges },
  },
 }) => {
  const Posts = edges
    .map((edge, index) => <DocList key={index} post={edge.node} />)

    return (
    <Layout>
      <h1>Documentation</h1>
      <h2>User Guides</h2>
      <ul>{Posts}</ul>
    </Layout>)
 }

export default DocumentationListPage;

export const pageQuery = graphql`
 query {
  allContentfulDocumentationPost {
    edges {
      node {
        title
        slug
      }
    }
  }
}
`
