export default function bookReducer(state, action) {
	let readingListCopy = {...state}

	let { bookIds, books } = readingListCopy
	const { retrievedBook } = action
	const retrievedBookId = retrievedBook.id

	switch (action.type) {
		case 'bookmark':
			// Delete existing bookmark
			if (bookIds.includes(retrievedBookId)) {
				readingListCopy.bookIds = bookIds.filter(id => id !== retrievedBookId) // Not being removed from array
				delete books[retrievedBookId]
			// Add new bookmark
			} else {
				books[retrievedBookId] = retrievedBook
				bookIds.push(retrievedBookId)
			}
			return readingListCopy
		}
	}