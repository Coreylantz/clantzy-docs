import React from "react"
import { Link } from "gatsby"

export const DocList = ({ post }) => (
  <li style={{ listStyle: `none`}}>
    <Link to={post.slug}>{post.title}</Link>
  </li>
)
