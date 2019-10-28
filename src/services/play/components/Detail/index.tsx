import React from 'react';
import { PostResponse } from '../../../../services/play/data/types';

type ListDetailProps = {
  item: PostResponse;
};

const ListDetail: React.FunctionComponent<ListDetailProps> = ({
  item,
}) => {

  const createMarkup = (body) => {
    return { __html: body };
  };

  return (
    <article>
      <h1>{item.frontmatter.title}</h1>
      <small>{item.frontmatter.description}</small>
      <br/>
      <br/>
      <div dangerouslySetInnerHTML={createMarkup(item.body)}/>
      <br/>
      tags: {item.frontmatter.tags.map((tag, index) => {
        return (<a key={index}>{tag}</a>);
      })}
    </article>
  );
};

export default ListDetail;
