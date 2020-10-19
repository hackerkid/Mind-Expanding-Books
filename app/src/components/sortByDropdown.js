import React from 'react';
import { Dropdown } from 'react-bootstrap';

export const compareFunctions = {
  title_a_z: ({ node: bookOne }, { node: bookTwo }) => bookOne.title.localeCompare(bookTwo.title),
  title_z_a: ({ node: bookOne }, { node: bookTwo }) => bookTwo.title.localeCompare(bookOne.title),
  year_descending: ({ node: bookOne }, { node: bookTwo }) => Number(bookTwo.year) - Number(bookOne.year),
  year_ascending: ({ node: bookOne }, { node: bookTwo }) => Number(bookOne.year) - Number(bookTwo.year),
  rating_descending: ({ node: bookOne }, { node: bookTwo }) => Number(bookTwo.rating) - Number(bookOne.rating),
  rating_ascending: ({ node: bookOne }, { node: bookTwo }) => Number(bookOne.rating) - Number(bookTwo.rating),
};

export const FIELDS_TO_SORT_BY = [
  { label: 'Rating, high to low', value: 'rating_descending' },
  { label: 'Rating, low to high', value: 'rating_ascending' },
  { label: 'Publication year, new to old', value: 'year_descending' },
  { label: 'Publication year, old to new', value: 'year_ascending' },
  { label: 'Title, A-Z', value: 'title_a_z' },
  { label: 'Title, Z-A', value: 'title_z_a' },
];

export default ({ sortBy, onSortByItemClick }) => (
  <div className="mb-2">
    <Dropdown>
      <Dropdown.Toggle variant="outline">
        Sort By:
        {' '}
        {sortBy}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {FIELDS_TO_SORT_BY.map((field, index) => (
          <Dropdown.Item key={index} onClick={() => onSortByItemClick(field)}>
            {field.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  </div>
);
