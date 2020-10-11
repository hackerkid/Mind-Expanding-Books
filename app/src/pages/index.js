import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
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
	let [readingList, updateReadingList] = useState({
		books: {},
		bookIds: []
	})
  useEffect(() => {
		// Populate books here
    window.document.onscroll = () =>
      myFunction(setMaximumBooksToShow, maximumBooksToShow)
	})
	
	const toggleSaveBook = (book) => {
		const newReadingList = {...readingList}

		if (newReadingList.bookIds.includes(book.id)) {
			newReadingList.bookIds = newReadingList.bookIds.filter(id => id !== book.id)
			delete newReadingList.books[book.id]
		} else {
			newReadingList.books[book.id] = book 
			newReadingList.bookIds.push(book.id)
		}
		updateReadingList(newReadingList)
	}

  return (
    <Layout>
      <SEO title="Home" />
      <Container fluid>
        <Row>
          <Col xs={2}>
            <SideBar readingList={readingList}/>
          </Col>
          <Col>
            <BookFeed data={data} limit={maximumBooksToShow} toggleSaveBook={toggleSaveBook}  />
          </Col>
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
