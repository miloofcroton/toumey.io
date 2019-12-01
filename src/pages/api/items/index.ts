import { NextApiRequest, NextApiResponse } from 'next';
import { mockItems } from '../../../services/items/data/mocks'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json(mockItems);
  }
  catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};
