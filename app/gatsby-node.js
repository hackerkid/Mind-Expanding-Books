const fs = require("fs")
const categories = JSON.parse(fs.readFileSync("src/data/categories.json"))

function createSlug (categoryName) {
    const categoryNameLower = categoryName.toLowerCase();
    return categoryNameLower.replace(" ", "-");
};

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  categories.forEach(category => {
    createPage({
        path: createSlug(category.name),
        component: require.resolve("./src/templates/categoryTemplate.js"),
        context: {
            categoryName: category.name
        },
      })
    })
}
