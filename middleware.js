const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({
  app, 
  path: '/whowho'
});
