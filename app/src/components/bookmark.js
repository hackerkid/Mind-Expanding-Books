import React, { useContext } from 'react'
import { Button } from "react-bootstrap"
import { BookmarkContext } from '../context/globalState'

export default ({ book }) => {
	const { updateReadingList } = useContext(BookmarkContext)

	return (
		<Button variant="secondary">
			<span onClick={() => updateReadingList({ type: 'bookmark', retrievedBook: book })}>
				Add to reading list
			</span>
		</Button>
	)
}
