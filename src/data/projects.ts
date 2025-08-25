export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
}

const data: Project[] = [
    {
    title: 'Key Mangement System',
    subtitle: 'Centralized Control for Cryptographic Key Lifecycle Management',
    image: '/images/projects/nearestdollar.jpg',
    date: '2023-01-15',
    desc:
      'The cryptographic key lifecycle ensures secure generation, delivery, storage,' +
      'usage, rotation, and destruction of keys using HSMs and TEEs to maintain confidentiality' + 
      'and integrity. Keys are protected in tamper-resistant hardware and isolated enclaves,' + 
      'enabling safe cryptographic operations throughout their lifespan.',
    },
    {
    title: 'Crypto Service',
    subtitle: 'Protecting Data Integrity and Privacy Through Encryption',
    image: '/images/projects/nearestdollar.jpg',
    date: '2020-05-18',
    desc:
      'Creating crypto services with TEE enclaves and HSMs enables secure management' + 
      'and execution of cryptographic operations. TEE enclaves protect sensitive computations' + 
      'and keys within isolated processor environments, while HSMs provide hardware-based key' + 
      'generation and storage',
  },
  {
    title: 'Child Support',
    subtitle: 'Driving Efficiency and Compliance in Child Support Programs',
    image: '',
    date: '2018-12-16',
    desc:
      'The FDR DHCS project involves developing and maintaining a comprehensive' + 
      'compliance management system for Federally Delegated Recipients (FDRs) under' + 
      'California’s Department of Health Care Services (DHCS). The system automates' + 
      'monitoring, auditing, and reporting processes to ensure adherence to federal' + 
      'and state healthcare regulations. It integrates data from multiple sources,' + 
      'supports risk assessment workflows, and provides dashboards for real-time' + 
      'visibility into compliance status. This project enhances data accuracy,' +
      'streamlines oversight operations, and mitigates risks related to healthcare' +
      'service delivery and reimbursement',
  },
  {
    title: 'CA Management',
    subtitle: 'Managing Digital Certificates for Reliable Authentication',
    link: '',
    image: '',
    date: '2015-09-30',
    desc:
      'This project focuses on managing the lifecycle of digital certificates to' + 
      'ensure secure authentication and communication. It automates issuance, renewal' +
      'and revocation of certificates, enhancing security and compliance across the organization.',
  },
  {
    title: 'Single Id',
    subtitle: 'Streamlining Authentication Across Systems',
    link: '',
    image: '',
    date: '2013-07-08',
    desc:
      'This project implements Single Sign-On (SSO) and OAuth to enable secure,' + 
      'seamless access across multiple applications. SSO allows users to log in' +
      'once for all services, while OAuth provides safe delegated access without' + 
      'sharing passwords, improving security and user convenience.'
  },
  {
    title: 'HR Systems',
    subtitle: 'Building a Smarter, More Connected Workforce',
    image: '',
    date: '2010-03-18',
    desc:
      'The application plays a critical role in HR operations ' +
      'Interfacing with key enterprise systems such as SED, Kronos' +
      'and Payroll to ensure data consistency and process automation' +
      'Providing data feeds to downstream applications to support accurate and timely processing' + 
      'Enabling comprehensive reporting capabilities for managers to track, analyze, and manage workforce activity effectively',
  },
];

export default data;
