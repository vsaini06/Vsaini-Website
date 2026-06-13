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
    github: "https://github.com/vaibhav-badoliasoft",
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
      "OWASP"
  ],
};

export const summary = "I’m an early career AI-focused Software Engineer who believes the best systems are fast, resilient, and secure; but I never stop thinking about whether something feels intuitive to the person on the other end. I’m a curious, quick learner who picks up new tools fast and goes deep when it matters, caring about latency, failure modes, and whether AI output can actually be trusted. I collaborate well across in person and remote teams, working efficiently no matter the setup. On OPT, looking for a full-time role."
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
    slug: "secrag",
    title: "SecRAG",
    subtitle: "Hybrid BM25+Vector RAG pipeline with cross-encoder reranking",
    oneLiner: "Production-grade document Q&A backend with 99.6% citation accuracy and 4.15/5.00 eval score.",
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
    links: [{ label: "GitHub Repo", href: "https://github.com/vaibhav-badoliasoft/secrag" }],
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
    oneLiner: "Production-style inference backend with low-latency APIs, observability, and versioned model deployment.",
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
    links: [{ label: "GitHub Repo", href: "https://github.com/vaibhav-badoliasoft/pulsescore" }],
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
    bullets: ["GPA: 3.97"],
  },
  {
    school: "MMDU, Ambala, Haryana, India",
    program: "Bachelors in Computer Science (Data Science)",
    when: "June 2023",
    bullets: ["GPA: 7.62"],
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
  "AI & ML": ["LLMs", "RAG", "Embeddings", "Sentence-Transformers", "Fine-Tuning", "Prompt Engineering", "LangChain"],
  "Cloud & DevOps": ["AWS", "Azure", "Docker", "CI/CD"],
  "Databases": ["PostgreSQL", "DynamoDB", "Pinecone", "ChromaDB", "SQL Server", "Redis"],
  "Security & Monitoring": ["Splunk", "Wireshark", "JWT", "RBAC", "OWASP"],
};