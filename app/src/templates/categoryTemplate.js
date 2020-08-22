import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SideBar from "../components/sidebar"
import { Container, Row, Col } from "react-bootstrap"
import BookFeed from "../components/feed"

const basicTemplate = props => {
  const { pageContext } = props
  const { categoryName, books } = pageContext

  return (
    <Layout>
      <SEO title="Home" />
      <Container fluid>
        <Row>
          <Col xs={2}>
            <SideBar />
          </Col>
          <Col>
            <BookFeed books={books} categoryName={categoryName} />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
export default basicTemplate
