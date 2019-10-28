import { NextApiRequest, NextApiResponse } from 'next';
import { fetchMd } from '../../../lib/data/fetch';
import { parseMd } from '../../../lib/data/remark';

import fs from 'fs';
import path from 'path';


export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;

    const item = fs.readFileSync(`${process.env.ROOT}/public/static/play/posts/${id}.md`);

    const parsedItem = parseMd(item);

    if (!parsedItem) throw new Error('Cannot find user');

    res.status(200).json(parsedItem);
  }
  catch (err) {
    res.status(404).json({ statusCode: 404, message: err.message });
  }
};


/*

this works via http. I think using fs is better though.

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;

    const item = await fetchMd(`http://localhost:${process.env.PORT}/static/play/posts/${id}.md`);

    const parsedItem = parseMd(item);

    if (!parsedItem) throw new Error('Cannot find user');

    res.status(200).send(parsedItem);
  }
  catch (err) {
    res.status(404).json({ statusCode: 404, message: err.message });
  }
};
*/
