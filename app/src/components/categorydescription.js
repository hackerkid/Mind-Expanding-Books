import React from "react";


export default ({categoryName, categoryImage}) => {
    return (
        <div className="my-2">
            <h5>
            {categoryImage} {categoryName}
            </h5>
        </div>
    )
}
