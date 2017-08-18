const format = require('./index.js');

function wrapCode(code, header = '```js', footer = '```') {
  return [header, code, footer].join('\n');
}

describe('markdown-magic-prettier', () => {
  it('formats code blocks', () => {
    const code = 'console.log("hello world")'
    expect(format(wrapCode(code))).toMatchSnapshot();
  });

  it('returns original content if codeblock is not found', () => {
    expect(format('foo bar')).toMatchSnapshot()
    expect(format('```')).toMatchSnapshot()
  })

  it('adds a closing tag if it is forgotten', () => {
    const code = 'console.log("hello world")'
    expect(format(wrapCode(code, '```', ''))).toMatchSnapshot()
  });
})
