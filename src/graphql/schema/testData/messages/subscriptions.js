// import EVENTS from '../../../app/graphql/events';
// import pubsub from '../../../app/lib/pubsub';
import { MessageCreated } from './messagesObjects';

export const  messageCreated = {
  type: MessageCreated,
  // subscribe: () => pubsub.asyncIterator(EVENTS.MESSAGE.CREATED),
  subscribe: () => console.log('subscribed!'),
};
