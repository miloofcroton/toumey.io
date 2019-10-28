import React from 'react';
import Link from 'next/link';
import { Post } from '../../../../services/play/data/types';

type Props = {
  data: Post;
};

const ListItem: React.FunctionComponent<Props> = ({ data }) => (
  <Link href="/play/[id]" as={`/play/${data.id}`}>
    <a>
      {data.id}: {data.title}
    </a>
  </Link>
);

export default ListItem;
