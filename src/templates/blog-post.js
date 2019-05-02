import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

class BlogPostTemplate extends React.Component {

  render() {
    const post = this.props.data.contentfulBlogPost;
    console.log(post);
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

// const BlogPage = () => (
//   <StaticQuery
//     query={graphql`
//       query BlogPage {
//         contentfulBlog {
//           title
//           date
//           image {
//             title
//             file {
//               url
//             }
//             description
//           }
//           content {
//             childContentfulRichText {
//               html
//             }
//           }
//         }
//       }
//     `}
//     render={({
//       contentfulBlog: { 
//         title,
//         date,
//         image: {
//           file: { url },
//           description,
//         },
//         content: { 
//           childContentfulRichText: { html }
//         }
//       }
//     }) => (
//       <Layout>
//         <h1>{title}</h1>
//         <small>Created on {date}</small>
//         <img src={url} alt={description} />
//         <div dangerouslySetInnerHTML={{__html: html}} />

//         <form name="contact"
//               method="POST"
//               data-netlify="true">
//           <p>
//             <label>Name <input type="text" name="name" /></label>
//           </p>
//           <p>
//             <label>Email <input type="email" name="email" /></label>
//           </p>
//           <p>
//             <button type="submit">Send</button>
//           </p>
//         </form>
//       </Layout>
//     )}
//   />
// );