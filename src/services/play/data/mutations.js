import {
  GraphQLNonNull,
  GraphQLString,
  // GraphQLID,
} from 'graphql/type';
import { Item } from './objects';

export const createItem = {
  type: Item,
  args: {
    title: { type: GraphQLString },
    description: { type: GraphQLString },
  },
  resolve: (parent, args, ctx) => {
    const { title, description } = args;
    return `added item with title ${title} and description ${description}`;
  },
};

export const deleteItem = {
  type: Item,
  // args: { id: { type: GraphQLNonNull(GraphQLID) } },
  args: { id: { type: GraphQLNonNull(GraphQLString) } },
  resolve: (parent, args, ctx) => {
    return `removed item with id ${args.id}`;
  },
};
