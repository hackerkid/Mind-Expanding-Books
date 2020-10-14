import PropTypes from "prop-types"
import React from "react"
import StarRatings from "react-star-ratings"
import { Card, Row, Col } from "react-bootstrap"

import AmazonURL from "../components/amazonurl"
import Bookmark from "../components/bookmark"
import GoodReadsImage from "../components/goodreadsimage"

const truncateContent = (content) => {
  if (!content) {
    return ""
  }
  return content.length > 350 ? content.substring(0, 350) + "..." : content
};

const BookCard = ({ book }) => (
  <Card style={{ width: "44rem", height: "23rem", marginBottom: "15px" }}>
    <Row aria-label={book.title}>
      <Col xs={3}>
        <Card.Img
          style={{ width: "9rem", paddingLeft: "25px", paddingRight: "-15px", paddingTop: "30px" }}
          src={book.image_url}
          alt={book.title}
        />
      </Col>
      <Col>
        <Card.Body style={{ marginLeft: "-30px"}}>
          <Card.Title>{book.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <div>{book.author} <b>{book.year ? book.year: null}</b></div>
            <div>
              <StarRatings
                rating={parseFloat(book.rating)}
                numberOfStars={5}
                starDimension="18px"
                starSpacing="1px"
                starRatedColor="#fa604a"
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", paddingTop: ".75rem" }}>
              <div style= {{ width: "30px", height: "30px", marginRight: "5px" }}>
                {book.amazon_url ? <AmazonURL book={book} />: null}
              </div>
              <div style= {{ width: "30px", height: "30px" }}>
                <a href={book.url} ><GoodReadsImage /></a>
              </div>
								<Bookmark book={book} />
            </div>
          </Card.Subtitle>
          <p style={{ color: "gray", fontSize: "0.8rem", paddingTop: "1rem" }}>
            {truncateContent(book.description)}
          </p>
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
