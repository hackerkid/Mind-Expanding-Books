import React from 'react';
import { Nav } from 'react-bootstrap';
import { StaticQuery, graphql } from 'gatsby';
import '../styles/sidebar.css';

const slugify = require('slugify');

export default () => (
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
    render={(data) => (

      <Nav
        className="col-md-12 d-none d-md-block bg-light sidebar"
        activeKey="/home"
      >
        <div className="sidebar-sticky" role="navigation" aria-label="Sidebar">
          {data.allCategoriesJson.edges.map((x) => (
            <Nav.Item key={x.node.name}>
              <Nav.Link href={slugify(x.node.name)} role="button">
                {x.node.emoji}
                {' '}
                {x.node.name}
              </Nav.Link>
            </Nav.Item>
          ))}
        </div>
      </Nav>
    )}
  />
);
