import React, { useState, useEffect } from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BookCard from "../components/bookcard"
import SideBar from "../components/sidebar";
import {Container, Row, Col} from 'react-bootstrap';

function myFunction(setEnd, end) {
  if (document.documentElement.clientHeight+document.documentElement.scrollTop>=document.documentElement.scrollHeight) {
    setEnd(end+12)
  }
}

export default ({data}) => {
  let [end, setEnd] = useState(12);
  useEffect(()=>{
    window.document.onscroll = () => myFunction(setEnd, end);
  })  
  return (
    <Layout>
      <SEO title="Home" />
      <Container fluid>
        <Row>
          <Col xs={2}>
            <SideBar />
          </Col>
          <Col>
              {data.allBooksJson.edges.map(function(x, index) {
                  if(index<end){
                    return (
                      <BookCard book={x.node} key={x.node.id} />
                    )
                  }else{
                    return null;
                  }
              })}
          </Col>
        </Row>
      </Container>
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
