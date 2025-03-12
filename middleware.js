const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({
  app, 
  path: 'bpapollo13.wpenginepowered.com/whowho'
});
