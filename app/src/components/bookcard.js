import PropTypes from "prop-types"
import React from "react"

const BookCard = ({ book }) => (
    <div key={book.id} className="w-56 rounded overflow-hidden shadow-lg m-3">
    <img className="w-full" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1414347376l/18050143.jpg" alt="Sunset in the mountains" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{ book.title }</div>
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
