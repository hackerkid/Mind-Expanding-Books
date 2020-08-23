import json
import time

from read_file import load
from gooodreads import get_details

required_fields = ["title", "author", "url", "rating", "year", "pages", "image_url", "description"]

def book_has_all_fields(book):
    for required_field in required_fields:
        if required_field not in existing_book:
            return False
    return True

if __name__ == "__main__":
    library = load("../README.md", "new")
    existing_book_names_to_details = json.load(open("books.json"))

    for category in library:
        for book in library[category]:
            if (title := book["title"]) in existing_book_names_to_details:
                existing_book = existing_book_names_to_details[title]
                if book_has_all_fields(existing_book):
                    continue
            new_book = {
                "title": title,
            }
            fetched = get_details(new_book)
            if fetched:
                print(f"✅ {title} fetched")
                existing_book_names_to_details[title] = new_book
                with open("books.json", "w") as f:
                    json.dump(existing_book_names_to_details, f, sort_keys=True, indent=4, separators=(',', ': '))
            else:
                print(f"❌ Error while fetching {title}")
            time.sleep(1)
