import prettier from 'prettier';

const defaults = {
  parser: 'babel',
  singleQuote: true,
  trailingComma: 'es5',
};

export default async function PRETTIER({
  content: originalContent,
  options: _options = {},
}) {
  const options = Object.assign({}, defaults, _options);

  const content = originalContent
    .trim()
    .split('\n')
    .map((s) => s.trim());

  const codeblockStart = content.findIndex(
    (line) => line === '```' || line === '```js',
  );

  if (codeblockStart === -1 || codeblockStart === content.length - 1)
    return originalContent;

  let codeblockEnd = content.lastIndexOf('```');

  if (codeblockEnd === -1 || codeblockEnd === codeblockStart) {
    codeblockEnd = content.length;
  }

  const code = content.slice(codeblockStart + 1, codeblockEnd).join('\n');

  const formatted = await prettier.format(code, options);

  return ['```js', formatted.trim(), '```'].join('\n');
}
