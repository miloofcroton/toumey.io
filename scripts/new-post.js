/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
const fs = require('fs');
const shortid = require('shortid');
const moment = require('moment');

const defaultTemplate = (id, title) => `---
id: ${id}
title: ${title}
description: your description here
tags:
  - first_tag
  - second_tag
---

Post body here
`;

const [,, directory, title] = process.argv;

const date = moment(Date.now()).format('YYYY-MM-DD');

const id = shortid.generate();

const dir = `./src/content/${directory}/posts/${date}-${title}.md`;

/**
 * first option is the directory under static
 * second option is the title for the post (kabob case)
 */
const createPost = (template = defaultTemplate) => {
  fs.writeFile(
    dir,
    template(id, title),
    (err) => {
      if (err) return console.log(err);
      console.log('The post was created!');
      console.log(`Visit ${dir} to continue editing.`);
    }
  );
};

const checkArgs = () => {
  if (directory == undefined) {
    console.error('Please provide a directory under /src/content to put this post!');
  }

  if (title == undefined) {
    console.error('Please provide a title for this post! Don\'t forget to use snakecase.');
  }

  if (!directory || !title) {
    return false;
  }

  if (directory && title) {
    return true;
  }
};

// This could be written better
const checkAvailNames = async () => {
  try {
    const item = fs.readFileSync(dir);
    item && console.log('This is already the title of a blog post. Please try a different title.');
    return false;
  }
  catch (err) {
    return true;
  }
};

const script = async () => {
  const hasArgs = checkArgs();
  const isAvailable = await checkAvailNames();

  if (hasArgs && isAvailable) {
    createPost();
  }
};

script();
