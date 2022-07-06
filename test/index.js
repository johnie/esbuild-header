import esbuild from 'esbuild';
import { readFile, writeFile } from 'fs/promises';
import { test } from 'uvu';
import * as assert from 'uvu/assert';
import plugin from '../index.js';

const trimResult = (result) =>
  String.fromCodePoint(...result.outputFiles[0].contents);

test('Should add basic comment', async () => {
  const result = await esbuild.build({
    entryPoints: ['test/input/basic.js'],
    plugins: [plugin()],
    write: false,
  });
  const snapshot = await readFile('test/snapshots/basic.txt', 'utf8');
  assert.equal(trimResult(result), snapshot);
});

test('Should add comment to kitchen sink example', async () => {
  const result = await esbuild.build({
    entryPoints: ['test/input/kitchensink.js'],
    plugins: [plugin()],
    write: false,
  });
  const snapshot = await readFile('test/snapshots/kitchensink.txt', 'utf8');
  assert.equal(trimResult(result), snapshot);
});

test('Should add comment to basic example with sourcemaps', async () => {
  const result = await esbuild.build({
    entryPoints: ['test/input/basic.js'],
    plugins: [plugin()],
    write: false,
    sourcemap: true,
  });
  const snapshot = await readFile(
    'test/snapshots/basic-with-sourcemaps.txt',
    'utf8'
  );
  assert.equal(trimResult(result), snapshot);
});

test.run();
