import React from "react"
import { Container, Row, Col, Navbar } from "react-bootstrap"
import Layout from "../components/layout"
import SideBar from "../components/sidebar"
import SEO from "../components/seo"
import BookPage from "../components/bookPageComponent"

const bookPage = ({ location }) => {
  const book = location.state.curBook
  return (
    <Layout>
      <SEO title={book.title} />
      <Container fluid>
        <Row>
          <Col lg={2}>
            <SideBar />
          </Col>
          <Col lg={10}>
            <BookPage book={book} />
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

export default bookPage
