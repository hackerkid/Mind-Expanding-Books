import React from 'react'
import { Button } from "react-bootstrap"

export default ({ book }) => {
	return (
		<Button variant="secondary">
			<span onClick={() => console.log(book)}>
				Add to reading list
			</span>
		</Button>
	)
}
