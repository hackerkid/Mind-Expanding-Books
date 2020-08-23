import json
import time

from read_file import load
from gooodreads import get_details
from bs4 import BeautifulSoup

required_fields = ["title", "author", "url", "rating", "year", "pages", "image_url", "description", "category"]

def book_has_all_fields(book):
    for required_field in required_fields:
        if required_field not in existing_book:
            print(f"Missing {required_field}")
            return False
    return True

def clean_category(category_raw):
    if "### " in category_raw:
        return category_raw[4:]
    if "## " in category_raw:
        return category_raw[3:]

if __name__ == "__main__":
    library = load("../README.md", "new")
    existing_book_names_to_details = json.load(open("books.json"))

    for category in library:
        category_name = clean_category(category)
        for book in library[category]:
            if (title := book["title"]) in existing_book_names_to_details:
                existing_book = existing_book_names_to_details[title]
                if book_has_all_fields(existing_book):
                    print(f"🆗 {title}")
                    continue
            new_book = {
                "title": title,
                "author": book["author"],
                "url": book["url"],
                "category": category_name
            }
            fetched = get_details(new_book)
            if fetched:
                print(f"✅ {title}")
                existing_book_names_to_details[title] = new_book
                with open("books.json", "w") as f:
                    json.dump(existing_book_names_to_details, f, sort_keys=True, indent=4, separators=(',', ': '))
            else:
                print(f"❌ Error while fetching {title}")
            time.sleep(1)

    book_list = []
    for _, book in existing_book_names_to_details.items():
        book_list.append(book)

    with open("books.json", "w") as f:
        json.dump(existing_book_names_to_details, f, sort_keys=True, indent=4, separators=(',', ': '))

    with open("books_list.json", "w") as f:
        json.dump(book_list, f, sort_keys=True, indent=4, separators=(',', ': '))
