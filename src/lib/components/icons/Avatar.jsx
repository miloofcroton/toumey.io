import React from 'react';
import { siteMeta } from '../../../../site.config';

const Avatar = () => (
  <img
    css={{
      label: 'user-photo',
      width: '5em',
      height: '5em',
      marginRight: '0.5em',
    }}
    src="/static/me/avatar.png"
    alt={siteMeta.author}
  />
);

export default Avatar;
