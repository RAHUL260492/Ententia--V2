import { NavItem, Solution, PlatformFeature, CaseStudy, InsightTeaser, FooterSection, FilterOptions, InsightArticle, Industry, FunctionArea, Outcome, SolutionType, CaseStudyDetail, PlatformPrinciple, PlatformCapability, ServiceOffering } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: 'home', action: 'navigate' },
  { label: 'Services', href: 'services', action: 'navigate' },
  { label: 'Solutions', href: 'solutions', action: 'navigate' },
  { label: 'Foundation', href: 'foundation', action: 'navigate' },
  { label: 'Case Studies', href: 'casestudies', action: 'navigate' },
  { label: 'Insights', href: 'insights', action: 'navigate' },
  { label: 'Contact Us', href: 'contact', action: 'navigate' },
];

export const SOLUTIONS: Solution[] = [
  {
    id: '1',
    title: 'Predictive Maintenance',
    shortDescription: 'Enable comprehensive operational and equipment insights to maximize production and profitability.',
    fullDescription: 'A predictive modeling solution that ingests real-time sensor data and historical maintenance logs to predict equipment failures before they occur. It generates actionable alerts and maintenance schedules to minimize unplanned downtime and extend asset life.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    tags: {
      industry: [Industry.MANUFACTURING, Industry.ENERGY],
      function: [FunctionArea.OPERATIONS, FunctionArea.IT_DIGITAL],
      outcome: [Outcome.ASSET_OPTIMIZATION, Outcome.OPERATIONAL_EFFICIENCY],
      type: SolutionType.PREDICTIVE_MODEL,
    },
    roi: {
      range: '30-50%',
      description: 'Reduction in unplanned downtime',
    },
    features: [
      'Real-time anomaly detection',
      'Remaining Useful Life (RUL) prediction',
      'Automated maintenance scheduling',
      'Failure mode analysis'
    ],
    integrations: ['Historians (OSIsoft PI)', 'SCADA', 'CMMS (SAP, Maximo)'],
    deployment: ['Edge', 'Cloud'],
    evaluation: ['Prediction accuracy', 'Downtime reduction']
  },
  {
    id: '2',
    title: 'Dynamic Work Orders',
    shortDescription: 'Enable end-to-end automated work order generation across production facilities.',
    fullDescription: 'An automated workflow solution that connects operational triggers to workforce management. It auto-generates detailed work orders with required parts, tools, and procedures based on asset health data, ensuring the right technician is dispatched at the right time.',
    imageUrl: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=800',
    tags: {
      industry: [Industry.ENERGY, Industry.UTILITIES],
      function: [FunctionArea.OPERATIONS],
      outcome: [Outcome.ASSET_OPTIMIZATION, Outcome.PRODUCTIVITY],
      type: SolutionType.WORKFLOW_AUTOMATION,
    },
    roi: {
      range: '30-50%',
      description: 'Increase in workforce productivity',
    },
    features: [
      'Condition-based work order generation',
      'Auto-assignment of resources',
      'Integration with inventory management',
      'Mobile field app synchronization'
    ],
    integrations: ['SAP PM', 'IBM Maximo', 'Field Service Mgmt'],
    deployment: ['SaaS', 'On-premise'],
    evaluation: ['Mean Time To Repair (MTTR)', 'Schedule compliance']
  },
  {
    id: '3',
    title: 'OT Cyber Resilience',
    shortDescription: 'Enable automated network isolation and comprehensive monitoring for critical infrastructure.',
    fullDescription: 'A specialized security agent for Operational Technology (OT) networks. It continuously monitors industrial control protocols for anomalies, unauthorized access, and potential threats, capable of automated segmentation to contain breaches and ensure resilience.',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef526b01201b?auto=format&fit=crop&q=80&w=800',
    tags: {
      industry: [Industry.UTILITIES, Industry.ENERGY, Industry.MANUFACTURING],
      function: [FunctionArea.IT_DIGITAL],
      outcome: [Outcome.CYBER_DEFENSE, Outcome.RISK_COMPLIANCE],
      type: SolutionType.AGENT,
    },
    roi: {
      range: '99.9%',
      description: 'Threat detection accuracy',
    },
    features: [
      'Passive network monitoring',
      'Industrial protocol analysis',
      'Automated containment workflows',
      'Compliance reporting (NERC CIP, IEC 62443)'
    ],
    integrations: ['SIEM', 'Firewalls', 'Identity Providers'],
    deployment: ['Network Appliance', 'Edge'],
    evaluation: ['Time to detect', 'Time to respond']
  },
  {
    id: '4',
    title: 'Automate Work Order Triage',
    shortDescription: 'Route, summarize, and prioritize work orders with guardrails — reduce backlog and speed execution.',
    fullDescription: 'Use intelligent agents to triage incoming maintenance requests. The system categorizes issues, identifies duplicates, prioritizes based on criticality, and routes to the correct trade or department without manual intervention, significantly reducing backlog.',
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
    tags: {
      industry: [Industry.UTILITIES, Industry.ENERGY],
      function: [FunctionArea.OPERATIONS],
      outcome: [Outcome.OPERATIONAL_EFFICIENCY, Outcome.PRODUCTIVITY],
      type: SolutionType.WORKFLOW_AUTOMATION,
    },
    roi: {
      range: '15-35%',
      description: 'Efficiency gain in triage process',
    },
    features: [
      'NLP-based request classification',
      'Duplicate detection',
      'Priority scoring',
      'Auto-routing to workgroups'
    ],
    integrations: ['ServiceNow', 'Maximo', 'Email/Ticketing'],
    deployment: ['Cloud', 'SaaS'],
    evaluation: ['Backlog reduction', 'Triage speed']
  },
  {
    id: '5',
    title: 'Optimize Permit Review',
    shortDescription: 'Extract requirements, flag gaps, and generate compliant drafts for faster, consistent reviews.',
    fullDescription: 'An assistant for HSE and Operations teams that accelerates the permitting process. It ingests permit applications, checks them against regulatory codes and internal standards, flags missing info, and drafts approval documents to ensure compliance and speed.',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
    tags: {
      industry: [Industry.MANUFACTURING, Industry.UTILITIES],
      function: [FunctionArea.HSE, FunctionArea.OPERATIONS, FunctionArea.IT_DIGITAL],
      outcome: [Outcome.RISK_COMPLIANCE],
      type: SolutionType.ASSISTANT,
    },
    roi: {
      range: '10-20%',
      description: 'Reduction in cycle time',
    },
    features: [
      'Regulatory code extraction',
      'Gap analysis & compliance flagging',
      'Automated draft generation',
      'Historical permit lookups'
    ],
    integrations: ['SharePoint', 'Box', 'Drive', 'Workflow Tools'],
    deployment: ['Managed/VPC', 'Private Cloud'],
    evaluation: ['Rubric-based scoring', 'Drift monitoring']
  },
  {
    id: '6',
    title: 'Operations Assistant',
    shortDescription: 'Optimize operations and improve reliability by leveraging full operational context to improve speed of analysis and quality of decisions.',
    fullDescription: 'An AI-powered assistant that synthesizes data from disparate operational systems, documents, and historical logs to provide real-time context and decision support for operators and engineers.',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    tags: {
      industry: [Industry.ENERGY],
      function: [FunctionArea.OPERATIONS],
      outcome: [Outcome.ASSET_OPTIMIZATION],
      type: SolutionType.ASSISTANT
    },
    roi: {
      range: '15-40%',
      description: 'Improvement in operational decisions'
    },
    features: [
      'Context-aware search & retrieval',
      'Operational data synthesis',
      'Decision support & recommendations',
      'SOP integration'
    ],
    integrations: ['Cognite Data Fusion', 'OSIsoft PI', 'SharePoint'],
    deployment: ['SaaS', 'Private Cloud'],
    evaluation: ['Time to decision', 'Accuracy of retrieval']
  },
  {
    id: '7',
    title: 'Procurement / Contract Intelligence',
    shortDescription: 'Improve sourcing decisions, reduce leakage and strengthen compliance by extracting, monitoring, and enforcing key commercial terms.',
    fullDescription: 'An intelligent agent that monitors supplier contracts and procurement data to identify leakage, enforce compliance with commercial terms, and provide actionable insights for sourcing decisions.',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    tags: {
      industry: [Industry.MANUFACTURING],
      function: [FunctionArea.SUPPLY_CHAIN],
      outcome: [Outcome.COST_REDUCTION],
      type: SolutionType.AGENT
    },
    roi: {
      range: 'Significant',
      description: 'Leakage Reduction'
    },
    features: [
      'Key term extraction',
      'Compliance monitoring',
      'Leakage detection',
      'Supplier performance analysis'
    ],
    integrations: ['SAP Ariba', 'Coupa', 'DocuSign'],
    deployment: ['SaaS'],
    evaluation: ['Leakage identified', 'Review time reduction']
  },
  {
    id: '8',
    title: 'Workflow Analyst',
    shortDescription: 'Eliminate unnecessary work and streamline internal workflows by uncovering hidden inefficiencies across core business processes.',
    fullDescription: 'A workflow automation and analysis tool that uses process mining and AI to identify bottlenecks, eliminate redundant steps, and streamline execution across complex enterprise workflows.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: {
      industry: [Industry.ENERGY],
      function: [FunctionArea.IT_DIGITAL],
      outcome: [Outcome.PROCESS_OPTIMIZATION],
      type: SolutionType.WORKFLOW_AUTOMATION
    },
    roi: {
      range: '30-70%',
      description: 'Effort Reduction'
    },
    features: [
      'Process mining',
      'Bottleneck analysis',
      'Workflow mapping',
      'Inefficiency detection'
    ],
    integrations: ['ServiceNow', 'Salesforce', 'Jira'],
    deployment: ['Cloud'],
    evaluation: ['Process cycle time', 'Step reduction']
  },
  {
    id: '9',
    title: 'Payroll & Invoice Auditor',
    shortDescription: 'Minimize audit risk and revenue leakage by automatically reconciling timesheets with paper-based site access and gate records.',
    fullDescription: 'An automated auditing solution that cross-references payroll data with physical access logs and gate records to identify discrepancies, ensuring accurate payments and reducing audit risk.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    tags: {
      industry: [Industry.FINANCE],
      function: [FunctionArea.HR],
      outcome: [Outcome.RISK_COMPLIANCE],
      type: SolutionType.WORKFLOW_AUTOMATION
    },
    roi: {
      range: 'High',
      description: 'Risk Mitigation'
    },
    features: [
      'Automated reconciliation',
      'Gate log matching',
      'Anomaly detection',
      'Audit trail generation'
    ],
    integrations: ['Workday', 'SAP ERP', 'Access Control Systems'],
    deployment: ['SaaS', 'On-premise'],
    evaluation: ['Audit coverage', 'Error detection rate']
  }
];

