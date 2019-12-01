import { GraphQLSchema } from 'graphql';
import queries from './queries';
import mutations from './mutations';
// import subscriptions from './subscriptions';

export const schema = new GraphQLSchema({
  query: queries,
  mutation: mutations,
  // subscription: subscriptions,
});
