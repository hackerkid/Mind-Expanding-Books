# Utils for Mind-Expanding-Books

Simple command line interface to extend and order the Mind-Expanding-Books list.

## Getting started

### Setup
1) Copy ```config-sample.py``` to ```config.py```

```bash
  cp config-sample.py config.py
```
2) Get a GoodReads API key [here](https://www.goodreads.com/api/keys)
3) Copy your public key to the ```config.py``` file

### Converting

Run

```bash
  python3 housekeep.py --file_type='old'
```

The ``--file_type='old'`` flag is needed if the books are displayed in the old format (in a list). New format is the default (when the records are displayed in tables).

This will convert to the new format and save it to ``README-new.md``.

**Note!** the first conversion can take some time, we wait 1 second between each request to GoodReads to not abuse the API.
After the first generation only missing records will be tried to be retrieved.

Run to see the available arguments
```bash
  python3 housekeep.py --help
```
