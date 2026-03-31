export type FooterPageSection = {
  title: string;
  items: string[];
};

export type FooterPage = {
  slug: string;
  label: string;
  title: string;
  category: string;
  summary: string;
  sections: FooterPageSection[];
};

export const buildTypePages: FooterPage[] = [
  {
    slug: 'web-platforms',
    label: 'Web platforms',
    title: 'Web Platforms',
    category: 'Build Type',
    summary:
      'High-performance web experiences built for growth, operations, and measurable commercial outcomes.',
    sections: [
      {
        title: 'What We Build',
        items: [
          'Marketing sites that move quickly from brand story to lead generation.',
          'Customer portals, dashboards, and workflow tools for active users.',
          'Commerce and transactional experiences with clean analytics and strong performance baselines.',
        ],
      },
      {
        title: 'How We Approach It',
        items: [
          'Design systems that keep the product consistent as the platform expands.',
          'Fast frontends, resilient APIs, and infrastructure that can absorb spikes in traffic.',
          'Instrumentation from the start so teams can see adoption, drop-off, and conversion.',
        ],
      },
      {
        title: 'Typical Outcomes',
        items: [
          'Faster launches for campaigns, products, and new market entries.',
          'Better conversion paths and clearer customer journeys.',
          'A platform foundation that is easier to maintain and evolve over time.',
        ],
      },
    ],
  },
  {
    slug: 'mobile-apps',
    label: 'Mobile apps',
    title: 'Mobile Apps',
    category: 'Build Type',
    summary:
      'iOS and Android products designed around real user habits, reliable releases, and scalable backend services.',
    sections: [
      {
        title: 'What We Build',
        items: [
          'Consumer mobile apps with strong onboarding, retention, and performance.',
          'Operational mobile tools for field teams, delivery teams, and internal workflows.',
          'Companion apps that extend existing platforms into mobile-first experiences.',
        ],
      },
      {
        title: 'How We Approach It',
        items: [
          'UX flows optimized for smaller screens, interrupted sessions, and real-world usage.',
          'Backend services that support notifications, authentication, sync, and reporting.',
          'Release planning that balances speed with store-readiness and product stability.',
        ],
      },
      {
        title: 'Typical Outcomes',
        items: [
          'Higher engagement through mobile-first touchpoints and repeat usage.',
          'Operational visibility for teams working away from desktops.',
          'A mobile product roadmap that fits the wider system, not just the app shell.',
        ],
      },
    ],
  },
  {
    slug: 'enterprise-systems',
    label: 'Enterprise systems',
    title: 'Enterprise Systems',
    category: 'Build Type',
    summary:
      'Internal platforms, business-critical workflows, and connected systems that reduce friction across teams.',
    sections: [
      {
        title: 'What We Build',
        items: [
          'Operational systems for finance, logistics, procurement, HR, and service delivery.',
          'Admin tools and internal platforms that replace fragmented spreadsheets and manual processes.',
          'Integrations that connect existing systems instead of forcing teams into disconnected tools.',
        ],
      },
      {
        title: 'How We Approach It',
        items: [
          'Discovery focused on bottlenecks, approvals, handoffs, and reporting needs.',
          'Role-based experiences that match how different teams actually work.',
          'Architecture planned for reliability, permissions, auditability, and long-term ownership.',
        ],
      },
      {
        title: 'Typical Outcomes',
        items: [
          'Lower operational drag and fewer manual workarounds.',
          'Clearer visibility across departments and decision-making layers.',
          'Systems that support scale without multiplying internal complexity.',
        ],
      },
    ],
  },
  {
    slug: 'ai-software',
    label: 'AI software',
    title: 'AI Software',
    category: 'Build Type',
    summary:
      'Practical AI-enabled products and workflows that improve delivery, insight, and decision support.',
    sections: [
      {
        title: 'What We Build',
        items: [
          'AI-assisted internal tools for summarization, classification, drafting, and support.',
          'Customer-facing features that use AI to improve search, recommendations, and guidance.',
          'Data-to-action systems that combine automation with human review where it matters.',
        ],
      },
      {
        title: 'How We Approach It',
        items: [
          'Use-case selection based on operational value, not hype.',
          'Workflows that combine prompts, data access, business rules, and observability.',
          'Guardrails for accuracy, privacy, and escalation when confidence is low.',
        ],
      },
      {
        title: 'Typical Outcomes',
        items: [
          'Faster execution in repetitive or research-heavy tasks.',
          'Smarter user experiences with lower response time and better context.',
          'AI features that are maintainable because they are treated like systems, not experiments.',
        ],
      },
    ],
  },
];

