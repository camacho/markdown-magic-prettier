> **📦 This package has moved.** It now lives in the [markdown-magic-plugins](https://github.com/camacho/markdown-magic-plugins) monorepo at [`packages/prettier`](https://github.com/camacho/markdown-magic-plugins/tree/main/packages/prettier). This repository is archived; issues and contributions go to the monorepo.

# markdown-magic-prettier

Use [`prettier`](https://github.com/prettier/prettier) to format JS codeblocks in markdown files via [markdown-magic](https://github.com/DavidWells/markdown-magic)

## Install

```
yarn add -D markdown-magic markdown-magic-prettier prettier
```

**Note:** [`prettier`](https://github.com/prettier/prettier) is a [peer dependency](https://docs.npmjs.com/files/package.json#peerdependencies) and must be installed separately from this module

## Adding the plugin

See `example.js` for usage.

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./example.js) -->

```js
import path from 'path';
import { markdownMagic } from 'markdown-magic';
import PRETTIER from './index.js';

const config = {
  matchWord: 'AUTO-GENERATED-CONTENT',
  transforms: {
    PRETTIER,
  },
};

const markdownPath = path.join(import.meta.dirname, 'README.md');
await markdownMagic(markdownPath, config);
```

<!-- AUTO-GENERATED-CONTENT:END *-->

## Usage in markdown

Wrap [code blocks](https://help.github.com/articles/creating-and-highlighting-code-blocks/) to format the content.

<!-- AUTO-GENERATED-CONTENT:START (PRETTIER) -->

```js
console.log('hello world');
```

<!-- AUTO-GENERATED-CONTENT:END -->

## Options

All [`prettier` options](https://github.com/prettier/prettier#options) are supported.

There are a few defaults set:
<!-- AUTO-GENERATED-CONTENT:START (PRETTIER) -->

```js
const defaults = {
  singleQuote: true,
  trailingComma: 'es5',
};
```

<!-- AUTO-GENERATED-CONTENT:END -->