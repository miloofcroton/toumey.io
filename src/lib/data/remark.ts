import unified from 'unified';
import parse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import doc from 'rehype-document';
import format from 'rehype-format';
import stringify from 'rehype-stringify';
import frontmatter from 'remark-frontmatter';

export const toHtml = (md) => {

  let res;

  unified()
    .use(parse)
    .use(remark2rehype)
    // .use(doc) // this is if you want <html>, <body>, and <head>
    .use(format)
    .use(stringify, { quoteSmart: true })
    .use(frontmatter, ['yaml'])
    .process(
      md,
      (err, file) => {
        if (err) throw err;

        res = String(file);
      }
    );

    return res;
};
