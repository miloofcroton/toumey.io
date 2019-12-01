import {
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
} from 'graphql/type';
import { PlayPost } from './objects';
import { fetchJson } from '../../../lib/data/fetch';

export const playPost = {
  type: PlayPost,
  args: { id: { type: new GraphQLNonNull(GraphQLID) } },
  resolve: (parent, args, ctx) => {
    return fetchJson(`http://localhost:${process.env.PORT}/api/play/${args.id}`);
  },
};

export const playPosts = {
  type: new GraphQLList(PlayPost),
  resolve: (parent, args, ctx) => {
    return fetchJson(`http://localhost:${process.env.PORT}/api/play`);
  },
};
