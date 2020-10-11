import React from 'react'
import { Button } from "react-bootstrap"

export default ({ book, toggleSaveBook }) => {
	return (
		<Button variant="secondary">
			<span onClick={() => {toggleSaveBook(book)}}>
				Add to reading list
			</span>
		</Button>
	)
}
