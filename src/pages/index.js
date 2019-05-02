import React from "react"
import { StaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";

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
      <Layout>
        <h1>{title}</h1>
        <small>Created on {date}</small>
        <img src={url} alt={description} />
        <div dangerouslySetInnerHTML={{__html: html}} />
      </Layout>
    )}
  />
)

export default HomePage;
