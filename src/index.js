import htmlparser from 'htmlparser2';

const parse = html => new Promise((resolve, reject) => {
  const json = {
    transcript: ``,
    words: [],
    paragraphs: [],
  };

  let currentWord = {};
  let currentParagraph;

  const parser = new htmlparser.Parser({
    onopentag: (name, attrs) => {
      const word = {
        // tag: name
      };

      if (name === `p`) {
        currentParagraph = {};
        json.paragraphs.push(currentParagraph);
      }

      if (attrs[`data-m`]) {
        word.start = parseInt(attrs[`data-m`]) / 1e3;
        if (attrs[`data-d`]) word.end = word.start + parseInt(attrs[`data-d`]) / 1e3;
      }

      if (attrs[`data-t`]) {
        const [start, duration] = attrs[`data-t`].split(`,`);
        word.start = word.end = parseFloat(start);
        if (!isNaN(parseFloat(duration))) word.end = word.start + parseFloat(duration);
      }

      if (currentParagraph) {
        if (!currentParagraph.start && word.start) {
          currentParagraph.start = currentParagraph.end = word.start;
        }
        if (word.end) currentParagraph.end = word.end;
      }

      json.words.push(word);
      currentWord = word;
    },

    ontext: text => {
      const word = currentWord;

      word.text = text.trim();

      word.startOffset = json.transcript.length;
      json.transcript += text;
      word.endOffset = json.transcript.length;

      if (json.words.length === 0 || word !== json.words[json.words.length - 1]) json.words.push(word);
    },

    onclosetag: name => {
      if (name === `p`) currentParagraph = null;
      currentWord = {};
    },

    onend: () => {
      json.words = json.words.filter(word => !!word.text);
      resolve(json);
    },

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
