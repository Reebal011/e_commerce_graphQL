const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema');
const { Product, Category, Query, Mutation } = require('./resolvers/index');
const { categories, products, reviews } = require('./db');

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
    Mutation,
  },
  context: {
    categories,
    products,
    reviews,
  },
});

server.listen().then(({ url }) => {
  console.log('Server is ready at ' + url);
});
