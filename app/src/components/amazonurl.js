import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics"

const getTargetURL = (book) => {
    return book.amazon_url + "?tag=vishnuks-20";
}

export default ({ book }) => {
    return (
        <OutboundLink href={getTargetURL(book)} target="_blank" rel="noreferrer">
            <img alt="Amazon link" style={{ marginBottom: "-8px" }} src="https://img.icons8.com/color/48/000000/amazon.png"/>
        </OutboundLink>
    )
}
