import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

class BlogPostTemplate extends React.Component {

  render() {
    const post = this.props.data.contentfulBlogPost;
    let image;

    if(post.image !== null) {
     image = <img src={post.image.file.url} alt={post.image.description} />
    }

    return (
      <Layout>
        <h1>{post.title}</h1>
        <small>Created on {post.date}</small>
        {image}
        <div dangerouslySetInnerHTML={{__html: post.content.childContentfulRichText.html}} />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost( slug: {eq: $slug}) {
      title
      date(formatString: "YYYY MMMM DD")
      image {
        title
        file {
          url
        }
        description
      }
      content {
        childContentfulRichText {
          html
        }
      }
    }
  }
`
