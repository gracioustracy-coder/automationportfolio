import {
  Workflow,
  Brain,
  Database,
  Plug,
  GitBranch,
  Mail,
  ShieldCheck,
  Clock,
  Target,
  Zap,
  Filter,
  AlertTriangle,
  RefreshCw,
  Search,
  FileText,
  ListChecks,
  Wrench,
  Eye,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';

// ===== Personal Info (replace placeholders) =====
export const personalInfo = {
  name: 'Grace Onyin Peters',
  title: 'Business Process Automation / AI Workflow Automation',
  tagline: 'Turning Repetitive Business Processes Into Intelligent Automated Systems',
  email: 'gracioustracy@gmail.com',
  linkedin: 'https://www.linkedin.com/in/grace-peter-s-318a5b286?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  github: 'https://github.com/gracioustracy-coder/ONYIN#grace-onyin-peters--portfolio',
  shortBio:
    'I combine an accounting background with hands-on automation skills to design practical workflows that reduce manual work, improve data integrity, and keep humans involved where judgment matters.',
};

// ===== Navigation =====
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'What I Do', href: '#what-i-do' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Approach', href: '#approach' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

// ===== What I Do =====
export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: ServiceItem[] = [
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description:
      'Designing end-to-end automated workflows that connect email, forms, databases, and APIs — replacing repetitive manual steps with reliable, repeatable processes.',
  },
  {
    icon: Brain,
    title: 'AI-Powered Processing',
    description:
      'Integrating OpenAI and LLMs to extract structured data from unstructured inputs, generate responses, and assist with decision-making while keeping humans in control.',
  },
  {
    icon: GitBranch,
    title: 'Business Logic & Conditional Routing',
    description:
      'Building conditional logic, switch nodes, and branching paths that route work to the right destination based on data content and business rules.',
  },
  {
    icon: ShieldCheck,
    title: 'Error Handling & Reliability',
    description:
      'Adding defensive parsing, try/catch fallbacks, validation, and failure alerts so workflows degrade gracefully instead of failing silently.',
  },
  {
    icon: Database,
    title: 'Data Management',
    description:
      'Using Airtable as a structured data backbone — logging records, managing relationships, updating entries, and maintaining data integrity across workflows.',
  },
  {
    icon: Eye,
    title: 'Human-in-the-Loop Design',
    description:
      'Designing workflows that create drafts, send alerts, and queue approvals so pricing, customer communication, and judgment calls stay with people.',
  },
];

// ===== Skills =====
export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Automation',
    icon: Workflow,
    skills: ['n8n', 'Zapier', 'Workflow Design', 'Triggers & Actions', 'Conditional Logic', 'Scheduling', 'Webhooks'],
  },
  {
    title: 'AI',
    icon: Brain,
    skills: ['OpenAI', 'LLM Workflows', 'Prompt Design', 'Structured Data Extraction', 'AI-Generated Responses', 'AI-Assisted Processing'],
  },
  {
    title: 'Data',
    icon: Database,
    skills: ['Airtable', 'Structured Data', 'Data Validation', 'Record Management'],
  },
  {
    title: 'Integrations',
    icon: Plug,
    skills: ['Gmail', 'Fillout', 'APIs', 'Webhooks', 'Third-Party Integrations'],
  },
  {
    title: 'Business / Process',
    icon: Target,
    skills: ['Business Process Analysis', 'Workflow Optimization', 'Business Logic', 'Error Handling', 'Data Integrity', 'Human-in-the-Loop Workflows'],
  },
];

// ===== Projects =====
export interface WorkflowStep {
  label: string;
  icon: LucideIcon;
}

export interface Challenge {
  title: string;
  detail: string;
}

export interface KeyDecision {
  title: string;
  detail: string;
}

export interface EvidenceImage {
  src: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  tools: string[];
  problem: string;
  solution: string;
  workflow: WorkflowStep[];
  keyDecisions: KeyDecision[];
  challenges: Challenge[];
  result: string;
  evidence: string[];
  evidenceImages?: EvidenceImage[];
  accent: 'blue' | 'cyan' | 'teal';
  featured: boolean;
  supporting?: boolean;
}

