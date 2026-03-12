import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import './EnterpriseLLMSolutions.css'

const EnterpriseLLMSolutions: FC = () => {
  const navigate = useNavigate()

  return (
    <div className="enterprise-llm-page">
      <header className="enterprise-llm-header">
        <div className="enterprise-llm-header-content">
          <h1 className="enterprise-llm-header-title">Enterprise LLM & Generative AI Solutions</h1>
          <p className="enterprise-llm-header-subtitle">
            Custom large language model solutions engineered for business transformation.
          </p>
        </div>
      </header>

      <div className="enterprise-llm-main-layout">
        <main className="enterprise-llm-content">
          <section id="offerings" className="enterprise-llm-content-section">
            <h2 className="enterprise-llm-section-title">Our LLM Service Offerings</h2>
            <div className="enterprise-llm-capabilities-grid">
              <div className="enterprise-llm-capability-card">
                <div className="enterprise-llm-capability-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L4 7V17L12 21L20 17V7L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="enterprise-llm-capability-title">Custom LLM Development</h3>
                <p className="enterprise-llm-capability-description">
                  Design and build large language models shaped around your data, workflows, and governance requirements.
                </p>
              </div>

              <div className="enterprise-llm-capability-card">
                <div className="enterprise-llm-capability-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 7H20M4 12H14M4 17H11M17 11L20 14L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="enterprise-llm-capability-title">Fine-Tuning & Domain Adaptation</h3>
                <p className="enterprise-llm-capability-description">
                  Adapt foundation models to specialized terminology, processes, and regulatory contexts.
                </p>
              </div>

              <div className="enterprise-llm-capability-card">
                <div className="enterprise-llm-capability-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 5H20V19H4V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 9H15V15H9V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="enterprise-llm-capability-title">RAG Systems</h3>
                <p className="enterprise-llm-capability-description">
                  Implement retrieval-augmented generation pipelines that ground responses on trusted enterprise content.
                </p>
              </div>

              <div className="enterprise-llm-capability-card">
                <div className="enterprise-llm-capability-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 4H19V8H5V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 10H13V20H5V10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 10H19V14H15V10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="enterprise-llm-capability-title">AI Chatbots & Virtual Assistants</h3>
                <h3 className="enterprise-llm-capability-title">Document Intelligence & Automation</h3>
                <p className="enterprise-llm-capability-description">
                  Automate extraction, summarization, and drafting across high-volume document workflows.
                </p>
              </div>

              <div className="enterprise-llm-capability-card">
                <div className="enterprise-llm-capability-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 5H20V19H4V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 9H15V15H9V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="enterprise-llm-capability-title">Secure On-Prem Deployment</h3>
                <p className="enterprise-llm-capability-description">
                  Run LLM workloads within your own infrastructure, aligned with security and data residency policies.
                </p>
              </div>

              <div className="enterprise-llm-capability-card">
                <div className="enterprise-llm-capability-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11 6L7 10L11 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 19H13C16.866 19 20 15.866 20 12C20 8.13401 16.866 5 13 5H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="enterprise-llm-capability-title">LLM Evaluation & Guardrails</h3>
                <p className="enterprise-llm-capability-description">
                  Define metrics, test harnesses, and guardrails to control quality, safety, and policy adherence.
                </p>
              </div>
            </div>
          </section>

          <section id="framework" className="enterprise-llm-content-section">
            <h2 className="enterprise-llm-section-title">Our LLM Implementation Framework</h2>
            <div className="enterprise-llm-workflow-steps">
              <div className="enterprise-llm-workflow-step">
                <div className="enterprise-llm-step-number">1</div>
                <div className="enterprise-llm-step-content">
                  <h3 className="enterprise-llm-step-title">Business Use-Case Identification</h3>
                  <p className="enterprise-llm-step-description">
                    Work with stakeholders to prioritise high-value, high-feasibility LLM use-cases grounded in business objectives.
                  </p>
                </div>
              </div>

              <div className="enterprise-llm-workflow-arrow">→</div>

              <div className="enterprise-llm-workflow-step">
                <div className="enterprise-llm-step-number">2</div>
                <div className="enterprise-llm-step-content">
                  <h3 className="enterprise-llm-step-title">Model Selection</h3>
                  <p className="enterprise-llm-step-description">
                    Evaluate open-source models and managed APIs to select the right fit for performance, control, and cost.
                  </p>
                </div>
              </div>

              <div className="enterprise-llm-workflow-arrow">→</div>

              <div className="enterprise-llm-workflow-step">
                <div className="enterprise-llm-step-number">3</div>
                <div className="enterprise-llm-step-content">
                  <h3 className="enterprise-llm-step-title">Fine-Tuning & Prompt Engineering</h3>
                  <p className="enterprise-llm-step-description">
                    Align LLM behaviour to your domain with curated data, prompt patterns, and evaluation datasets.
                  </p>
                </div>
              </div>

              <div className="enterprise-llm-workflow-arrow">→</div>

              <div className="enterprise-llm-workflow-step">
                <div className="enterprise-llm-step-number">4</div>
                <div className="enterprise-llm-step-content">
                  <h3 className="enterprise-llm-step-title">RAG Pipeline Design</h3>
                  <p className="enterprise-llm-step-description">
                    Architect retrieval, indexing, and context assembly flows that ground outputs on governed content sources.
                  </p>
                </div>
              </div>

              <div className="enterprise-llm-workflow-arrow">→</div>

              <div className="enterprise-llm-workflow-step">
                <div className="enterprise-llm-step-number">5</div>
                <div className="enterprise-llm-step-content">
                  <h3 className="enterprise-llm-step-title">Security & Compliance Layer</h3>
                  <p className="enterprise-llm-step-description">
                    Implement policy controls, redaction, and access enforcement across prompts, data, and responses.
                  </p>
                </div>
              </div>

              <div className="enterprise-llm-workflow-arrow">→</div>

              <div className="enterprise-llm-workflow-step">
                <div className="enterprise-llm-step-number">6</div>
                <div className="enterprise-llm-step-content">
                  <h3 className="enterprise-llm-step-title">Deployment & Optimization</h3>
                  <p className="enterprise-llm-step-description">
                    Roll out solutions with monitoring, feedback loops, and continuous improvement based on real usage.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="use-cases" className="enterprise-llm-content-section">
            <h2 className="enterprise-llm-section-title">Industry Use Cases</h2>
            <div className="enterprise-llm-use-cases-grid">
              <div className="enterprise-llm-use-case-card">
                <div className="enterprise-llm-use-case-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 21H17M9 17V21M15 17V21M12 3L4 7V11C4 15.4183 7.58172 19 12 19C16.4183 19 20 15.4183 20 11V7L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="enterprise-llm-use-case-title">Legal</h3>
                <p className="enterprise-llm-use-case-description">
                  Drafting support, clause comparison, and knowledge retrieval across contracts, policies, and legal opinions.
                </p>
              </div>

              <div className="enterprise-llm-use-case-card">
                <div className="enterprise-llm-use-case-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21C12 21 5 17 5 10C5 8.14348 5.7375 6.36301 7.05025 5.05025C8.36301 3.7375 10.1435 3 12 3C13.8565 3 15.637 3.7375 16.9497 5.05025C18.2625 6.36301 19 8.14348 19 10C19 17 12 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="enterprise-llm-use-case-title">Pharma</h3>
                <p className="enterprise-llm-use-case-description">
                  Regulatory summarization, SOP assistance, and scientific literature navigation for R&amp;D and quality teams.
                </p>
              </div>

              <div className="enterprise-llm-use-case-card">
                <div className="enterprise-llm-use-case-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8C9.23858 8 7 10.2386 7 13C7 15.7614 9.23858 18 12 18C14.7614 18 17 15.7614 17 13C17 10.2386 14.7614 8 12 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 4H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="enterprise-llm-use-case-title">Finance</h3>
                <p className="enterprise-llm-use-case-description">
                  Portfolio commentary, research summarisation, and risk documentation generation under governed templates.
                </p>
              </div>

              <div className="enterprise-llm-use-case-card">
                <div className="enterprise-llm-use-case-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 21V19C16 16.7909 14.2091 15 12 15H7C4.79086 15 3 16.7909 3 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="enterprise-llm-use-case-title">HR & Recruitment</h3>
                <p className="enterprise-llm-use-case-description">
                  Role-aware assistants for policy queries, job description drafting, and candidate communication.
                </p>
              </div>

              <div className="enterprise-llm-use-case-card">
                <div className="enterprise-llm-use-case-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5H21V15H5L3 17V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 19H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="enterprise-llm-use-case-title">Customer Support</h3>
                <p className="enterprise-llm-use-case-description">
                  Multi-channel assistants that resolve queries, surface knowledge, and escalate cases with full context.
                </p>
              </div>

              <div className="enterprise-llm-use-case-card">
                <div className="enterprise-llm-use-case-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20V20H4V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 4V9H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="enterprise-llm-use-case-title">Government & Compliance</h3>
                <p className="enterprise-llm-use-case-description">
                  Policy summarisation, guidance drafting, and citizen communication tools with audit-ready traceability.
                </p>
              </div>
            </div>
          </section>

          <section id="governance" className="enterprise-llm-content-section">
            <h2 className="enterprise-llm-section-title">Responsible AI & Governance</h2>
            <div className="enterprise-llm-governance-grid">
              <div className="enterprise-llm-governance-card">
                <h3 className="enterprise-llm-governance-title">Bias Mitigation</h3>
                <p className="enterprise-llm-governance-description">
                  Structured evaluation pipelines to detect, document, and mitigate bias across training data and outputs.
                </p>
              </div>
              <div className="enterprise-llm-governance-card">
                <h3 className="enterprise-llm-governance-title">Data Privacy</h3>
                <p className="enterprise-llm-governance-description">
                  Privacy-aware designs with redaction, minimisation, and role-based access controls across LLM workflows.
                </p>
              </div>
              <div className="enterprise-llm-governance-card">
                <h3 className="enterprise-llm-governance-title">AI Governance</h3>
                <p className="enterprise-llm-governance-description">
                  Clear roles, policies, and approval processes that align AI deployments with enterprise risk frameworks.
                </p>
              </div>
              <div className="enterprise-llm-governance-card">
                <h3 className="enterprise-llm-governance-title">Monitoring & Observability</h3>
                <p className="enterprise-llm-governance-description">
                  Telemetry, logging, and alerting that track behaviour, performance, and policy adherence in production.
                </p>
              </div>
            </div>
          </section>

          <section id="cta" className="enterprise-llm-content-section">
            <div className="enterprise-llm-cta-card">
              <h2 className="enterprise-llm-cta-section-title">Deploy Enterprise-Grade Generative AI</h2>
              <p className="enterprise-llm-cta-subtext">
                Move from experimentation to governed, production-ready LLM solutions that create measurable business value.
              </p>
              <div className="enterprise-llm-cta-actions">
                <button
                  className="enterprise-llm-cta-button"
                  onClick={() => navigate('/enterprise-llm-demo')}
                >
                  Consult Our LLM Experts
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer className="enterprise-llm-footer">
        <div className="enterprise-llm-footer-content">
          <p className="enterprise-llm-footer-text">
            © 2026 Industry Iceberg. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default EnterpriseLLMSolutions
