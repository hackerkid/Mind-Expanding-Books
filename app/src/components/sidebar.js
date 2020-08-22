import React from "react";
import { Nav } from "react-bootstrap";
import { StaticQuery, graphql } from "gatsby"
import '../styles/sidebar.css'

function createSlug (categoryName) {
    categoryName = categoryName.toLowerCase();
    categoryName = categoryName.replace(/ /g, "-");
    categoryName = categoryName.replace(/,/g, "");
    return categoryName;
};

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
                >
                    <div className="sidebar-sticky">
                    {data.allCategoriesJson.edges.map(function (x, index) {
                        return (
                            <Nav.Item>
                                <Nav.Link href={createSlug(x.node.name)}>{x.node.name}</Nav.Link>
                            </Nav.Item>
                        )
                    })}
                    </div>
                </Nav>
            )}
        />
    );
};

