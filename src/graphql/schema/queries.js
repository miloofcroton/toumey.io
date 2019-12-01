import { GraphQLObjectType, GraphQLBoolean } from 'graphql';
import * as itemQueries from './testData/items/queries';
// import * as thingQueries from '../../resources/things/graphql/queries';
// import * as userQueries from '../../resources/users/graphql/queries';
// import * as messageQueries from '../../resources/messages/graphql/queries';
// import * as eventQueries from '../../resources/events/graphql/queries';
// import * as customerQueries from '../../resources/customers/graphql/queries';
// import * as orderQueries from '../../resources/orders/graphql/queries';

const queries = new GraphQLObjectType({
  name: 'RootQueries',
  description: 'Root queries',
  fields: () => ({
    _: { name: '_', type: GraphQLBoolean },
    ...itemQueries,
    // ...thingQueries,
    // ...userQueries,
    // ...messageQueries,
    // ...eventQueries,
    // ...customerQueries,
    // ...orderQueries,
  })
});

export default queries;
