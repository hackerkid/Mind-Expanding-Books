const fs = require("fs")
const categories = JSON.parse(fs.readFileSync("src/data/categories.json"))

function createSlug (categoryName) {
    categoryName = categoryName.toLowerCase();
    categoryName = categoryName.replace(/ /g, "-");
    categoryName = categoryName.replace(/,/g, "");
    return categoryName;
};

exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions
  categories.forEach(async function(category) {
    const data = await graphql(`query categoryBooksQuery($categoryName: String) {
        allBooksJson(
            filter: {
                category: {
                    eq: $categoryName
                }
            }
        ){
          edges {
            node {
              id
              title
              url
              rating
              author
              year
              category
            }
          }
        }
      }
    `,
    {categoryName: category.name})
      
    createPage({
        path: createSlug(category.name),
        component: require.resolve("./src/templates/categoryTemplate.js"),
        context: {
            categoryName: category.name,
            data: data,
            limit: null,
        },
      })
    })
}
