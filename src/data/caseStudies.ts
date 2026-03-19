export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  badge: "Production-like" | "Featured";
  period: string;
  role: string;

  summary: string;
  stack: string[];

  links?: {
    github?: string;
    demo?: string;
    video?: string;
  };

  kpis: { label: string; value: string }[];

  context: string[];
  responsibilities: string[];
  architecture: string[];
  challenges: { problem: string; solution: string }[];
  results: string[];

  screenshots?: { src: string; alt: string }[];
  architectureImage?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "microservices",
    title: "E-Commerce Microservices Platform",
    subtitle:
      "Production-like architecture with service discovery, API gateway, async messaging, tracing, and security.",
    badge: "Production-like",
    period: "2024",
    role: "Full-Stack / Backend",

    summary:
      "I designed and implemented a microservices-based e-commerce backend with modern cloud-native patterns. The focus was reliability, scalability, and observability: centralized configuration, discovery, gateway routing, Kafka for async flows, and end-to-end tracing.",
    stack: ["Spring Boot", "Kafka", "Eureka", "API Gateway", "OpenFeign", "Zipkin", "Keycloak", "Docker"],

    links: {
      github: "https://github.com/", // replace
    },

    kpis: [
      { label: "Services", value: "5+" },
      { label: "Async messaging", value: "Kafka" },
      { label: "Security", value: "Keycloak" },
      { label: "Observability", value: "Zipkin + Actuator" },
    ],

    context: [
      "Build a production-like microservices system with strong separation of concerns.",
      "Support both synchronous (REST) and asynchronous (events) communication patterns.",
      "Make the platform observable: tracing, health checks, and logs.",
    ],

    responsibilities: [
      "Designed the global architecture (Config Server, Discovery Server, API Gateway).",
      "Implemented Customer/Product/Order/Payment/Notification microservices.",
      "Configured Kafka + Zookeeper with Docker Compose and integrated event-driven order confirmation.",
      "Integrated distributed tracing with Zipkin + Spring Actuator health endpoints.",
      "Secured API Gateway and services with Keycloak (realm/client configuration).",
    ],

    architecture: [
      "Config Server centralizes application configuration.",
      "Eureka handles service discovery and registration.",
      "API Gateway routes traffic and enforces security policies.",
      "Order emits events via Kafka; Notification consumes and sends confirmation.",
      "Zipkin traces requests across services for debugging & observability.",
    ],

    challenges: [
      {
        problem: "Keeping service-to-service calls reliable while avoiding tight coupling.",
        solution:
          "Used OpenFeign for synchronous calls where required and Kafka events for decoupled workflows (order confirmation, notifications).",
      },
      {
        problem: "Debugging distributed flows across multiple services.",
        solution:
          "Added Zipkin tracing + consistent correlation IDs + Actuator endpoints to quickly locate failures and bottlenecks.",
      },
      {
        problem: "Security across multiple services with a single entry point.",
        solution:
          "Enforced auth at the API Gateway with Keycloak (JWT) and ensured consistent authorization rules for protected routes.",
      },
    ],

    results: [
      "Clear separation of concerns and scalable service boundaries.",
      "Improved observability with trace-based debugging across microservices.",
      "Reliable async event workflow for order confirmation notifications.",
    ],

    screenshots: [
      { src: "/projects/microservices.png", alt: "Microservices architecture preview" },
      { src: "/projects/kafka.png", alt: "Kafka event workflow" },
    ],
  },

  {
    slug: "cicd",
    title: "DevOps CI/CD Pipeline",
    subtitle:
      "Automated build/test/deploy workflows with Jenkins, artifacts in Nexus, and monitoring via Prometheus/Grafana.",
    badge: "Featured",
    period: "Sep 2024 – Nov 2024",
    role: "DevOps / Automation",

    summary:
      "I built a full CI/CD pipeline to automate delivery: clean builds, test execution, artifact versioning, containerization, and monitoring dashboards. I also replicated key jobs using GitHub Actions to demonstrate flexibility and portability.",
    stack: ["Jenkins", "GitHub Actions", "Maven", "Docker", "Nexus", "Prometheus", "Grafana", "Git"],

    kpis: [
      { label: "CI", value: "Jenkins + Actions" },
      { label: "Artifacts", value: "Nexus" },
      { label: "Containers", value: "Docker" },
      { label: "Monitoring", value: "Prometheus + Grafana" },
    ],

    context: [
      "Reduce manual delivery effort and make deployments repeatable.",
      "Standardize build/test across environments.",
      "Add observability for deployed services and pipeline outcomes.",
    ],

    responsibilities: [
      "Created Jenkins pipelines for build/test/package steps (Maven).",
      "Pushed versioned artifacts to Nexus to ensure traceability.",
      "Containerized the app with Docker for consistent runtime environments.",
      "Added Prometheus scraping and Grafana dashboards for monitoring.",
      "Replicated workflows in GitHub Actions for scalability and flexibility.",
    ],

    architecture: [
      "Jenkins triggers pipeline on Git push.",
      "Maven builds + runs tests; artifacts are stored in Nexus.",
      "Docker builds container images for deployment.",
      "Prometheus collects metrics; Grafana visualizes dashboards.",
    ],

    challenges: [
      {
        problem: "Ensuring reproducible builds and dependency consistency.",
        solution:
          "Standardized Maven build steps, pinned versions, and versioned artifacts in Nexus for full traceability.",
      },
      {
        problem: "Observability was missing during deployment and runtime.",
        solution:
          "Added Prometheus metrics + Grafana dashboards to track uptime, latency, and deployment health indicators.",
      },
    ],

    results: [
      "Repeatable delivery process with clean, automated pipelines.",
      "Clear artifact traceability and fast rollback readiness.",
      "Production-like monitoring visibility via dashboards.",
    ],

    screenshots: [
      { src: "/projects/cicd.png", alt: "CI/CD pipeline preview" },
      { src: "/projects/grafana.png", alt: "Grafana dashboard" },
    ],
  },

  {
    slug: "data-catalog",
    title: "SaaS Data Catalog (MVP) — DATS Connexion",
    subtitle:
      "Data governance MVP to centralize metadata and expose APIs for analytics usage and data discovery workflows.",
    badge: "Featured",
    period: "Jan 2024 – May 2024",
    role: "Full-Stack",

    summary:
      "I developed an MVP SaaS data catalog application focused on data governance: centralizing metadata, structured data capture, compliance labeling, and API exposure to support analytics/BI teams.",
    stack: ["Java", "Spring Boot", "Angular", "REST", "Docker", "Jira", "Git"],

    kpis: [
      { label: "MVP", value: "Catalog + CRUD" },
      { label: "API", value: "REST" },
      { label: "Workflow", value: "Scrum + Jira" },
      { label: "Deployment", value: "Docker" },
    ],

    context: [
      "Companies struggle to find data ownership, access rules, and sensitive data locations.",
      "The MVP aimed to centralize metadata and provide a clean integration API.",
    ],

    responsibilities: [
      "Designed core catalog entities: sources, tables, fields, owners, tags/labels.",
      "Implemented CRUD workflows in Angular + Spring Boot REST APIs.",
      "Added compliance-style labeling to identify sensitive data categories.",
      "Organized delivery using Scrum practices (Jira) and Git collaboration.",
    ],

    architecture: [
      "Angular frontend for catalog exploration and administration.",
      "Spring Boot REST API for business logic and data access.",
      "Containerized services for consistent local/dev environments.",
    ],

    challenges: [
      {
        problem: "Modeling metadata in a flexible and scalable way.",
        solution:
          "Used a clear domain model with extensible tagging/labeling to support future governance features.",
      },
      {
        problem: "Keeping MVP scope realistic while delivering value.",
        solution:
          "Prioritized core catalog + API integration features and left advanced automation for later iterations.",
      },
    ],

    results: [
      "Delivered an MVP that structures data discovery and governance workflows.",
      "Improved clarity on data assets (sources/tables/fields) and labels.",
      "Provided API foundation for later analytics integration.",
    ],

    screenshots: [{ src: "/projects/dats.png", alt: "Data catalog UI preview" }],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
