import React, { useContext } from 'react'
import { Button } from "react-bootstrap"
import { BookmarkContext } from '../context/globalState'

export default ({ book }) => {
	const { updateReadingList, readingList } = useContext(BookmarkContext)
	const readingListIds = readingList.bookIds

	return (
		<div onClick={() => updateReadingList({ type: 'bookmark', retrievedBook: book })}>
			<Button style={{
				 height: "30px", 
				 width: "30px", 
				 marginLeft: "0.25rem", 
				 display: "grid", 
				 justifyContent: "center",
				alignContent: "center" }} 
				variant={ readingListIds.includes(book.id) ? "success" : "light" 
		  }>
				<span>
					🔖 
				</span>
			</Button>
		</div>
	)
}