export const projects: Project[] = [
  {
    id: 'supplier-quote-assistant',
    title: 'AI-Powered Supplier Quote Assistant',
    tagline:
      'An AI-powered workflow that processes incoming supplier quote requests, extracts structured information, logs the request, and prepares a professional response for human review.',
    tools: ['n8n', 'Gmail', 'OpenAI', 'Airtable'],
    problem:
      'Suppliers send quote requests by email. Manually reading the email, extracting requester information, identifying requested items and quantities, recording the request, and drafting a response is repetitive and time-consuming.',
    solution:
      'I built an automated pipeline that detects incoming quote request emails, uses OpenAI to extract structured information, logs the request in Airtable, generates a professional response, and creates the response as a Gmail draft for human review.',
    workflow: [
      { label: 'Gmail Trigger', icon: Mail },
      { label: 'OpenAI Extraction', icon: Brain },
      { label: 'JSON Parsing', icon: FileText },
      { label: 'Airtable Logging', icon: Database },
      { label: 'Response Drafting', icon: FileText },
      { label: 'Gmail Draft', icon: Mail },
      { label: 'Human Review', icon: Eye },
    ],
    keyDecisions: [
      {
        title: 'Gmail "Create Draft" instead of auto-send',
        detail:
          'The workflow explicitly creates a Gmail draft rather than automatically sending the message. This ensures pricing and customer communication remain under human control.',
      },
      {
        title: 'Two-stage OpenAI calls',
        detail:
          'The first OpenAI call extracts structured data (requester name, email, company, items, quantities, deadline). A second call generates the customer-facing response — separating extraction from communication.',
      },
      {
        title: 'Defensive parsing layer',
        detail:
          'A Code node parses the AI output with try/catch JSON parsing and fallback/debug handling, so the workflow fails gracefully if the AI response is malformed.',
      },
    ],
    challenges: [
      {
        title: 'Correcting OpenAI Responses API output path',
        detail:
          'I had to inspect the actual OpenAI Responses API output and correct incorrect assumptions about the structure. The workflow ultimately used the actual output path: output[0].content[0].text.',
      },
      {
        title: 'Node-reference and missing-name fixes',
        detail:
          'I fixed node-reference issues and added fallback handling when requesterName was unavailable, ensuring the workflow could continue even with incomplete data.',
      },
    ],
    result:
      'The workflow successfully processed a real test email, extracted structured information, logged it to Airtable, generated a response, and created a Gmail draft.',
    evidence: [
      'OpenAI output',
      'Parsed JSON',
      'Airtable record',
      'Gmail draft confirmation',
      'Workflow screenshots',
    ],
    evidenceImages: [
      {
        src: '/assets/images/case-studies/customer-support-acknowledgement-email/WhatsApp_Image_2026-10-08_at_4.47.56_AM_(1).jpeg',
        caption:
          'Capstone supplier quote automation: The workflow receives a supplier request, extracts structured information with AI, logs the request, drafts a response, and keeps the final message under human review.',
      },
    ],
    accent: 'blue',
    featured: true,
  },
  {
    id: 'gym-membership-system',
    title: 'Gym Membership Management System',
    tagline:
      'An end-to-end automated membership lifecycle system covering onboarding, expiry reminders, and renewals.',
    tools: ['n8n', 'Airtable', 'Gmail', 'Fillout'],
    problem:
      'Small gyms may manually track membership information, expiry dates, and renewals, creating opportunities for missed renewals and repetitive administrative work.',
    solution:
      'I built three connected automation workflows sharing one Airtable database: Onboarding, Expiry Reminder, and Renewal — covering the full membership lifecycle.',
    workflow: [
      { label: 'Fillout Form', icon: FileText },
      { label: 'Webhook', icon: Zap },
      { label: 'Calculate Expiry', icon: Clock },
      { label: 'Airtable', icon: Database },
      { label: 'Welcome Email', icon: Mail },
    ],
    keyDecisions: [
      {
        title: 'Calendar-accurate month math',
        detail:
          'The expiry calculation uses calendar-accurate month math rather than fixed day counts, so a membership starting on the 31st expires correctly at month boundaries.',
      },
      {
        title: 'Profile photo handling',
        detail:
          'The onboarding workflow handles uploaded profile photos and formats them for Airtable attachments, bridging the gap between form uploads and database storage.',
      },
      {
        title: 'Daily confirmation when nothing is due',
        detail:
          'The expiry reminder sends a daily confirmation when no renewals are due, so the gym owner knows the automation is running — silence is not mistaken for failure.',
      },
      {
        title: 'Duplicate-prevention on renewal',
        detail:
          'The renewal workflow searches existing records by email before updating. If no matching member exists, the administrator is alerted instead of creating a duplicate.',
      },
    ],
    challenges: [
      {
        title: 'Critical Airtable filter formula bug',
        detail:
          'During testing, I identified a critical issue where an incorrectly constructed search formula could cause unintended records to be updated. The correct logic used a field comparison: {Email} = \'{{ $json.body.email }}\'. The affected test data was cleaned up and the workflow was rebuilt and tested from a clean state.',
      },
      {
        title: 'Resolving eight integration issues',
        detail:
          'Other issues solved included inconsistent Fillout webhook field names, Airtable date field mapping, photo URL handling, Airtable permissions, conflicting webhook paths, incorrect Gmail node references, undefined values in downstream expressions, and personalized first-name extraction.',
      },
    ],
    result:
      'The completed system successfully handles onboarding, expiry reminders, and renewals using one shared Airtable database, with failure alerts and duplicate-prevention logic built in.',
    evidence: [
      'n8n workflow screenshots',
      'Airtable outputs',
      'JSON outputs',
      'Execution logs',
      'Successful test results',
    ],
    evidenceImages: [
      {
        src: '/assets/images/case-studies/membership-renewal-confirmation-sep-30/Screenshot_2026-09-08_004515_now.png',
        caption:
          'Successful membership renewal: The workflow finds the existing member, calculates the new start and expiry dates, updates the Airtable record, and sends a personalized confirmation email.',
      },
      {
        src: '/assets/images/case-studies/new-member-welcome-email/Screenshot_(11).png',
        caption:
          'Automated member onboarding: After registration, the workflow creates the member record and automatically sends a personalized welcome email with the membership plan and dates.',
      },
      {
        src: '/assets/images/case-studies/membership-renewal-confirmation-sep-25/WhatsApp_Image_2026-10-08_at_4.45.32_AM.jpeg',
        caption:
          'Renewal workflow successfully executed: Demonstrates automated record updating and personalized email confirmation after a member renews.',
      },
    ],
    accent: 'cyan',
    featured: true,
  },
  {
    id: 'customer-enquiry-intake',
    title: 'Customer Enquiry Intake Workflow',
    tagline:
      'Automatically routes incoming customer contact-form submissions to the appropriate acknowledgement email based on inquiry type.',
    tools: ['n8n', 'Fillout'],
    problem:
      'Customer enquiries arrive through a single contact form, but different inquiry types (support, sales, general) need different acknowledgement responses. Manual routing is slow and inconsistent.',
    solution:
      'I built a workflow that receives Fillout form submissions via webhook, uses a Switch node to route by inquiry type, and sends a personalized acknowledgement email for each path.',
    workflow: [
      { label: 'Fillout Form', icon: FileText },
      { label: 'Webhook', icon: Zap },
      { label: 'Switch Node', icon: Filter },
      { label: 'Support / Sales / General', icon: GitBranch },
      { label: 'Acknowledgement Email', icon: Mail },
    ],
    keyDecisions: [
      {
        title: 'First-name extraction for personalization',
        detail:
          'The workflow extracts the first name from the submission to personalize each acknowledgement email, rather than sending a generic response.',
      },
      {
        title: 'Switch-node routing by inquiry type',
        detail:
          'A Switch node routes the workflow to different branches based on the inquiry type field, keeping the logic clean and extensible for future inquiry categories.',
      },
    ],
    challenges: [
      {
        title: 'Case sensitivity in webhook payload',
        detail:
          'The real Fillout webhook payload used lowercase inquiry type values, requiring attention to case sensitivity when configuring the Switch node conditions.',
      },
    ],
    result:
      'The workflow routes customer enquiries by type and sends personalized acknowledgement emails, with first-name extraction for a more professional response.',
    evidence: ['n8n workflow screenshots', 'Fillout webhook payload', 'Execution logs'],
    evidenceImages: [
      {
        src: '/assets/images/case-studies/customer-support-acknowledgement-email/WhatsApp_Image_2026-10-08_at_4.47.56_AM.jpeg',
        caption:
          'Automated customer enquiry response: A submitted support enquiry is identified and routed to a personalized acknowledgement email, reducing manual response time.',
      },
      {
        src: '/assets/images/case-studies/customer-support-email-real-world-evidence/WhatsApp_Image_2026-10-08_at_3.45.07_AM_(1).jpeg',
        caption:
          'Real email evidence: A received support request demonstrates the type of customer communication the enquiry-intake workflow is designed to automate and respond to.',
      },
    ],
    accent: 'teal',
    featured: false,
    supporting: true,
  },
];

