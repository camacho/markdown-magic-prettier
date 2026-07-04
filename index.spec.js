import { describe, expect, it } from 'vitest';
import format from './index.js';

function wrapCode(code, header = '```js', footer = '```') {
  return [header, code, footer].join('\n');
}

describe('markdown-magic-prettier', () => {
  it('formats code blocks', async () => {
    const code = 'console.log("hello world")';
    expect(
      await format({ content: wrapCode(code), options: {} }),
    ).toMatchSnapshot();
  });

  it('returns original content if codeblock is not found', async () => {
    expect(await format({ content: 'foo bar', options: {} })).toMatchSnapshot();
    expect(await format({ content: '```', options: {} })).toMatchSnapshot();
  });

  it('adds a closing tag if it is forgotten', async () => {
    const code = 'console.log("hello world")';
    expect(
      await format({ content: wrapCode(code, '```', ''), options: {} }),
    ).toMatchSnapshot();
  });
});
