import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BookCard from "../components/bookcard"

export default ({data}) => {
  let max = data.allBooksJson.edges.length;
  let init = 4;
  let end = 8;
  function hide(){
    for(var i=init; i<document.getElementsByClassName("book").length; i++){
      document.getElementsByClassName("book")[i].hidden=true;
    }
  }
  window.document.onscroll = () => myFunction();
  function myFunction() {
    if (document.documentElement.clientHeight+document.documentElement.scrollTop===document.documentElement.scrollHeight && end<=max) {
      for(var i=init; i<end; i++){
        console.log(data.allBooksJson.edges[i].node);
        document.getElementsByClassName("book")[i].hidden=false;
      }
      init+=4;
      end+=4;
      if(end===max){
        document.getElementsByClassName("loadFake")[0].hidden=true;
      }
    }

  }
  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex flex-row flex-wrap" onLoad={hide.bind()}>
      {data.allBooksJson.edges.map(function(x) {
        return (
          <BookCard book={x.node} key={x.node.id} />
        )
      })}
      </div>
      <h4 className="loadingIndicator">Loading...</h4>
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
