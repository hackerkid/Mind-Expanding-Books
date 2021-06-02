import React, { useEffect, useState } from "react"
import axios from "axios"
import "../styles/sidebar.css"
import BookCard from "./bookcard"
import StarRatings from "react-star-ratings"
import Layout from "./layout"
import SEO from "./seo"
import SideBar from "./sidebar"
import {
  Card,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap"
import AmazonURL from "../components/amazonurl"
import Bookmark from "../components/bookmark"
import GoodReadsImage from "../components/goodreadsimage"

const FileDownload = require("js-file-download")

export default ({ book }) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    const query =
      book.title.split(" ").join("+") +
      "+inauthor:" +
      book.author.split(" ").join("+")
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=intitle:" + query)
      .then(res => {
        setData(res)
        // console.log(data.data.items.map(item => item.volumeInfo.title))
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
        setError(error)
      })
  }, [book])

  return (
    <>
      <Row>
        <Card style={{ marginBottom: "15px", borderWidth: "0rem" }}>
          <Row>
            <Col xs={6} sm={6} md={4} xl={2}>
              <Card.Img
                style={{
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  paddingTop: "30px",
                }}
                src={book.image_url}
                alt={book.title}
              />
            </Col>
            <Col xs={12} sm={6} md={8} xl={10}>
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Subtitle className="text-muted">
                  <Card.Text style={{ paddingTop: "2px" }}>
                    {book.author} <b>{book.year ? book.year : null}</b>
                  </Card.Text>
                  <StarRatings
                    rating={parseFloat(book.rating)}
                    numberOfStars={5}
                    starDimension="18px"
                    starSpacing="1px"
                    starRatedColor="#fa604a"
                  />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingTop: ".75rem",
                    }}
                  >
                    <div
                      style={{
                        width: "30px",
                        height: "30px",
                        marginRight: "5px",
                      }}
                    >
                      {book.amazon_url ? <AmazonURL book={book} /> : null}
                    </div>
                    <div style={{ width: "30px", height: "30px" }}>
                      <a href={book.url}>
                        <GoodReadsImage />
                      </a>
                    </div>
                    <Bookmark book={book} />
                  </div>
                </Card.Subtitle>
                <p
                  style={{
                    color: "gray",
                    fontSize: "0.8rem",
                    paddingTop: "1rem",
                  }}
                >
                  {book.description}
                </p>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Row>

      <Row>
        <Col>
          <Card style={{ marginBottom: "15px" }}>
            <Card.Header>Available Editions: </Card.Header>
            <Card.Body>
              {loading ? (
                "Loading..."
              ) : error ? (
                <h3>Could not get the available editions</h3>
              ) : (
                <ListGroup>
                  {data.data.items.map(item => (
                    <ListGroupItem>
                      {item.volumeInfo.title +
                        " by " +
                        item.volumeInfo.authors.join(",")}

                      <br />
                      <Button
                        href={item.volumeInfo.previewLink}
                        target="_blank"
                        variant="light"
                      >
                        Preview
                      </Button>

                      {item.accessInfo.pdf.isAvailable && (
                        <Button
                          href={item.accessInfo.pdf.acsTokenLink}
                          variant="light"
                        >
                          PDF
                        </Button>
                      )}
                      {item.accessInfo.epub.isAvailable && (
                        <Button
                          href={item.accessInfo.epub.acsTokenLink}
                          variant="light"
                        >
                          EPUB
                        </Button>
                      )}
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}
