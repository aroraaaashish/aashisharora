/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Mastercard',
    position: 'Principal Software Engineer',
    url: 'https://www.mastercard.com/us/en.html',
    startDate: '2022-07-01',
    summary: `Responsible for proposing and designing innovative cybersecurity solutions leveraging 
    cutting-edge technologies including Confidential Computing and Public Key Infrastructure to 
    continuously strengthen the security posture for Mastercard. Also, leading the program with a 5M annual budget.`,
    highlights: [
      'Strategized and led the design and implementation of a next-generation, state-in-class key management platform for centralized control of symmetric and asymmetric keys across HSMs (Luna, nCipher) and Intel SGX-based TEE services, enhancing organizational cryptographic posture',
      'Established enterprise-wide cryptographic key lifecycle governance, defining standards for creation, rotation, revocation, retirement, and recovery across critical internal and external platforms (Secure Access, Code Signer, Crypto-as-a-Service), ensuring compliance and operational resilience',
      'Architected and championed a cloud-agnostic secure key delivery solution, removing vendor lock-in through PKCS#11 wrapping/unwrapping mechanisms and enabling seamless multi-cloud cryptographic operations',
    ],
  },
  {
    name: 'Mastercard',
    position: 'Lead Software Engineer',
    url: 'https://www.mastercard.com/us/en.html',
    startDate: '2020-05-18',
    endDate: '2022-06-30',
    highlights: [
      'Led the design and development of Crypto as a Service (CaaS) on Microsoft Azure, leveraging Luna HSMs to securely protect and manage token identities and support secure token signing for enterprise applications.',
      'Provided technical and strategic leadership to a high-performing team, mentoring engineers in daily activities, resolving complex technical challenges, and fostering a culture of collaboration, innovation, and continuous improvement.',
      'Managed the successful integration of CaaS with Enterprise Key Management Services (EKMS) to enable secure provisioning of card key bundles within HSMs, directly supporting mission-critical financial transactions aligned with EMV specifications'
    ],
  },
  {
    name: 'Deloitte',
    position: 'Senior Solution Specialist',
    url: 'https://www.deloitte.com/us/en/services.html',
    startDate: '2018-12-16',
    endDate: '2020-05-15',
    highlights: [
      "Developed and optimized Facebook's core news feed algorithms.",
      'Spearheaded and mentored multiple cross-functional teams, encompassing full time staff and contractors, while overseeing all aspects of client, vendor, and stakeholder relationships, including negotiations on terms, scope, and deadlines.',
      'Assessed platforms, conducted security testing, reviewed architecture and created standards and procedures. Helped business and IT to expand and modernize sites and apps securely for adapting cloud, microservices and containerization'
    ],
  },
  {
    name: 'Tech Mahindra',
    position: 'Technology Lead',
    url: 'https://www.techmahindra.com/',
    startDate: '2013-07-08',
    endDate: '2018-12-14',
    summary: 'Responsible for implementing Certificate Authority and Single Sign On products',
    highlights: [
      'Involved in analyzing, designing and implementing cryptographic solutions (CaaS) (encrypt/decrypt, sign/verify, wrap/unwrap) using NodeJS, XML, REST Service.',
      'Analyze and implemented SAML identity propagation (using FSSO, Managed SSO) to the different service providers via multiple identity providers such as Mastercard Single Id, Janrain etc',
      'Led the team of 20+ developers accross the globe including North America, India, Belgium',
    ],
  },
  {
    name: 'Tata Consultancy Services Ltd',
    position: 'Systems Engineer',
    url: 'https://www.tcs.com/',
    startDate: '2010-03-18',
    endDate: '2013-07-05',
    summary: 'Developed and implemented HR Systems for walgreens',
    highlights: [
      'Conducted qualitative and quantitative risk analysis and identified high risk areas for remediation for HR Systems application',
      'Interface with the subject matter experts to capture the process flow, data flow for their respective applications ',
      'Implemented Persistence layer using Hibernate ORM and writing SQL queries based on Hibernate Criteria API ',
    ],
  },
];

export default work;
