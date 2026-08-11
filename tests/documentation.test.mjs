import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const root = new URL('../', import.meta.url);

test('model card states the base and does not claim fine-tuning', async () => {
  const readme = await readFile(new URL('README.md', root), 'utf8');
  assert.match(readme, /onnx-community\/Qwen3-0\.6B-ONNX/);
  assert.match(readme, /Fine-tuning \| \*\*None/);
  assert.match(readme, /not trained or fine-tuned/i);
});

test('documentation includes required transparency sections', async () => {
  for (const file of ['MODEL_CARD.md', 'DATASET_CARD.md', 'EVALUATIONS.md', 'LIMITATIONS.md', 'samples/contract-examples.md']) {
    const content = await readFile(new URL(file, root), 'utf8');
    assert.ok(content.length > 300, `${file} should be substantive`);
  }
});

test('public materials contain no private deployment identifiers or secrets', async () => {
  const files = ['README.md', 'MODEL_CARD.md', 'DATASET_CARD.md', 'EVALUATIONS.md', 'LIMITATIONS.md'];
  for (const file of files) {
    const content = await readFile(new URL(file, root), 'utf8');
    assert.doesNotMatch(content, /supabase\.co|service_role|anon_key/i, file);
  }
});
