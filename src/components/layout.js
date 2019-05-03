import React from "react"
import { Link } from "gatsby";
import styles from "../styles/layouts/layout.module.scss";

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

// TODO turn header, footer into component

export default ({ children }) => (
  <div className={styles.gWrapper}>
    <header>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>MySweetSite</h3>
      </Link>
      <nav>
        <ul>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
          <ListLink to="/blog/">Blog</ListLink>
        </ul>
      </nav>
    </header>
    <main>
      {children}
    </main>
    <footer>
      Made by Corey
    </footer>
  </div>
)