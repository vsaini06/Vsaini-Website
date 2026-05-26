export const site = {
  name: "Vaibhav Saini",
  headline: "Software Engineer (Backend & AI)",
  subheadline:
    "MS IT (Security) @ ASU • Python & FastAPI • Scalable Backend Systems • AI/ML Integration • Cloud Deployments",
  location: "Tempe, AZ (Open to CA/SF/NYC/Remote)",
  email: "vaibhavbadolia@gmail.com",
  phone: "+1 (623) 261-0432",
  links: {
    linkedin: "https://www.linkedin.com/in/vaibhav-saini-050b30324/",
    github: "https://github.com/vaibhav-badoliasoft",
    resume: "/resume.pdf",
  },
  keywords: [
      "Python",
      "FastAPI",
      "Node.js",
      "TypeScript",
      "React",
      "REST APIs",
      "Microservices",
      "Backend Architecture",
      "Artificial Intelligence",
      "Machine Learning",
      "LLMs",
      "Retrieval-Augmented Generation",
      "Embeddings",
      "Vector Search",
      "AI/ML Model Integration",
      "AWS",
      "Azure",
      "Docker",
      "CI/CD",
      "MySQL",
      "MongoDB",
      "DynamoDB",
      "PostgreSQL",
      "Network Security",
      "Threat Detection",
      "Observability",
      "Wireshark",
      "Splunk",
      "System Design",
      "Performance Optimization",
  ],
};

export const summary =
"Software Engineer (Backend & AI) with experience designing and building scalable backend systems and production-grade APIs using Python and FastAPI. Strong in microservices architecture, AI/ML model integration, and cloud-based deployments. Focused on writing clean, maintainable code and improving system performance, reliability, and scalability.";

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
    subtitle: "Retrieval-Augmented Generation backend over PDFs",
    oneLiner: "Scalable backend for document-based Q&A with hybrid search and semantic retrieval.",
    description:
      "A scalable backend service for document-based question answering using FastAPI, with RESTful APIs for document ingestion, query processing, and response generation in a microservices architecture. Integrates Sentence-Transformers embeddings into backend pipelines for semantic retrieval with hybrid BM25 + vector similarity search.",
    highlights: [
      "Designed and built a scalable backend service for document Q&A using FastAPI",
      "Developed RESTful APIs for document ingestion, query processing, and response generation in a microservices architecture",
      "Integrated AI/ML models (Sentence-Transformers embeddings) into backend pipelines for semantic retrieval",
      "Optimized retrieval performance using hybrid search (BM25 + vector similarity)",
      "Implemented structured metadata tracking to improve reliability, traceability, and system performance",
    ],
    tech: ["FastAPI", "Sentence-Transformers", "NumPy", "Vector Similarity Search", "RAG"],
    links: [{ label: "GitHub Repo", href: "https://github.com/vaibhav-badoliasoft/secrag" }],
    sections: [
      {
        title: "Problem",
        body: [
          "Many RAG demos fail because they can't explain where an answer came from. SecRAG is designed around traceability, so retrieval results can be audited, improved, and defended in interviews.",
        ],
      },
      {
        title: "Architecture",
        body: [
          "Pipeline: Upload PDF → Extract text → Chunk with overlap + metadata → Embed chunks → Persist artifacts → Query embed → Hybrid BM25 + cosine similarity → Return top-k chunks.",
          "Structured metadata tracking enables citations, evaluation, and debugging of retrieval quality.",
        ],
      },
      {
        title: "Next improvements",
        body: [
          "Reranking layer on top of hybrid retrieval.",
          "Evaluation harness (retrieval metrics + groundedness checks).",
          "Auth + per-user document spaces + encrypted artifact storage.",
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
      "Built a real-time AI inference backend system with low-latency prediction APIs",
      "Integrated machine learning models into production-style backend services",
      "Designed logging and monitoring pipelines to improve system reliability and debugging",
      "Optimized API performance for continuous high-frequency requests",
      "Implemented versioned model deployment pipeline for maintainability and scalability",
    ],
    tech: ["Python", "FastAPI", "Observability", "Monitoring Concepts", "ML Deployment"],
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
  {
    slug: "secure-investment-platform",
    title: "Secure Investment Platform",
    subtitle: "Full-stack fintech app with RBAC, Docker, and Azure deployment",
    oneLiner: "RBAC-secured fintech system supporting 100+ users with 99.9% uptime on Azure.",
    description:
      "A full-stack fintech application supporting 100+ users with high request throughput. Features secure authentication with RBAC, containerized services deployed on Azure with 99.9% uptime, and monitoring/logging for observability.",
    highlights: [
      "Built a full-stack fintech application supporting 100+ users with high request throughput",
      "Implemented secure authentication and role-based access control (RBAC)",
      "Deployed containerized services using Docker on Azure with 99.9% uptime",
      "Improved system reliability and observability through monitoring and logging tools",
    ],
    tech: ["Angular", ".NET 8", "Docker", "Azure", "RBAC"],
    links: [],
    sections: [
      {
        title: "Impact",
        body: [
          "Built to be secure and reliable in production environments with strong access control and monitoring.",
        ],
      },
    ],
  },
];

export const education = [
  {
    school: "Arizona State University",
    program: "M.S. in Information Technology (Security)",
    when: "Expected May 2026",
    bullets: ["GPA: 3.96"],
  },
  {
    school: "MMDU, Ambala, Haryana, India",
    program: "Bachelors in Computer Science (Data Science)",
    when: "June 2023",
    bullets: ["GPA: 7.62"],
  },
];

export const certifications = [
  "AWS Certified Cloud Practitioner – Amazon Web Services (July 2025)",
  "AWS Academy Graduate – Cloud Architecting (April 2025)",
  "Machine Learning Specialization – DeepLearning.AI (January 2026)",
  "Generative AI with LLMs – DeepLearning.AI (February 2026)",
];

export const experience = [
  {
    role: "Independent Backend & AI Development",
    company: "Self-directed",
    when: "Ongoing",
    bullets: [
      "Designed and deployed multiple backend systems using FastAPI and Python",
      "Built and tested REST APIs for real-time data processing and AI inference",
      "Worked on end-to-end system design including data handling, model integration, and monitoring",
      "Focused on building production-style systems rather than academic prototypes",
    ],
  },
];

export const skills = {
  "Languages & Frameworks": ["Python", "FastAPI", "TypeScript", "React", "Node.js", ".NET"],
  "AI & ML": ["LLMs", "Retrieval-Augmented Generation (RAG)", "Embeddings", "Vector Search", "Model Integration"],
  "Full-Stack & APIs": ["REST APIs", "Backend Architecture", "Frontend Development", "Real-Time Systems", "Microservices"],
  "Cloud & DevOps": ["AWS", "Azure", "Docker", "CI/CD", "Cloud Deployment"],
  "Databases": ["MySQL", "MongoDB", "DynamoDB", "PostgreSQL"],
  "Security & Monitoring": ["Network Security", "Threat Detection", "Observability", "Logging", "Wireshark", "Splunk"],
  "Systems": ["System Design", "Distributed Systems Basics", "API Design", "Performance Optimization"],
};