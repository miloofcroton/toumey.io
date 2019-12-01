import { NextApiRequest, NextApiResponse } from 'next';
import { mockItems } from '../../../services/items/data/mocks'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  try {
    res.status(200).json(mockItems.find((item) => item.id === id));
  }
  catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};
