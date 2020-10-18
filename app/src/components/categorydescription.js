import React from "react";


export default ({categoryName, categoryImage}) => {
    return (
        <div className="my-2 mx-2" aria-labelledby="category-description">
            <h4 id="category-description">
    {categoryImage} {categoryName}
            </h4>
        </div>
    )
}
