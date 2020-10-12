import React from "react";


export default ({categoryName}) => {
    return (
        <div aria-labelledby="category-description">
            <h2 id="category-description">
                {categoryName}
            </h2>
        </div>
    )
}
