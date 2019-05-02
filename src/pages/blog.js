import React from "react"
import { graphql } from "gatsby";
import { BlogList } from "../components/blogList";
import Layout from "../components/layout";

const BlogListPage = ({
  data: {
    allContentfulBlogPost: { edges },
  },
 }) => {
  const Posts = edges
    .map((edge, index) => <BlogList key={index} post={edge.node} />)

    return (
    <Layout>
      <h1>Blogs</h1>
      <ul>{Posts}</ul>
    </Layout>)
 }

export default BlogListPage;

export const pageQuery = graphql`
 query {
  allContentfulBlogPost {
    edges {
      node {
        title
        slug
      }
    }
  }
}
`
