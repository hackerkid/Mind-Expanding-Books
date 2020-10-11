import React from 'react';
import '../styles/sidebar.css';
import BookCard from './bookcard';
import SortByDropdown, { FIELDS_TO_SORT_BY, compareFunctions } from './sortByDropdown';

export default ({ data, limit }) => {
  const [sortBy, setSortBy] = React.useState(FIELDS_TO_SORT_BY[0]);

  const getSortedBooks = () => data.allBooksJson.edges
    .slice(0, limit || data.allBooksJson.edges.length)
    .sort(compareFunctions[sortBy]);

  console.log(getSortedBooks());

  const handleSortByItemClick = (field) => {
    setSortBy(field);
  };
  return (
    <>
      <SortByDropdown sortBy={sortBy} onSortByItemClick={handleSortByItemClick} />
      {getSortedBooks().map((x, index) => {
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
