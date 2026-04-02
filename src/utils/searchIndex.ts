// Search index for all pages, products, and services in Industry Iceberg website
export interface SearchItem {
  id: string;
  title: string;
  description: string;
  path: string;
  category: 'page' | 'product' | 'service' | 'blog';
  keywords: string[];
}

export const searchIndex: SearchItem[] = [
  // Main Pages
  {
    id: 'home',
    title: 'Home - Industry Iceberg',
    description: 'AI-Driven Enterprise Solutions for Pharma | Industry Iceberg',
    path: '/',
    category: 'page',
    keywords: ['home', 'industry iceberg', 'ai solutions', 'pharma', 'enterprise', 'homepage', 'main']
  },
  {
    id: 'contact',
    title: 'Contact Us',
    description: 'Contact IndustryIceberg to explore AI-powered solutions for pharma, compliance, and enterprise transformation.',
    path: '/contact-us',
    category: 'page',
    keywords: ['contact', 'support', 'help', 'inquiry', 'reach us', 'email', 'phone']
  },
  {
    id: 'blog',
    title: 'Blog',
    description: 'Latest insights on regulatory compliance, AI in life sciences, and industry innovations.',
    path: '/blog',
    category: 'blog',
    keywords: ['blog', 'news', 'articles', 'insights', 'updates', 'posts', 'content']
  },

  // Products
  {
    id: 'complianceloop',
    title: 'Compliance Loop',
    description: 'AI Platform for Life Sciences to find compliant partners, streamline workflows, and ensure regulatory excellence.',
    path: '/complianceloop',
    category: 'product',
    keywords: ['compliance loop', 'compliance', 'life sciences', 'partners', 'workflows', 'regulatory']
  },
  {
    id: 'complisense',
    title: 'CompliSense',
    description: 'cGMP Intelligence Platform providing real-time FDA 483 insights, GMP trend analysis and actionable intelligence.',
    path: '/complisense/dashboard',
    category: 'product',
    keywords: ['complisense', 'cgmp', 'fda 483', 'gmp', 'compliance intelligence', 'inspections']
  },
  {
    id: 'complisense-observation',
    title: 'CompliSense Observation Analysis',
    description: 'Analyze FDA 483 observations, map them to CFRs, track patterns, and get AI-driven CAPA recommendations.',
    path: '/complisense/observation-analysis',
    category: 'product',
    keywords: ['observation analysis', 'cfr mapping', 'capa', 'fda observations', 'analysis']
  },
  {
    id: 'veritascribe',
    title: 'VeritaScribe',
    description: 'AI Document Automation for document drafting, compliance, summaries, edits, and smart collaboration.',
    path: '/veritascribe',
    category: 'product',
    keywords: ['veritascribe', 'document automation', 'ai documents', 'drafting', 'collaboration']
  },
  {
    id: 'live-lms',
    title: 'Live LMS - Video Based',
    description: 'Pharma Training Platform with interactive, video-based training, real-time tracking, quizzes, and certifications.',
    path: '/live-lms',
    category: 'product',
    keywords: ['live lms', 'lms', 'training', 'video', 'e-learning', 'certification', 'pharma training']
  },
  {
    id: 'ectd-ai',
    title: 'ECTD AI',
    description: 'eCTD Document Validation automating submission validation, detecting structure, OCR, and legibility issues.',
    path: '/ectd-ai',
    category: 'product',
    keywords: ['ectd ai', 'ectd', 'document validation', 'regulatory submission', 'pharma submission']
  },

  // Compliance Loop Services
  {
    id: 'cmo',
    title: 'Find Compliant CMOs',
    description: 'Find capable, compliant Contract Manufacturing Organizations quickly with real-time data and certifications.',
    path: '/complianceloop/services/cmo',
    category: 'service',
    keywords: ['cmo', 'contract manufacturing', 'manufacturing', 'api', 'drug product', 'biologics']
  },
  {
    id: 'cdmo',
    title: 'Find Compliant CDMOs',
    description: 'Discover compliant Contract Development & Manufacturing Organizations for formulation and lifecycle support.',
    path: '/complianceloop/services/cdmo',
    category: 'service',
    keywords: ['cdmo', 'contract development', 'manufacturing', 'formulation', 'scale-up']
  },
  {
    id: 'cro',
    title: 'Find Compliant CROs',
    description: 'Find qualified, compliant Contract Research Organizations with real-time data and trial support.',
    path: '/complianceloop/services/cro',
    category: 'service',
    keywords: ['cro', 'contract research', 'clinical trials', 'research', 'biostatistics', 'regulatory']
  },
  {
    id: 'preclinical',
    title: 'Pre-Clinical Services',
    description: 'Find expert pre-clinical labs, access real-time data, and ensure GLP-compliant drug development.',
    path: '/complianceloop/services/preclinical',
    category: 'service',
    keywords: ['preclinical', 'pre-clinical', 'glp', 'toxicology', 'pharmacokinetics', 'pk', 'pd']
  },
  {
    id: 'clinical',
    title: 'Clinical Services',
    description: 'Find compliant clinical partners, manage trials, and ensure regulatory and patient accuracy.',
    path: '/complianceloop/services/clinical',
    category: 'service',
    keywords: ['clinical', 'clinical trials', 'gcp', 'patient recruitment', 'pharmacovigilance']
  },
  {
    id: 'analytical-testing',
    title: 'Analytical Testing Labs (ATL)',
    description: 'Find compliant analytical testing labs ensuring quality, stability, and regulatory-ready products.',
    path: '/complianceloop/services/analytical-testing',
    category: 'service',
    keywords: ['analytical testing', 'atl', 'lab', 'stability testing', 'bioanalytical', 'gmp labs']
  },
  {
    id: 'stability-warehouse',
    title: 'Stability & Warehouse',
    description: 'Find compliant stability and warehouse partners ensuring product quality, safety, and regulatory compliance.',
    path: '/complianceloop/services/stability-warehouse',
    category: 'service',
    keywords: ['stability', 'warehouse', 'storage', 'cold chain', 'temperature controlled']
  },

  // Other Services
  {
    id: 'complaint-site-search',
    title: 'Complaint Site Selection',
    description: 'Select compliant manufacturing sites using complaint data, quality metrics, and risk-based analysis.',
    path: '/complaint-site-search',
    category: 'service',
    keywords: ['complaint site', 'site selection', 'manufacturing site', 'quality metrics', 'risk assessment']
  },
  {
    id: 'video-creation',
    title: 'AI Video Creation for SOPs',
    description: 'Transform SOPs and training docs into engaging, compliant videos with AI-powered automation.',
    path: '/video-creation-service',
    category: 'service',
    keywords: ['video creation', 'sop video', 'training videos', 'ai video', 'e-learning videos']
  },
  {
    id: 'ai-technologies',
    title: 'AI Technologies & Solutions',
    description: 'AI technologies and solutions for pharmaceutical and life sciences industries.',
    path: '/ai-technologies-services',
    category: 'service',
    keywords: ['ai technologies', 'ai solutions', 'artificial intelligence', 'machine learning']
  },
  {
    id: 'enterprise-llm',
    title: 'Enterprise LLM Solutions',
    description: 'Enterprise Large Language Model solutions for pharmaceutical companies.',
    path: '/enterprise-llm-solutions',
    category: 'service',
    keywords: ['llm', 'large language model', 'enterprise llm', 'ai models', 'gpt']
  }
];

// Search function that filters the index based on query
export function searchSite(query: string): SearchItem[] {
  if (!query || query.trim().length < 2) return [];
  
  const normalizedQuery = query.toLowerCase().trim();
  const queryWords = normalizedQuery.split(/\s+/);
  
  return searchIndex
    .map(item => {
      // Calculate relevance score
      let score = 0;
      const searchText = `${item.title} ${item.description} ${item.keywords.join(' ')}`.toLowerCase();
      
      // Exact match in title gets highest score
      if (item.title.toLowerCase().includes(normalizedQuery)) {
        score += 100;
      }
      
      // Exact match in description
      if (item.description.toLowerCase().includes(normalizedQuery)) {
        score += 50;
      }
      
      // Keyword matches
      const keywordMatches = item.keywords.filter(kw => 
        kw.toLowerCase().includes(normalizedQuery)
      ).length;
      score += keywordMatches * 30;
      
      // Partial word matches
      queryWords.forEach(word => {
        if (searchText.includes(word)) {
          score += 10;
        }
      });
      
      return { item, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8) // Return top 8 results
    .map(({ item }) => item);
}