// ===== Automation Approach =====
export interface ApproachStep {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const approachSteps: ApproachStep[] = [
  {
    number: 1,
    icon: Search,
    title: 'Understand the Business Problem',
    description: 'Before any tool is opened, I make sure I understand the actual business problem — what work is repetitive, what costs time, and what errors cost money.',
  },
  {
    number: 2,
    icon: ListChecks,
    title: 'Map the Existing Process',
    description: 'I map the current process step by step — who does what, what data moves where, and where delays or errors typically occur.',
  },
  {
    number: 3,
    icon: AlertTriangle,
    title: 'Identify Repetitive & Manual Steps',
    description: 'I identify which steps are truly repetitive and worth automating, and which steps require human judgment that should be preserved.',
  },
  {
    number: 4,
    icon: Workflow,
    title: 'Design the Workflow',
    description: 'I design the workflow architecture — triggers, data transformations, conditional routing, and the human checkpoints where approval is needed.',
  },
  {
    number: 5,
    icon: Plug,
    title: 'Connect the Required Tools',
    description: 'I connect the tools — email, forms, databases, APIs, AI — making sure data flows correctly between each step and formats are handled properly.',
  },
  {
    number: 6,
    icon: ShieldCheck,
    title: 'Add Validation & Error Handling',
    description: 'I add data validation, try/catch parsing, fallback handling, and failure alerts so the workflow degrades gracefully instead of failing silently.',
  },
  {
    number: 7,
    icon: Wrench,
    title: 'Test Edge Cases',
    description: 'I test with real data and edge cases — missing fields, unexpected formats, empty results, duplicate records — and fix what breaks.',
  },
  {
    number: 8,
    icon: Eye,
    title: 'Keep Humans Involved Where Judgment Matters',
    description: 'I design drafts, alerts, and approval steps so pricing, customer communication, and judgment calls remain with people, not automation.',
  },
  {
    number: 9,
    icon: TrendingUp,
    title: 'Review & Improve Reliability',
    description: 'After testing, I review the result, clean up data, fix remaining issues, and improve the workflow\'s reliability for ongoing use.',
  },
];

// ===== Journey =====
export interface JourneyItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const journeyItems: JourneyItem[] = [
  {
    icon: Target,
    title: 'Accounting Foundation',
    description:
      'My background in accounting gave me a grounding in business processes, data accuracy, and the importance of controls — skills that directly transfer to automation work.',
  },
  {
    icon: Workflow,
    title: 'Discovering Automation',
    description:
      'I became interested in using technology to improve repetitive business processes I encountered, and started developing hands-on skills with n8n, Zapier, and connected tools.',
  },
  {
    icon: Brain,
    title: 'Adding AI to the Toolkit',
    description:
      'I integrated OpenAI and LLM workflows into my automation projects — for structured data extraction, response drafting, and AI-assisted processing with human oversight.',
  },
  {
    icon: RefreshCw,
    title: 'Building Real Projects',
    description:
      'I built working automation projects — a supplier quote assistant, a gym membership system, and a customer enquiry router — each involving real tools, real data, and real troubleshooting.',
  },
  {
    icon: ShieldCheck,
    title: 'Focusing on Reliability',
    description:
      'Through testing and debugging, I learned that good automation is not just about connecting tools — it is about validation, error handling, data integrity, and knowing where humans should stay involved.',
  },
];

// ===== Tools / Tech Icons (text-based badges) =====
export const toolBadges = [
  'n8n',
  'Zapier',
  'OpenAI',
  'Airtable',
  'Gmail',
  'Fillout',
  'Webhooks',
  'APIs',
  'JSON',
  'Conditional Logic',
  'Scheduling',
  'Data Validation',
];

