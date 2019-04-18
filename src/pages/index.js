import React from "react"
import { StaticQuery, graphql } from "gatsby";

const HomePage = () => (
  <StaticQuery
    query={graphql`
      query HomePage {
        contentfulHomePage {
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
            childMarkdownRemark {
              html
            }
          }
        }
      }
    `}
    render={({
      contentfulHomePage: {
        title,
        date,
        content: { 
          childMarkdownRemark: { html }
        },
        image: {
          file: { url },
          description,
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
)

export default HomePage;
