const createCategoryCollections = (products) => {
  let categoriesArray = [];

  products.map((product) => {
    // Checks to see if the category is already a part of the categoriesArray.
    // If so, the category is selected and the product is added
    if (categoriesArray.some(category => category.name === product.category)) {
      const targetCategory = categoriesArray.find(item => item.name === product.category);
      targetCategory.products = [...targetCategory.products, product];
    }

    // If the category does not exist in the categoriesArray yet, it is created
    // The current product in the iteration is then added to it
    if (!categoriesArray.some(category => category.name === product.category)) {
      const newCategory = {
        name: product.category,
        products: [product],
      };
      categoriesArray = [...categoriesArray, newCategory];
    }
    return null;
  });
  return categoriesArray;
};

export default { createCategoryCollections };
