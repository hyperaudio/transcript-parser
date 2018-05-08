const transcriptParser = require(`../`);

// const html = require(`./H6ZcHSkET3eXppEpWirw6g.json`).content;
// const html = require(`./rojWGnK_Q0-xd9WRuPP04A`).content;
const html = require(`./Cni8eq1dRoenxnyJ3TcXog.json`).content;

transcriptParser(html).then(converted => {
  console.log(JSON.stringify(converted, null, 2));
});
