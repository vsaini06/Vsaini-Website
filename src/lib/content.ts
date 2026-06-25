export const site = {
  name: "Vaibhav Saini",
  headline: "AI Engineer | Software Engineer",
  subheadline:
    "MS IT Security @ ASU · Python · Java · FastAPI · LLMs · RAG · ChromaDB · SQL · CI/CD · Docker",
  location: "Sunnyvale, CA (Open to Remote/Hybrid)",
  email: "vsaini0601@gmail.com",
  phone: "+1(623)261-0432",
  links: {
    linkedin: "https://www.linkedin.com/in/vaibhav-saini-050b30324/",
    github: "https://github.com/vsaini06",
    resume: "/resume.pdf",
  },
  keywords: [
    "Python",
    "Java",
    "FastAPI",
    "Node.js",
    "TypeScript",
    "React",
    ".NET",
    "Angular",
    "LLMs",
    "RAG",
    "LangChain",
    "AWS",
    "Azure",
    "CI/CD",
    "Docker",
    "PostgreSQL",
    "DynamoDB",
    "ChromaDB",
    "Vector Database",
    "SQL Server",
    "Redis",
    "JWT Auth",
    "OWASP",
    "LLM Routing",
    "Cost Optimization",
    "scikit-learn",
    "Ollama",
    "Anthropic",
    "OpenAI",
  ],
};

export const summary =
  "I'm an early career AI-focused Software Engineer who believes the best systems are fast, resilient, and secure; but I never stop thinking about whether something feels intuitive to the person on the other end. I'm a curious, quick learner who picks up new tools fast and goes deep when it matters, caring about latency, failure modes, and whether AI output can actually be trusted. I collaborate well across in person and remote teams, working efficiently no matter the setup. On OPT, looking for a full-time role.";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  oneLiner: string;
  description: string;
  highlights: string[];
  tech: string[];
  links: { label: string; href: string }[];
  sections: { title: string; body: string[] }[];
};

