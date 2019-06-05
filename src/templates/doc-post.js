import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulDocumentationPost;
    // TODO move steps into own component
    const renderSteps = post.steps.map((step, i) => {
        const stepImagePath = step.image;
        let stepImage = ``;
        if (stepImagePath !== null) {
          stepImage = <img src={stepImagePath.file.url} alt="" />
        }
        return (<li key={`step-${i}`}>
          <h2>{ step.stepTitle }</h2>
          <div dangerouslySetInnerHTML={{__html: step.stepInstructions.childContentfulRichText.html}} />
          { stepImage }
        </li>)
      });
    const summary = post.summary.childMarkdownRemark.html;
    const implementationNotes = post.implementationNotes.childMarkdownRemark.html;
    return (
      <Layout>
        <h1>{post.title}</h1>
        <p>Last updated by {post.author.name}</p>
        <div>
          <small>Created on {post.date}</small>
        </div>
        <div dangerouslySetInnerHTML={{__html: summary}} />
        <code dangerouslySetInnerHTML={{__html: implementationNotes}} />
        <ul>{ renderSteps }</ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query DocumentationPostBySlug($slug: String!) {
    contentfulDocumentationPost( slug: {eq: $slug}) {
      title
      slug
      author {
        name
      }
      summary {
        childMarkdownRemark {
          html
        }
      }
      implementationNotes {
        childMarkdownRemark {
          html
        }
      }
      steps {
      	stepTitle
        stepInstructions {
          childContentfulRichText {
            html
          }
        }
        image {
          file {
            url
          }
        }
      }
    }
  }
`
