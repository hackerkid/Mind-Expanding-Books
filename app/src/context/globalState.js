import React, { useReducer, useEffect } from 'react'
import bookReducer from './bookReducer'

export const BookmarkContext = React.createContext()

export default function GlobalState({children}) {
	let [readingList, updateReadingList] = useReducer(bookReducer, {
		books: {},
		bookIds: []
	})

	useEffect(() => {
		if (typeof window !== undefined) {
			const retrievedBooks = JSON.parse(localStorage.getItem('Bookmarks'))
			console.log(retrievedBooks)
			updateReadingList({type: 'init', content: retrievedBooks})
		}
	}, [])

	return (
		<BookmarkContext.Provider value={{readingList, updateReadingList}}>
			{children}
		</BookmarkContext.Provider>
	)
}