export const SERVICE_OFFERINGS: ServiceOffering[] = [
  {
    id: 's1',
    title: 'Use Case Discovery & Prioritization',
    description: 'Work with key stakeholders and identify high-impact, feasible AI opportunities and prioritize them by business value, readiness, and risk – at enterprise, function or workflow level.',
    deliverables: [
      'Use case inventory with value and feasibility assessment',
      'Data and integration readiness summary',
      'Prioritized shortlist and recommended execution approach'
    ],
    duration: '2 to 4 Weeks'
  },
  {
    id: 's2',
    title: 'AI Governance and Roadmap Definition',
    description: 'Define the operating model, controls, and roadmap required to scale AI responsibly, aligned with organizational strategy, risk posture, and business priorities.',
    deliverables: [
      'Governance model (roles, decision rights, intake, and review processes)',
      'Risk and control approach tailored to your environment',
      '6 to 12-month roadmap with milestones and dependencies'
    ],
    duration: '6 to 8 Weeks'
  },
  {
    id: 's3',
    title: 'Solution Design and Scaled Deployment',
    description: 'Design, build, and deploy reliable AI solutions tailored to your organizational needs, using Ententia’s reusable foundation and purpose-built accelerators.',
    deliverables: [
      'Solution design covering workflow, data, context, and governance',
      'Implementation and integration into enterprise systems',
      'Production deployment, monitoring and transition to steady-state support'
    ],
    duration: '6 to 10 Weeks'
  },
  {
    id: 's4',
    title: 'AI-led Process Automation',
    description: 'Automate specific high-friction or high-volume process components – such as extraction, classification, reconciliation, validation – to deliver measurable productivity gains.',
    deliverables: [
      'Targeted automation blueprint and success metrics',
      'Implementation of automation components',
      'Performance tracking and continuous improvement loop'
    ],
    duration: '4 to 6 Weeks'
  },
  {
    id: 's5',
    title: 'Workflow Transformation',
    description: 'Reimagine an end-to-end workflow to embed AI where it materially changes how work is identified, executed, reviewed, and measured.',
    deliverables: [
      'Current-state workflow mapping and bottleneck analysis',
      'Future-state workflow design and development with defined AI intervention points',
      'Phased rollout addressing adoption, governance, and change'
    ],
    duration: 'Varies (based on scope and complexity)'
  }
];

