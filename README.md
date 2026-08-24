# Misty

[![Status: experimental](https://img.shields.io/badge/status-experimental-f59e0b)](#status)
[![Checks](https://github.com/jacobbabula/misty-0.6b-tutor/actions/workflows/verify.yml/badge.svg)](https://github.com/jacobbabula/misty-0.6b-tutor/actions/workflows/verify.yml)

Misty is the browser-local tutor I built for Bailiwick Languages.

This repository is a public record of that integration.

## What I built

- local inference in a browser worker, with hardware acceleration when available;
- bounded, answer-free lesson context;
- privacy, safety, answer-leak, and audience checks around every reply;
- fail-closed behavior when a response is rejected or the model is unavailable;
- a hard boundary between tutor text and deterministic learning state.

```mermaid
flowchart LR
  R[Learner request] --> P[Safety checks]
  P --> C[Bounded lesson context]
  C --> M[Browser-local model]
  M --> O[Output checks]
  O --> U[Optional tutor reply]
  U -. no grading authority .-> D[Learning engine]
```

## Evidence

The tested private release recorded 137/137 AI contract checks and one authenticated browser acceptance using the cached local model. That proves the tested integration path, not general teaching quality or readiness for unrestricted child use.

Public documentation: [model card](MODEL_CARD.md) · [evaluation record](EVALUATIONS.md) · [limitations](LIMITATIONS.md) · [dataset boundary](DATASET_CARD.md)

## Run the public checks

```bash
git clone https://github.com/jacobbabula/misty-0.6b-tutor.git
cd misty-0.6b-tutor
npm test
```

These checks validate the public documentation. They do not run the private model integration.

## Status

Experimental and in development. Device support, memory use, speed, and response quality vary. Misty is not trusted with grading, placement, authorization, or publishing.
