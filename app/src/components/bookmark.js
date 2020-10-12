import React, { useContext } from 'react'
import { Button } from "react-bootstrap"
import { BookmarkContext } from '../context/globalState'

// Next task: toggle appearance if in reading list or not

export default ({ book }) => {
	const { updateReadingList, readingList } = useContext(BookmarkContext)
	const readingListIds = readingList.bookIds

	return (
		<div onClick={() => updateReadingList({ type: 'bookmark', retrievedBook: book })}>
			<Button variant={ readingListIds.includes(book.id) ? "success" : "light" }>
				<span>
				🔖 
				</span>
			</Button>
		</div>
	)
}
