const { v4: uuid } = require('uuid');

exports.Mutation = {
  addCategory: (parent, { input }, { db }) => {
    const { name } = input;

    const newCategory = {
      id: uuid(),
      name,
    };
    db.categories.push(newCategory);
    return newCategory;
  },

  addProduct: (parent, { input }, { db }) => {
    const { name, image, description, quantity, price, onSale, categoryId } =
      input;

    const newProduct = {
      id: uuid(),
      name,
      image,
      description,
      quantity,
      price,
      onSale,
      categoryId,
    };
    db.categories.push(newProduct);
    return newProduct;
  },

  addReview: (parent, { input }, { db }) => {
    const { date, title, comment, rating, productId } = input;

    const newReview = {
      id: uuid(),
      date,
      title,
      comment,
      rating,
      productId,
    };
    db.reviews.push(newReview);
    return newReview;
  },

  deleteCategory: (parent, { id }, { db }) => {
    db.categories = db.categories.filter((category) => category.id !== id);
    db.products = db.products.map((product) => {
      if (product.categoryId === id)
        return {
          ...product,
          categoryId: null,
        };
      else return product;
    });
    return true;
  },
};
