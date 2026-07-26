# Northstar

Northstar is an evidence-first, multi-agent research system designed to answer
high-stakes business questions with traceable claims, explicit uncertainty, and
an adversarial review step.

## Why this project is portfolio-worthy

Most AI demos optimize for fluent output. Northstar optimizes for defensibility.
It demonstrates agent orchestration, typed handoffs, retrieval, source scoring,
evaluation, observability, human approval gates, and product-level UX.

## Agent workflow

1. **Planner** — decomposes the decision into independent research tracks.
2. **Researcher** — retrieves and ranks primary and secondary evidence.
3. **Challenger** — searches for contradictions, weak claims, and hidden assumptions.
4. **Synthesizer** — produces a cited recommendation with confidence and mitigations.

## Production architecture

- Python and FastAPI API surface
- LangGraph state-machine orchestration
- OpenAI structured outputs
- Postgres for run and evidence storage
- OpenTelemetry traces for every agent handoff
- Evaluation suite covering citation precision, source recall, contradiction
  detection, and confidence calibration

The current web experience is an interactive product prototype. The next
implementation milestone is connecting the demonstrated workflow to a live,
tool-using agent backend.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.
