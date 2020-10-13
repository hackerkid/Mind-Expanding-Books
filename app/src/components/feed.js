import React from 'react';
import '../styles/sidebar.css';
import PropTypes from 'prop-types';
import BookCard from './bookcard';
import SortByDropdown, { FIELDS_TO_SORT_BY, compareFunctions } from './sortByDropdown';

const BookFeed = ({ data, limit }) => {
  const [sortBy, setSortBy] = React.useState(FIELDS_TO_SORT_BY[0]);

  const sortedBooks = React.useMemo(() => [...data.allBooksJson.edges]
    .sort(compareFunctions[sortBy.value]), [sortBy]);

  return (
    <>
      <SortByDropdown sortBy={sortBy.label} onSortByItemClick={setSortBy} />
      {sortedBooks.map((x, index) => {
        const book = x.node;
        if (!limit || index < limit) {
          if (!book.description || book.description.length < 10) {
            return null;
          }
          return <BookCard book={book} key={book.id} />;
        }
        return null;
      })}
    </>
  );
};

BookFeed.propTypes = {
  data: PropTypes.shape(),
  limit: PropTypes.number,
};

BookFeed.defaultProps = {
  data: {},
  limit: PropTypes.number,

};

export default BookFeed;
