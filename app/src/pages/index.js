import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BookCard from "../components/bookcard"

export default ({data}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div class="flex flex-wrap">
      {data.allBooksJson.edges.map(function(x) {
        return (
          <BookCard book={x.node} />
        )
      })}
      </div>
    </Layout>
  )
}

export const query = graphql`query MyQuery {
  allBooksJson {
    edges {
      node {
        id
        title
        url
        rating
        author
        year
        category
      }
    }
  }
}
`
