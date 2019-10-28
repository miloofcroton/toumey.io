import { NextApiRequest, NextApiResponse } from 'next';
import { mockPosts } from '../../../services/play/data/mocks';

// import html from 'remark-html';
import { fetchMd } from '../../../lib/data/fetch';
import { toHtml } from '../../../lib/data/remark';

export default async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    // if (!Array.isArray(mockPosts)) {
    //   throw new Error('Cannot find post data');
    // }

    /*
      these don't work yet because __dirname === '/', but it should work in the future.

      fs.readFileSync(path.resolve(__dirname, '../../../assets/play/post1.md')),
      fs.readFileSync(path.resolve(__dirname, 'src/assets/play/post1.md')),
      fs.readFileSync('/src/assets/play/post1.md'),
      fs.readFileSync('/static/play/post1.md'),
    */

    const item = await fetchMd(
      `http://localhost:${process.env.PORT}/static/play/post1.md`,
    );

    const html = toHtml(item);

    console.log(html);

    // console.log(__dirname);
    res.status(200).json(mockPosts);
  }
  catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};
