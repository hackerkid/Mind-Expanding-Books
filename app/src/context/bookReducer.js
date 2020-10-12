export default function bookReducer(state, action) {
	let readingListCopy = {...state}

	const { bookIds, books } = readingListCopy
	const { retrievedBookId } = action 

	switch (action.type) {
		case 'bookmark':
			// Delete existing bookmark
			if (bookIds.includes(retrievedBookId)) {
				bookIds = bookIds.filter(id => id !== retrievedBookId)
				delete books[retrievedBookId]
			// Add new bookmark
			} else {
				books[retrievedBookId] = book 
				bookIds.push(retrievedBookId)
			}
		}

		console.log(readingListCopy)
		return readingListCopy
	}