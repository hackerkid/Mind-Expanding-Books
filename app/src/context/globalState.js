import React, { useReducer } from 'react'
import bookReducer from './bookReducer'

const BookmarkContext = React.createContext()

export default function GlobalState({children}) {
	// Object lets you toggle books in and out and array lets you map to reading list
	let [readingList, updateReadingList] = useReducer(bookReducer, {
		books: {},
		bookIds: []
	})

	return (
		<BookmarkContext.Provider value={readingList, updateReadingList}>
			{children}
		</BookmarkContext.Provider>
	)
}
