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

const id = shortid.generate();

/**
 * first option is the directory under static
 */
fs.writeFile(
  `./public/static/${process.argv[2]}/posts/${id}.md`,
  template(id),
  (err) => {
    if (err) return console.log(err);
    console.log('The file was saved!');
  }
);
