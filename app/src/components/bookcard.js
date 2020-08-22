import PropTypes from "prop-types"
import React from "react"
import StarRatings from 'react-star-ratings';
import { Card, Row, Col } from 'react-bootstrap';

const BookCard = ({ book }) => (
  <Card style={{ width: '44rem', height: '12rem' }}>
    <Row>
      <Col>
        <Card.Img variant="side" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1457284880l/27220736.jpg" />
      </Col>
      <Col>
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
        </Card.Body>
      </Col>
    </Row>
  </Card>
)

BookCard.propTypes = {
  siteTitle: PropTypes.object,
}

BookCard.defaultProps = {
  book: {},
}

export default BookCard
