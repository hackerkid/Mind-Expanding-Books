import React from 'react'
import { Button } from "react-bootstrap"

const toggleLocalStorage = (book) => {
	if (typeof window !== undefined) {
		const readingList = localStorage.getItem('Reading List')
		let listData
		let bookId = book.id

		// If no booklist exists
		if (readingList === null) {
			listData = {}
		} else {
			listData = JSON.parse(readingList)
		}

		// Write or delete from localStorage if duplicate
		if (Object.keys(listData).includes(bookId)) {
			console.log('exists')
			delete listData[bookId]
		} else {
			listData[bookId] = book
		}

		localStorage.setItem('Reading List', JSON.stringify(listData))
	}
}

export default ({ book }) => {
	return (
		<Button variant="secondary">
			<span onClick={() => toggleLocalStorage(book)}>
				Add to reading list
			</span>
		</Button>
	)
}
