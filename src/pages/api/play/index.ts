import { NextApiRequest, NextApiResponse } from 'next';
import { mockPosts } from '../../../services/play/data/mocks';

export default (_: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(mockPosts  )) {
      throw new Error('Cannot find post data');
    }

    res.status(200).json(mockPosts  );
  }
  catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};
