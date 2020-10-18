import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SideBar from "../components/sidebar"
import CategoryDescription from "../components/categorydescription"
import { Container, Row, Col } from "react-bootstrap"
import BookFeed from "../components/feed"

const basicTemplate = props => {
  const { pageContext } = props
  const { categoryName, data, image } = pageContext

  return (
    <Layout>
      <SEO title="Home" />
      <Container fluid>
        <Row>
          <Col lg={2}>
            <SideBar />
          </Col>
          <Col lg={10}>
            <CategoryDescription categoryName={categoryName} categoryImage={image} />
            <BookFeed data={data} categoryName={categoryName} />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
export default basicTemplate
