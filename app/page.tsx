"use client";

import { useState } from "react";

const agents = [
  { icon: "P", name: "Planner", detail: "Decomposed the decision", time: "0.4s" },
  { icon: "R", name: "Researcher", detail: "Scanned 24 sources", time: "3.1s" },
  { icon: "C", name: "Challenger", detail: "Found 3 weak claims", time: "1.2s" },
  { icon: "S", name: "Synthesizer", detail: "Built recommendation", time: "0.8s" },
];

const sources = [
  { score: "96", title: "IEA — Renewables 2025", type: "Primary" },
  { score: "91", title: "EU Energy Outlook", type: "Primary" },
  { score: "84", title: "McKinsey grid analysis", type: "Secondary" },
];

export default function Home() {
  const [question, setQuestion] = useState(
    "Should a European logistics company electrify 40% of its fleet by 2028?",
  );
  const [hasRun, setHasRun] = useState(true);
  const [activeTab, setActiveTab] = useState<"brief" | "trace">("brief");

  function runResearch() {
    if (!question.trim()) return;
    setHasRun(false);
    window.setTimeout(() => setHasRun(true), 650);
  }

  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Northstar home">
          <span className="brand-mark">N</span>
          <span>northstar</span>
        </a>
        <div className="nav-links">
          <a href="#system">System</a>
          <a href="#evaluations">Evaluations</a>
          <a href="#architecture">Architecture</a>
        </div>
        <a className="nav-cta" href="#demo">
          Explore demo <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" /> Agentic decision intelligence
          </div>
          <h1>
            Research that
            <br />
            <span>argues back.</span>
          </h1>
          <p className="hero-lede">
            Northstar deploys a team of AI agents to investigate complex
            questions, challenge weak evidence, and deliver decisions you can
            defend.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#demo">
              Run a research sprint <span>→</span>
            </a>
            <a className="text-link" href="#architecture">
              See how it works
            </a>
          </div>
          <div className="proof-row">
            <div>
              <strong>24</strong>
              <span>sources analyzed</span>
            </div>
            <div>
              <strong>4</strong>
              <span>specialist agents</span>
            </div>
            <div>
              <strong>92%</strong>
              <span>citation precision</span>
            </div>
          </div>
        </div>

        <div className="hero-console" aria-label="Northstar live agent console">
          <div className="console-topbar">
            <div className="window-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <span>RUN #NS-042</span>
            <span className="live-pill">LIVE</span>
          </div>
          <div className="console-question">
            <span>RESEARCH QUESTION</span>
            <p>{question || "Enter a question below to begin."}</p>
          </div>
          <div className="agent-list">
            {agents.map((agent, index) => (
              <div
                className={`agent-row ${hasRun ? "complete" : "working"}`}
                key={agent.name}
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <span className="agent-icon">{agent.icon}</span>
                <div>
                  <strong>{agent.name}</strong>
                  <span>
                    {hasRun ? agent.detail : "Working through evidence…"}
                  </span>
                </div>
                <time>{hasRun ? agent.time : "•••"}</time>
                <i aria-label={hasRun ? "Complete" : "In progress"}>
                  {hasRun ? "✓" : ""}
                </i>
              </div>
            ))}
          </div>
          <div className="confidence">
            <div>
              <span>Decision confidence</span>
              <strong>{hasRun ? "87%" : "—"}</strong>
            </div>
            <div className="confidence-bar">
              <i style={{ width: hasRun ? "87%" : "12%" }} />
            </div>
            <p>
              {hasRun
                ? "High evidence agreement · 2 assumptions flagged"
                : "Validating source agreement…"}
            </p>
          </div>
        </div>
      </section>

      <section className="demo-section" id="demo">
        <div className="shell">
          <div className="section-heading">
            <div>
              <span className="section-number">01 / LIVE SYSTEM</span>
              <h2>Give it a decision.<br />Watch it build the case.</h2>
            </div>
            <p>
              Every claim is traceable. Every recommendation includes the
              strongest counterargument.
            </p>
          </div>

          <div className="workspace">
            <aside className="workspace-sidebar">
              <div className="new-run">+ &nbsp; New research sprint</div>
              <span className="side-label">RECENT RUNS</span>
              <button className="run-item active">
                <i /> Fleet electrification
                <span>87%</span>
              </button>
              <button className="run-item">
                <i /> Nordic market entry
                <span>79%</span>
              </button>
              <button className="run-item">
                <i /> AI support rollout
                <span>91%</span>
              </button>
              <div className="sidebar-bottom">
                <span>7 / 10 runs this month</span>
                <div><i /></div>
              </div>
            </aside>

            <div className="workspace-main">
              <div className="question-box">
                <label htmlFor="research-question">DECISION TO INVESTIGATE</label>
                <textarea
                  id="research-question"
                  value={question}
                  onChange={(event) => setQuestion(event.target.value)}
                  rows={2}
                />
                <div>
                  <span>Depth: Comprehensive</span>
                  <button onClick={runResearch} disabled={!question.trim()}>
                    {hasRun ? "Run research" : "Agents working…"} <b>→</b>
                  </button>
                </div>
              </div>

              <div className="result-tabs">
                <button
                  className={activeTab === "brief" ? "active" : ""}
                  onClick={() => setActiveTab("brief")}
                >
                  Decision brief
                </button>
                <button
                  className={activeTab === "trace" ? "active" : ""}
                  onClick={() => setActiveTab("trace")}
                >
                  Agent trace
                </button>
              </div>

              {activeTab === "brief" ? (
                <div className={`brief ${hasRun ? "" : "loading"}`}>
                  <div className="recommendation">
                    <span className="rec-icon">↗</span>
                    <div>
                      <span>RECOMMENDATION</span>
                      <h3>Proceed — with a phased 25% commitment first.</h3>
                      <p>
                        Economics are favorable for high-utilization urban
                        routes, but grid access and residual-value uncertainty
                        make a full 40% commitment premature.
                      </p>
                    </div>
                    <div className="score-ring">
                      <strong>87</strong>
                      <span>CONFIDENCE</span>
                    </div>
                  </div>

                  <div className="brief-grid">
                    <div>
                      <span className="brief-label">WHY THIS WINS</span>
                      <ul className="evidence-list">
                        <li>
                          <b>01</b>
                          <div>
                            <strong>TCO breaks even in 3.8 years</strong>
                            <span>
                              For routes above 180 km/day, energy and
                              maintenance savings offset capex.
                            </span>
                          </div>
                        </li>
                        <li>
                          <b>02</b>
                          <div>
                            <strong>Regulation rewards early movers</strong>
                            <span>
                              EU road-toll exemptions improve the base case by
                              6–9%.
                            </span>
                          </div>
                        </li>
                        <li>
                          <b>03</b>
                          <div>
                            <strong>Customer demand is measurable</strong>
                            <span>
                              61% of enterprise shippers now score logistics
                              emissions.
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="counterpoint">
                      <span className="brief-label">STRONGEST COUNTERARGUMENT</span>
                      <blockquote>
                        “Depot grid upgrades can take 18–30 months, putting the
                        2028 target at risk before a single vehicle arrives.”
                      </blockquote>
                      <div className="mitigation">
                        <span>MITIGATION</span>
                        Secure grid studies at the first three depots before
                        vehicle procurement.
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="trace-panel">
                  {agents.map((agent, index) => (
                    <div key={agent.name}>
                      <span>0{index + 1}</span>
                      <i>{agent.icon}</i>
                      <section>
                        <strong>{agent.name}</strong>
                        <p>
                          {index === 0 &&
                            "Split the problem into unit economics, infrastructure, regulation, and customer demand."}
                          {index === 1 &&
                            "Searched primary reports and recent market analyses; retained 24 of 41 candidates."}
                          {index === 2 &&
                            "Stress-tested causal claims, recency, independence, and downside assumptions."}
                          {index === 3 &&
                            "Weighted the evidence and generated a phased recommendation with explicit triggers."}
                        </p>
                      </section>
                      <b>✓</b>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <aside className="sources-panel">
              <span className="side-label">SOURCE QUALITY</span>
              <div className="source-score">
                <strong>92</strong>
                <span>/ 100</span>
                <p>Excellent coverage</p>
              </div>
              <div className="score-bars">
                <label>Authority <i style={{ width: "94%" }} /></label>
                <label>Recency <i style={{ width: "88%" }} /></label>
                <label>Independence <i style={{ width: "91%" }} /></label>
              </div>
              <span className="side-label sources-title">TOP SOURCES</span>
              {sources.map((source) => (
                <div className="source-card" key={source.title}>
                  <b>{source.score}</b>
                  <div>
                    <strong>{source.title}</strong>
                    <span>{source.type} · 2025</span>
                  </div>
                  <i>↗</i>
                </div>
              ))}
              <button className="view-sources">View all 24 sources →</button>
            </aside>
          </div>
        </div>
      </section>

      <section className="system-section shell" id="system">
        <div className="section-heading light">
          <div>
            <span className="section-number">02 / WHY IT&apos;S DIFFERENT</span>
            <h2>Built to earn trust,<br />not just sound confident.</h2>
          </div>
        </div>
        <div className="feature-grid">
          <article>
            <span className="feature-index">01</span>
            <div className="feature-visual debate">
              <span>RESEARCHER</span>
              <i />
              <span>CHALLENGER</span>
            </div>
            <h3>Adversarial by design</h3>
            <p>
              A dedicated challenger agent searches for counterevidence before
              any recommendation ships.
            </p>
          </article>
          <article>
            <span className="feature-index">02</span>
            <div className="feature-visual provenance">
              <span>CLAIM</span><i>→</i><span>SOURCE</span><i>→</i><span>PASSAGE</span>
            </div>
            <h3>Claim-level provenance</h3>
            <p>
              Citations connect each conclusion to the exact passage that
              supports it, not merely a list of links.
            </p>
          </article>
          <article>
            <span className="feature-index">03</span>
            <div className="feature-visual gate">
              <span>87%</span>
              <div><i /></div>
              <b>HUMAN GATE</b>
            </div>
            <h3>Confidence with guardrails</h3>
            <p>
              Low-agreement findings are flagged for human review instead of
              being hidden behind fluent prose.
            </p>
          </article>
        </div>
      </section>

      <section className="eval-section" id="evaluations">
        <div className="shell eval-layout">
          <div>
            <span className="section-number">03 / EVALUATIONS</span>
            <h2>Measured where<br />agents usually fail.</h2>
            <p>
              A repeatable evaluation harness tests retrieval, citation
              fidelity, contradiction handling, and decision calibration on
              every release.
            </p>
          </div>
          <div className="eval-table">
            <div className="eval-head">
              <span>EVALUATION</span><span>SCORE</span><span>TARGET</span>
            </div>
            {[
              ["Citation precision", "92%", "≥ 90%", "96%"],
              ["Source recall", "88%", "≥ 85%", "88%"],
              ["Contradiction detection", "94%", "≥ 90%", "94%"],
              ["Calibration error", "0.07", "≤ 0.10", "90%"],
            ].map(([name, score, target, width]) => (
              <div className="eval-row" key={name}>
                <span>{name}</span>
                <strong>{score}</strong>
                <span>{target}</span>
                <i><b style={{ width }} /></i>
              </div>
            ))}
            <div className="eval-foot">
              <span className="status-dot" /> LAST RUN PASSED · 120 TEST CASES
              <time>2m 14s</time>
            </div>
          </div>
        </div>
      </section>

      <section className="architecture shell" id="architecture">
        <div className="section-heading light">
          <div>
            <span className="section-number">04 / UNDER THE HOOD</span>
            <h2>Production-minded<br />from day one.</h2>
          </div>
          <p>
            Designed as an inspectable system with bounded agents, typed
            handoffs, and observable runs.
          </p>
        </div>
        <div className="architecture-map" aria-label="System architecture">
          <div className="arch-column">
            <span>INPUT</span>
            <b>Research brief</b>
          </div>
          <i>→</i>
          <div className="arch-core">
            <span>ORCHESTRATOR</span>
            <strong>State graph</strong>
            <div>
              <b>PLAN</b><b>RESEARCH</b><b>CHALLENGE</b><b>SYNTHESIZE</b>
            </div>
          </div>
          <i>→</i>
          <div className="arch-column">
            <span>OUTPUT</span>
            <b>Decision brief</b>
          </div>
        </div>
        <div className="stack">
          {["Python", "FastAPI", "LangGraph", "OpenAI", "Postgres", "OpenTelemetry"].map(
            (item) => <span key={item}>{item}</span>,
          )}
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <div>
            <span className="section-number">READY TO EXPLORE?</span>
            <h2>Make your next decision<br />with the evidence in the room.</h2>
          </div>
          <a className="button primary" href="#demo">
            Launch the demo <span>↗</span>
          </a>
        </div>
        <div className="shell footer-bottom">
          <a className="brand" href="#top">
            <span className="brand-mark">N</span>
            <span>northstar</span>
          </a>
          <span>AN AGENTIC AI ENGINEERING PROJECT · 2026</span>
          <a href="#architecture">Architecture notes ↑</a>
        </div>
      </footer>
    </main>
  );
}
