/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { siteMeta } from '../../../../../site.config';

const Title = () => (
  <h1>{siteMeta.author}</h1>
);

export default Title;
