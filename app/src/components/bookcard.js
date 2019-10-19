import PropTypes from "prop-types"
import React from "react"
import StarRatings from 'react-star-ratings';

const BookCard = ({ book }) => (
    <div className="mx-auto flex-grow-0 w-11/12 md:w-56 rounded-lg overflow-hidden shadow-lg m-3 flex flex-column flex-wrap items-stretch">
    <img className="self-start" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1457284880l/27220736.jpg" alt="Sunset in the mountains" />
    <div className="px-6 py-4 w-full content-start">
      <div className="font-bold text-xl mb-0">{ book.title }</div>
      <div className="text-gray-700 font-bold text-base mb-1">
        <span className="mr-2 align-middle">{ book.year }</span>
        <StarRatings
          rating={ parseFloat(book.rating) }
          numberOfStars={5}
          starDimension="18px"
          starSpacing="1px"
          starRatedColor="#fa604a"
        />
      </div>
      <p className="text-gray-700 text-base">
        { book.author }
      </p>
    </div>
    <div className="w-full self-end">
      <span className="inline-block bg-blue-600 px-3 py-1 text-lg font-semibold text-gray-100 mr-2 w-full text-center">{book.category}</span>
    </div>
  </div>
)

BookCard.propTypes = {
  siteTitle: PropTypes.object,
}

BookCard.defaultProps = {
  book:{},
}

export default BookCard
