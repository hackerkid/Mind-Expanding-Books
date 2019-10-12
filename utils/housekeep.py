# we assume that every line after # Books
# starting with * is a book title if file type is old
# starting with | (and not with | Name or |--) is a book if the file type is new

# ARGUMENT HANDLING
try:
    import argparse
    parser = argparse.ArgumentParser(description='Process file.')
    parser.add_argument(
        '--in_file',
        help='File to process, defaults to ./../README.MD')
    parser.add_argument(
        '--out_file',
        help='File to save to, defaults to ./../README-NEW.MD')
    parser.add_argument(
        '--input_file_type',
        choices=['old', 'new'],
        help='old if links are displayed in a list, new if in a table')
    parser.add_argument(
        '--sort_by',
        choices = ['rating', 'title', 'author', 'year'],
        help='defaults to rating')
    flags = parser.parse_args()
except ImportError:
    flags = None


def sort(library, key_to_sort_on, reverse = False):
    new_library = {}
    for key in library:
        books = library[key]
        new_library[key] = sorted(books, key=lambda k: k[key_to_sort_on], reverse=reverse)
    return new_library


def main():
    from read_file import load
    from gooodreads import get_goodread_info
    from write_file import render

    in_file = flags.in_file or './../README.MD'
    out_file = flags.out_file or './../README-new.md'
    input_file_type = flags.input_file_type or 'new'
    sort_by = flags.sort_by or 'rating'
    reverse = True if sort_by == 'rating' else False

    library = load(in_file, input_file_type)
    get_goodread_info(library)
    library = sort(library, sort_by, reverse)
    render(in_file, out_file, library)

if __name__ == '__main__':
    main()


