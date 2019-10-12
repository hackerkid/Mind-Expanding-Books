import time
import xml.etree.ElementTree as ET
import urllib.request
import urllib.error

from config import GOODREADS_PUBLIC_API_KEY


def get_details(book_object):

    url = "http://www.goodreads.com/book/title.xml?key={}&title={}".format(GOODREADS_PUBLIC_API_KEY,
                                                                           urllib.parse.quote_plus(book_object['title']))

    try:
        tree = ET.ElementTree(file=urllib.request.urlopen(url))
        root = tree.getroot()
        book = root.find('book')
        book_object['year'] = book.find('publication_year').text or ''
        book_object['lang'] = book.find('language_code').text
        book_object['rating'] = book.find('average_rating').text
        book_object['pages'] = book.find('num_pages').text
        book_object['image_url'] = book.find('image_url').text
    except urllib.error.HTTPError as e:
        print('Error getting book details from GoodReads for book: {}. \nGot error: '.format(book_object['title']))
        print(str(e.getcode()) + ' ' + e.msg)


def get_goodread_info(library, force):
    import sys
    print('')
    print('Getting GoodReads data...')

    processed = 0
    total_book_count = 0
    for key in library:
        total_book_count += len(library[key])


    for chapter in library:
        book_list = library[chapter]
        for book in book_list:
            # do not call the api again if we already have the infomation
            if not force and 'rating' in book and book['rating']:
                processed += 1
                continue
            get_details(book)
            processed += 1

            print('{}/{} records processed.'.format(processed, total_book_count), end="\b")
            sys.stdout.write('\r')
            sys.stdout.flush()  # <- makes python print it anyway

            # need to wait a second between the requests, to not abuse the API
            time.sleep(1)