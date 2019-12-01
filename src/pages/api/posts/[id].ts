import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import { parseMd } from '../../../lib/data/remark';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;

    // const item = fs.readFileSync(`${process.env.ROOT}/public/static/play/posts/${id}.md`);
    const item = fs.readFileSync(`${process.env.ROOT}/src/content/play/posts/${id}.md`);

    const parsedItem = parseMd(item);

    if (!parsedItem) throw new Error('Cannot find post');

    res.status(200).json(parsedItem);
  }
  catch (err) {
    res.status(404).json({ statusCode: 404, message: err.message });
  }
};


/*

this works via http. using fs is better because while this is fine for getting a post by id, it's much trickier to get all posts (how do you get an index for everything in static/play/posts? I don't control this api, so I don't think I can do it).

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;

    const item = await fetchMd(`http://localhost:${process.env.PORT}/static/play/posts/${id}.md`);

    const parsedItem = parseMd(item);

    if (!parsedItem) throw new Error('Cannot find post');

    res.status(200).send(parsedItem);
  }
  catch (err) {
    res.status(404).json({ statusCode: 404, message: err.message });
  }
};
*/
