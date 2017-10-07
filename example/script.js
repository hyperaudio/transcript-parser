const haJson = require(`../`);
const html = require(`./H6ZcHSkET3eXppEpWirw6g.json`).content;

haJson(html).then(json => {
  console.log(JSON.stringify(json, null, 2));
});
