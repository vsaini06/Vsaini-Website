export const site = {
  name: "Vaibhav Saini",
  headline: "Software Engineer | Applied AI and Backend Systems",
  subheadline:
    "M.S. in Information Technology, Arizona State University | AI Engineering, Backend Development and Full Stack Systems",
  location: "Sunnyvale, California",
  email: "vsaini0601@gmail.com",
  phone: "+1(623)261-0432",
  links: {
    linkedin: "https://www.linkedin.com/in/vaibhav-saini-050b30324/",
    github: "https://github.com/vsaini06",
    resume: "/resume.pdf",
  },
  keywords: [
    "Python", "FastAPI", "TypeScript", "React", "Next.js", "C#", "ASP.NET Core",
    "Agentic AI", "Multimodal AI", "RAG", "Hybrid Retrieval", "LLM Routing", "Model Evaluation",
    "PostgreSQL", "Docker", "AWS", "Azure", "Redis", "Observability", "RBAC",
  ],
};

export const summary =
  "I am a software engineer with experience building backend services, AI applications, and full stack products. My recent work includes retrieval systems that verify their sources, model routing that reduces inference costs, and household intelligence software that turns visual observations into useful actions. I work primarily with Python, FastAPI, TypeScript, and cloud infrastructure, and I bring a security focused perspective from my master’s degree at Arizona State University.";

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
    slug: "homhive",
    title: "HomHive",
    subtitle: "Household intelligence platform | NVIDIA and Nebius AI Hackathon | September 2026 to present",
    oneLiner: "A household assistant that interprets observations, tracks changes over time, and plans practical next steps.",
    description: "HomHive helps people understand what needs attention around their home. Instead of treating a photo as an isolated request, the system keeps track of household observations, identifies potential tasks, and updates recommendations when circumstances change. I built the backend, evaluation workflow, and planning system for the NVIDIA and Nebius AI Hackathon.",
    highlights: [
      "Designed household entity, observation, and task models with persistent history using Python, FastAPI, PostgreSQL, SQLAlchemy, and Alembic.",
      "Reached 348 passing backend tests at the milestone reported on my October 2026 resume.",
      "Improved scene entity recall from 47.5% to 71.2% and micro F1 from 58.3% to 71.8% on a human labeled development set containing 59 entities.",
      "Integrated Nebius perception, NVIDIA Nemotron reasoning, and Tavily research into a workflow that connects visual evidence to suggested actions.",
      "Built a planner that accounts for available time, household presence, task priority, feasibility, and quiet hours. Demonstrated how a plan changes when the available time drops from 20 minutes to 5 minutes.",
      "Developed and deployed the application with Next.js, Docker, Vercel, Railway, and PostgreSQL.",
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "Next.js", "Docker", "Nebius AI", "NVIDIA Nemotron", "Tavily", "Vercel", "Railway", "pytest"],
    links: [
      { label: "GitHub Repo", href: "https://github.com/vsaini06/HomHive" },
    ],
    sections: [
      {
        title: "Why I built it",
        body: [
          "Household work is easy to overlook until it becomes urgent. HomHive explores whether software can recognize emerging needs from everyday evidence and help people decide what to do, without requiring custom cameras or sensors.",
        ],
      },
      {
        title: "System design",
        body: [
          "The application converts photos and other inputs into observations associated with household entities. Those observations are stored over time, allowing the system to reason about changes rather than relying on one snapshot. Tasks are tracked separately from observations so that users can review progress and update their status.",
          "Planning combines household state with practical constraints such as time, presence, priority, and quiet hours. NVIDIA Nemotron supports reasoning, while Tavily provides external research when a situation needs additional context.",
        ],
      },
      {
        title: "Evaluation and results",
        body: [
          "I evaluated scene understanding against a human labeled development set of 59 entities. Scene entity recall rose from 47.5% to 71.2%, and micro F1 rose from 58.3% to 71.8%. These are development evaluation results, not a claim of accuracy in all homes or environments.",
          "The October 2026 resume records 348 passing backend tests. The repository may have progressed beyond that milestone.",
        ],
      },
    ],
  },
  {
    slug: "secrag-pro",
    title: "SecRAG Pro",
    subtitle: "Retrieval augmented generation with adaptive model routing",
    oneLiner:
      "Combined source grounded retrieval with model selection to reduce inference cost without sacrificing answer quality.",
    description:
      "SecRAG Pro combines document retrieval, citation verification, and a model routing service. The retrieval pipeline finds relevant passages using both keyword and semantic search, then reranks results before generating an answer. A separate routing component estimates question complexity and selects an appropriate language model. I evaluated the system for cost, answer quality, citation accuracy, and reliability.",
    highlights: [
      "Reduced inference cost by 62.3% compared with an all GPT-4o baseline across 513 evaluation requests.",
      "Measured 99.6% citation accuracy on a 50 question evaluation set using source and answer verification.",
      "Recorded an average answer quality score of 4.15 out of 5 during evaluation.",
      "Trained a RandomForest classifier on 221 labeled prompts to assign question complexity, with more than 97% reported accuracy.",
      "Routed requests across local Llama 3.2, GPT-4o Mini, Claude Haiku, Claude Sonnet, and GPT-4o.",
      "Added asynchronous response verification and escalation when a lower cost model failed quality checks.",
      "Made routing assignments configurable through YAML without requiring a service restart.",
      "Logged request costs, model selections, and estimated savings to make routing decisions measurable.",
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
          "513 requests across all tiers: GPT-4o Mini handled 41.3%, Llama 3.2 (free) handled 28.3%, GPT-4o handled 19.3%, Claude Sonnet handled 11.1%. Total cost $1.25 vs $3.33 hypothetical; $2.07 saved at 62.3% reduction.",
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
      "Hot-reloadable YAML routing config via PUT /v1/routing-config; no redeploy needed",
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
      "Hybrid document Q&A with citation verification and a measured quality evaluation.",
    description:
      "Production-grade RAG backend built with FastAPI and ChromaDB. Uses hybrid BM25+dense retrieval with RRF fusion, a cross-encoder reranker (ms-marco-MiniLM-L-6-v2) to compress top-20 to top-5 results, and LLM-as-judge citation verification. Evaluated on a 48-question golden Q&A set against the BERT paper.",
    highlights: [
      "Hybrid BM25+dense retrieval with RRF fusion for improved recall over single-strategy search",
      "Cross-encoder reranker (ms-marco-MiniLM-L-6-v2) narrows top-20 candidates to top-5",
      "Grounded answer verification and citation checking in a 50-question evaluation set reported in the resume",
      "Evaluated grounded answer quality; reported mean quality score of 4.15/5",
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
    when: "2026",
    bullets: ["GPA: 3.97/4.00"],
  },
  {
    school: "MMDU, Ambala, Haryana, India",
    program: "B.E. in Computer Science (Data Science)",
    when: "2023",
    bullets: ["GPA: 7.62/10.00"],
  },
];

export const certifications = [
  "AWS Certified Cloud Practitioner: Amazon Web Services (July 2025)",
  "AWS Academy Cloud Architect and Solutions Engineer: Amazon Web Services (2025)",
  "Machine Learning Specialization: DeepLearning.AI (January 2026)",
  "Generative AI with LLMs: DeepLearning.AI (February 2026)",
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Badoliasoft",
    when: "June 2023 - July 2024",
    bullets: [
      "Implemented JWT authentication with HMAC-SHA512, three-tier RBAC, token blacklisting and IP-based rate limiting for a fintech platform supporting 100+ users, with zero reported unauthorized access incidents after deployment.",
      "Built real-time SignalR workflows with RabbitMQ fanout messaging; integrated Azure Blob Storage and CDN, reducing average file-delivery latency by 40%.",
      "Added Redis distributed caching, structured logging and global exception handling, reducing database load by 35%.",
      "Contributed to an Angular + .NET 8 full-stack application spanning 200+ C# files and 10 REST controllers.",
      "Owned authentication, messaging, caching and reliability features as part of a small team delivering a greenfield fintech platform.",
    ],
  },
];

export const skills = {
  "Languages & Frameworks": ["Python", "C#", "Java", "TypeScript", "JavaScript", "SQL", "FastAPI", "ASP.NET Core", "Next.js", "React", "Angular", "Node.js", "REST APIs", "GraphQL"],
  "AI & ML": ["Generative AI", "Agentic AI", "Multimodal AI", "LLMs", "RAG", "LLM Routing", "BM25", "Dense Retrieval", "Reciprocal Rank Fusion", "Cross-Encoder Reranking", "LLM-as-Judge", "Model Evaluation", "NVIDIA Nemotron", "Nebius AI", "Tavily", "Ollama"],
  "Cloud, Data & Infrastructure": ["AWS", "Azure", "PostgreSQL", "AWS RDS", "SQLAlchemy", "Alembic", "Redis", "Docker", "Railway", "Vercel", "RabbitMQ", "SignalR"],
  "Engineering & Security": ["Distributed Systems", "API Design", "Object-Oriented Design", "Data Structures & Algorithms", "JWT", "RBAC", "Testing", "Debugging", "Observability", "Structured Logging", "CI/CD", "Git", "GitHub"],
};
