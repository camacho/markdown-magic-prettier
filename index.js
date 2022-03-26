const prettier = require('prettier');

const defaults = {
  singleQuote: true,
  trailingComma: 'es5',
};

module.exports = function PRETTIER(originalContent, _options = {}, config) {
  const options = Object.assign({}, defaults, _options);

  const content = originalContent
    .trim()
    .split('\n')
    .map((s) => s.trim());

  const codeblockStart = content.findIndex(
    (line) => line === '```' || line === '```js'
  );

  if (codeblockStart === -1 || codeblockStart === content.length - 1)
    return originalContent;

  let codeblockEnd = content.lastIndexOf('```');

  if (codeblockEnd === -1 || codeblockEnd === codeblockStart) {
    codeblockEnd = content.length;
  }

  const code = content.slice(codeblockStart + 1, codeblockEnd).join('\n');

  return ['```js', prettier.format(code, options).trim(), '```'].join('\n');
};
