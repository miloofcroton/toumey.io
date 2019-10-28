import React from 'react';
import { Post } from '../../../../services/play/data/types';
import { faTags } from '@fortawesome/free-solid-svg-icons';

type ListDetailProps = {
  item: Post;
};

const ListDetail: React.FunctionComponent<ListDetailProps> = ({
  item: post,
}) => (
  <article>
    <h1>{post.title}</h1>
    <small>{post.description}</small>
    <br/>
    <br/>
    <div>{post.body}</div>
    <br/>
    tags: {post.tags.map((tag, index) => {
      return (<a key={index}>{tag}</a>);
    })}
  </article>
);

export default ListDetail;
