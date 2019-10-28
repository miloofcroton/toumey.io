import React from 'react';
import ListItem from './Item';
import { Post } from '../../../../services/play/data/types';

type Props = {
  items: Post[];
};

const List: React.FunctionComponent<Props> = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
);

export default List;
