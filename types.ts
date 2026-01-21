

export interface NavItem {
  label: string;
  href: string;
  action?: string; // 'scroll' | 'navigate'
}

export type PageView = 'home' | 'services' | 'solutions' | 'foundation' | 'casestudies' | 'insights' | 'contact';

export enum SolutionType {
  ASSISTANT = 'Assistant',
  AGENT = 'Agent',
  WORKFLOW_AUTOMATION = 'Workflow Automation',
  PREDICTIVE_MODEL = 'Predictive Model',
}

export enum Industry {
  MANUFACTURING = 'Manufacturing',
  UTILITIES = 'Utilities',
  ENERGY = 'Energy',
  FINANCE = 'Finance',
  RETAIL = 'Retail',
  HEALTHCARE = 'Healthcare',
}

export enum FunctionArea {
  OPERATIONS = 'Operations',
  IT_DIGITAL = 'IT/Digital',
  HSE = 'HSE',
  SUPPLY_CHAIN = 'Supply Chain',
  HR = 'HR',
  LEGAL = 'Legal',
  CUSTOMER_SERVICE = 'Customer Service',
}

export enum Outcome {
  OPERATIONAL_EFFICIENCY = 'Operational Efficiency',
  PRODUCTIVITY = 'Productivity',
  COST_REDUCTION = 'Cost Reduction',
  REVENUE_LEAKAGE = 'Revenue Leakage',
  RISK_COMPLIANCE = 'Risk & Compliance',
  DECISION_INTELLIGENCE = 'Decision Intelligence',
  ASSET_OPTIMIZATION = 'Asset Optimization',
  PROCESS_OPTIMIZATION = 'Process Optimization',
  CYBER_DEFENSE = 'Cyber Defense',
}

export interface Solution {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  tags: {
    industry: Industry[];
    function: FunctionArea[];
    outcome: Outcome[];
    type: SolutionType;
  };
  roi: {
    range: string;
    description: string;
  };
  features: string[]; // Replaces Frame/Engineer/Embed
  integrations: string[];
  deployment: string[];
  evaluation: string[];
}

export interface FilterState {
  industry: Industry[];
  function: FunctionArea[];
  outcome: Outcome[];
  type: SolutionType[];
}

// --- Preserved Types for App Functionality ---

// Alias for backward compatibility if needed
export type SolutionCard = Solution; 

export interface PlatformFeature {
  title: string;
  description: string;
  bullets?: string[];
}

export interface PlatformPrinciple {
  title: string;
  description: string;
}

export interface PlatformCapability {
  title: string;
  description: string;
  bullets: string[];
}

export interface CaseStudy {
  title: string;
  description: string;
}

// New type for the detailed Case Studies page
export interface CaseStudyDetail {
  id: string;
  title: string;
  category: 'Optimization' | 'Enablement';
  imageUrl: string;
  content: {
    label1: string; // Challenge
    text1: string;
    label2: string; // Solution
    text2: string;
    label3: string; // Impact or Outcome
    text3: string;
  };
}

// New type for Service Offerings
export interface ServiceOffering {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export interface InsightTeaser {
  tag: string;
  title: string;
  description: string;
  linkText: string;
}

export interface FooterSection {
  title: string;
  links: string[];
}

export interface FilterOptions {
  Industry: string[];
  Function: string[];
  Outcome: string[];
  Type: string[];
}

// --- Insights Page Types ---

export interface InsightArticle {
  id: string;
  title: string;
  abstract: string;
  categories: string[];
  readingTime: string;
  imageUrl: string;
  isWhitepaper?: boolean;
}

export type Category = 
  | 'All'
  | 'Enterprise AI Strategy'
  | 'Risk, Governance & Trust'
  | 'Execution Approach'
  | 'AI Use Cases';

export const CATEGORIES: Category[] = [
  'Enterprise AI Strategy',
  'Risk, Governance & Trust',
  'Execution Approach',
  'AI Use Cases'
];