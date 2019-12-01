import micro from 'micro';
import { NextApiRequest, NextApiResponse } from 'next';

export default micro((req: NextApiRequest, res: NextApiResponse) => {
  console.log('running!!!!')
  res.status(200).json("hello world")
});
