import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BookCard from "../components/bookcard"

export default ({data}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex flex-row flex-wrap">
      {data.allBooksJson.edges.map(function(x) {
        return (
          <BookCard book={x.node} key={x.node.id} />
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
