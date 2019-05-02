import React from "react"
import { Link } from "gatsby"

export const BlogList = ({ post }) => (
  <li>
  <Link to={post.slug}>
    {post.title}
  </Link>
  </li>
)
