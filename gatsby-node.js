const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  return graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            title
            slug
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
      }
    }  
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    // Create blog posts pages
    const posts = result.data.allContentfulBlogPost.edges

    posts.forEach((post, index) => {
      // const previous = index === posts.length - 1 ? null : posts[index + 1].node;
      // const next = index === 0 ? null : posts[index - 1].node;
      
      createPage({
        path: post.node.slug,
        component: blogPost,
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