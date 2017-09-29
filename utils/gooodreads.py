import time
import xml.etree.ElementTree as ET
import urllib.request
import urllib.error

from config import GOODREADS_PUBLIC_API_KEY


def get_details(book_object):

    url = "http://www.goodreads.com/book/title.xml?key={}&title={}".format(GOODREADS_PUBLIC_API_KEY, urllib.parse.quote_plus(book_object['title']))
    # url = url.replace(' ', '%20')
    print(url)
    try:
        tree = ET.ElementTree(file=urllib.request.urlopen(url))
        root = tree.getroot()
        book = root.find('book')
        book_object['year'] = book.find('publication_year').text or ''
        book_object['lang'] = book.find('language_code').text
        book_object['rating'] = book.find('average_rating').text
        book_object['pages'] = book.find('num_pages').text
    except urllib.error.HTTPError as e:
        print('Error getting book details from GoodReads: ')
        print(str(e.getcode()) + ' ' + e.msg)
    print(book_object)


def get_goodread_info(library):
    i = 0

    for chapter in library:
        book_list = library[chapter]
        for book in book_list:

            # do not call the api again if we already have the infomration
            if 'rating' in book and book['rating']:
                continue
            #print(i)
            #if i == 10:
                #break
            get_details(book)
            #i += 1
            # need to wait a second between the requests, to not abuse the API
            time.sleep(1)