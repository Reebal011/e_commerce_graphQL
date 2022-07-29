exports.Product = {
  category: ({ categoryID }, args, { db }) => {
    return db.categories.find((category) => category.id === categoryID);
  },
  reviews: ({ id }, args, { db }) => {
    return db.reviews.filter((review) => review.productId === id);
  },
};
