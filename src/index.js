import htmlparser from 'htmlparser2';

const parse = html => new Promise((resolve, reject) => {
  const json = {
    transcript: ``,
    words: [{}],
    paragraphs: [],
  };

  const stack = [];

  const parser = new htmlparser.Parser({
    onopentag: (name, attrs) => {
      const word = {
        tag: name
      };

      if (attrs[`data-m`]) {
        word.start = parseInt(attrs[`data-m`]) / 1e3;
        if (attrs[`data-d`]) word.end = word.start + parseInt(attrs[`data-d`]) / 1e3;
      }

      json.words.push(word);
      stack.push({name, attrs});
    },

    ontext: text => {
      const word = json.words[json.words.length - 1];

      if (word.text) {
        word.text += text;
      } else word.text = text;

      if (!word.startOffset) word.startOffset = json.transcript.length;
      json.transcript += text;
      word.endOffset = json.transcript.length;
    },

    // onclosetag: name => {
    // },

    onend: () => resolve(json),
    onerror: error => reject(error)
  }, {
    decodeEntities: true,
    lowerCaseTags: true,
    lowerCaseAttributeNames: true,
    recognizeSelfClosing: true,
  });

  parser.write(html);
  parser.end();
});

export default html => {
  return parse(html);
};
