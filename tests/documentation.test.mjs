import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const root = new URL('../', import.meta.url);
const publicDocs = [
  'README.md',
  'MODEL_CARD.md',
  'DATASET_CARD.md',
  'EVALUATIONS.md',
  'LIMITATIONS.md',
  'docs/DIAGNOSTIC_SPECIALIST.md',
  'samples/contract-examples.md',
];

test('README is a concise integration showcase with current links', async () => {
  const readme = await readFile(new URL('README.md', root), 'utf8');
  assert.match(readme, /What I built/);
  assert.match(readme, /browser-local model/i);
  assert.match(readme, /github\.com\/jacobbabula\/misty-0\.6b-tutor\/actions\/workflows\/verify\.yml/);
  assert.match(readme, /git clone https:\/\/github\.com\/jacobbabula\/misty-0\.6b-tutor\.git/);
  assert.ok(readme.split(/\r?\n/).length < 70, 'README should stay concise');
});

test('public documentation omits the exact model identity', async () => {
  for (const file of publicDocs) {
    const content = await readFile(new URL(file, root), 'utf8');
    assert.doesNotMatch(content, /Qwen|onnx-community/i, file);
  }
});

test('documentation includes substantive transparency files', async () => {
  for (const file of ['MODEL_CARD.md', 'DATASET_CARD.md', 'EVALUATIONS.md', 'LIMITATIONS.md', 'samples/contract-examples.md']) {
    const content = await readFile(new URL(file, root), 'utf8');
    assert.ok(content.length > 300, `${file} should be substantive`);
  }
});

test('public materials contain no private deployment identifiers or secrets', async () => {
  for (const file of publicDocs) {
    const content = await readFile(new URL(file, root), 'utf8');
    assert.doesNotMatch(content, /supabase\.co|service_role|anon_key/i, file);
  }
});
