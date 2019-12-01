import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import { parseMd } from '../../../lib/data/remark';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;

    const post = fs.readFileSync(`${process.env.ROOT}/src/content/play/${id}/index.md`);

    const parsedPost = parseMd(post);

    if (!parsedPost) throw new Error('Cannot find post');

    res.status(200).json(parsedPost);
  }
  catch (err) {
    res.status(404).json({ statusCode: 404, message: err.message });
  }
};
