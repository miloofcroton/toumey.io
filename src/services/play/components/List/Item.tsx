import React from 'react';
import Link from 'next/link';
import { PostResponse } from '../../../../services/play/data/types';

type Props = {
  data: PostResponse;
};

const ListItem: React.FunctionComponent<Props> = ({ data }) => (
  <Link href="/play/[id]" as={`/play/${data.frontmatter.id}`}>
    <a>
      {data.frontmatter.id}: {data.frontmatter.title}
    </a>
  </Link>
);

export default ListItem;
