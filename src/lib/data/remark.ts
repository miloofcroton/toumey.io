import unified from 'unified';
import parse from 'remark-parse';
import mdToHtml from 'remark-rehype';
// import doc from 'rehype-document';
// import format from 'rehype-format';
import html from 'rehype-stringify';
import frontmatter from 'remark-frontmatter';
import visit from 'unist-util-visit';
import parseFrontmatter from 'remark-parse-yaml';

const copyFrontmatter = () => (ast, file) => {
  visit(ast, 'yaml', (item) => {
    file.data.frontmatter = item.data.parsedValue;
  });
};

const removeFrontmatter = () => (tree) => tree.filter((node) => node.type !== 'yaml');

export const parseMd = (md) => {

  let res;

  unified()
    .use(parse)
    // .use(doc) // this is if you want <html>, <body>, and <head>
    // .use(format)
    .use(frontmatter, ['yaml'])
    .use(parseFrontmatter)
    .use(copyFrontmatter)
    .use(mdToHtml)
    .use(html, { quoteSmart: true })
    .process(
      md,
      (err, file: { data: any; contents: any;}) => {
        if (err) throw err;

        res = {
          frontmatter: file.data.frontmatter,
          content: String(file.contents)
        };
      }
    );

    return res;
};
