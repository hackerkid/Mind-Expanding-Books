import React from 'react'
import { Button } from "react-bootstrap"

const saveBookToLocalStorage = (book) => {
	if (typeof window !== undefined) {
		const readingList = localStorage.getItem('Reading List')
		let listData

		if (readingList === null) {
			listData = []
		} else {
			listData = JSON.parse(readingList)
		}

		listData.push(book)

		localStorage.setItem('Reading List', JSON.stringify(listData))
	}
}

export default ({ book }) => {
	return (
		<Button variant="secondary">
			<span onClick={() => saveBookToLocalStorage(book)}>
				Add to reading list
			</span>
		</Button>
	)
}
