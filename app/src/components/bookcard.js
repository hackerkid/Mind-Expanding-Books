import PropTypes from "prop-types"
import React from "react"
import StarRatings from "react-star-ratings"
import { Card, Row, Col } from "react-bootstrap"

import AmazonURL from "../components/amazonurl"
import GoodReadsImage from "../components/goodreadsimage"

const truncateContent = (content) => {
  if (!content) {
    return ""
  }
  return content.length > 350 ? content.substring(0, 350) + "..." : content
};

const BookCard = ({ book }) => (
  <Card style={{marginBottom: "15px" }} >
    <Row>
      <Col xs={12} md={4} xl={2}>
        <Card.Img
          style={{paddingLeft: "15px", paddingRight: "15px", paddingTop: "30px" }}
          src={book.image_url}
          resizeMode="contain"
        />
      </Col>
      <Col xs={12} md={8} xl={10}>
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Subtitle className="text-muted">
            <StarRatings
              rating={parseFloat(book.rating)}
              numberOfStars={5}
              starDimension="18px"
              starSpacing="1px"
              starRatedColor="#fa604a"
            />
            <Card.Text
              style={{paddingTop: "10px", paddingBottom: "10px" }}
            > 
            {book.author} <b>{book.year ? book.year: null}</b> 
            </Card.Text>
            
          </Card.Subtitle>
          <p>
            {truncateContent(book.description)}
          </p>
          <div style={{ display: "flex", alignItems: "center", paddingTop: ".75rem" }}>
            <div style= {{ width: "30px", height: "30px", marginRight: "5px" }}>
              {book.amazon_url ? <AmazonURL book={book} />: null}
            </div>
            <div style= {{ width: "30px", height: "30px" }}>
              <a href={book.url} ><GoodReadsImage /></a>
            </div>
          </div>
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
