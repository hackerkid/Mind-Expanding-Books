import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SideBar from "../components/sidebar"
import { Container, Row, Col, Navbar } from "react-bootstrap"
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
          <Col lg={2}>
            <SideBar />
          </Col>
          <Col lg={10}>
            <BookFeed data={data} limit={maximumBooksToShow} />
          </Col>
        </Row>
        <Row>
        {/* <footer style={{marginLeft: 150,
          width: `100%`,
          position: `fixed`,
          bottom: 0}}>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer> */}
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allBooksJson(
      sort: {
        fields: [rating]
        order: DESC
      }
    ) {
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
          amazon_url
        }
      }
    }
  }
`
