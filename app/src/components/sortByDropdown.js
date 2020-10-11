import React from 'react';
import { Dropdown } from 'react-bootstrap';

export const compareFunctions = {
  title: ({ node: bookOne }, { node: bookTwo }) => bookOne.title.localeCompare(bookTwo.title),
  year: ({ node: bookOne }, { node: bookTwo }) => Number(bookTwo.year) - Number(bookOne.year),
  rating: ({ node: bookOne }, { node: bookTwo }) => Number(bookTwo.rating) - Number(bookOne.rating),
};

export const FIELDS_TO_SORT_BY = ['rating', 'year', 'title'];

export default ({ sortBy, onSortByItemClick }) => (
  <div className="mb-2">
    <Dropdown>
      <Dropdown.Toggle variant="outline">
        Sort By:
        {' '}
        {sortBy}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {FIELDS_TO_SORT_BY
          .map((field) => (
            <Dropdown.Item
              onClick={() => onSortByItemClick(field)}
            >
              {field}
            </Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  </div>
);
