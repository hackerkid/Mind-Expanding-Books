import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BookCard from "../components/bookcard"
import SideBar from "../components/sidebar"
import { Container, Row, Col } from "react-bootstrap"
import BookFeed from "../components/feed"

function myFunction(setMaximumBooksToShow, maximumBooksToShow) {
  if (
    document.documentElement.clientHeight +
      document.documentElement.scrollTop >=
    document.documentElement.scrollHeight
  ) {
    setMaximumBooksToShow(maximumBooksToShow + 12)
  }
}

export default ({ data }) => {
  let [maximumBooksToShow, setMaximumBooksToShow] = useState(12)
  useEffect(() => {
    window.document.onscroll = () =>
      myFunction(setMaximumBooksToShow, maximumBooksToShow)
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
            <BookFeed data={data} limit={maximumBooksToShow} />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
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
          description
          image_url
        }
      }
    }
  }
`
