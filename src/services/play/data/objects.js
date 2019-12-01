import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLObjectType,
  GraphQLList
} from 'graphql/type';

export const PlayPostFrontMatter = new GraphQLObjectType({
  name: 'PlayPostFrontMatter',
  description: 'Frontmatter for a PlayPost',
  fields: () => ({
    templateKey: { type: GraphQLString },
    title: { type: GraphQLString },
    image: { type: GraphQLString },
    date: { type: GraphQLString },
    description: { type: GraphQLString },
    tags: { type: new GraphQLList(GraphQLString) }
  })
});

export const PlayPost = new GraphQLObjectType({
  name: 'PlayPost',
  fields: () => ({
    frontmatter: { type: PlayPostFrontMatter },
    content: { type: GraphQLString },
  })
});
