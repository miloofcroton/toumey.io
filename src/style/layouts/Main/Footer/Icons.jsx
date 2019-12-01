import React from 'react';
import {
  faAddressBook,
  faEnvelope,
  faKey,
  faRss,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  // {
  //   name: 'RSS',
  //   icon: faRss,
  //   href: '/feed.json',
  // },
];

const IconCard = ({ detail }) => {
  return (
    <li css={{
      display: 'inline',
      margin: 5,
      listStyle: 'none',
      fontSize: 24,
    }}>
      <a
        css={{ color: 'black' }}
        href={detail.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={detail.name}
      >
        <FontAwesomeIcon css={{ height: 24 }} icon={detail.icon} />
        <span css={{ display: 'none' }}>{detail.name}</span>
      </a>
    </li>
  );
};

const IconList = () => {
  const icons = details.map((detail) => (
    <IconCard key={detail.name} detail={detail} />
  ));

  return <ul css={{ padding: 0 }}>{icons}</ul>;
};

export default IconList;
