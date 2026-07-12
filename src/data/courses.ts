import { Course, CertificationCourse } from '../types';

export const COURSES: Record<string, Course> = {
  'b-com': {
    id: 'b-com',
    name: 'B.Com (Bachelor of Commerce)',
    description: 'Expert study materials for Financial Accounting, Business Law, Corporate Taxation, Cost Auditing, and Macroeconomics.',
    icon: 'account_balance',
    color: '#10B981', // emerald
    accentColor: 'rgba(16, 185, 129, 0.1)',
    subjects: [
      {
        id: 'financial-accounting',
        name: 'Financial Accounting',
        code: 'BC-101',
        semester: 'Semester I',
        description: 'Core concepts of double-entry bookkeeping, ledger creation, trial balance, and final statements preparation.',
        notesLink: 'https://drive.google.com/drive/folders/16LpL4C79F3fQzO7R_pY60p8g9V_rGshZ?usp=sharing',
        questionBankLink: 'https://drive.google.com/drive/folders/17B_RmdGgq9g_4Z8S9gV-Fh6N4gR99Z_k?usp=sharing',
        pastPapersLink: 'https://drive.google.com/drive/folders/18R9v_g9g4g_PzO8S9gV-ZshZ9Gsh_FmR?usp=sharing',
        chapters: [
          'Introduction to Accounting Principles',
          'Journalizing, Ledger Posting, and Trial Balance',
          'Depreciation, Reserves, and Provisions',
          'Preparation of Final Accounts (Trading & Profit & Loss)',
          'Partnership Accounts (Admission, Retirement & Dissolution)'
        ]
      },
      {
        id: 'business-laws',
        name: 'Business & Mercantile Law',
        code: 'BC-102',
        semester: 'Semester I',
        description: 'Understand the legal frameworks governing contracts, partnerships, sales of goods, and consumer protection.',
        notesLink: 'https://drive.google.com/drive/folders/16LpL4C79F3fQzO7R_pY60p8g9V_rGshZ?usp=sharing',
        questionBankLink: 'https://drive.google.com/drive/folders/17B_RmdGgq9g_4Z8S9gV-Fh6N4gR99Z_k?usp=sharing',
        pastPapersLink: 'https://drive.google.com/drive/folders/18R9v_g9g4g_PzO8S9gV-ZshZ9Gsh_FmR?usp=sharing',
        chapters: [
          'The Indian Contract Act, 1872',
          'The Sale of Goods Act, 1930',
          'The Indian Partnership Act, 1932',
          'The Limited Liability Partnership Act, 2008',
          'The Consumer Protection Act, 2019'
        ]
      },
      {
        id: 'corporate-taxation',
        name: 'Income Tax Law & Practice',
        code: 'BC-301',
        semester: 'Semester III',
        description: 'Comprehensive study of heads of income, deductions, computations, and e-filing procedures for individuals and companies.',
        notesLink: 'https://drive.google.com/drive/folders/16LpL4C79F3fQzO7R_pY60p8g9V_rGshZ?usp=sharing',
        questionBankLink: 'https://drive.google.com/drive/folders/17B_RmdGgq9g_4Z8S9gV-Fh6N4gR99Z_k?usp=sharing',
        pastPapersLink: 'https://drive.google.com/drive/folders/18R9v_g9g4g_PzO8S9gV-ZshZ9Gsh_FmR?usp=sharing',
        chapters: [
          'Basic Concepts & Residential Status',
          'Salaries and House Property Income',
          'Profits and Gains of Business or Profession (PGBP)',
          'Capital Gains and Income from Other Sources',
          'Deductions Under Chapter VI-A and Tax Computations'
        ]
      },
      {
        id: 'cost-accounting',
        name: 'Cost & Management Accounting',
        code: 'BC-302',
        semester: 'Semester III',
        description: 'Learn cost-sheet preparation, material control, labor calculations, overhead distributions, and variance analysis.',
        notesLink: 'https://drive.google.com/drive/folders/16LpL4C79F3fQzO7R_pY60p8g9V_rGshZ?usp=sharing',
        questionBankLink: 'https://drive.google.com/drive/folders/17B_RmdGgq9g_4Z8S9gV-Fh6N4gR99Z_k?usp=sharing',
        pastPapersLink: 'https://drive.google.com/drive/folders/18R9v_g9g4g_PzO8S9gV-ZshZ9Gsh_FmR?usp=sharing',
        chapters: [
          'Material Costing and Inventory Control (FIFO, LIFO, EOQ)',
          'Labour Costing, Incentive Schemes, and Idle Time',
          'Overhead Allocation, Apportionment, and Absorption',
          'Unit Costing & Job, Batch & Contract Costing',
          'Budgetary Control and Marginal Costing'
        ]
      }
    ],
    careers: [
      {
        title: 'Tax Consultant / Advisor',
        salary: '₹5,00,000 - ₹12,00,000 / year',
        demand: 'Very High',
        skills: ['GST Filing', 'Income Tax Computation', 'Tally Prime', 'Corporate Compliance'],
        description: 'Provide legal tax filing and optimization guidance to individual clients and businesses according to recent budget acts.'
      },
      {
        title: 'Financial Analyst',
        salary: '₹6,00,000 - ₹15,00,000 / year',
        demand: 'High',
        skills: ['Financial Modeling', 'Excel Macros', 'Valuation techniques', 'Data interpretation'],
        description: 'Examine company financials, equity research, cash flows, and help board members optimize investment decisions.'
      },
      {
        title: 'Statutory or Internal Auditor',
        salary: '₹4,50,000 - ₹10,00,000 / year',
        demand: 'High',
        skills: ['Vouching', 'Verification', 'Corporate Law', 'Excel auditing'],
        description: 'Review internal ledgers, identify frauds, ensure compliance with corporate statutes and accounting standards.'
      }
    ],
    books: [
      {
        id: 'financial-accounting-book',
        title: 'Financial Accounting for B.Com',
        author: 'Dr. S. N. Maheshwari',
        price: 499,
        originalPrice: 650,
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=400',
        description: 'The standard and highly trusted reference book on basic double entry accounting and corporate statements.'
      },
      {
        id: 'income-tax-practice-book',
        title: 'Direct Taxes Law & Practice',
        author: 'Dr. Vinod K. Singhania',
        price: 699,
        originalPrice: 895,
        image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=400',
        description: 'Comprehensive guide covering provisions of Income Tax Act 1961 with current financial year assessment amendments.'
      }
    ]
  },
  'ca-prep': {
    id: 'ca-prep',
    name: 'Chartered Accountancy (CA / CS / CMA)',
    description: 'Premier resources for CA Foundation & Intermediate, Company Law, Financial Reporting, and Advanced Audit practices.',
    icon: 'verified',
    color: '#059669', // emerald dark
    accentColor: 'rgba(5, 150, 105, 0.1)',
    subjects: [
      {
        id: 'ca-accounting',
        name: 'Principles & Practice of Accounting',
        code: 'CA-F1',
        semester: 'Foundation',
        description: 'Preparation of financial statements for partnership firms, companies, bank reconciliations, and consignment accounts.',
        notesLink: 'https://drive.google.com/drive/folders/16LpL4C79F3fQzO7R_pY60p8g9V_rGshZ?usp=sharing',
        questionBankLink: 'https://drive.google.com/drive/folders/17B_RmdGgq9g_4Z8S9gV-Fh6N4gR99Z_k?usp=sharing',
        pastPapersLink: 'https://drive.google.com/drive/folders/18R9v_g9g4g_PzO8S9gV-ZshZ9Gsh_FmR?usp=sharing',
        chapters: [
          'Accounting Framework and Concepts',
          'Bank Reconciliation Statement (BRS)',
          'Consignment Accounts and Bills of Exchange',
          'Company Accounts (Issue of Shares & Debentures)',
          'Financial Statements of Non-Profit Organizations (NPO)'
        ]
      },
      {
        id: 'ca-laws',
        name: 'Business Laws & Business Correspondence',
        code: 'CA-F2',
        semester: 'Foundation',
        description: 'In-depth analysis of trade contracts, partnership limits, company formation rules, and professional writing style.',
        notesLink: 'https://drive.google.com/drive/folders/16LpL4C79F3fQzO7R_pY60p8g9V_rGshZ?usp=sharing',
        questionBankLink: 'https://drive.google.com/drive/folders/17B_RmdGgq9g_4Z8S9gV-Fh6N4gR99Z_k?usp=sharing',
        pastPapersLink: 'https://drive.google.com/drive/folders/18R9v_g9g4g_PzO8S9gV-ZshZ9Gsh_FmR?usp=sharing',
        chapters: [
          'The Indian Contract Act, 1872 (Essential Elements)',
          'The Companies Act, 2013 (Types of Companies, Incorporation)',
          'The Sale of Goods Act, 1930 (Conditions & Warranties)',
          'The Limited Liability Partnership Act, 2008',
          'Professional Communication and Business Reporting'
        ]
      },
      {
        id: 'ca-economics',
        name: 'Business Economics & Commercial Knowledge',
        code: 'CA-F4',
        semester: 'Foundation',
        description: 'Microeconomics laws of demand and supply, consumer utility, production costs, market structures, and macro business environments.',
        notesLink: 'https://drive.google.com/drive/folders/16LpL4C79F3fQzO7R_pY60p8g9V_rGshZ?usp=sharing',
        questionBankLink: 'https://drive.google.com/drive/folders/17B_RmdGgq9g_4Z8S9gV-Fh6N4gR99Z_k?usp=sharing',
        pastPapersLink: 'https://drive.google.com/drive/folders/18R9v_g9g4g_PzO8S9gV-ZshZ9Gsh_FmR?usp=sharing',
        chapters: [
          'Introduction to Business Economics',
          'Theory of Demand and Supply & Consumer Behaviour',
          'Theory of Production and Cost',
          'Price Determination in Different Markets',
          'Business Organizations & Government Policies'
        ]
      }
    ],
    careers: [
      {
        title: 'Chartered Accountant (CA)',
        salary: '₹8,00,000 - ₹30,00,000 / year',
        demand: 'Exponential',
        skills: ['Statutory Auditing', 'Tax Law Advisory', 'IFRS Implementation', 'Mergers & Acquisitions'],
        description: 'A globally recognized professional designation leading financial sectors, managing corporate balance sheets, and signing off audits.'
      },
      {
        title: 'Company Secretary (CS)',
        salary: '₹6,50,000 - ₹22,00,000 / year',
        demand: 'Very High',
        skills: ['Corporate Governance', 'FEMA regulations', 'Secretarial Audit', 'Board Resolution drafting'],
        description: 'Advises companies on compliance with corporate regulatory boards, company law tribunals, and administers investor communications.'
      }
    ],
    books: [
      {
        id: 'ca-accounting-module',
        title: 'ICAI Study Material: Accounting Foundation',
        author: 'ICAI Board of Studies',
        price: 299,
        originalPrice: 400,
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400',
        description: 'Official comprehensive study guidelines from ICAI including sample test papers and chapter-wise checklists.'
      }
    ]
  },
  'class-11-12': {
    id: 'class-11-12',
    name: 'Class 11 & 12 Commerce',
    description: 'Clear, simple foundations for Board Exams. Accountancy journal entries, Partnership deeds, Microeconomics, and Business structures.',
    icon: 'school',
    color: '#059669', // forest emerald
    accentColor: 'rgba(5, 150, 105, 0.1)',
    subjects: [
      {
        id: 'class-12-accountancy',
        name: 'Accountancy (Class 12 Boards)',
        code: 'ACC-12',
        semester: 'Class 12',
        description: 'Master partnership accounts, share capital, debit-credit rules, ledger postings, and cash flow analysis.',
        notesLink: 'https://drive.google.com/drive/folders/16LpL4C79F3fQzO7R_pY60p8g9V_rGshZ?usp=sharing',
        questionBankLink: 'https://drive.google.com/drive/folders/17B_RmdGgq9g_4Z8S9gV-Fh6N4gR99Z_k?usp=sharing',
        pastPapersLink: 'https://drive.google.com/drive/folders/18R9v_g9g4g_PzO8S9gV-ZshZ9Gsh_FmR?usp=sharing',
        chapters: [
          'Accounting for Partnership Firms (Fundamentals)',
          'Admission, Retirement, and Death of a Partner',
          'Dissolution of partnership firms',
          'Accounting for Share Capital and Debentures',
          'Cash Flow Statement (CFS) & Financial Analysis'
        ]
      },
      {
        id: 'class-12-economics',
        name: 'Economics (Class 12 Boards)',
        code: 'ECO-12',
        semester: 'Class 12',
        description: 'Understand National Income calculations, Monetary policies, Indian Economic Development, and government budgets.',
        notesLink: 'https://drive.google.com/drive/folders/16LpL4C79F3fQzO7R_pY60p8g9V_rGshZ?usp=sharing',
        questionBankLink: 'https://drive.google.com/drive/folders/17B_RmdGgq9g_4Z8S9gV-Fh6N4gR99Z_k?usp=sharing',
        pastPapersLink: 'https://drive.google.com/drive/folders/18R9v_g9g4g_PzO8S9gV-ZshZ9Gsh_FmR?usp=sharing',
        chapters: [
          'National Income Accounting & Aggregates',
          'Determination of Income and Employment',
          'Money and Banking (RBI Monetary Tools)',
          'Indian Economy on the Eve of Independence & Reforms',
          'Current Challenges Facing Indian Economy'
        ]
      },
      {
        id: 'class-12-bst',
        name: 'Business Studies (Class 12 Boards)',
        code: 'BST-12',
        semester: 'Class 12',
        description: 'Core management principles of Henry Fayol and Taylor, planning, organizing, staffing, and marketing strategies.',
        notesLink: 'https://drive.google.com/drive/folders/16LpL4C79F3fQzO7R_pY60p8g9V_rGshZ?usp=sharing',
        questionBankLink: 'https://drive.google.com/drive/folders/17B_RmdGgq9g_4Z8S9gV-Fh6N4gR99Z_k?usp=sharing',
        pastPapersLink: 'https://drive.google.com/drive/folders/18R9v_g9g4g_PzO8S9gV-ZshZ9Gsh_FmR?usp=sharing',
        chapters: [
          'Nature and Significance of Management',
          'Principles of Management (Fayol vs Taylor)',
          'Business Environment & Planning',
          'Organizing, Staffing, Directing, and Controlling',
          'Financial Markets and Consumer Protection'
        ]
      }
    ],
    careers: [
      {
        title: 'B.Com / BBA College Admission',
        salary: 'Tier 1 Institutions (SRCC, LSR, Christ, etc.)',
        demand: 'Extremely High',
        skills: ['CUET prep', 'High Board Marks', 'English Comprehension', 'General Aptitude'],
        description: 'Build a rock-solid high school foundation to clear India’s competitive CUET exam for admission to elite tier-1 commerce universities.'
      },
      {
        title: 'Professional Foundations',
        salary: 'Launches CA/CS/CMA career directly',
        demand: 'Very High',
        skills: ['Double-Entry Ledger proficiency', 'Basic Economics laws'],
        description: 'Starting preparation for professional accounting streams directly after completion of board examinations.'
      }
    ],
    books: [
      {
        id: 'double-entry-book',
        title: 'Double Entry Book Keeping for Class 12',
        author: 'T. S. Grewal',
        price: 450,
        originalPrice: 580,
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400',
        description: 'The absolute bible for class 12 board preparation, filled with practice problem sets and solutions.'
      }
    ]
  }
};

