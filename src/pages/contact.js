import React from "react";
import Layout from "../components/layout";
export default () => (
  <Layout>
    <h1>I'd love to talk! Email me at the address below</h1>

    <form name="contact"
              method="POST"
              data-netlify="true">
      <p>
        <label>Name <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Email <input type="email" name="email" /></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </Layout>
)