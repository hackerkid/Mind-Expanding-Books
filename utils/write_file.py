def render_book_line(book_object):
    book = book_object
    book['rating'] = '?' if not 'rating' in book else book['rating']
    book['url'] = '' if not 'url' in book else book['url']
    book['year'] = '' if not 'year' in book else book['year']
    return '| {} | {} | [{}]({}) | {} |  \n'.format(book['title'],
                                                   book['author'],
                                                   book['rating'],
                                                   book['url'],
                                                   book['year'])


# TODO: refine this logic
def render(in_file, out_file, library):
    books_not_reached = True
    with open(out_file, 'w') as out_file:
        with open(in_file) as original_file:
            for line in original_file:

                if line.strip() in library:
                    if not books_not_reached: out_file.write('\n')
                    books_not_reached = False

                    # render chapter and start of the table
                    out_file.write(line)
                    out_file.write('| Name | Author | Goodreads Rating | Year Published |  \n')
                    out_file.write('|------|--------|------------------|----------------|  \n')
                    # render books
                    for book in library[line.strip()]:
                        out_file.write(render_book_line(book))
                elif books_not_reached:
                    out_file.write(line)
                elif line.startswith('## License'):
                    out_file.write('\n')
                    out_file.write('\n')
                    out_file.write(line)
                    books_not_reached = True