export const PLATFORM_FEATURES: PlatformFeature[] = [
  {
    title: 'Built-in Energy Industry Context',
    description: 'Embedded domain knowledge, operational context, and terminology specific to the energy sector.',
    bullets: ['Domain Knowledge', 'Operational Context', 'Industry Terminology'],
  },
  {
    title: 'Enterprise-Grade Data Connectivity',
    description: 'Secure integration with structured and unstructured enterprise data sources.',
    bullets: ['Structured Data', 'Unstructured Docs', 'Secure Integration'],
  },
  {
    title: 'Accuracy & Risk Guardrails',
    description: 'Built-in controls for reliable outputs with minimal hallucination risk.',
    bullets: ['Hallucination Control', 'Reliable Outputs', 'Risk Management'],
  },
  {
    title: 'Configurable UX & Automations',
    description: 'Flexible UI and user-defined workflow automations leveraging core AI capabilities.',
    bullets: ['Flexible UI', 'Workflow Automation', 'No-code Automations'],
  },
];

export const PLATFORM_PRINCIPLES: PlatformPrinciple[] = [
  {
    title: 'Enterprise-Ready Architecture',
    description: 'A flexible, modular foundation designed to integrate with existing systems, data, and governance frameworks.',
  },
  {
    title: 'Trust by Default',
    description: 'Accuracy, quality controls, and transparent risk assessment are embedded throughout the lifecycle - from design and evaluation through runtime - enabling confident adoption in high-impact environments.',
  },
  {
    title: 'Built for Scale and Reliability',
    description: 'Production-grade performance, observability, and lifecycle management ensure solutions operate reliably and consistently as usage scales.',
  },
  {
    title: 'Configurable UX and User-defined Automations',
    description: 'Flexible user interface (UI) and user-defined workflow automation capabilities empower users to analyze data, adapt and execute workflows with confidence.',
  },
  {
    title: 'Accelerated Value Delivery',
    description: 'Intentional use of reusable templates, and accelerators help teams move from use case concept to production quickly, without sacrificing security, governance, or trust.',
  }
];

