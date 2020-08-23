def read_file_content(file):
    with open(file) as f:
        content = f.readlines()
    # remove whitespaces
    return [_.strip() for _ in content]


# old (list)
def parse_book_string(book_string):
    book = {}
    book["title"] = book_string.split("[")[1].split("]")[0]
    book["url"] = book_string.split("]")[1].split("(")[1].split(")")[0]
    book["author"] = book_string.split(" by ")[-1]
    book["rating"] = ""
    book["year"] = ""
    return book


# new (table)
def parse_book_string_new(book_string):
    book = {}
    book_split = book_string.split("|")
    # print(book_split)
    book["title"] = book_split[1].strip()
    book["author"] = book_split[2].strip()
    book["url"] = book_split[3].strip().split("[")[1].split("(")[1].split(")")[0]
    book["rating"] = book_split[3].strip().split("[")[1].split("]")[0]
    book["year"] = book_split[4].strip()
    return book


def load(file, file_type):
    file = read_file_content(file)

    # we start one line after tilte # Books
    line_to_start = file.index("# Books") + 1
    current_title = ""
    books_under_current_title = []
    library = {}

    for i in range(line_to_start, len(file)):
        line = file[i]

        # we have a title
        if line.startswith("##"):
            if len(current_title) == 0:
                current_title = line
            else:
                library[current_title] = books_under_current_title
                books_under_current_title = []
                current_title = line
            continue

        # we have a book
        if file_type == "old":
            if line.startswith("*"):
                book = parse_book_string(line)
                books_under_current_title.append(book)
        else:
            if (
                line.startswith("|")
                and not line.startswith("| Name")
                and not line.startswith("|---")
            ):
                book = parse_book_string_new(line)
                books_under_current_title.append(book)

    return library
