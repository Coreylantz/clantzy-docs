import React from "react"
import { StaticQuery, graphql } from "gatsby";


const BlogPage = () => (
  <StaticQuery
    query={graphql`
      query BlogPage {
        contentfulBlog {
          title
          date
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
    `}
    render={({
      contentfulBlog: {
        title,
        date,
        image: {
          file: { url },
          description,
        },
        content: { 
          childContentfulRichText: { html }
        }
      }
    }) => (
      <div>
        <h1>{title}</h1>
        <small>Created on {date}</small>
        <img src={url} alt={description} />
        <div dangerouslySetInnerHTML={{__html: html}} />
      </div>
    )}
  />
);

export default BlogPage;
