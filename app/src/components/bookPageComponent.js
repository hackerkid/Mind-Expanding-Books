import "../styles/sidebar.css"
import BookCard from "./bookcard"
import { useState, useEffect } from "react"
import React from "react"
import Layout from "./layout"
import SEO from "./seo"
import SideBar from "./sidebar"
import { Container, Row, Col, Navbar } from "react-bootstrap"

export default ({ book }) => {
  return <BookCard book={book} />
}