export const systemLayerPages: FooterPage[] = [
  {
    slug: 'product-design',
    label: 'Product design',
    title: 'Product Design',
    category: 'System Layer',
    summary:
      'Clear product thinking, structured user flows, and interface systems that give software direction before it scales.',
    sections: [
      {
        title: 'What It Covers',
        items: [
          'User journeys, interface logic, content hierarchy, and feature prioritization.',
          'Wireframes and interaction decisions that align product goals with user behavior.',
          'Design system thinking that keeps visual and product decisions consistent across surfaces.',
        ],
      },
      {
        title: 'Why It Matters',
        items: [
          'Good design reduces friction before engineering effort compounds around weak flows.',
          'Teams make faster decisions when the product model is clearly defined.',
          'Users adopt software more easily when the experience is coherent and intentional.',
        ],
      },
      {
        title: 'What Clients Gain',
        items: [
          'A product direction teams can align around.',
          'Interfaces that are easier to build, test, and refine.',
          'A stronger foundation for launch, iteration, and future features.',
        ],
      },
    ],
  },
  {
    slug: 'engineering',
    label: 'Engineering',
    title: 'Engineering',
    category: 'System Layer',
    summary:
      'Frontend, backend, and integration work shaped for maintainability, velocity, and dependable delivery.',
    sections: [
      {
        title: 'What It Covers',
        items: [
          'Application architecture, APIs, frontend systems, services, and integrations.',
          'Code quality, review workflows, release practices, and delivery discipline.',
          'The technical choices that determine how easily a product can grow.',
        ],
      },
      {
        title: 'Why It Matters',
        items: [
          'Engineering quality compounds over time in speed, stability, and change cost.',
          'Strong foundations reduce incidents and make feature work less painful.',
          'Clean integration patterns prevent the stack from becoming operationally brittle.',
        ],
      },
      {
        title: 'What Clients Gain',
        items: [
          'Reliable delivery without overengineering.',
          'A codebase that teams can keep working in with confidence.',
          'A clearer path from roadmap decisions to production releases.',
        ],
      },
    ],
  },
  {
    slug: 'cloud-and-data',
    label: 'Cloud and data',
    title: 'Cloud And Data',
    category: 'System Layer',
    summary:
      'Infrastructure, pipelines, and reporting layers that support performance, resilience, and visibility.',
    sections: [
      {
        title: 'What It Covers',
        items: [
          'Hosting architecture, deployment workflows, environments, and observability.',
          'Data collection, transformations, storage, dashboards, and reporting systems.',
          'Security and resilience patterns that protect uptime and business continuity.',
        ],
      },
      {
        title: 'Why It Matters',
        items: [
          'Products fail under growth when infrastructure and data systems are treated as afterthoughts.',
          'Leadership needs trustworthy data to make commercial and operational decisions.',
          'A well-run cloud layer keeps teams moving without constant firefighting.',
        ],
      },
      {
        title: 'What Clients Gain',
        items: [
          'Infrastructure that scales with less stress and more predictability.',
          'Cleaner reporting across products, teams, and operations.',
          'A stronger technical base for automation and AI-enabled workflows.',
        ],
      },
    ],
  },
  {
    slug: 'scale-and-enablement',
    label: 'Scale and enablement',
    title: 'Scale And Enablement',
    category: 'System Layer',
    summary:
      'The processes, tooling, and operating patterns that help teams sustain growth after launch.',
    sections: [
      {
        title: 'What It Covers',
        items: [
          'Delivery workflows, internal tooling, documentation, and team enablement.',
          'Operational readiness for support, iteration, onboarding, and governance.',
          'The connective systems that help software survive real business growth.',
        ],
      },
      {
        title: 'Why It Matters',
        items: [
          'Growth breaks teams when the operating model lags behind the product.',
          'Enablement reduces dependency on a few people holding critical context.',
          'Healthy internal systems make scaling feel deliberate instead of reactive.',
        ],
      },
      {
        title: 'What Clients Gain',
        items: [
          'More resilient teams and smoother handoffs across functions.',
          'Better continuity between launch, maintenance, and expansion.',
          'A business system that supports change instead of resisting it.',
        ],
      },
    ],
  },
];

export const allFooterPages = [...buildTypePages, ...systemLayerPages];
