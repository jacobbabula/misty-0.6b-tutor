# Separate diagnostic specialist

The diagnostic specialist is separate from Misty's language model. It is a compact deterministic text classifier built to identify six observable support categories from short synthetic learner statements.

## Method

- Synthetic generator with versioned template families
- 192 training examples and 72 held-out examples
- Word, bigram, and character features
- Smoothed class scoring with an abstention threshold
- Deterministic evaluation and artifact hashing

## Authority

Predictions are advisory. The classifier cannot submit answers, update mastery, unlock a lesson, create an assignment, promote itself, or ingest learner content without a separate approved process.

## Result

97.2% accuracy and 100% coverage on the 72-example held-out synthetic suite, with zero critical failures. This is not evidence of production efficacy or fairness with real learners.