export const projects: Project[] = [
  {
    slug: "secrag-pro",
    title: "SecRAG Pro",
    subtitle: "RAG pipeline with intelligent LLM cost routing",
    oneLiner:
      "62.3% cost reduction on answer generation with 99.6% citation accuracy — two production systems integrated into one.",
    description:
      "SecRAG Pro integrates two production systems: SecRAG (hybrid RAG pipeline with citation verification) and LLM Cost Autopilot (intelligent model routing layer). Every document query is classified by complexity and routed to the cheapest capable model automatically. Simple factual lookups go to Llama 3.2 for free. Complex synthesis questions route to Claude Sonnet or GPT-4o. The system decides autonomously with no per-query configuration.",
    highlights: [
      "62.3% cost reduction on answer generation vs all-GPT-4o routing across 513 real requests",
      "99.6% citation accuracy verified by LLM-as-judge pipeline",
      "4.15/5.0 average answer quality on 48-question golden eval set",
      "RandomForest complexity classifier trained on 221 labeled prompts with 97%+ accuracy",
      "Three-tier routing: Llama 3.2 (free local), GPT-4o Mini/Claude Haiku, Claude Sonnet/GPT-4o",
      "Async GPT-4o quality verifier with auto-escalation when cheap model underperforms",
      "Hot-reloadable routing config via YAML — no server restart needed to change model assignments",
      "Full cost observability: actual cost, hypothetical all-GPT-4o cost, and savings tracked per request",
    ],
    tech: [
      "FastAPI",
      "Python",
      "scikit-learn",
      "ChromaDB",
      "Sentence-Transformers",
      "OpenAI",
      "Anthropic",
      "Ollama",
      "SQLite",
      "Streamlit",
      "React",
      "Docker",
    ],
    links: [
      { label: "SecRAG Pro", href: "https://github.com/vsaini06/SecRAG-Pro" },
      { label: "LLM Cost Autopilot", href: "https://github.com/vsaini06/llm-cost-autopilot" },
    ],
    sections: [
      {
        title: "Architecture",
        body: [
          "User question goes through hybrid BM25+semantic retrieval, cross-encoder reranking, then to the LLM Cost Autopilot router. The router classifies query complexity (Tier 1/2/3) using a RandomForest classifier and routes to the cheapest capable model. The answer comes back with inline citations that are verified by GPT-4o Mini as a judge. Every request is logged with cost, latency, quality score, and routing metadata.",
        ],
      },
      {
        title: "Cost Autopilot",
        body: [
          "Built as a standalone FastAPI service with a scikit-learn RandomForest classifier trained on 221 hand-labeled prompts across three complexity tiers. Features 12 engineered features (token count, keyword hits, scale number detection), async GPT-4o quality verification, auto-escalation when models underperform, SQLite logging, and a Streamlit dashboard. Load tested at 513 prompts with 0 failures.",
        ],
      },
      {
        title: "Results",
        body: [
          "513 requests across all tiers: GPT-4o Mini handled 41.3%, Llama 3.2 (free) handled 28.3%, GPT-4o handled 19.3%, Claude Sonnet handled 11.1%. Total cost $1.25 vs $3.33 hypothetical — $2.07 saved at 62.3% reduction.",
        ],
      },
    ],
  },
  {
    slug: "llm-cost-autopilot",
    title: "LLM Cost Autopilot",
    subtitle: "Intelligent LLM routing layer for cost reduction",
    oneLiner:
      "62.3% cost reduction on 513 real requests by routing prompts to the cheapest capable model automatically.",
    description:
      "An intelligent routing layer that sits in front of multiple LLM providers (OpenAI, Anthropic, Ollama) and routes each request to the cheapest model capable of handling it. A RandomForest classifier trained on 221 hand-labeled prompts classifies each prompt into one of three complexity tiers. An async GPT-4o quality verifier runs after returning the response and auto-escalates if a cheap model underperforms.",
    highlights: [
      "62.3% cost reduction on 513-prompt load test vs all-GPT-4o routing",
      "RandomForest classifier with 97%+ accuracy trained on 221 hand-labeled prompts across 3 tiers",
      "12 engineered features including keyword hits, scale number detection, and instruction verb count",
      "Async GPT-4o quality verifier with configurable score threshold and auto-escalation",
      "Hot-reloadable YAML routing config via PUT /v1/routing-config — no redeploy needed",
      "Provider fallback: if primary model fails, automatically retries with fallback model",
      "SQLite logging with full cost, latency, quality score, and escalation tracking per request",
      "Streamlit dashboard with 4 pages: cost overview, routing breakdown, quality scores, live config editor",
    ],
    tech: [
      "FastAPI",
      "Python",
      "scikit-learn",
      "OpenAI",
      "Anthropic",
      "Ollama",
      "SQLite",
      "aiosqlite",
      "Streamlit",
      "Docker",
      "PyYAML",
    ],
    links: [
      { label: "GitHub Repo", href: "https://github.com/vsaini06/llm-cost-autopilot" },
    ],
    sections: [
      {
        title: "How it works",
        body: [
          "POST /v1/completions receives a prompt. The RandomForest classifier extracts 12 features and predicts Tier 1 (simple), Tier 2 (moderate), or Tier 3 (complex). The routing config maps each tier to a primary and fallback model. The cheapest model for that tier handles the request. After returning the response, an async background task sends the same prompt to GPT-4o as a judge. If the score falls below 3.5/5.0, the system re-runs with the next tier model and logs the escalation.",
        ],
      },
      {
        title: "Classifier",
        body: [
          "221 hand-labeled prompts across Tier 1 (60), Tier 2 (60), Tier 3 (101). 12 engineered features: token count, char count, Tier 1/2/3 keyword hits, constraint word count, output format complexity, sentence count, question marks, numbers in prompt, large number signal (4+ digits), instruction verb count. RandomForest with 100 trees beat Logistic Regression (100% vs 94.59% accuracy on held-out set).",
        ],
      },
      {
        title: "Load test results",
        body: [
          "513 prompts (146 Tier 1, 185 Tier 2, 182 Tier 3). 0 failures. Actual cost $1.2531 vs hypothetical $3.3277 all-GPT-4o. $2.07 saved at 62.3% reduction. Model distribution: GPT-4o Mini 41.3%, Llama 3.2 28.3%, GPT-4o 19.3%, Claude Sonnet 11.1%.",
        ],
      },
    ],
  },
  {
    slug: "secrag",
    title: "SecRAG",
    subtitle: "Hybrid BM25+Vector RAG pipeline with cross-encoder reranking",
    oneLiner:
      "Production-grade document Q&A backend with 99.6% citation accuracy and 4.15/5.00 eval score.",
    description:
      "Production-grade RAG backend built with FastAPI and ChromaDB. Uses hybrid BM25+dense retrieval with RRF fusion, a cross-encoder reranker (ms-marco-MiniLM-L-6-v2) to compress top-20 to top-5 results, and LLM-as-judge citation verification. Evaluated on a 48-question golden Q&A set against the BERT paper.",
    highlights: [
      "Hybrid BM25+dense retrieval with RRF fusion for improved recall over single-strategy search",
      "Cross-encoder reranker (ms-marco-MiniLM-L-6-v2) narrows top-20 candidates to top-5",
      "LLM-as-judge citation verification pipeline achieved 99.6% citation accuracy",
      "Evaluated on a 48-question golden Q&A set — scored 4.15/5.0",
      "Three chunking strategies with ChromaDB deduplication for clean ingestion",
      "Deployed via Docker Compose with a React frontend",
    ],
    tech: ["FastAPI", "ChromaDB", "Sentence-Transformers", "Python", "NumPy", "React", "Docker"],
    links: [{ label: "GitHub Repo", href: "https://github.com/vsaini06/secrag" }],
    sections: [
      {
        title: "Architecture",
        body: [
          "Upload PDF → extract text → chunk (3 strategies) → embed → store in ChromaDB with dedup → query → hybrid BM25+dense RRF → cross-encoder rerank top-20 to top-5 → LLM answer with citation verification.",
        ],
      },
      {
        title: "Evaluation",
        body: [
          "Built a 48-question golden Q&A dataset against the BERT paper. LLM-as-judge scored overall quality at 4.15/5.0 and citation accuracy at 99.6%.",
        ],
      },
    ],
  },
  {
    slug: "pulsescore",
    title: "PulseScore",
    subtitle: "Real-time AI inference & monitoring system",
    oneLiner:
      "Production-style inference backend with low-latency APIs, observability, and versioned model deployment.",
    description:
      "A real-time AI inference backend system with low-latency prediction APIs, integrated ML models in production-style backend services, and logging/monitoring pipelines for system reliability. Features a versioned model deployment pipeline for maintainability and scalability.",
    highlights: [
      "Sub-120ms inference latency under sustained load",
      "Handles 100+ requests/min with 30% concurrency improvement after optimization",
      "Structured logging and monitoring cut average debug time by 25%",
      "Versioned model pipeline supporting 3 model versions for safe rollout",
      "Docker-based deployment with clean module separation",
    ],
    tech: ["FastAPI", "Python", "ML Deployment", "Docker"],
    links: [{ label: "GitHub Repo", href: "https://github.com/vsaini06/pulsescore" }],
    sections: [
      {
        title: "Problem",
        body: [
          "Most ML demos stop at prediction. Real systems need monitoring, logs, latency tracking, and design for change.",
        ],
      },
      {
        title: "Design",
        body: [
          "Serving-first: low-latency inference endpoints, structured logs, latency measurement, and clear module boundaries to support future model versioning.",
        ],
      },
      {
        title: "Next improvements",
        body: [
          "Metrics endpoint + dashboards + alerting thresholds.",
          "Replayable evaluation streams for regression testing.",
        ],
      },
    ],
  },
];

