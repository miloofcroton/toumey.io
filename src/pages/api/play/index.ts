import { NextApiRequest, NextApiResponse } from 'next';
import { mockPosts } from '../../../services/play/data/mocks';

// import html from 'remark-html';
import { fetchMd, fetchJson, fetchRaw } from '../../../lib/data/fetch';
import { parseMd } from '../../../lib/data/remark';

import fs from 'fs';

export default async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const files = fs.readdirSync(`${process.env.ROOT}/public/static/play/posts`);

    const allPosts = files.map((file) => {
      const item = fs.readFileSync(`${process.env.ROOT}/public/static/play/posts/${file}`);
      return parseMd(item);
    });

    res.status(200).json(allPosts);
  }
  catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};
