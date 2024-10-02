import React, { useState, useContext } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { BookmarkContext } from "../context/globalState"; // Import the context
import BookCard from "./bookcard"; // Import the BookCard component

const Header = ({ siteTitle }) => {
  const { readingList } = useContext(BookmarkContext); // Access global state
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search input
  const [filteredBooks, setFilteredBooks] = useState([]); // State for filtered books

  // Handle search input change
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter books based on the search query
    if (query) {
      const results = Object.values(readingList.books).filter((book) =>
        book.title.toLowerCase().includes(query)
      );
      setFilteredBooks(results);
    } else {
      setFilteredBooks([]);
    }
  };

  return (
    <header className="mx-2 custom-header bg-red" aria-labelledby="main-title">
      <div className="d-flex justify-content-between align-items-center">
        {/* Site title */}
        <h4 className="navbar-brand" id="main-title" style={{ margin: 16 }}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            {siteTitle}
          </Link>
        </h4>

        {/* Search bar */}
        <input
          type="text"
          className="form-control"
          placeholder="Search for books..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {/* Display search results */}
      {searchQuery && (
        <div className="search-results my-8">
          {filteredBooks.length > 0 ? (
            <div>
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <p>No books found</p>
          )}
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
