import {
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
} from 'graphql/type';
// import prepare from '../../../lib/prepare';
// import Model from '../db/model';
import { Item } from './objects';
import { mockItems } from './mocks';

export const item = {
  type: Item,
  args: { id: { type: new GraphQLNonNull(GraphQLID) } },
  resolve: (parent, args, ctx) => {
    // return Model
    //   .findOne({ _id: args.id })
    //   .then(prepare);
    return mockItems
      .find((item) => item.id === args.id);
  },
};

export const items = {
  type: new GraphQLList(Item),
  resolve: (parent, args, ctx) => {
    // return Model
    //   .find()
    //   .then(prepare);

    return mockItems;
  },
};
