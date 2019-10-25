/** @jsx jsx */
import { jsx } from '@emotion/core';
// import React from 'react';
import IconCard from './IconCard';
import {
  faAddressBook,
  faEnvelope,
  faKey,
  faRss,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const details = [
  {
    name: 'Business Card',
    icon: faAddressBook,
    href: '/static/contact/contact.vcf',
  },
  {
    name: 'Email',
    icon: faEnvelope,
    href: 'mailto:jack@toumey.io',
  },
  {
    name: 'Github Profile',
    icon: faGithub,
    href: 'https://github.com/miloofcroton',
  },
  {
    name: 'Public Key',
    icon: faKey,
    href: '/static/contact/public.key',
  },
  {
    name: 'RSS',
    icon: faRss,
    href: '/feed.json',
  },
];

const IconList = () => {
  const icons = details.map((detail) => (
    <IconCard key={detail.name} detail={detail} />
  ));

  return <ul css={{ padding: 0 }}>{icons}</ul>;
};

export default IconList;
