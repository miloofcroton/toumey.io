/** @jsx jsx */
import { jsx } from '@emotion/core';
// import React from 'react';
import { siteMeta } from '../../../../site.config';

const Profile = () => (
  <div css={{
    label: 'profile',
    display: 'flex',
    alignItems: 'center',
    padding: '1em',
    backgroundColor: '#eee',
  }}>
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

    <div>
      <p>
        Hi, I'm{' '}
        <a href={siteMeta.siteUrl} rel="me">
          {siteMeta.author}
        </a>
      </p>
      <p css={{
        label: 'profile-note',
        marginBottom: 0,
      }}>
        I'm a software developer &amp; functional programming enthusiast.
      </p>
    </div>
  </div>
);

export default Profile;
