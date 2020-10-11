import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import { StaticQuery, graphql } from "gatsby"
import "../styles/sidebar.css"
var slugify = require("slugify")

export default () => {
  return (
    <StaticQuery
      query={graphql`
        query CategoryQuery {
          allCategoriesJson {
            edges {
              node {
                id
                name
                emoji
              }
            }
          }
        }
      `}
      render={data => (
        <Navbar collapseOnSelect expand="lg" bg="ligt" variant="light">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
          <div>
            {data.allCategoriesJson.edges.map(function(x, index) {
              return (
                <Nav.Item>
                  <Nav.Link href={slugify(x.node.name)}>
                    {x.node.emoji} {x.node.name}
                  </Nav.Link>
                </Nav.Item>
              )
            })}
          </div>
          </Navbar.Collapse>
        </Navbar>
      )}
    />
  )
}
