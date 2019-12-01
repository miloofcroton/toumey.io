import micro from 'micro';
// import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import { parseMd } from '../../../lib/data/remark';

export default micro(async (req, res) => {
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
});
