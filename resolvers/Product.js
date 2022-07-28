exports.Product = {
  category: ({ categoryID }, args, { categories }) => {
    return categories.find((category) => category.id === categoryID);
  },
  reviews: ({ id }, args, { reviews }) => {
    return reviews.filter((review) => review.productId === id);
  },
};
