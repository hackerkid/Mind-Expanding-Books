file_with_books = './../README.MD'

# we assume that every line after # Books starting with * is a book title


def read_file_content(file):
    with open(file) as f:
        content = f.readlines()
    # remove whitespaces
    return [_.strip() for _ in content]


def parse_book_string(book_string):
    book = {}
    book['title'] = book_string.split('[')[1].split(']')[0]
    book['url'] = book_string.split('(')[1].split(')')[0]
    book['author'] = book_string.split(' by ')[-1]
    return book


def load(file):
    file = read_file_content(file)
    print(file)
    # we start one line after tilte # Books
    line_to_start = file.index('# Books') + 1
    current_title = ''
    books_under_current_title = []
    library = {}

    for i in range(line_to_start, len(file)):
        line = file[i]

        # we have a title
        if line.startswith('##'):
            if len(current_title) == 0:
                current_title = line
            else:
                library[current_title] = books_under_current_title
                books_under_current_title = []
                current_title = line
            continue

        # we have a book
        if line.startswith('*'):
            book = parse_book_string(line)
            books_under_current_title.append(book)
    return library


def sort_by(library, key_to_sort_on):
    new_library = {}
    for key in library:
        books = library[key]
        new_library[key] = sorted(books, key=lambda k: k[key_to_sort_on])
    return new_library


def render_book_line(book_object):
    return '* [{}]({}) by {}.\n'.format(book_object['title'], book_object['url'], book_object['author'])


# TODO: refine this logic
def render(file_name, library):
    books_not_reached = True
    with open(file_name, 'w') as out_file:
        with open(file_with_books) as original_file:
            for line in original_file:

                if line.strip() in library:
                    if not books_not_reached: out_file.write('\n')
                    books_not_reached = False
                    out_file.write(line)
                    for book in library[line.strip()]:
                        out_file.write(render_book_line(book))
                elif books_not_reached:
                    out_file.write(line)
                elif line.startswith('## License'):
                    out_file.write('\n')
                    out_file.write('\n')
                    out_file.write(line)
                    books_not_reached = True



library = load(file_with_books)
library = sort_by(library, 'title')

render('./../by-title.md', library)

library = load(file_with_books)
library = sort_by(library, 'author')

render('./../by-author.md', library)