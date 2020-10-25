import React, { useContext } from "react"
import { Navbar, Nav } from "react-bootstrap"
import { StaticQuery, graphql, Link } from "gatsby"
import "../styles/sidebar.css"
import { BookmarkContext } from '../context/globalState'
var slugify = require('slugify')

export default () => {
	const { readingList } = useContext(BookmarkContext)

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
        <Navbar className="sidebar-sticky" collapseOnSelect expand="lg" bg="ligt" variant="light">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
          <div>
            <div style={{position: "relative", left: "0.9rem", paddingBottom: "0.2rem"}}>
							<Link to="/readingList">🔖 Reading List ({readingList.bookIds.length})</Link>
						</div>
            {data.allCategoriesJson.edges.map(function(x, index) {
              return (
                <Nav.Item key={index}>
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
