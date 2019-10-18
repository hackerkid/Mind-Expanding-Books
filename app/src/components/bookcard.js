import PropTypes from "prop-types"
import React from "react"
import StarRatings from 'react-star-ratings';

const BookCard = ({ book }) => (
    <div className="w-56 rounded overflow-hidden shadow-lg m-3">
    <img className="w-full" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1457284880l/27220736.jpg" alt="Sunset in the mountains" />
    <div className="px-6 py-4">
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
    <div className="px-6 py-4">
      <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{book.category}</span>
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
