import {
  GraphQLNonNull,
  GraphQLString,
  // GraphQLID,
} from 'graphql/type';
// import prepare from '../../../lib/prepare';
// import Model from '../db/model';
// import { Item } from './objects';
import { Item } from './objects';

export const createItem = {
  type: Item,
  args: {
    title: { type: GraphQLString },
    description: { type: GraphQLString },
  },
  resolve: (parent, args, ctx) => {
    const { title, description } = args;
    // return Model
    //   .create({ title, description })
    //   .then(prepare);

    return `added item with title ${args.title} and description ${args.description}`;
  },
};

export const deleteItem = {
  type: Item,
  // args: { id: { type: GraphQLNonNull(GraphQLID) } },
  args: { id: { type: GraphQLNonNull(GraphQLString) } },
  resolve: (parent, args, ctx) => {
    // return Model
    //   .findOneAndDelete({ _id: args.id })
    //   .then(prepare);

    return `removed item with id ${args.id}`;
  },
};
