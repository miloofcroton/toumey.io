import { NextApiRequest, NextApiResponse } from 'next';
import { fetchMd } from '../../../lib/data/fetch';
import { parseMd } from '../../../lib/data/remark';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { slug } = req.query;

    const item = await fetchMd(`http://localhost:${process.env.PORT}/static/play/posts/${slug}.md`);

    const parsedItem = parseMd(item);

    if (!parsedItem) throw new Error('Cannot find user');

    res.status(200).send(parsedItem);
  }
  catch (err) {
    res.status(404).json({ statusCode: 404, message: err.message });
  }
};
