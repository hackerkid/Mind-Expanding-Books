import React from "react";
import { Nav } from "react-bootstrap";
import { StaticQuery, graphql } from "gatsby"
import '../styles/sidebar.css'

export default () => {
    return (
        <StaticQuery
            query={graphql`query CategoryQuery {
                allCategoriesJson {
                  edges {
                    node {
                      id
                      name
                    }
                  }
                }
              }
            `}
            render={data => (
                <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
                    activeKey="/home"
                    onSelect={selectedKey => alert(`selected ${selectedKey}`)}
                >
                    <div className="sidebar-sticky"></div>
                    {data.allCategoriesJson.edges.map(function (x, index) {
                        return (
                            <Nav.Item>
                                <Nav.Link href="/home">{x.node.name}</Nav.Link>
                            </Nav.Item>
                        )
                    })}
                </Nav>
            )}
        />
    );
};

