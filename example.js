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
