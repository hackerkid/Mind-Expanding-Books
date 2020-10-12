import React, { useContext } from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import SideBar from "../components/sidebar"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Bookcard from "../components/bookcard"
import { BookmarkContext } from "../context/globalState"

const ReadingList = () => {
	const { readingList } = useContext(BookmarkContext)

	return (
		<Layout>
			<SEO title="Reading list" />
			<Container fluid>
					<Row>
						<Col xs={2}>
							<SideBar />
						</Col>
						<Col>
							<h2>Your reading list</h2>
							<Link to="/">Go back to the homepage</Link>
							{ 
								readingList.bookIds.map(bookId => {
									return <Bookcard book={readingList.books[bookId]} key={bookId} />
								}) 
							}
						</Col>
					</Row>
				</Container>
			<p>Reading List</p>
		</Layout>
)}

export default ReadingList
