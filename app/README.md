This directory contains the source code of the Mind Expanding Books [website](https://books.vishnuks.com)

## How to setup development environment

```bash
git clone https://github.com/hackerkid/Mind-Expanding-Books
cd app/
npm install
gatsby develop
```

## High level overview of the website

- The website is made using Gatsby, which is a React based static site generator.
- The website is deployed in Netlify automatically whenever a commit is pushed to GitHub.
- When you create a pull request with changes to the source code, Netlify will automatically
  create a website for previewing the changes. You can click on "Details" in the "Deploy preview ready!"
  message in the pull request page for seeing the website.

## From where does the website fetches the data of the books?

Website fetches the data of the books from `app/src/book.json` file. See [README in utils directory](../utils/README.MD)
for details on how this file is generated.
