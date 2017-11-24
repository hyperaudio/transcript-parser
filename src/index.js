import htmlparser from 'htmlparser2';

export default (html, offsets = false, digits = 2) => new Promise((resolve, reject) => {
  const json = {
    words: [],
    paragraphs: [],
    speakers: [],
  };

  if (offsets) json.transcript = ``;

  let currentWord = {};
  let currentParagraph;

  const parser = new htmlparser.Parser({
    onopentag: (name, attrs) => {
      const word = {};

      if (name === `p`) {
        currentParagraph = {};
        if (offsets) currentParagraph.startOffset = json.transcript.length;
        json.paragraphs.push(currentParagraph);

        if (attrs[`data-tc`]) {
          const [hh, mm, ss] = attrs[`data-tc`].split(`:`);
          currentParagraph.start = parseInt(hh) * 3600 + parseInt(mm) * 60 + parseInt(ss);
        }
      }

      if (attrs[`data-m`]) {
        word.start = parseInt(attrs[`data-m`]) / 1e3;
        if (attrs[`data-d`]) word.end = word.start + (parseInt(attrs[`data-d`]) / 1e3);
      }

      if (attrs[`data-t`]) {
        const [start, duration] = attrs[`data-t`].split(`,`);
        word.start = parseFloat(start);
        if (!isNaN(parseFloat(duration))) word.end = word.start + parseFloat(duration);
      }

      if (attrs[`class`] && attrs[`class`] === `speaker`) {
        word.speaker = true;
      }

      if (word.start) word.start = parseFloat(word.start.toFixed(digits));
      if (word.end) word.end = parseFloat(word.end.toFixed(digits));

      if (currentParagraph) {
        if (!currentParagraph.start && word.start) {
          currentParagraph.start = word.start;
        }
        if (word.end) currentParagraph.end = word.end;
      }

      json.words.push(word);
      currentWord = word;
    },

    ontext: text => {
      const word = currentWord;

      if (word.speaker) {
        currentParagraph.speaker = text.trim().replace(/[:|\[|\]]/g, ``);
        if (!json.speakers.includes(currentParagraph.speaker)) json.speakers.push(currentParagraph.speaker);
      }

      word.text = text.trim();

      if (offsets) {
        word.startOffset = json.transcript.length;
        json.transcript += text;
        word.endOffset = json.transcript.length;
      }

      if (json.words.length === 0 || word !== json.words[json.words.length - 1]) json.words.push(word);
    },

    onclosetag: name => {
      if (name === `p`) {
        if (offsets) currentParagraph.endOffset = json.transcript.length;
        currentParagraph = null;
      }
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
