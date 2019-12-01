import { GraphQLObjectType, GraphQLBoolean } from 'graphql';
import * as itemMutations from './testData/items/mutations';
// import * as thingMutations from '../../resources/things/graphql/mutations';
// import * as userMutations from '../../resources/users/graphql/mutations';
// import * as messageMutations from '../../resources/messages/graphql/mutations';
// import * as eventMutations from '../../resources/events/graphql/mutations';
// import * as customerMutations from '../../resources/customers/graphql/mutations';
// import * as orderMutations from '../../resources/orders/graphql/mutations';

const mutations = new GraphQLObjectType({
  name: 'RootMutations',
  description: 'Root mutations',
  fields: () => ({
    _: { name: '_', type: GraphQLBoolean },
    ...itemMutations,
    // ...thingMutations,
    // ...userMutations,
    // ...messageMutations,
    // ...eventMutations,
    // ...customerMutations,
    // ...orderMutations,
  })
});

export default mutations;
