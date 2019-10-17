import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const BookCard = ({ book }) => (
    <div key={book.id} class="w-56 rounded overflow-hidden shadow-lg m-3">
    <img class="w-full" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1414347376l/18050143.jpg" alt="Sunset in the mountains" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-0">{ book.title }</div>
      <p className="text-gray-700 font-bold text-sm mb-1">
        { book.year } | { book.rating }
      </p>
      <p class="text-gray-700 text-base">
        { book.author }
      </p>
    </div>
    <div class="px-6 py-4">
      <span class="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{book.category}</span>
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
