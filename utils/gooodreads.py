import time
import xml.etree.ElementTree as ET
import urllib.request
import urllib.error

import requests

from bs4 import BeautifulSoup

from config import GOODREADS_PUBLIC_API_KEY, GOOGLE_SEARCH_RAPIDAPI_HOST, GOOGLE_SEARCH_RAPIDAPI_KEY, GOOGLE_BOOK_API_KEY
from googlesearch import search

def get_details(book_object):

    url = "http://www.goodreads.com/book/title.xml?key={}&title={}".format(
        GOODREADS_PUBLIC_API_KEY, urllib.parse.quote_plus(book_object["title"])
    )
    print(url)
    try:
        time_to_sleep = 1
        while True:
            response = urllib.request.urlopen(url)
            print(response.getcode())
            if response.getcode() == 429:
                time_to_sleep = time_to_sleep * 2
                print("Sleeping for {}".format(time_to_sleep))
                time.sleep(time_to_sleep)
            else:
                break
        tree = ET.ElementTree(file=response)
        root = tree.getroot()
        book = root.find("book")
        book_object["year"] = book.find("publication_year").text or ""
        book_object["lang"] = book.find("language_code").text
        book_object["rating"] = book.find("average_rating").text
        book_object["pages"] = book.find("num_pages").text
        book_object["image_url"] = book.find("image_url").text
        book_object["isbn"] = book.find("isbn").text

        description = book.find("description").text
        if description:
            book_object["description"] = BeautifulSoup(description).text
        else:
            book_object["description"] = ""
            if GOOGLE_BOOK_API_KEY.strip(" "):
                # Attempt to use Google Book API
                url = "https://www.googleapis.com/books/v1/volumes?q={}+inauthor:{}&key={}".format(
                    book_object["title"], book_object["author"], GOOGLE_BOOK_API_KEY,
                )
                response = requests.request("GET", url)

                for item in response.json()["items"]:
                    if "description" in item["volumeInfo"]:
                        book_object["description"] = item["volumeInfo"]["description"]
                        break
            
        print("Fetching amazon link")
        
        url = "https://google-search3.p.rapidapi.com/api/v1/search/q=site:amazon.com {} {}".format(book_object["title"], book_object["author"])

        headers = {
            'x-rapidapi-host': GOOGLE_SEARCH_RAPIDAPI_HOST,
            'x-rapidapi-key': GOOGLE_SEARCH_RAPIDAPI_KEY,
        }

        response = requests.request("GET", url, headers=headers)
        book_object["amazon_url"] = response.json()["results"][0]["link"]
        return True
    except urllib.error.HTTPError as e:
        print(
            "Error getting book details from GoodReads for book: {}. \nGot error: ".format(
                book_object["title"]
            )
        )
        print(str(e.getcode()) + " " + e.msg)
        return False


def get_goodread_info(library, force):
    import sys

    print("")
    print("Getting GoodReads data...")

    processed = 0
    total_book_count = 0
    for key in library:
        total_book_count += len(library[key])

    for category in library:
        book_list = library[category]
        for book in book_list:
            # do not call the api again if we already have the infomation
            if not force and "rating" in book and book["rating"]:
                processed += 1
                continue
            get_details(book)
            processed += 1

            print(
                "{}/{} records processed.".format(processed, total_book_count), end="\b"
            )
            sys.stdout.write("\r")
            sys.stdout.flush()  # <- makes python print it anyway

            # need to wait a second between the requests, to not abuse the API
            time.sleep(1)
