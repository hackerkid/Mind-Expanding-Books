import React from "react";


export default ({categoryName}) => {
    return (
        <div aria-labelledby="category-description">
            <h2 id="category-description">
                Mind expanding books on {categoryName}
            </h2>
        </div>
    )
}
