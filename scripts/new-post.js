/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
const fs = require('fs');
const shortid = require('shortid');

const template = (id) => `---
id: ${id}
title: your title here
description: your description here
tags:
  - first_tag
  - second_tag
---

Post body here
`;

/**
 * first option is the directory under static
 * second option is the name of the file
 */

if (process.argv[3]) {
  fs.writeFile(
    `./public/static/${process.argv[2]}/posts/${process.argv[3]}.md`,
    template(shortid.generate()),
    (err) => {
      if (err) return console.log(err);
      console.log('The file was saved!');
    }
  );
}
else console.log('Don\'t forget to name your file!');