export const PLATFORM_CAPABILITIES: PlatformCapability[] = [
  {
    title: 'Data & Context Integration',
    description: 'Connect structured data, unstructured documents, and operational knowledge so solutions respond with the context your teams can rely on.',
    bullets: [
        'Built-in connectors for key enterprise systems and data sources',
        'Unified handling of documents, records, and domain knowledge',
        'Built-in, configurable industry, function and use case context to support consistent and reliable outcomes'
    ]
  },
  {
    title: 'Workflow & Automation',
    description: 'Move beyond chat interfaces by embedding AI into real workflows - where work is identified, performed, reviewed, and measured.',
    bullets: [
        'Workflow automation components for extraction, classification, analysis, and action',
        'Human-in-the-loop controls for accountability and operational trust',
        'User-led automation capabilities that enable continuous improvement'
    ]
  },
  {
    title: 'Solution Accelerators',
    description: 'Deploy faster by starting from proven patterns rather than redesigning every solution from scratch.',
    bullets: [
        'A curated repository of reusable enterprise-ready solution patterns',
        'Shared building blocks that reduce design, build, and validation effort',
        'Configurable templates for common workflows and decision points'
    ]
  },
  {
    title: 'Security, Governance, and Control',
    description: 'Security, reliability, and risk controls are embedded across the lifecycle.',
    bullets: [
        'Role-based access aligned to enterprise identity and permissions',
        'Auditability and traceability across workflows and solution behavior',
        'Policy-aligned controls to support organization-specific requirements'
    ]
  },
  {
    title: 'Orchestration and Deployment',
    description: 'Customize solutions using flexible orchestration and deployment models, without vendor lock-in.',
    bullets: [
        'Model and vendor-agnostic framework supporting multi-agent workflows',
        'Multiple deployment options aligned to operational and security priorities',
        'Ongoing platform enhancements that benefit all deployed solutions'
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: 'Workflow Optimization',
    description: 'Eliminated 30–40% of low- or no-value work, driving 10%+ productivity gains for key surveillance workflow participants.',
  },
  {
    title: 'Operations Optimization',
    description: 'Reduced deferred output by 15–20% and operating costs by up to 5% by improving the speed and quality of operational decisions.',
  },
  {
    title: 'Payroll and Invoice Reconciliation',
    description: 'Delivered a 40–60% reduction in reconciliation effort while minimizing revenue leakage and invoicing errors for services-based operations.',
  },
];

export const ENABLEMENT_SERVICES: CaseStudyDetail[] = [
  {
    id: 'e1',
    title: 'Executive Alignment & AI Use Case Prioritization',
    category: 'Enablement',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800',
    content: {
      label1: 'Challenge',
      text1: 'Establish leadership alignment on high-impact AI opportunities and create a focused, execution-ready deployment roadmap.',
      label2: 'Solution',
      text2: 'Facilitated a structured working session with cross-functional leaders to align on practical AI applications, evaluate opportunities against business priorities, and identify use cases best suited for near-term deployment.',
      label3: 'Outcome',
      text3: 'Delivered a prioritized inventory of enterprise AI use cases, with clear executive alignment on which initiatives to advance first and a shared understanding of the path to accelerated deployment.'
    }
  },
  {
    id: 'e2',
    title: 'Enterprise AI Governance & Program Foundations',
    category: 'Enablement',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
    content: {
      label1: 'Challenge',
      text1: 'Establish the governance, ownership, and operating foundations required to scale enterprise AI deployments responsibly and consistently.',
      label2: 'Solution',
      text2: 'Defined a fit-for-purpose governance model covering roles, decision rights, standards, and review processes, aligned with the organization’s risk posture, operating model, and deployment priorities.',
      label3: 'Outcome',
      text3: 'Enabled coordinated execution of AI initiatives across teams, reduced duplication and fragmentation, and created the clarity needed to move AI solutions from isolated efforts into repeatable production deployments.'
    }
  },
];

export const FULL_CASE_STUDIES: CaseStudyDetail[] = [
  {
    id: '1',
    title: 'Workflow Optimization',
    category: 'Optimization',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    content: {
      label1: 'Challenge',
      text1: 'The surveillance team faced a growing volume of exceptions, making it difficult to meet resolution time KPIs and maintain consistent performance.',
      label2: 'Solution',
      text2: 'Deployed a workflow intelligence solution to analyze historical workflow metadata, identify structural issues, and redesign exception handling to reduce unnecessary work and accelerate resolution.',
      label3: 'Impact',
      text3: 'Eliminated 30–40% of low- or no-value work, driving 10%+ productivity gains for key surveillance workflow participants.'
    }
  },
  {
    id: '2',
    title: 'Operations Optimization',
    category: 'Optimization',
    imageUrl: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f138?auto=format&fit=crop&q=80&w=800',
    content: {
      label1: 'Challenge',
      text1: 'Fragmented data and slow analysis led to delayed decisions, deferred output, and higher operating costs.',
      label2: 'Solution',
      text2: 'Implemented a context-aware operations assistant integrating operational data, documents, and user-defined decision logic to improve speed and quality of analysis.',
      label3: 'Impact',
      text3: 'Reduced deferred output by 15–20% and operating costs by up to 5% by improving the speed and quality of operational decisions.'
    }
  },
  {
    id: '3',
    title: 'Payroll and Invoice Reconciliation',
    category: 'Optimization',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
    content: {
      label1: 'Challenge',
      text1: 'Manual reconciliation of timesheets with paper-based site access records created audit risk and revenue leakage.',
      label2: 'Solution',
      text2: 'Deployed an automated reconciliation solution to match timesheets with paper-based site access and gate records, identify discrepancies and take corrective action.',
      label3: 'Impact',
      text3: 'Delivered a 40–60% reduction in reconciliation effort while minimizing revenue leakage and invoicing errors for services-based operations.'
    }
  }
];

export const INSIGHTS: InsightTeaser[] = [
  {
    tag: 'Whitepaper',
    title: 'The State of Enterprise AI 2025',
    description: 'Why 80% of POCs fail to reach production and how to beat the odds.',
    linkText: 'Read the Report',
  },
  {
    tag: 'Case Study',
    title: 'Global Energy Giant Scales Production',
    description: 'How a major operator reduced deferred production by 20%.',
    linkText: 'Read Case Study',
  },
];

export const INSIGHTS_DATA: InsightArticle[] = [
  {
    id: '1',
    title: 'Modernizing Enterprise Workflows with AI-Driven Automation',
    abstract: 'Legacy systems and siloed processes slow enterprises down. This article explains how AI-driven automation — evolving beyond traditional RPA — can connect disparate systems, reduce manual effort, and streamline complex workflows across functions. Learn why intelligent workflow agents are becoming a practical lever for operational productivity and agility.',
    categories: ['Enterprise AI Strategy'],
    readingTime: '6-8 minutes',
    imageUrl: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'The Agility Advantage: How AI can be a game-changer for Mid-sized Enterprises',
    abstract: 'A practical look at how mid-sized enterprises can apply AI with speed and focus. This piece outlines a two-track approach that balances quick wins with longer-term transformation while minimizing disruption to core operations.',
    categories: ['Enterprise AI Strategy'],
    readingTime: '7-9 minutes',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Improving Safety and Compliance with Context-Aware AI',
    abstract: 'This article explores how context-aware AI can help HES teams improve consistency, accessibility, and compliance by simplifying procedure access, enriching historical data, and supporting personalized safety workflows.',
    categories: ['Risk, Governance & Trust', 'AI Use Cases'],
    readingTime: '5 minutes',
    imageUrl: 'https://images.unsplash.com/photo-1581092921461-eab62e97a783?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'Framework for Selecting AI Models That Fit Enterprise Needs',
    abstract: 'Choosing the right AI model requires more than benchmark performance. Part I introduces a structured framework to evaluate models based on enterprise fit, integration needs, and long-term scalability.',
    categories: ['Enterprise AI Strategy', 'Execution Approach'],
    readingTime: '8-10 minutes',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '5',
    title: 'Beyond Performance: Choosing AI Models Aligned to Enterprise Strategy',
    abstract: 'Part II extends the model selection framework to include commercial, sustainability, and governance considerations—helping leaders assess risk, cost, and strategic alignment for scalable AI deployment.',
    categories: ['Enterprise AI Strategy', 'Execution Approach'],
    readingTime: '8-10 minutes',
    imageUrl: 'https://images.unsplash.com/photo-1611974765215-0279a358943a?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '6',
    title: 'Applying AI to Drive Operational Value Across Workflows',
    abstract: 'This article shows how enterprise-ready AI can be applied across core operational workflows to accelerate analysis, improve decision quality, and reduce operational risk in real production environments.',
    categories: ['AI Use Cases'],
    readingTime: '5 minutes',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '7',
    title: 'Harnessing Generative AI for Enterprise Excellence',
    abstract: 'A whitepaper on the practical challenges enterprises face in adopting Generative AI - especially accuracy, consistency, and operational safety - and a systematic approach to bridging the gap between potential and performance.',
    categories: ['Enterprise AI Strategy', 'Execution Approach'],
    readingTime: '10-12 minutes',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
    isWhitepaper: true,
  }
];

export const FOOTER_LINKS: FooterSection[] = [
  {
    title: 'Foundation',
    links: ['Services', 'Solutions', 'Foundation', 'Security', 'Integrations'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Press', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Whitepapers', 'Documentation', 'Support'],
  },
];

export const HEADLINE_STATS = [
    { label: "ROI", value: "< 3 Months" },
    { label: "Solutions", value: "Deployment Ready" }
];

export const FILTER_OPTIONS: FilterOptions = {
  Industry: Object.values(Industry),
  Function: Object.values(FunctionArea),
  Outcome: Object.values(Outcome),
  Type: Object.values(SolutionType),
};