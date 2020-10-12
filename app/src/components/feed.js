import React from "react"
import { Nav } from "react-bootstrap"
import { StaticQuery, graphql } from "gatsby"
import "../styles/sidebar.css"
import BookCard from "../components/bookcard"

export default ({ data, limit }) => {
  return data.allBooksJson.edges.map(function(x, index) {
    const book = x.node;
    if (!limit || index < limit) {
      if(!book.description || book.description.length < 10) {
        return null;
      }
      return <BookCard book={book} key={book.id} />
    } else {
      return null
    }
  })
}
