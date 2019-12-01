import { ApolloServer } from 'apollo-server-micro';
import { schema } from '../../graphql/schema';

const apolloServer = new ApolloServer({ schema });

export const config = {
  api: {
    bodyParser: false,
  },
};

const apiGatway = apolloServer.createHandler({ path: '/api/graphql' });

export default apiGatway;
