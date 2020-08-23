from shutil import copyfile
import os


def render_book_line(book_object):
    book = book_object
    book["rating"] = "?" if not "rating" in book else book["rating"]
    book["url"] = "" if not "url" in book else book["url"]
    book["year"] = "" if not "year" in book else book["year"]
    return "| {} | {} | [{}]({}) | {} |  \n".format(
        book["title"], book["author"], book["rating"], book["url"], book["year"]
    )


# TODO: refine this logic
def render(in_file, out_file, library):
    """
    This renders the file to the out_file location
    savig the new file to tmp_file location, the copying it to out-file and deleting tmp_file
    this is done to prevent issues if the in and the out file are the same
    """
    tmp_file = "./.tmp-file.md"
    open(tmp_file, "a").close()
    books_not_reached = True
    with open(tmp_file, "w") as out_file_tmp:
        with open(in_file) as original_file:
            for line in original_file:

                if line.strip() in library:
                    if not books_not_reached:
                        out_file_tmp.write("\n")
                    books_not_reached = False

                    # render chapter and start of the table
                    out_file_tmp.write(line)
                    if len(library[line.strip()]) > 0:
                        out_file_tmp.write(
                            "| Name | Author | Goodreads Rating | Year Published |  \n"
                        )
                        out_file_tmp.write(
                            "|------|--------|------------------|----------------|  \n"
                        )
                    # render books
                    for book in library[line.strip()]:
                        out_file_tmp.write(render_book_line(book))
                elif books_not_reached:
                    out_file_tmp.write(line)
                elif line.startswith("## License"):
                    out_file_tmp.write("\n")
                    out_file_tmp.write("\n")
                    out_file_tmp.write(line)
                    books_not_reached = True

    copyfile(tmp_file, out_file)
    os.remove(tmp_file)
