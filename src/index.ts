import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers';
import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/graphql');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
