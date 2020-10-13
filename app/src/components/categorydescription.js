import React from 'react';
import PropTypes from 'prop-types';

const CategoryDescription = ({ categoryName }) => (
  <div aria-labelledby="category-description">
    <h2 id="category-description">
      Mind expanding books on
      {' '}
      {categoryName}
    </h2>
  </div>
);

CategoryDescription.propTypes = {
  categoryName: PropTypes.string,
};

CategoryDescription.defaultProps = {
  categoryName: '',
};

export default CategoryDescription;
