`utils/` mainly contains scripts for generating `app/src/data/books.json` file from `README.md`

In most cases, you don't want to run the scripts in this directory or make changes to it.
The only time you want to mess with the scripts is when you want to fetch some extra data from `API` or
want to update the `app/src/data/books.json` file to include a newly added book or category.

## Generating `app/src/data/books.json`

The website shows name of the book, year, rating, cover, amazon link, etc in book card. Some of the
data like name, year, rating etc is present in the [main README.md](../README.md). Other details
like cover photo, amazon link etc is fetched from various APIs.

The script that fetches all these extra data lives in `utils/update_json_files.py`

The script goes through all the books in [main README.md](../README.md) and starts fetching the extra details
from `Goodreads` and `Google Search` API. And the result is stored in `utils/books.json` and `utils/book_name_to_details.json`
(used for caching only).

Once the script completes the run, the `utils/books.json` file is copied to `app/src/data/books.json` **manually**.

And the website uses the data from `app/src/data/books.json` for generating the pages.

## Install packages for script

```bash
cd utils
virtualenv .
source bin/activate
pip install -r requirements.txt
```

## Executing the script

- Register at [goodreads](https://www.goodreads.com)
- Apply for a developer api [here](https://www.goodreads.com/api)
- Copy utils/config-sample.py as utils/config.py
- Fill in the API Key credentials
