import { GraphQLObjectType, GraphQLBoolean } from 'graphql';
import * as messageSubscriptions from './testData/messages/subscriptions';

const subscriptions = new GraphQLObjectType({
  name: 'RootSubscriptions',
  description: 'Root subscriptions',
  fields: () => ({
    _: { name: '_', type: GraphQLBoolean },
    ...messageSubscriptions,
  })
});

export default subscriptions;
