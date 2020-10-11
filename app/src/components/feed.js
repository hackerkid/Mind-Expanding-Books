import React from 'react';
import '../styles/sidebar.css';
import BookCard from './bookcard';
import SortByDropdown, { FIELDS_TO_SORT_BY, compareFunctions } from './sortByDropdown';

export default ({ data, limit }) => {
  const [sortBy, setSortBy] = React.useState(FIELDS_TO_SORT_BY[0]);

  const sortedBooks = React.useMemo(() => [...data.allBooksJson.edges]
    .sort(compareFunctions[sortBy.value]),
  [sortBy]);

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
