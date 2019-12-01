import React from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';
import { siteMeta } from '../../../../../site.config';

const defaultTitle = siteMeta.title;
const defaultSiteUrl = siteMeta.siteUrl;
const defaultDescription = siteMeta.description;
const defaultImage = siteMeta.image;

interface HeadProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

const Head: React.SFC<HeadProps> = ({
  title,
  description,
  url,
  image,
}): JSX.Element => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>
      {title ? `${defaultTitle} | ${title}` : defaultTitle}
    </title>
    <link rel="icon" href="/favicon.ico" />

    <meta
      name="description"
      content={description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    {/* <link
      rel="alternate"
      title="RSS Feed"
      type="application/json"
      href={`${defaultSiteUrl}/feed.json`}
    /> */}

    <meta property="og:type" content="business.business" />
    <meta property="og:title" content={title || defaultTitle} />
    <meta property="og:url" content={url || defaultSiteUrl} />
    <meta
      property="og:description"
      content={description || defaultDescription}
    />
    <meta name="twitter:site" content={url || defaultSiteUrl} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:image"
      content={`${defaultSiteUrl}${image || defaultImage}`}
    />
    <meta
      property="og:image"
      content={`${defaultSiteUrl}${image || defaultImage}`}
    />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
);

export default Head;