export const education = [
  {
    school: "Arizona State University",
    program: "M.S. in Information Technology (Security)",
    when: "May 2026",
    bullets: ["GPA: 3.97/4.00"],
  },
  {
    school: "MMDU, Ambala, Haryana, India",
    program: "Bachelors in Computer Science (Data Science)",
    when: "June 2023",
    bullets: ["GPA: 7.62/10.00"],
  },
];

export const certifications = [
  "AWS Certified Cloud Practitioner - Amazon Web Services (July 2025)",
  "AWS Academy Graduate - Cloud Architecting (April 2025)",
  "Machine Learning Specialization - DeepLearning.AI (January 2026)",
  "Generative AI with LLMs - DeepLearning.AI (February 2026)",
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Badoliasoft",
    when: "Oct 2023 - Jun 2024",
    bullets: [
      "Built JWT HMAC-SHA512 authentication with role-based access control (RBAC) for a fintech platform serving real users",
      "Implemented real-time notifications using SignalR and RabbitMQ across 200+ C# files and 10 REST controllers",
      "Optimized file delivery via Azure Blob CDN integration and improved session performance with Redis caching",
      "Delivered full-stack features using Angular and .NET 8 in a production environment",
    ],
  },
];

export const skills = {
  "Languages & Frameworks": ["Python", "Java", "FastAPI", "TypeScript", "Node.js", "React", ".NET", "Angular"],
  "AI & ML": ["LLMs", "RAG", "Embeddings", "Sentence-Transformers", "Fine-Tuning", "Prompt Engineering", "LangChain", "scikit-learn"],
  "Cloud & DevOps": ["AWS", "Azure", "Docker", "CI/CD"],
  "Databases": ["PostgreSQL", "DynamoDB", "Pinecone", "ChromaDB", "SQL Server", "Redis", "SQLite"],
  "Security & Monitoring": ["Splunk", "Wireshark", "JWT", "RBAC", "OWASP"],
};
