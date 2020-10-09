import PropTypes from "prop-types"
import React from "react"
import StarRatings from "react-star-ratings"
import { Card, Row, Col } from "react-bootstrap"

import AmazonURL from "../components/amazonurl"

const truncateContent = content => {
  if (!content) {
    return ""
  }
  return content.length > 350 ? content.substring(0, 350) + "..." : content
}

const BookCard = ({ book }) => (
  <Card className="card">
    <Row>
      <Col xs={12} md={3}>
        <Card.Img className="card-image" src={book.image_url} />
      </Col>
      <Col>
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <StarRatings
              rating={parseFloat(book.rating)}
              numberOfStars={5}
              starDimension="18px"
              starSpacing="1px"
              starRatedColor="#fa604a"
            />
            <br />
            {book.author} <b>{book.year ? book.year : null}</b>
            <br />
            {book.amazon_url ? <AmazonURL book={book} /> : null}
          </Card.Subtitle>
          <p>{truncateContent(book.description)}</p>
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
