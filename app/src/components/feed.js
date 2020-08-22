import React from "react";
import { Nav } from "react-bootstrap";
import { StaticQuery, graphql } from "gatsby"
import '../styles/sidebar.css'
import BookCard from "../components/bookcard"

export default ({data, limit}) => {
    return data.allBooksJson.edges.map(function(x, index) {
        console.log(index, limit)
        if(!limit || index < limit){
            return (
              <BookCard book={x.node} key={x.node.id} />
            )
        } else {
            return null;
        }
    })
};
