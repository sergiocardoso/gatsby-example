import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function About({ data }) {
  return (
    <Layout>
      <h2>About == {data.site.siteMetadata.title}</h2>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
