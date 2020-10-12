export default function bookReducer(state, action) {
	let readingListCopy = {...state}

	switch (action.type) {
		case 'init': {
				if (action.content) {
					return action.content
				}
				return readingListCopy
			}
		case 'bookmark': {
				let { bookIds, books } = readingListCopy
				const { retrievedBook } = action
				const retrievedBookId = retrievedBook.id
				// Delete existing bookmark
				if (bookIds.includes(retrievedBookId)) {
					readingListCopy.bookIds = bookIds.filter(id => id !== retrievedBookId) 
					delete books[retrievedBookId]
					if (typeof window !== undefined) {
						localStorage.setItem('Bookmarks', JSON.stringify(readingListCopy))
					}
				// Add new bookmark
				} else {
					books[retrievedBookId] = retrievedBook
					bookIds.push(retrievedBookId)
					if (typeof window !== undefined) {
						localStorage.setItem('Bookmarks', JSON.stringify(readingListCopy))
					}
				}
				return readingListCopy
			}
		}
	}