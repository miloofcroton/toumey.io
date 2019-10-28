import React from 'react';
import ListItem from './Item';
import { PostResponse } from '../../../../services/play/data/types';

type Props = {
  items: PostResponse[];
};

const List: React.FunctionComponent<Props> = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item.frontmatter.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
);

export default List;
