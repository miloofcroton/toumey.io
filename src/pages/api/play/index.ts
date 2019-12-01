import micro from 'micro';
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import { parseMd } from '../../../lib/data/remark';

const handler = micro(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const folders = fs.readdirSync(`${process.env.ROOT}/src/content/play`);

    const allPosts = folders.map((folder) => {
      const item = fs.readFileSync(`${process.env.ROOT}/src/content/play/${folder}/index.md`);
      return parseMd(item);
    });

    res.status(200).json(allPosts);
  }
  catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
});

export default handler;