export const CERTIFICATION_COURSES: CertificationCourse[] = [
  {
    id: 'forensic-accounting-masterclass',
    name: 'Forensic Accounting & Corporate Fraud Investigation Masterclass',
    description: 'Learn modern forensic audit methodologies, tracking hidden assets, deciphering white-collar crimes, and legal courtroom procedures.',
    duration: '6 Weeks',
    difficulty: 'Advance',
    materialLink: 'https://drive.google.com/drive/folders/1ykrG0jFdMvRJ8r4sJ2xdtr-FKiZkX5tA?usp=drive_link',
    testLink: 'https://forms.gle/guK5eFywtFd9mCQx7',
    isPaid: true
  },
  {
    id: 'gst-taxation-practitioner',
    name: 'Certified GST & Indirect Taxation Practitioner Program',
    description: 'Step-by-step masterclass in GST registration, calculating input tax credit (ITC), preparing GSTR-1, GSTR-3B, and GSTR-9 annual compliance.',
    duration: '4 Weeks',
    difficulty: 'Advance',
    materialLink: 'https://drive.google.com/drive/folders/1_uiCnF6VgO5CFIQi0d9Q-nxgFlHokjlZ?usp=drive_link',
    testLink: 'https://forms.gle/VQp73Mm3cLXtNapCA',
    isPaid: true
  },
  {
    id: 'financial-modeling-valuation',
    name: 'Financial Modeling, DCF Valuation & Investment Banking Masterclass',
    description: 'Build robust dynamic 3-statement financial models from scratch. Learn Discounted Cash Flows (DCF), LBO analyses, and company valuation.',
    duration: '8 Weeks',
    difficulty: 'Advance',
    materialLink: 'https://drive.google.com/drive/folders/1gBS2QqVJDYgpdSO4Kcj5zdcsBkaV5P2b?usp=drive_link',
    testLink: 'https://forms.gle/6cvYFMVF16MZsbik6',
    isPaid: true
  },
  {
    id: 'ai-in-corporate-finance',
    name: 'Next-Generation Corporate Finance: AI-Powered Auditing & Robo-Advisories',
    description: 'Understand how Machine Learning models run automated audit sampling, detect budget deviations, and forecast commercial cashflows.',
    duration: '5 Weeks',
    difficulty: 'Advance',
    materialLink: 'https://drive.google.com/drive/folders/1kwlcZV9ZTkGOIWuJ4X8SWn7PJ2GwZRfJ?usp=drive_link',
    testLink: 'https://forms.gle/CimeeGkYENSsMcVDA',
    isPaid: true
  },
  {
    id: 'tally-prime-accounting-basic',
    name: 'Tally Prime Professional Accounting & Ledger Configuration - Basic',
    description: 'Step-by-step introduction to setting up corporate charts of accounts, voucher creation, inventory management, and bank reconciliations.',
    duration: '2 Weeks',
    difficulty: 'Basic',
    materialLink: 'https://drive.google.com/file/d/1YeE6AZpxNhEwYaNoE-Q1eoUgk4gpT99a/view?usp=drive_link',
    testLink: 'https://forms.gle/zXbWvdjMzUzmptNZ8'
  },
  {
    id: 'advanced-excel-for-audit',
    name: 'Advanced Excel Mastery for Financial Auditors & Accountants - Basic',
    description: 'Master VLOOKUP, XLOOKUP, Index-Match, advanced Pivot Tables, dynamic range named variables, and nested logical auditing formulas.',
    duration: '2 Weeks',
    difficulty: 'Basic',
    materialLink: 'https://drive.google.com/file/d/1i7WIqyXsn4BR86lu9PAGuhIvvGsT1WBt/view?usp=sharing',
    testLink: 'https://forms.gle/c3ieoeq6BSQjZFx58'
  },
  {
    id: 'budget-2026-analysis-quiz',
    name: 'Union Budget 2026 National Commerce & Taxation Quiz Contest',
    description: 'Evaluate your command of key provisions of India’s latest Union Budget, corporate tax bracket reforms, and national infrastructure funds.',
    duration: '1 Day',
    difficulty: 'Quiz',
    materialLink: 'https://www.instagram.com/p/DVigIDnGZdD/',
    testLink: 'https://forms.gle/siM4yEwz9HAMTDE47',
    quiz: true
  },
  {
    id: 'commerce-excellence-quiz-contest',
    name: 'All-India National Commerce & Economics Quiz Championship',
    description: 'National level quiz testing core accounting standards, microeconomic demand/supply elasticities, and mercantile contract acts.',
    duration: '1 Day',
    difficulty: 'Quiz',
    materialLink: 'https://www.instagram.com/p/DVigIDnGZdD/',
    testLink: 'https://forms.gle/JLhUCHe7mo917BV88',
    quiz: true
  }
];
