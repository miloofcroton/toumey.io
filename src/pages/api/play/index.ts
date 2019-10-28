import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import { parseMd } from '../../../lib/data/remark';

export default async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    // const files = fs.readdirSync(`${process.env.ROOT}/public/static/play/posts`);
    const files = fs.readdirSync(`${process.env.ROOT}/src/assets/play/posts`);

    const allPosts = files.map((file) => {
      // const item = fs.readFileSync(`${process.env.ROOT}/public/static/play/posts/${file}`);
      const item = fs.readFileSync(`${process.env.ROOT}/src/assets/play/posts/${file}`);
      return parseMd(item);
    });

    res.status(200).json(allPosts);
  }
  catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};
