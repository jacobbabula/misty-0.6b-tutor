# Model card

## Model details

- Product name: Misty browser tutor
- Base: `onnx-community/Qwen3-0.6B-ONNX`
- Upstream family: Qwen3
- Project fine-tuning: none
- Intended execution: supported desktop/Chromebook-class browsers
- Product role: bounded language-learning guidance
- Status: experimental

## Intended uses

- Offer a short hint without revealing a graded answer.
- Ask a learner to notice a word, sound, or sentence feature.
- Explain a bounded English-Spanish language pattern.
- Respond to an explicit request to repeat or slow down content.

## Out-of-scope uses

- Grading or validating answers
- Placement, mastery, unlocks, or publication
- Mental-health or crisis counseling
- Unsupervised open-domain chat with children
- Collection of personal information
- Translation or advice where mistakes could create material harm

## Integration controls

The model receives a bounded system instruction and answer-free activity context. Input and output policy layers enforce hard privacy, crisis, answer-leak, audience, context, and state-authority constraints. A reply that remains repetitive after bounded genuine-model revision is not rendered.

The deterministic learning engine is the authority. Model unavailability or rejection does not change learner state.

## Evidence boundary

The release evidence is specific to one application commit, one runtime artifact, and the tested browser path. It does not transfer automatically to a different model build, prompt, browser, device, or product.

