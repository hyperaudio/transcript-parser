const haJson = require(`../`);

// const html = require(`./H6ZcHSkET3eXppEpWirw6g.json`).content;
const html = require(`./rojWGnK_Q0-xd9WRuPP04A`).content;

haJson(html).then(json => {
  console.log(JSON.stringify(json, null, 2));
});
