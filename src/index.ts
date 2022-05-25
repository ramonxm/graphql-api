import { ApolloServer } from 'apollo-server';
import { PubSub } from 'graphql-subscriptions';
import mongoose from 'mongoose';
import { resolvers } from './graphql/resolvers';
import { typeDefs } from './graphql/typeDefs';

mongoose.connect('mongodb://localhost:27017/graphql');

const pubSub = new PubSub();
const server = new ApolloServer({ typeDefs, resolvers, context: { pubSub } });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
