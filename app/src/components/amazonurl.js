import React from "react";

const getTaggetURL = (book) => {
    return book.amazon_url + "?tag=vishnuks-20";
}

export default ({ book }) => {
    return (
        <a href={getTaggetURL(book)} target="_blank">
            <img style={{ "width": "30px" }} src="https://img.icons8.com/color/48/000000/amazon.png"/>
        </a>
    )
} 
