import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BookCard from "../components/bookcard"

function myFunction(data, end, setEnd) {
  if (document.documentElement.clientHeight+document.documentElement.scrollTop===document.documentElement.scrollHeight) {
    setEnd(end+4)
  }
}

export default ({data}) => {
  let [end, setEnd] = useState(4);
  useEffect(()=>{
    window.document.onscroll = () => myFunction(data, end, setEnd);
  })  
  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex flex-row flex-wrap">
      {data.allBooksJson.edges.map(function(x, index) {
        if(index<end){
          return (
            <BookCard book={x.node} key={x.node.id} />
          )
        }        
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
