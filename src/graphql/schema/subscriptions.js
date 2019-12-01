import { GraphQLObjectType, GraphQLBoolean } from 'graphql';
import * as messageSubscriptions from '../../services/messages/data/subscriptions';

const subscriptions = new GraphQLObjectType({
  name: 'RootSubscriptions',
  description: 'Root subscriptions',
  fields: () => ({
    _: { name: '_', type: GraphQLBoolean },
    ...messageSubscriptions,
  })
});

export default subscriptions;
