import PropTypes from "prop-types"
import React,{useState} from "react"
import StarRatings from "react-star-ratings"
import { Card, Row, Col } from "react-bootstrap"

import AmazonURL from "../components/amazonurl"
const truncateContent = (content) => {
  if (!content) {
    return ""
  }
  return content.length > 350 ? content.substring(0, 350) + "..." : content
};

const showFullText = (content) =>{
  if (!content) {
    return ""
  }
  console.log(content)
  return content
}

const BookCard = ( {book} ) =>{
  const [show,toggleShow] = useState(false)
return(
  <Card className="ml-5 mb-2">
    <Row>
      <Col className="col-3 align-self-center">
        <Card.Img
          style={{ height: "12rem", width: "8rem", paddingLeft: "25px", paddingRight: "-15px", paddingTop: "30px" }}
          src={book.image_url}
          alt={book.title}
        />
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
            {book.author} <b>{book.year ? book.year: null}</b>
            <br />
            {book.amazon_url ? <AmazonURL book={book} />: null}
          </Card.Subtitle>
          <p>
            {!show && truncateContent(book.description)}
            {show && showFullText(book.description)}
          </p>
          {!show && <button className="btn btn-primary" onClick={() => toggleShow(true)}>Show More</button>}
          {show && <button className="btn btn-primary" onClick={() => toggleShow(true)}>Show Less</button>}
          
        </Card.Body>
      </Col>
    </Row>
  </Card>
)
}

BookCard.propTypes = {
  siteTitle: PropTypes.object,
}

BookCard.defaultProps = {
  book: {},
}

export default BookCard
