import React, { useState } from 'react'

const BookmarkContext = React.createContext()

export default function GlobalState({children}) {
	let [readingList, updateReadingList] = useState({
		books: {},
		bookIds: []
	})

	// Turn this into a reducer later
	// const toggleSaveBook = (book) => {
	// 	const newReadingList = {...readingList}

	// 	if (newReadingList.bookIds.includes(book.id)) {
	// 		newReadingList.bookIds = newReadingList.bookIds.filter(id => id !== book.id)
	// 		delete newReadingList.books[book.id]
	// 	} else {
	// 		newReadingList.books[book.id] = book 
	// 		newReadingList.bookIds.push(book.id)
	// 	}
	// 	updateReadingList(newReadingList)
	// }

	return (
		<BookmarkContext.Provider value={readingList}>
			{children}
		</BookmarkContext.Provider>
	)
}
