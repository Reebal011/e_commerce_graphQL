const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema');
const { Product, Category, Query, Mutation } = require('./resolvers/index');
const { db } = require('./db');

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
    Mutation,
  },
  context: {
    db,
  },
});

server.listen().then(({ url }) => {
  console.log('Server is ready at ' + url);
});
