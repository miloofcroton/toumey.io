import {
  GraphQLNonNull,
  GraphQLString,
  // GraphQLID,
  GraphQLObjectType,
} from 'graphql/type';

export const Item = new GraphQLObjectType({
  name: 'Item',
  fields: () => ({
    // id: { type: GraphQLNonNull(GraphQLID) },
    id: { type: GraphQLNonNull(GraphQLString) },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
  })
});
