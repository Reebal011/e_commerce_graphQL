exports.Category = {
  products: ({ id: categoryID }, { filter }, { products, reviews }) => {
    const categoryProducts = products.filter(
      (product) => product.categoryID === categoryID
    );
    let filteredCategoryProducts = categoryProducts;
    if (filter) {
      const { onSale, avgRating } = filter;
      if (onSale) {
        filteredCategoryProducts = filteredCategoryProducts.filter(
          (product) => {
            return product.onSale;
          }
        );
      }

      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredCategoryProducts = filteredCategoryProducts.filter(
          (product) => {
            let sumRating = 0;
            let numberOfReviews = 0;
            reviews.forEach((review) => {
              if (review.productId === product.id) {
                sumRating += review.rating;
                numberOfReviews++;
              }
            });
            const avgProductRating = sumRating / numberOfReviews;
            return avgProductRating >= avgRating;
          }
        );
      }
    }
    return filteredCategoryProducts;
  },
};
