const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const docPost = path.resolve(`./src/templates/doc-post.js`)
  return graphql(`
  {
    allContentfulDocumentationPost {
      edges {
        node {
          id
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
        }
      }
    }
  }    
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    // Create blog posts pages
    const posts = result.data.allContentfulDocumentationPost.edges

    posts.forEach((post, index) => {
      // const previous = index === posts.length - 1 ? null : posts[index + 1].node;
      // const next = index === 0 ? null : posts[index - 1].node;
      
      createPage({
        path: post.node.slug,
        component: docPost,
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: post.node.slug,
          // previous,
          // next,
        },
      })
    })
  })
}