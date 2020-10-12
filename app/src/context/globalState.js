import React, { useReducer, useEffect } from 'react'
import bookReducer from './bookReducer'

export const BookmarkContext = React.createContext()

export default function GlobalState({children}) {
	// Object lets you toggle books in and out and array lets you map to reading list
	let [readingList, updateReadingList] = useReducer(bookReducer, {
		books: {},
		bookIds: []
	})

	useEffect(() => {
		const retrievedBooks = JSON.parse(localStorage.getItem('Bookmarks'))
		console.log(retrievedBooks)
		updateReadingList({type: 'init', content: retrievedBooks})
	}, [])

	return (
		<BookmarkContext.Provider value={{readingList, updateReadingList}}>
			{children}
		</BookmarkContext.Provider>
	)
}
