import React from "react";
import { Link } from "gatsby";

const basicTemplate = props => {
    const { pageContext } = props
    const { categoryName } = pageContext
  
    return (
        <div>
            {categoryName}
        </div>
    )
}
export default basicTemplate
