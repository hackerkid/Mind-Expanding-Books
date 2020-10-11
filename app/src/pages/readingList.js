import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import SideBar from "../components/sidebar"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BookFeed from "../components/feed"

const ReadingList = ({data, location}) => (
  <Layout>
    <SEO title="Reading list" />
		<Container fluid>
        <Row>
          <Col xs={2}>
            <SideBar />
          </Col>
          <Col>
						<h2>Your reading list</h2>
						<p>Note: The buttons in this page dont work yet</p>
						{/* {console.log(location.state)} */}
            <BookFeed data={data} limit={12} />
          </Col>
        </Row>
      </Container>
		<p>Reading List</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const query = graphql`
  query MyQuery2 {
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


export default ReadingList
